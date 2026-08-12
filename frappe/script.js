const words = {
    en: [
        'the', 'be', 'to', 'of', 'and', 'in', 'that', 'have', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us', 'is', 'was', 'are', 'been', 'has', 'had', 'were', 'said', 'did', 'having', 'may', 'should', 'does', 'being',
        'cat', 'dog', 'run', 'jump', 'fast', 'slow', 'big', 'small', 'hot', 'cold', 'tree', 'bird', 'fish', 'rock', 'star', 'moon', 'sun', 'rain', 'snow', 'wind', 'book', 'pen', 'desk', 'chair', 'door', 'window', 'floor', 'wall', 'roof', 'house', 'car', 'bus', 'train', 'plane', 'bike', 'road', 'street', 'city', 'town', 'village', 'happy', 'sad', 'angry', 'tired', 'hungry', 'thirsty', 'sick', 'healthy', 'strong', 'weak', 'computer', 'keyboard', 'mouse', 'screen', 'internet', 'email', 'message', 'phone', 'tablet', 'laptop', 'music', 'dance', 'sing', 'play', 'work', 'study', 'learn', 'teach', 'read', 'write', 'morning', 'evening', 'night', 'day', 'week', 'month', 'year', 'today', 'tomorrow', 'yesterday', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white', 'grey',
        'amazing', 'awesome', 'beautiful', 'brilliant', 'creative', 'dynamic', 'electric', 'fantastic', 'gorgeous', 'incredible', 'wonderful', 'excellent', 'perfect', 'super', 'great', 'cool', 'nice', 'good', 'fine', 'okay', 'pizza', 'burger', 'pasta', 'salad', 'soup', 'bread', 'cheese', 'meat', 'fruit', 'vegetable', 'water', 'juice', 'coffee', 'tea', 'milk', 'soda', 'beer', 'wine', 'drink', 'food', 'friend', 'family', 'mother', 'father', 'sister', 'brother', 'child', 'baby', 'adult', 'person', 'love', 'like', 'hate', 'want', 'need', 'have', 'give', 'take', 'make', 'break', 'start', 'stop', 'begin', 'end', 'open', 'close', 'push', 'pull', 'lift', 'drop', 'think', 'know', 'understand', 'believe', 'remember', 'forget', 'dream', 'hope', 'wish', 'try', 'walk', 'talk', 'look', 'see', 'hear', 'listen', 'smell', 'taste', 'touch', 'feel', 'mountain', 'river', 'ocean', 'forest', 'desert', 'beach', 'island', 'valley', 'hill', 'lake', 'summer', 'winter', 'spring', 'autumn', 'season', 'weather', 'climate', 'temperature', 'warm', 'cool',
        'place', 'world', 'life', 'hand', 'part', 'eye', 'woman', 'man', 'thing', 'number', 'point', 'government', 'company', 'problem', 'service', 'party', 'student', 'group', 'room', 'fact', 'area', 'money', 'story', 'result', 'change', 'boy', 'girl', 'name', 'right', 'left', 'power', 'case', 'question', 'lot', 'side', 'kind', 'head', 'moment', 'idea', 'business', 'country', 'team', 'level', 'office', 'health', 'art', 'history', 'face', 'others', 'member', 'law', 'market', 'war', 'voice', 'reason', 'court', 'model', 'source', 'education', 'body', 'nature', 'building', 'action', 'age', 'news', 'effect', 'century', 'experience', 'policy', 'control', 'evidence', 'cost', 'price', 'report', 'decision', 'religion', 'activity', 'position', 'player', 'agreement', 'record', 'paper', 'space', 'ground', 'form', 'air', 'teacher', 'force', 'type', 'process', 'view', 'account', 'ball', 'region', 'difference', 'stage', 'common', 'image', 'single', 'color', 'light', 'sound', 'mind', 'heart', 'pain', 'fire',
        'young', 'early', 'simple', 'human', 'local', 'available', 'able', 'social', 'general', 'specific', 'major', 'better', 'economic', 'possible', 'whole', 'free', 'military', 'medical', 'popular', 'traditional', 'certain', 'personal', 'difficult', 'likely', 'natural', 'dead', 'central', 'serious', 'ready', 'physical', 'environmental', 'financial', 'democratic', 'dark', 'various', 'entire', 'legal', 'religious', 'final', 'main', 'huge', 'cultural', 'critical', 'successful', 'necessary', 'civil', 'positive', 'bad', 'forward', 'complete', 'powerful', 'holy', 'above', 'across', 'after', 'against', 'among', 'around', 'before', 'behind', 'below', 'beside', 'between', 'beyond', 'down', 'during', 'except', 'inside', 'into', 'near', 'off', 'onto', 'outside', 'over', 'through', 'toward', 'under', 'until', 'upon', 'within', 'without',
        'table', 'garden', 'stone', 'metal', 'wood', 'glass', 'plastic', 'cotton', 'silk', 'gold', 'silver', 'iron', 'steel', 'copper', 'bronze', 'diamond', 'pearl', 'ruby', 'emerald', 'cloud', 'storm', 'thunder', 'lightning', 'earthquake', 'volcano', 'tornado', 'hurricane', 'blizzard', 'flood', 'peace', 'battle', 'fight', 'victory', 'defeat', 'success', 'failure', 'win', 'lose', 'king', 'queen', 'prince', 'princess', 'knight', 'warrior', 'hero', 'villain', 'soldier', 'guard', 'doctor', 'nurse', 'lawyer', 'engineer', 'artist', 'writer', 'musician', 'actor', 'chef', 'baker', 'farmer', 'driver', 'pilot', 'sailor', 'captain', 'officer', 'manager', 'director', 'president', 'minister', 'senator', 'mayor', 'governor', 'judge', 'detective', 'police', 'firefighter', 'builder',
        'school', 'college', 'university', 'class', 'lesson', 'homework', 'exam', 'test', 'grade', 'degree', 'science', 'math', 'english', 'history', 'geography', 'biology', 'chemistry', 'physics', 'technology', 'language', 'literature', 'philosophy', 'psychology', 'sociology', 'economy', 'politics', 'religion', 'culture', 'society', 'community', 'nation', 'state', 'country', 'capital', 'border', 'flag', 'anthem', 'citizen', 'population', 'democracy', 'republic', 'monarchy', 'empire', 'kingdom', 'colony', 'territory', 'province', 'district', 'county', 'municipality',
        'shop', 'store', 'market', 'mall', 'supermarket', 'restaurant', 'cafe', 'bar', 'pub', 'hotel', 'motel', 'hospital', 'clinic', 'pharmacy', 'bank', 'post', 'library', 'museum', 'gallery', 'theater', 'cinema', 'stadium', 'arena', 'park', 'zoo', 'aquarium', 'factory', 'warehouse', 'office', 'station', 'airport', 'port', 'harbor', 'dock', 'bridge', 'tunnel', 'tower', 'castle', 'palace', 'temple', 'church', 'mosque', 'synagogue', 'cathedral', 'chapel', 'monastery', 'abbey', 'shrine', 'tomb', 'monument',
        'apple', 'banana', 'grape', 'lemon', 'lime', 'cherry', 'peach', 'pear', 'plum', 'berry', 'melon', 'mango', 'papaya', 'kiwi', 'coconut', 'pineapple', 'strawberry', 'raspberry', 'blueberry', 'blackberry', 'watermelon', 'cantaloupe', 'apricot', 'nectarine', 'tangerine', 'grapefruit', 'pomegranate', 'fig', 'date', 'raisin', 'carrot', 'potato', 'tomato', 'onion', 'garlic', 'pepper', 'cucumber', 'lettuce', 'cabbage', 'broccoli', 'cauliflower', 'spinach', 'celery', 'radish', 'beetroot', 'turnip', 'pumpkin', 'squash', 'zucchini', 'eggplant',
        'chicken', 'beef', 'pork', 'lamb', 'mutton', 'veal', 'turkey', 'duck', 'goose', 'rabbit', 'venison', 'ham', 'bacon', 'sausage', 'steak', 'chop', 'roast', 'mince', 'fillet', 'cutlet', 'salmon', 'tuna', 'cod', 'haddock', 'trout', 'herring', 'mackerel', 'sardine', 'anchovy', 'shrimp', 'prawn', 'crab', 'lobster', 'oyster', 'mussel', 'clam', 'scallop', 'squid', 'octopus', 'caviar',
        'rice', 'wheat', 'corn', 'barley', 'oats', 'rye', 'millet', 'quinoa', 'flour', 'dough', 'noodle', 'spaghetti', 'macaroni', 'lasagna', 'ravioli', 'dumpling', 'tortilla', 'taco', 'burrito', 'sandwich', 'toast', 'bagel', 'muffin', 'croissant', 'biscuit', 'cookie', 'cake', 'pie', 'tart', 'pastry', 'pudding', 'custard', 'jelly', 'jam', 'honey', 'syrup', 'sugar', 'salt', 'pepper', 'spice', 'herb', 'vanilla', 'cinnamon', 'ginger', 'nutmeg', 'clove', 'cardamom', 'saffron', 'basil', 'oregano',
        'butter', 'cream', 'yogurt', 'ice', 'chocolate', 'candy', 'sweet', 'sour', 'bitter', 'spicy', 'mild', 'bland', 'tasty', 'delicious', 'yummy', 'gross', 'rotten', 'fresh', 'stale', 'raw', 'cooked', 'baked', 'fried', 'grilled', 'boiled', 'steamed', 'roasted', 'smoked', 'pickled', 'frozen', 'canned', 'dried', 'preserved', 'organic', 'natural', 'artificial', 'synthetic', 'processed', 'refined', 'pure',
        'shirt', 'pants', 'dress', 'skirt', 'coat', 'jacket', 'sweater', 'cardigan', 'hoodie', 'vest', 'blazer', 'suit', 'tie', 'scarf', 'glove', 'mitten', 'hat', 'cap', 'beanie', 'helmet', 'crown', 'sock', 'shoe', 'boot', 'sandal', 'slipper', 'sneaker', 'heel', 'loafer', 'belt', 'buckle', 'button', 'zipper', 'pocket', 'sleeve', 'collar', 'cuff', 'hem', 'seam', 'thread', 'needle', 'fabric', 'cloth', 'textile', 'leather', 'suede', 'denim', 'wool', 'linen', 'polyester',
        'ring', 'necklace', 'bracelet', 'earring', 'pendant', 'brooch', 'chain', 'locket', 'charm', 'bead', 'jewel', 'gem', 'crystal', 'watch', 'clock', 'alarm', 'timer', 'calendar', 'schedule', 'appointment', 'meeting', 'conference', 'seminar', 'workshop', 'training', 'course', 'program', 'project', 'task', 'assignment', 'duty', 'responsibility', 'obligation', 'commitment', 'promise', 'pledge', 'vow', 'oath', 'contract', 'deal', 'bargain', 'trade', 'exchange', 'transaction', 'purchase', 'sale', 'buy', 'sell', 'rent', 'lease',
        'guitar', 'piano', 'violin', 'drum', 'flute', 'trumpet', 'saxophone', 'clarinet', 'trombone', 'harp', 'organ', 'accordion', 'harmonica', 'banjo', 'ukulele', 'cello', 'bass', 'tambourine', 'cymbal', 'xylophone', 'song', 'melody', 'harmony', 'rhythm', 'beat', 'tempo', 'tune', 'note', 'chord', 'scale', 'key', 'pitch', 'tone', 'sound', 'voice', 'vocal', 'chorus', 'verse', 'refrain', 'lyrics', 'album', 'track', 'record', 'single', 'concert', 'performance', 'show', 'gig', 'tour', 'band',
        'movie', 'film', 'video', 'documentary', 'animation', 'cartoon', 'series', 'episode', 'season', 'premiere', 'finale', 'trailer', 'teaser', 'clip', 'scene', 'shot', 'frame', 'camera', 'lens', 'focus', 'zoom', 'angle', 'lighting', 'shadow', 'reflection', 'mirror', 'screen', 'display', 'monitor', 'television', 'radio', 'broadcast', 'channel', 'station', 'network', 'stream', 'podcast', 'blog', 'website', 'page', 'link', 'click', 'scroll', 'swipe', 'tap', 'type', 'delete', 'copy', 'paste', 'cut',
        'save', 'load', 'download', 'upload', 'share', 'send', 'receive', 'forward', 'reply', 'comment', 'like', 'follow', 'subscribe', 'unsubscribe', 'block', 'report', 'flag', 'tag', 'mention', 'hashtag', 'profile', 'avatar', 'username', 'password', 'login', 'logout', 'signup', 'register', 'account', 'settings', 'privacy', 'security', 'backup', 'restore', 'update', 'upgrade', 'install', 'uninstall', 'download', 'patch', 'bug', 'error', 'crash', 'freeze', 'lag', 'glitch', 'fix', 'repair', 'troubleshoot',
        'soccer', 'football', 'basketball', 'baseball', 'tennis', 'golf', 'hockey', 'cricket', 'rugby', 'volleyball', 'badminton', 'swimming', 'diving', 'surfing', 'skiing', 'skating', 'cycling', 'running', 'jogging', 'walking', 'hiking', 'climbing', 'camping', 'fishing', 'hunting', 'boxing', 'wrestling', 'martial', 'karate', 'judo', 'yoga', 'pilates', 'aerobics', 'gymnastics', 'athlete', 'player', 'team', 'coach', 'referee', 'umpire', 'score', 'goal', 'point', 'match', 'game', 'tournament', 'championship', 'league', 'season', 'trophy',
        'north', 'south', 'east', 'west', 'center', 'middle', 'top', 'bottom', 'front', 'rear', 'inner', 'outer', 'upper', 'lower', 'high', 'low', 'deep', 'shallow', 'wide', 'narrow', 'broad', 'thin', 'thick', 'fat', 'skinny', 'heavy', 'light', 'hard', 'soft', 'rough', 'smooth', 'sharp', 'dull', 'bright', 'dim', 'loud', 'quiet', 'noisy', 'silent', 'calm', 'wild', 'tame', 'gentle', 'fierce', 'brave', 'coward', 'bold', 'shy', 'proud', 'humble',
        'honest', 'liar', 'true', 'false', 'real', 'fake', 'genuine', 'artificial', 'original', 'copy', 'unique', 'common', 'rare', 'unusual', 'normal', 'strange', 'weird', 'odd', 'even', 'plain', 'fancy', 'simple', 'complex', 'easy', 'hard', 'quick', 'slow', 'rapid', 'gradual', 'sudden', 'instant', 'immediate', 'delayed', 'late', 'early', 'timely', 'urgent', 'important', 'trivial', 'major', 'minor', 'primary', 'secondary', 'chief', 'main', 'essential', 'optional', 'necessary', 'useless', 'useful',
        'helpful', 'harmful', 'safe', 'dangerous', 'risky', 'secure', 'protected', 'vulnerable', 'exposed', 'hidden', 'visible', 'obvious', 'clear', 'vague', 'ambiguous', 'precise', 'exact', 'approximate', 'rough', 'accurate', 'correct', 'wrong', 'right', 'left', 'straight', 'curved', 'bent', 'twisted', 'round', 'square', 'circle', 'triangle', 'rectangle', 'oval', 'sphere', 'cube', 'cone', 'cylinder', 'pyramid', 'angle', 'line', 'curve', 'edge', 'corner', 'surface', 'area', 'volume', 'mass', 'weight', 'length'
    ],
    fr: [
        'le', 'de', 'un', 'être', 'et', 'à', 'il', 'avoir', 'ne', 'je', 'son', 'que', 'se', 'qui', 'ce', 'dans', 'en', 'du', 'elle', 'au', 'pour', 'pas', 'que', 'vous', 'par', 'sur', 'faire', 'plus', 'dire', 'me', 'on', 'mon', 'lui', 'nous', 'comme', 'mais', 'pouvoir', 'avec', 'tout', 'y', 'aller', 'voir', 'en', 'bien', 'où', 'sans', 'tu', 'ou', 'leur', 'homme', 'si', 'deux', 'moi', 'autre', 'là', 'premier', 'vouloir', 'encore', 'tout', 'même', 'aussi', 'prendre', 'dont', 'venir', 'temps', 'très', 'savoir', 'falloir', 'chose', 'peu', 'jour', 'mettre', 'grand', 'main', 'part', 'devoir', 'tenir', 'peu', 'soi', 'donner', 'contre', 'sous', 'cette', 'trouver', 'celui', 'regarder', 'croire', 'porter', 'rendre', 'entre', 'ces', 'nos', 'rester', 'pendant', 'sentir', 'paraître', 'enfant', 'parler', 'suivre', 'avant', 'puis', 'vers', 'trop', 'demander', 'non', 'donc', 'elle', 'toujours', 'ensemble', 'jamais', 'déjà',
        'chat', 'chien', 'courir', 'sauter', 'vite', 'lent', 'grand', 'petit', 'chaud', 'froid', 'arbre', 'oiseau', 'poisson', 'pierre', 'étoile', 'lune', 'soleil', 'pluie', 'neige', 'vent', 'livre', 'stylo', 'bureau', 'chaise', 'porte', 'fenêtre', 'sol', 'mur', 'toit', 'maison', 'voiture', 'bus', 'train', 'avion', 'vélo', 'route', 'rue', 'ville', 'bourg', 'village', 'heureux', 'triste', 'fâché', 'fatigué', 'affamé', 'assoiffé', 'malade', 'sain', 'fort', 'faible', 'ordinateur', 'clavier', 'souris', 'écran', 'internet', 'courriel', 'message', 'téléphone', 'tablette', 'portable', 'musique', 'danse', 'chanter', 'jouer', 'travail', 'étude', 'apprendre', 'enseigner', 'lire', 'écrire', 'matin', 'soir', 'nuit', 'jour', 'semaine', 'mois', 'année', 'aujourd\'hui', 'demain', 'hier', 'rouge', 'bleu', 'vert', 'jaune', 'orange', 'violet', 'rose', 'noir', 'blanc', 'gris',
        'incroyable', 'génial', 'beau', 'brillant', 'créatif', 'dynamique', 'électrique', 'fantastique', 'magnifique', 'super', 'merveilleux', 'excellent', 'parfait', 'extra', 'chouette', 'sympa', 'bien', 'bon', 'correct', 'okay', 'pizza', 'burger', 'pâtes', 'salade', 'soupe', 'pain', 'fromage', 'viande', 'fruit', 'légume', 'eau', 'jus', 'café', 'thé', 'lait', 'soda', 'bière', 'vin', 'boisson', 'nourriture', 'ami', 'famille', 'mère', 'père', 'soeur', 'frère', 'enfant', 'bébé', 'adulte', 'personne', 'amour', 'aimer', 'détester', 'vouloir', 'besoin', 'avoir', 'donner', 'prendre', 'faire', 'casser', 'commencer', 'arrêter', 'débuter', 'finir', 'ouvrir', 'fermer', 'pousser', 'tirer', 'lever', 'lâcher', 'penser', 'savoir', 'comprendre', 'croire', 'rappeler', 'oublier', 'rêver', 'espérer', 'souhaiter', 'essayer', 'marcher', 'parler', 'regarder', 'voir', 'entendre', 'écouter', 'sentir', 'goûter', 'toucher', 'ressentir', 'montagne', 'rivière', 'océan', 'forêt', 'désert', 'plage', 'île', 'vallée', 'colline', 'lac', 'été', 'hiver', 'printemps', 'automne', 'saison', 'météo', 'climat', 'température', 'frais',
        'lieu', 'monde', 'vie', 'main', 'partie', 'oeil', 'femme', 'homme', 'chose', 'nombre', 'point', 'gouvernement', 'entreprise', 'problème', 'service', 'fête', 'étudiant', 'groupe', 'salle', 'fait', 'zone', 'argent', 'histoire', 'résultat', 'changement', 'garçon', 'fille', 'nom', 'droit', 'gauche', 'pouvoir', 'cas', 'question', 'beaucoup', 'côté', 'sorte', 'tête', 'moment', 'idée', 'affaire', 'pays', 'équipe', 'niveau', 'santé', 'art', 'face', 'membre', 'loi', 'marché', 'guerre', 'voix', 'raison', 'cour', 'modèle', 'source', 'éducation', 'corps', 'nature', 'bâtiment', 'action', 'âge', 'nouvelles', 'effet', 'siècle', 'expérience', 'politique', 'contrôle', 'preuve', 'coût', 'prix', 'rapport', 'décision', 'religion', 'activité', 'joueur', 'accord', 'dossier', 'papier', 'espace', 'terrain', 'forme', 'air', 'professeur', 'force', 'type', 'processus', 'vue', 'compte', 'ballon', 'région', 'différence', 'scène', 'image', 'unique', 'couleur', 'lumière', 'son', 'esprit', 'coeur', 'douleur', 'feu',
        'jeune', 'simple', 'humain', 'local', 'disponible', 'capable', 'social', 'général', 'spécifique', 'majeur', 'meilleur', 'économique', 'possible', 'entier', 'libre', 'militaire', 'médical', 'populaire', 'traditionnel', 'certain', 'personnel', 'ouvert', 'difficile', 'probable', 'naturel', 'mort', 'central', 'sérieux', 'prêt', 'physique', 'environnemental', 'financier', 'démocratique', 'sombre', 'divers', 'légal', 'religieux', 'final', 'principal', 'énorme', 'culturel', 'critique', 'réussi', 'nécessaire', 'civil', 'positif', 'mauvais', 'complet', 'puissant', 'sacré', 'dessus', 'travers', 'après', 'contre', 'parmi', 'autour', 'avant', 'derrière', 'dessous', 'entre', 'dedans', 'dans', 'près', 'dehors', 'pendant', 'sauf', 'sous', 'jusqu\'à', 'sur', 'avec', 'sans', 'vers',
        'table', 'jardin', 'métal', 'bois', 'verre', 'plastique', 'coton', 'soie', 'or', 'argent', 'fer', 'acier', 'cuivre', 'bronze', 'diamant', 'perle', 'rubis', 'émeraude', 'nuage', 'orage', 'tonnerre', 'éclair', 'tremblement', 'volcan', 'tornade', 'ouragan', 'tempête', 'inondation', 'paix', 'bataille', 'combat', 'victoire', 'défaite', 'succès', 'échec', 'gagner', 'perdre', 'roi', 'reine', 'prince', 'princesse', 'chevalier', 'guerrier', 'héros', 'méchant', 'soldat', 'garde', 'docteur', 'infirmier', 'enseignant', 'avocat', 'ingénieur', 'artiste', 'écrivain', 'musicien', 'acteur', 'cuisinier', 'boulanger', 'fermier', 'conducteur', 'pilote', 'marin', 'capitaine', 'officier', 'directeur', 'président', 'ministre', 'sénateur', 'maire', 'juge', 'détective', 'policier', 'pompier', 'constructeur', 'architecte',
        'école', 'collège', 'université', 'classe', 'leçon', 'devoirs', 'examen', 'test', 'note', 'diplôme', 'science', 'mathématiques', 'français', 'histoire', 'géographie', 'biologie', 'chimie', 'physique', 'technologie', 'langue', 'littérature', 'philosophie', 'psychologie', 'sociologie', 'économie', 'politique', 'religion', 'culture', 'société', 'communauté', 'nation', 'état', 'capitale', 'frontière', 'drapeau', 'hymne', 'citoyen', 'population', 'démocratie', 'république', 'monarchie', 'empire', 'royaume', 'colonie', 'territoire', 'province', 'district', 'comté', 'municipalité',
        'magasin', 'boutique', 'marché', 'centre', 'supermarché', 'restaurant', 'café', 'bar', 'pub', 'hôtel', 'motel', 'hôpital', 'clinique', 'pharmacie', 'banque', 'poste', 'bibliothèque', 'musée', 'galerie', 'théâtre', 'cinéma', 'stade', 'arène', 'parc', 'zoo', 'aquarium', 'usine', 'entrepôt', 'bureau', 'gare', 'aéroport', 'port', 'quai', 'dock', 'pont', 'tunnel', 'tour', 'château', 'palais', 'temple', 'église', 'mosquée', 'synagogue', 'cathédrale', 'chapelle', 'monastère', 'abbaye', 'sanctuaire', 'tombeau', 'monument',
        'pomme', 'banane', 'raisin', 'citron', 'lime', 'cerise', 'pêche', 'poire', 'prune', 'baie', 'melon', 'mangue', 'papaye', 'kiwi', 'noix', 'coco', 'ananas', 'fraise', 'framboise', 'myrtille', 'mûre', 'pastèque', 'cantaloup', 'abricot', 'nectarine', 'mandarine', 'pamplemousse', 'grenade', 'figue', 'datte', 'raisin', 'carotte', 'pomme', 'tomate', 'oignon', 'ail', 'poivre', 'concombre', 'laitue', 'chou', 'brocoli', 'choufleur', 'épinard', 'céleri', 'radis', 'betterave', 'navet', 'citrouille', 'courge', 'courgette', 'aubergine',
        'poulet', 'boeuf', 'porc', 'agneau', 'mouton', 'veau', 'dinde', 'canard', 'oie', 'lapin', 'cerf', 'jambon', 'bacon', 'saucisse', 'steak', 'côtelette', 'rôti', 'haché', 'filet', 'escalope', 'saumon', 'thon', 'morue', 'aiglefin', 'truite', 'hareng', 'maquereau', 'sardine', 'anchois', 'crevette', 'crevette', 'crabe', 'homard', 'huître', 'moule', 'palourde', 'pétoncle', 'calmar', 'pieuvre', 'caviar',
        'riz', 'blé', 'maïs', 'orge', 'avoine', 'seigle', 'millet', 'quinoa', 'farine', 'pâte', 'nouille', 'spaghetti', 'macaroni', 'lasagne', 'ravioli', 'boulette', 'tortilla', 'taco', 'burrito', 'sandwich', 'toast', 'bagel', 'muffin', 'croissant', 'biscuit', 'cookie', 'gâteau', 'tarte', 'tartelette', 'pâtisserie', 'pudding', 'crème', 'gelée', 'confiture', 'miel', 'sirop', 'sucre', 'sel', 'poivre', 'épice', 'herbe', 'vanille', 'cannelle', 'gingembre', 'muscade', 'clou', 'cardamome', 'safran', 'basilic', 'origan',
        'beurre', 'crème', 'yaourt', 'glace', 'chocolat', 'bonbon', 'sucré', 'aigre', 'amer', 'épicé', 'doux', 'fade', 'savoureux', 'délicieux', 'miam', 'dégoûtant', 'pourri', 'frais', 'rassis', 'cru', 'cuit', 'cuit', 'frit', 'grillé', 'bouilli', 'vapeur', 'rôti', 'fumé', 'mariné', 'congelé', 'conserve', 'séché', 'conservé', 'bio', 'naturel', 'artificiel', 'synthétique', 'transformé', 'raffiné', 'pur',
        'chemise', 'pantalon', 'robe', 'jupe', 'manteau', 'veste', 'pull', 'cardigan', 'sweat', 'gilet', 'blazer', 'costume', 'cravate', 'écharpe', 'gant', 'moufle', 'chapeau', 'casquette', 'bonnet', 'casque', 'couronne', 'chaussette', 'chaussure', 'botte', 'sandale', 'pantoufle', 'basket', 'talon', 'mocassin', 'ceinture', 'boucle', 'bouton', 'fermeture', 'poche', 'manche', 'col', 'poignet', 'ourlet', 'couture', 'fil', 'aiguille', 'tissu', 'textile', 'cuir', 'daim', 'denim', 'laine', 'lin', 'polyester',
        'bague', 'collier', 'bracelet', 'boucle', 'pendentif', 'broche', 'chaîne', 'médaillon', 'charme', 'perle', 'bijou', 'gemme', 'cristal', 'montre', 'horloge', 'alarme', 'minuteur', 'calendrier', 'planning', 'rendezvous', 'réunion', 'conférence', 'séminaire', 'atelier', 'formation', 'cours', 'programme', 'projet', 'tâche', 'devoir', 'travail', 'responsabilité', 'obligation', 'engagement', 'promesse', 'serment', 'voeu', 'serment', 'contrat', 'affaire', 'marché', 'commerce', 'échange', 'transaction', 'achat', 'vente', 'acheter', 'vendre', 'louer', 'bail',
        'guitare', 'piano', 'violon', 'tambour', 'flûte', 'trompette', 'saxophone', 'clarinette', 'trombone', 'harpe', 'orgue', 'accordéon', 'harmonica', 'banjo', 'ukulélé', 'violoncelle', 'basse', 'tambourin', 'cymbale', 'xylophone', 'chanson', 'mélodie', 'harmonie', 'rythme', 'battement', 'tempo', 'air', 'note', 'accord', 'gamme', 'clé', 'hauteur', 'ton', 'son', 'voix', 'vocal', 'choeur', 'couplet', 'refrain', 'paroles', 'album', 'piste', 'disque', 'single', 'concert', 'spectacle', 'show', 'concert', 'tournée', 'groupe',
        'film', 'cinéma', 'vidéo', 'documentaire', 'animation', 'dessin', 'série', 'épisode', 'saison', 'première', 'finale', 'bandeannonce', 'teaser', 'clip', 'scène', 'plan', 'image', 'caméra', 'objectif', 'focus', 'zoom', 'angle', 'éclairage', 'ombre', 'reflet', 'miroir', 'écran', 'affichage', 'moniteur', 'télévision', 'radio', 'diffusion', 'chaîne', 'station', 'réseau', 'flux', 'podcast', 'blog', 'site', 'page', 'lien', 'clic', 'défiler', 'glisser', 'taper', 'supprimer', 'copier', 'coller', 'couper',
        'sauver', 'charger', 'télécharger', 'upload', 'partager', 'envoyer', 'recevoir', 'transférer', 'répondre', 'commenter', 'aimer', 'suivre', 'abonner', 'désabonner', 'bloquer', 'signaler', 'marquer', 'étiqueter', 'mentionner', 'hashtag', 'profil', 'avatar', 'pseudo', 'motdepasse', 'connexion', 'déconnexion', 'inscription', 'compte', 'paramètres', 'confidentialité', 'sécurité', 'sauvegarde', 'restaurer', 'mise', 'installer', 'désinstaller', 'patch', 'bug', 'erreur', 'crash', 'gel', 'lag', 'bug', 'réparer', 'dépanner',
        'football', 'basket', 'baseball', 'tennis', 'golf', 'hockey', 'cricket', 'rugby', 'volley', 'badminton', 'natation', 'plongeon', 'surf', 'ski', 'patin', 'cyclisme', 'course', 'jogging', 'marche', 'randonnée', 'escalade', 'camping', 'pêche', 'chasse', 'boxe', 'lutte', 'martial', 'karaté', 'judo', 'yoga', 'pilates', 'aérobic', 'gymnastique', 'athlète', 'joueur', 'équipe', 'coach', 'arbitre', 'juge', 'score', 'but', 'point', 'match', 'jeu', 'tournoi', 'championnat', 'ligue', 'saison', 'trophée',
        'nord', 'sud', 'est', 'ouest', 'centre', 'milieu', 'haut', 'bas', 'avant', 'arrière', 'intérieur', 'extérieur', 'supérieur', 'inférieur', 'haut', 'bas', 'profond', 'peu', 'large', 'étroit', 'épais', 'mince', 'gras', 'maigre', 'lourd', 'léger', 'dur', 'doux', 'rugueux', 'lisse', 'tranchant', 'émoussé', 'brillant', 'faible', 'fort', 'calme', 'bruyant', 'silencieux', 'calme', 'sauvage', 'apprivoisé', 'doux', 'féroce', 'courageux', 'lâche', 'audacieux', 'timide', 'fier', 'humble',
        'honnête', 'menteur', 'vrai', 'faux', 'réel', 'faux', 'authentique', 'artificiel', 'original', 'copie', 'unique', 'commun', 'rare', 'inhabituel', 'normal', 'étrange', 'bizarre', 'impair', 'pair', 'simple', 'complexe', 'facile', 'rapide', 'graduel', 'soudain', 'instantané', 'immédiat', 'retardé', 'tard', 'tôt', 'opportun', 'urgent', 'important', 'trivial', 'majeur', 'mineur', 'primaire', 'secondaire', 'chef', 'principal', 'essentiel', 'optionnel', 'nécessaire', 'inutile', 'utile',
        'utile', 'nuisible', 'sûr', 'dangereux', 'risqué', 'sécurisé', 'protégé', 'vulnérable', 'exposé', 'caché', 'visible', 'évident', 'clair', 'vague', 'ambigu', 'précis', 'exact', 'approximatif', 'précis', 'correct', 'mauvais', 'droit', 'gauche', 'droit', 'courbe', 'plié', 'tordu', 'rond', 'carré', 'cercle', 'triangle', 'rectangle', 'ovale', 'sphère', 'cube', 'cône', 'cylindre', 'pyramide', 'angle', 'ligne', 'courbe', 'bord', 'coin', 'surface', 'zone', 'volume', 'masse', 'poids', 'longueur'
    ]
};

const translations = {
    en: {
        subtitle: 'Type the words as they appear!',
        startBtn: 'START!',
        timeLabel: 'Time:',
        wordsLabel: 'Words:',
        gameOver: 'GAME OVER!',
        wpmLabel: 'Words Per Minute',
        youTyped: 'You typed',
        wordsText: 'words!',
        playAgain: 'PLAY AGAIN!'
    },
    fr: {
        subtitle: 'Tapez les mots qui apparaissent !',
        startBtn: 'DÉMARRER !',
        timeLabel: 'Temps :',
        wordsLabel: 'Mots :',
        gameOver: 'GAME OVER !',
        wpmLabel: 'Mots Par Minute',
        youTyped: 'Vous avez tapé',
        wordsText: 'mots !',
        playAgain: 'REJOUER !'
    }
};

let currentLang = localStorage.getItem('typingLang') || 'en';
let currentWord = '';
let wordsTypedCount = 0;
let startTime = null;
let gameInterval = null;
let timerInterval = null;
let timeLeft = 60;
let floatingInterval = null;

const startScreen = document.getElementById('startScreen');
const playScreen = document.getElementById('playScreen');
const resultScreen = document.getElementById('resultScreen');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const wordInput = document.getElementById('wordInput');
const wordDisplay = document.getElementById('wordDisplay');
const timeLeftDisplay = document.getElementById('timeLeft');
const wordsTypedDisplay = document.getElementById('wordsTyped');
const wpmDisplay = document.getElementById('wpm');
const timerFill = document.getElementById('timerFill');
const finalWPMDisplay = document.getElementById('finalWPM');
const finalWordsDisplay = document.getElementById('finalWords');
const floatingWordsContainer = document.getElementById('floatingWords');
const langButtons = document.querySelectorAll('.lang-btn');
const subtitle = document.querySelector('.subtitle');
const resultTitle = document.querySelector('.result-title');
const wpmLabel = document.querySelector('.wpm-label');
const finalWordsText = document.querySelector('.final-words');
const timeStatLabel = document.querySelector('.stats .stat:nth-child(1)');
const wordsStatLabel = document.querySelector('.stats .stat:nth-child(2)');

function updateLanguage() {
    const t = translations[currentLang];
    subtitle.textContent = t.subtitle;
    startBtn.textContent = t.startBtn;
    restartBtn.textContent = t.playAgain;
    resultTitle.textContent = t.gameOver;
    wpmLabel.textContent = t.wpmLabel;
    
    const wordsCount = finalWordsDisplay.textContent;
    finalWordsText.innerHTML = `${t.youTyped} <span id="finalWords">${wordsCount}</span> ${t.wordsText}`;
    
    timeStatLabel.innerHTML = `${t.timeLabel} <span id="timeLeft">${timeLeft}</span>s`;
    wordsStatLabel.innerHTML = `${t.wordsLabel} <span id="wordsTyped">${wordsTypedCount}</span>`;
}

langButtons.forEach(btn => {
    if (btn.dataset.lang === currentLang) {
        btn.classList.add('active');
    }
    btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        localStorage.setItem('typingLang', currentLang);
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateLanguage();
        resetToStart();
    });
});

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', resetGame);

wordInput.addEventListener('input', (e) => {
    const typed = e.target.value.trim().toLowerCase();
    if (typed === currentWord.toLowerCase()) {
        wordsTypedCount++;
        wordsTypedDisplay.textContent = wordsTypedCount;
        updateWPM();
        wordInput.value = '';
        showNewWord();
    }
});

function startGame() {
    startScreen.classList.add('hidden');
    playScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    
    wordsTypedCount = 0;
    timeLeft = 60;
    startTime = Date.now();
    
    wordsTypedDisplay.textContent = '0';
    wpmDisplay.textContent = '0';
    timeLeftDisplay.textContent = '60';
    timerFill.style.width = '100%';
    
    showNewWord();
    wordInput.focus();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        timerFill.style.width = (timeLeft / 60 * 100) + '%';
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
    
    startFloatingWords();
}

function showNewWord() {
    const wordList = words[currentLang];
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    wordDisplay.textContent = currentWord;
    wordDisplay.style.animation = 'none';
    setTimeout(() => {
        wordDisplay.style.animation = 'wordPop 0.3s ease';
    }, 10);
}

function updateWPM() {
    const elapsedMinutes = (Date.now() - startTime) / 60000;
    const wpm = Math.round(wordsTypedCount / elapsedMinutes);
    wpmDisplay.textContent = wpm;
}

function endGame() {
    clearInterval(timerInterval);
    stopFloatingWords();
    
    playScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const finalWPM = Math.round(wordsTypedCount);
    finalWPMDisplay.textContent = finalWPM;
    finalWordsDisplay.textContent = wordsTypedCount;
    
    const t = translations[currentLang];
    finalWordsText.innerHTML = `${t.youTyped} <span id="finalWords">${wordsTypedCount}</span> ${t.wordsText}`;
}

function resetGame() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    wordInput.value = '';
}

function resetToStart() {
    clearInterval(timerInterval);
    stopFloatingWords();
    playScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    wordInput.value = '';
    startFloatingWords();
}

function startFloatingWords() {
    const createFloatingWord = () => {
        const wordList = words[currentLang];
        const word = wordList[Math.floor(Math.random() * wordList.length)];
        const wordEl = document.createElement('div');
        wordEl.className = 'floating-word';
        wordEl.textContent = word;
        wordEl.style.left = Math.random() * 90 + '%';
        wordEl.style.animationDuration = (Math.random() * 10 + 10) + 's';
        wordEl.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        
        const colors = ['#FF1493', '#FFD700', '#00CED1', '#7B68EE', '#FF69B4', '#FFFF00'];
        wordEl.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        floatingWordsContainer.appendChild(wordEl);
        
        setTimeout(() => {
            wordEl.remove();
        }, 15000);
    };
    
    createFloatingWord();
    floatingInterval = setInterval(createFloatingWord, 1500);
}

function stopFloatingWords() {
    clearInterval(floatingInterval);
    floatingWordsContainer.innerHTML = '';
}

updateLanguage();
startFloatingWords();
