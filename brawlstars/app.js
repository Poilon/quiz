"use strict";

const $ = (id) => document.getElementById(id);
const RANKS = [
  "Bronze",
  "Argent",
  "Or",
  "Diamant",
  "Mythique",
  "Légendaire",
  "Maître",
  "Pro",
];
const MODE_NAMES = {
  brawlers: "Brawlers",
  ranked: "Rangs classés",
  mixed: "Le grand mix",
};
let brawlers = [];
let session = null;
let lastSettings = null;
let rosterRendered = false;

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function choicesFor(answer, pool) {
  return shuffle([
    answer,
    ...shuffle([...new Set(pool)].filter((item) => item !== answer)).slice(
      0,
      3,
    ),
  ]);
}

function brawlerLabel(brawler) {
  return brawler.alias ? `${brawler.name} (${brawler.alias})` : brawler.name;
}

function brawlerQuestion(brawler, format) {
  const label = brawlerLabel(brawler);
  const base = {
    id: `brawler-${brawler.id}`,
    category: "brawlers",
    brawlerId: brawler.id,
  };
  if (format === "portrait") {
    return {
      ...base,
      kind: "portrait",
      prompt: "Quel est ce brawler ?",
      image: brawler.image,
      answer: label,
      choices: choicesFor(label, brawlers.map(brawlerLabel)),
      explanation: `C’est ${label} ! Classe : ${brawler.class}. Rareté : ${brawler.rarity}.`,
    };
  }
  const property = Math.random() < 0.5 ? "class" : "rarity";
  return {
    ...base,
    kind: "knowledge",
    prompt:
      property === "class"
        ? `Quelle est la classe de ${label} ?`
        : `Quelle est la rareté de ${label} ?`,
    image: brawler.image,
    imageLabel: label,
    answer: brawler[property],
    choices: choicesFor(
      brawler[property],
      brawlers.map((item) => item[property]),
    ),
    explanation: `${label} : ${brawler.class} · ${brawler.rarity}.`,
  };
}

function rankedQuestions() {
  const questions = [];
  const add = (id, prompt, answer, pool, explanation) =>
    questions.push({
      id: `rank-${id}`,
      category: "ranked",
      kind: "ranked",
      prompt,
      answer,
      choices: choicesFor(answer, pool),
      explanation,
    });
  RANKS.slice(0, -1).forEach((rank, i) =>
    add(
      `after-${i}`,
      `Quel grand rang vient juste après ${rank} ?`,
      RANKS[i + 1],
      RANKS,
      `Dans l’ordre des rangs, ${rank} est suivi de ${RANKS[i + 1]}.`,
    ),
  );
  RANKS.slice(1).forEach((rank, i) =>
    add(
      `before-${i}`,
      `Quel grand rang vient juste avant ${rank} ?`,
      RANKS[i],
      RANKS,
      `${RANKS[i]} précède immédiatement ${rank}.`,
    ),
  );
  add(
    "first",
    "Quel est le premier grand rang du mode classé ?",
    "Bronze",
    RANKS,
    "La progression commence en Bronze.",
  );
  add(
    "highest",
    "Quel est le plus haut grand rang du mode classé ?",
    "Pro",
    RANKS,
    "Pro se situe au-dessus de Maître depuis la refonte du mode classé de 2025.",
  );
  add(
    "count",
    "Combien y a-t-il de grands rangs, de Bronze à Pro ?",
    "8",
    ["6", "7", "8", "9"],
    RANKS.join(" → ") + ".",
  );
  add(
    "divisions",
    "Quel est l’ordre des divisions à l’intérieur du rang Diamant ?",
    "I → II → III",
    ["I → II → III", "III → II → I", "I → III → II", "II → I → III"],
    "On progresse de Diamant I à Diamant II, puis à Diamant III.",
  );
  add(
    "master",
    "Après Maître III, quel grand rang vise-t-on ?",
    "Pro",
    RANKS,
    "Maître comporte trois divisions. Le rang suivant est Pro.",
  );
  add(
    "gold",
    "Après Or III, dans quelle division entre-t-on ?",
    "Diamant I",
    ["Diamant I", "Or IV", "Mythique I", "Argent III"],
    "Après la troisième division d’Or, on passe à la première division de Diamant.",
  );
  return questions;
}

function settings() {
  const data = new FormData($("setup"));
  return {
    mode: data.get("mode"),
    format: data.get("format"),
    length: data.get("length"),
  };
}

function updateSetup() {
  const config = settings();
  $("format-setting").hidden = config.mode === "ranked";
  const total =
    config.mode === "ranked"
      ? 20
      : config.mode === "mixed"
        ? brawlers.length + 20
        : brawlers.length;
  const count =
    config.length === "all" ? total : Math.min(Number(config.length), total);
  $("session-info").textContent =
    `${count} questions · sans chrono · correction après chaque réponse`;
  $("length").querySelector('[value="all"]').textContent =
    config.mode === "brawlers"
      ? `Les ${brawlers.length} brawlers`
      : `Tout le parcours · ${total} questions`;
}

function showScreen(id) {
  ["home", "game", "results"].forEach((screen) => {
    $(screen).hidden = screen !== id;
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function startGame(config, retryQuestions = null) {
  lastSettings = { ...config };
  let questions;
  if (retryQuestions) {
    questions = shuffle(retryQuestions).map((q) => ({
      ...q,
      choices: shuffle(q.choices),
    }));
  } else {
    const characters = shuffle(brawlers).map((brawler) =>
      brawlerQuestion(brawler, config.format),
    );
    const ranked = shuffle(rankedQuestions());
    if (config.mode === "brawlers") questions = characters;
    else if (config.mode === "ranked") questions = ranked;
    else if (config.length === "all")
      questions = shuffle([...characters, ...ranked]);
    else {
      const count = Number(config.length);
      questions = shuffle([
        ...characters.slice(0, Math.ceil(count / 2)),
        ...ranked.slice(0, Math.floor(count / 2)),
      ]);
    }
    if (config.length !== "all")
      questions = questions.slice(0, Number(config.length));
  }
  session = {
    questions,
    index: 0,
    answers: [],
    score: 0,
    answered: false,
    retry: Boolean(retryQuestions),
  };
  $("game-mode").textContent =
    `${MODE_NAMES[config.mode]}${session.retry ? " · Révision" : ""}`;
  showScreen("game");
  renderQuestion();
}

function renderQuestion() {
  const q = session.questions[session.index];
  session.answered = false;
  $("progress-label").textContent =
    `Question ${session.index + 1} / ${session.questions.length}`;
  $("score").textContent =
    `${session.score} bonne${session.score === 1 ? "" : "s"} réponse${session.score === 1 ? "" : "s"}`;
  $("progress").max = session.questions.length;
  $("progress").value = session.index;
  $("question-category").textContent =
    q.category === "ranked"
      ? "LA MONTÉE EN CLASSÉ"
      : q.kind === "portrait"
        ? "RECONNAIS LE BRAWLER"
        : "CLASSES & RARETÉS";
  $("question-title").textContent = q.prompt;
  $("question-hint").textContent =
    q.category === "ranked"
      ? "Une seule bonne réponse."
      : "Les noms français et anglais sont affichés ensemble.";
  $("portrait-frame").hidden = !q.image;
  $("image-error").hidden = true;
  $("portrait").hidden = false;
  if (q.image) {
    $("portrait").alt =
      q.kind === "portrait" ? "Brawler mystère à reconnaître" : q.imageLabel;
    $("portrait").src = q.image;
  } else $("portrait").removeAttribute("src");
  $("feedback").hidden = true;
  $("next").hidden = true;
  $("skip").hidden = false;
  $("next").textContent =
    session.index + 1 === session.questions.length
      ? "Voir mon résultat →"
      : "Question suivante →";
  $("answers").replaceChildren();
  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    const key = document.createElement("span");
    key.className = "answer-key";
    key.setAttribute("aria-hidden", "true");
    key.textContent = index + 1;
    const label = document.createElement("span");
    label.textContent = choice;
    button.append(key, label);
    button.addEventListener("click", () => answerQuestion(choice));
    $("answers").append(button);
  });
  $("question-title").focus({ preventScroll: true });
}

function answerQuestion(choice) {
  if (!session || session.answered) return;
  session.answered = true;
  const q = session.questions[session.index];
  const correct = choice === q.answer;
  if (correct) session.score++;
  session.answers.push({ question: q, selected: choice, correct });
  [...$("answers").children].forEach((button, index) => {
    button.disabled = true;
    const option = q.choices[index];
    if (option === q.answer || option === choice) {
      button.classList.add(option === q.answer ? "correct" : "wrong");
      const mark = document.createElement("span");
      mark.className = "answer-mark";
      mark.textContent = option === q.answer ? "✓" : "✗";
      mark.setAttribute(
        "aria-label",
        option === q.answer ? "Bonne réponse" : "Mauvaise réponse",
      );
      button.append(mark);
    }
  });
  $("feedback").className = `feedback${correct ? "" : " incorrect"}`;
  const heading = document.createElement("strong");
  heading.textContent = correct
    ? "Bien joué !"
    : choice === null
      ? `À retenir : ${q.answer}`
      : `La bonne réponse : ${q.answer}`;
  $("feedback").replaceChildren(
    heading,
    document.createTextNode(q.explanation),
  );
  $("feedback").hidden = false;
  $("skip").hidden = true;
  $("next").hidden = false;
  $("score").textContent =
    `${session.score} bonne${session.score === 1 ? "" : "s"} réponse${session.score === 1 ? "" : "s"}`;
  $("progress").value = session.index + 1;
  $("next").focus({ preventScroll: true });
}

function finishGame() {
  const total = session.questions.length;
  const ratio = session.score / total;
  $("results-title").textContent =
    ratio === 1
      ? "Un sans-faute !"
      : ratio >= 0.8
        ? "Tu connais ton arène !"
        : ratio >= 0.5
          ? "Bien joué, continue !"
          : "Chaque partie te fait progresser !";
  $("result-score").textContent = `${session.score} / ${total}`;
  $("result-message").textContent =
    `${Math.round(ratio * 100)} % de bonnes réponses. ${ratio === 1 ? "Prêt pour un autre défi ?" : "Le corrigé est là pour préparer ta prochaine partie."}`;
  $("record").textContent = "";
  if (!session.retry) {
    try {
      const key = `brawl-quiz-v1:${lastSettings.mode}:${lastSettings.mode === "ranked" ? "ranks" : lastSettings.format}:${total}`;
      const previous = Number(localStorage.getItem(key)) || 0;
      const best = Math.max(previous, session.score);
      localStorage.setItem(key, String(best));
      $("record").textContent =
        `Ton record sur ce format : ${best} / ${total}${session.score > previous ? " · Nouveau record !" : ""}`;
    } catch {
      $("record").textContent =
        "Le score local n’est pas disponible dans ce navigateur.";
    }
  } else
    $("record").textContent =
      "Partie de révision · les records restent ceux des parties complètes.";
  $("breakdown").replaceChildren();
  for (const category of ["brawlers", "ranked"]) {
    const entries = session.answers.filter(
      (entry) => entry.question.category === category,
    );
    if (!entries.length) continue;
    const line = document.createElement("p");
    line.textContent = `${MODE_NAMES[category]} : ${entries.filter((entry) => entry.correct).length} / ${entries.length}`;
    $("breakdown").append(line);
  }
  $("retry").hidden = session.answers.every((entry) => entry.correct);
  $("review").open = false;
  $("review-list").replaceChildren();
  session.answers.forEach((entry) => {
    const item = document.createElement("li");
    const title = document.createElement("strong");
    title.className = entry.correct ? "review-good" : "review-wrong";
    title.textContent = `${entry.correct ? "✓" : "✗"} ${entry.question.kind === "portrait" ? entry.question.answer : entry.question.prompt}`;
    const selected = document.createElement("p");
    selected.textContent = `Ta réponse : ${entry.selected ?? "Je ne sais pas"}.`;
    const explanation = document.createElement("p");
    explanation.textContent = entry.question.explanation;
    item.append(title, selected, explanation);
    $("review-list").append(item);
  });
  showScreen("results");
  $("results-title").focus({ preventScroll: true });
}

const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
function renderRoster() {
  rosterRendered = true;
  const query = normalize($("search").value.trim());
  const matches = brawlers.filter((brawler) =>
    normalize(
      `${brawlerLabel(brawler)} ${brawler.class} ${brawler.rarity}`,
    ).includes(query),
  );
  $("roster-count").textContent =
    `${matches.length} / ${brawlers.length} brawlers`;
  $("roster").replaceChildren();
  matches.forEach((brawler) => {
    const card = document.createElement("article");
    card.className = "roster-card";
    const img = document.createElement("img");
    img.src = brawler.image;
    img.alt = "";
    img.loading = "lazy";
    img.width = 100;
    img.height = 100;
    const name = document.createElement("strong");
    name.textContent = brawlerLabel(brawler);
    const info = document.createElement("small");
    info.textContent = `${brawler.class} · ${brawler.rarity}`;
    card.append(img, name, info);
    $("roster").append(card);
  });
}

$("setup").addEventListener("change", updateSetup);
$("setup").addEventListener("submit", (event) => {
  event.preventDefault();
  if (brawlers.length) startGame(settings());
});
$("skip").addEventListener("click", () => answerQuestion(null));
$("next").addEventListener("click", () => {
  if (!session?.answered) return;
  session.index++;
  if (session.index === session.questions.length) finishGame();
  else renderQuestion();
});
function backToMenu() {
  session = null;
  showScreen("home");
  $("start").focus({ preventScroll: true });
}
$("quit").addEventListener("click", backToMenu);
$("menu").addEventListener("click", backToMenu);
$("replay").addEventListener("click", () => startGame(lastSettings));
$("retry").addEventListener("click", () => {
  const errors = session.answers
    .filter((entry) => !entry.correct)
    .map((entry) => entry.question);
  if (errors.length) startGame(lastSettings, errors);
});
$("portrait").addEventListener("error", () => {
  $("portrait").hidden = true;
  $("image-error").hidden = false;
});
$("search").addEventListener("input", renderRoster);
document.querySelector(".revision").addEventListener("toggle", (event) => {
  if (event.target.open && !rosterRendered) renderRoster();
});
document.addEventListener("keydown", (event) => {
  if (
    !session ||
    $("game").hidden ||
    event.repeat ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    /INPUT|SELECT|TEXTAREA/.test(event.target.tagName)
  )
    return;
  if (/^[1-4]$/.test(event.key) && !session.answered) {
    event.preventDefault();
    answerQuestion(
      session.questions[session.index].choices[Number(event.key) - 1],
    );
  } else if (
    event.key === "Enter" &&
    session.answered &&
    event.target !== $("quit")
  ) {
    event.preventDefault();
    $("next").click();
  }
});

RANKS.forEach((rank) => {
  const item = document.createElement("li");
  item.textContent = rank;
  $("rank-ladder").append(item);
});
fetch("brawlers.json")
  .then((response) => {
    if (!response.ok) throw new Error("Liste indisponible");
    return response.json();
  })
  .then((data) => {
    if (
      data.brawlers.length !== 108 ||
      new Set(data.brawlers.map((brawler) => brawler.id)).size !== 108
    )
      throw new Error("Liste incomplète");
    brawlers = data.brawlers;
    $("start").disabled = false;
    updateSetup();
    if (document.querySelector(".revision").open) renderRoster();
  })
  .catch(() => {
    $("session-info").textContent = "Impossible de charger les brawlers.";
    $("load-error").textContent =
      "Recharge la page pour réessayer. Si tu testes en local, ouvre le quiz avec un serveur HTTP.";
    $("load-error").hidden = false;
  });
