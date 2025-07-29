const categories = {
  Tools: [
    { image: 'public/images/spanner.jpg', correct: 'Spanner', options: ['Spanner', 'Wrench', 'Tweezer', 'Hammer'] },
    { image: 'public/images/spanner.jpg', correct: 'Wrench', options: ['Spanner', 'Wrench', 'Tweezer', 'Hammer'] },
    { image: 'public/images/spanner.jpg', correct: 'Hammer', options: ['Spanner', 'Wrench', 'Hammer', 'Chisel'] },
    { image: 'public/images/spanner.jpg', correct: 'Screwdriver', options: ['Screwdriver', 'Hammer', 'Chisel', 'Drill'] },
    { image: 'public/images/spanner.jpg', correct: 'Pliers', options: ['Pliers', 'Saw', 'Screwdriver', 'Level'] },
    { image: 'public/images/spanner.jpg', correct: 'Saw', options: ['Saw', 'Chisel', 'Drill', 'Wrench'] },
    { image: 'public/images/spanner.jpg', correct: 'Chisel', options: ['Spanner', 'Chisel', 'Drill', 'Hammer'] },
    { image: 'public/images/spanner.jpg', correct: 'Drill', options: ['Drill', 'Hammer', 'Spanner', 'Saw'] },
    { image: 'public/images/spanner.jpg', correct: 'Tape Measure', options: ['Wrench', 'Tape Measure', 'Saw', 'Hammer'] },
    { image: 'public/images/spanner.jpg', correct: 'Level', options: ['Level', 'Drill', 'Spanner', 'Saw'] }
  ],
  'Ladies Items': [
    { image: 'public/images/tampon.jpg', correct: 'Tampon', options: ['Tampon', 'Lipstick', 'Marker', 'Eraser'] },
    { image: 'public/images/lashes.jpg', correct: 'False Eyelashes', options: ['False Eyelashes', 'Caterpillars', 'Hair Extension', 'Brush'] },
    { image: 'public/images/tampon.jpg', correct: 'Lipstick', options: ['Tampon', 'Lipstick', 'Marker', 'Eraser'] },
    { image: 'public/images/lashes.jpg', correct: 'Mascara', options: ['Mascara', 'Tampon', 'Lipstick', 'Marker'] },
    { image: 'public/images/lashes.jpg', correct: 'Nail Polish', options: ['Nail Polish', 'Lipstick', 'Marker', 'Tampon'] },
    { image: 'public/images/lashes.jpg', correct: 'Hair Brush', options: ['Hair Brush', 'Tampon', 'Marker', 'Lipstick'] },
    { image: 'public/images/tampon.jpg', correct: 'Compact Mirror', options: ['Compact Mirror', 'Lipstick', 'Marker', 'Tampon'] },
    { image: 'public/images/lashes.jpg', correct: 'Hair Extension', options: ['Hair Extension', 'Lipstick', 'False Eyelashes', 'Tampon'] },
    { image: 'public/images/tampon.jpg', correct: 'Makeup Remover', options: ['Makeup Remover', 'Lipstick', 'Marker', 'Tampon'] },
    { image: 'public/images/lashes.jpg', correct: 'Blush Brush', options: ['Blush Brush', 'Lipstick', 'Marker', 'Tampon'] }
  ],
  'Baby Items': [
    { image: 'public/images/diaper.jpg', correct: 'Diaper', options: ['Diaper', 'Bib', 'Towel', 'Bandage'] },
    { image: 'public/images/diaper.jpg', correct: 'Baby Bottle', options: ['Baby Bottle', 'Diaper', 'Bib', 'Bandage'] },
    { image: 'public/images/diaper.jpg', correct: 'Pacifier', options: ['Pacifier', 'Diaper', 'Bottle', 'Bib'] },
    { image: 'public/images/diaper.jpg', correct: 'Bib', options: ['Bib', 'Diaper', 'Towel', 'Pacifier'] },
    { image: 'public/images/diaper.jpg', correct: 'Rattle', options: ['Rattle', 'Bottle', 'Pacifier', 'Diaper'] },
    { image: 'public/images/diaper.jpg', correct: 'Baby Wipes', options: ['Baby Wipes', 'Diaper', 'Bib', 'Towel'] },
    { image: 'public/images/diaper.jpg', correct: 'Baby Blanket', options: ['Baby Blanket', 'Diaper', 'Bib', 'Towel'] },
    { image: 'public/images/diaper.jpg', correct: 'Stroller', options: ['Stroller', 'Diaper', 'Bottle', 'Bib'] },
    { image: 'public/images/diaper.jpg', correct: 'Crib', options: ['Crib', 'Stroller', 'Diaper', 'Bottle'] },
    { image: 'public/images/diaper.jpg', correct: 'Baby Monitor', options: ['Baby Monitor', 'Crib', 'Bottle', 'Bib'] }
  ],
  'Gay Culture': [
    { image: 'public/images/lashes.jpg', correct: 'Rainbow Flag', options: ['Rainbow Flag', 'Trans Flag', 'American Flag', 'Union Jack'] },
    { image: 'public/images/lashes.jpg', correct: 'Pride Parade', options: ['Pride Parade', 'Mardi Gras', 'Thanksgiving', 'Halloween'] },
    { image: 'public/images/lashes.jpg', correct: 'Drag Queen', options: ['Drag Queen', 'Beauty Queen', 'Ballerina', 'Cheerleader'] },
    { image: 'public/images/lashes.jpg', correct: 'Stonewall', options: ['Stonewall', 'Berlin Wall', 'Great Wall', 'Hadrian\'s Wall'] },
    { image: 'public/images/lashes.jpg', correct: 'Harvey Milk', options: ['Harvey Milk', 'Harvey Dent', 'Harvey Wallbanger', 'Harvey Weinstein'] },
    { image: 'public/images/lashes.jpg', correct: 'Ball Culture', options: ['Ball Culture', 'Soccer Match', 'Masquerade', 'Opera'] },
    { image: 'public/images/lashes.jpg', correct: 'Queer Eye', options: ['Queer Eye', 'Grey\'s Anatomy', 'Top Chef', 'Big Brother'] },
    { image: 'public/images/lashes.jpg', correct: 'Pink Triangle', options: ['Pink Triangle', 'Red Square', 'Blue Circle', 'Green Diamond'] },
    { image: 'public/images/lashes.jpg', correct: 'Same-Sex Marriage', options: ['Same-Sex Marriage', 'Arranged Marriage', 'Royal Wedding', 'Promise Ring'] },
    { image: 'public/images/lashes.jpg', correct: 'Coming Out', options: ['Coming Out', 'Moving Out', 'Going Home', 'Getting In'] }
  ],
  'Straight Culture': [
    { image: 'public/images/spanner.jpg', correct: 'Wedding Ring', options: ['Wedding Ring', 'Mood Ring', 'Key Ring', 'Door Knob'] },
    { image: 'public/images/spanner.jpg', correct: 'Bachelor Party', options: ['Bachelor Party', 'Birthday Party', 'Halloween Party', 'Graduation Party'] },
    { image: 'public/images/spanner.jpg', correct: 'Football Sunday', options: ['Football Sunday', 'Lazy Saturday', 'Black Friday', 'Cyber Monday'] },
    { image: 'public/images/spanner.jpg', correct: 'Dad Jokes', options: ['Dad Jokes', 'Dark Humor', 'Roast', 'Knock Knock'] },
    { image: 'public/images/spanner.jpg', correct: 'Barbecue Grill', options: ['Barbecue Grill', 'Fire Pit', 'Oven', 'Stove'] },
    { image: 'public/images/spanner.jpg', correct: 'Pickup Truck', options: ['Pickup Truck', 'Sports Car', 'Motorcycle', 'Bicycle'] },
    { image: 'public/images/spanner.jpg', correct: 'Nuclear Family', options: ['Nuclear Family', 'Extended Family', 'Work Friends', 'Book Club'] },
    { image: 'public/images/spanner.jpg', correct: 'Suburban House', options: ['Suburban House', 'Apartment', 'Cabin', 'Tent'] },
    { image: 'public/images/spanner.jpg', correct: 'Beer', options: ['Beer', 'Wine', 'Juice', 'Soda'] },
    { image: 'public/images/spanner.jpg', correct: 'Family Car', options: ['Family Car', 'Race Car', 'Bus', 'Motorbike'] }
  ],
  Engineering: [
    { image: 'public/images/spanner.jpg', correct: 'Blueprint', options: ['Blueprint', 'Painting', 'Poster', 'Map'] },
    { image: 'public/images/spanner.jpg', correct: 'Circuit Board', options: ['Circuit Board', 'Motherboard', 'Breadboard', 'Clipboard'] },
    { image: 'public/images/spanner.jpg', correct: 'CAD Model', options: ['CAD Model', 'Clay Model', 'Toy Car', 'Puzzle'] },
    { image: 'public/images/spanner.jpg', correct: '3D Printer', options: ['3D Printer', 'Paper Printer', 'Scanner', 'Copier'] },
    { image: 'public/images/spanner.jpg', correct: 'Bridge', options: ['Bridge', 'Tunnel', 'Highway', 'Overpass'] },
    { image: 'public/images/spanner.jpg', correct: 'Robot Arm', options: ['Robot Arm', 'Human Arm', 'Leg', 'Claw'] },
    { image: 'public/images/spanner.jpg', correct: 'Hard Hat', options: ['Hard Hat', 'Baseball Cap', 'Helmet', 'Beanie'] },
    { image: 'public/images/spanner.jpg', correct: 'Safety Goggles', options: ['Safety Goggles', 'Sunglasses', 'Monocle', 'VR Headset'] },
    { image: 'public/images/spanner.jpg', correct: 'Gear', options: ['Gear', 'Wheel', 'Bolt', 'Nut'] },
    { image: 'public/images/spanner.jpg', correct: 'Calculator', options: ['Calculator', 'Compass', 'Ruler', 'Protractor'] }
  ],
  'Historic Items': [
    { image: 'public/images/diaper.jpg', correct: 'Pharaoh Mask', options: ['Pharaoh Mask', 'Party Mask', 'Gas Mask', 'Ski Mask'] },
    { image: 'public/images/diaper.jpg', correct: 'Roman Shield', options: ['Roman Shield', 'Viking Shield', 'Police Shield', 'Captain America'] },
    { image: 'public/images/diaper.jpg', correct: 'Medieval Sword', options: ['Medieval Sword', 'Samurai Sword', 'Foam Sword', 'Lightsaber'] },
    { image: 'public/images/diaper.jpg', correct: 'Samurai Armor', options: ['Samurai Armor', 'Knight Armor', 'Motorcycle Armor', 'Body Armor'] },
    { image: 'public/images/diaper.jpg', correct: 'Old Map', options: ['Old Map', 'Treasure Map', 'Blueprint', 'Road Atlas'] },
    { image: 'public/images/diaper.jpg', correct: 'Viking Ship', options: ['Viking Ship', 'Pirate Ship', 'Cruise Ship', 'Row Boat'] },
    { image: 'public/images/diaper.jpg', correct: 'Ancient Coin', options: ['Ancient Coin', 'Arcade Token', 'Bitcoin', 'Gold Nugget'] },
    { image: 'public/images/diaper.jpg', correct: 'Stone Tablet', options: ['Stone Tablet', 'iPad', 'Clipboard', 'Blackboard'] },
    { image: 'public/images/diaper.jpg', correct: 'Pyramid', options: ['Pyramid', 'Skyscraper', 'Temple', 'Hut'] },
    { image: 'public/images/diaper.jpg', correct: 'Castle', options: ['Castle', 'Palace', 'Fort', 'Cottage'] }
  ]
};

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let currentCategory = '';
let questions = [];
let currentQuestion = 0;
let questionLimit = 5;
let currentUser = '';
let score = 0;
let answered = false;

const BOARD_KEY = 'leaderboard';

function loadBoard() {
  return JSON.parse(localStorage.getItem(BOARD_KEY) || '[]');
}

function saveBoard(data) {
  localStorage.setItem(BOARD_KEY, JSON.stringify(data));
}

function renderBoard() {
  const table = document.getElementById('leaderboard');
  if (!table) return;
  const board = loadBoard().sort((a, b) => b.score - a.score).slice(0, 10);
  table.innerHTML = '<tr><th>Name</th><th>Score</th></tr>' +
    board.map(r => `<tr><td>${r.name}</td><td>${r.score}</td></tr>`).join('');
}

function startQuiz() {
  currentUser = document.getElementById('username').value.trim() || 'Anon';
  questionLimit = parseInt(document.getElementById('question-count').value, 10) || 1;
  score = 0;
  currentQuestion = 0;
  document.getElementById('setup').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  chooseCategory();
  loadQuestion();
}

function endQuiz() {
  const board = loadBoard();
  board.push({ name: currentUser, score });
  saveBoard(board);
  renderBoard();
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('setup').style.display = 'block';
}

function chooseCategory() {
  const names = Object.keys(categories);
  currentCategory = names[Math.floor(Math.random() * names.length)];
  questions = shuffle(categories[currentCategory].slice());
  currentQuestion = 0;
  document.getElementById('category').textContent = 'Category: ' + currentCategory;
}

function loadQuestion() {
  if (currentQuestion >= questionLimit) {
    endQuiz();
    return;
  }
  if (currentQuestion >= questions.length) {
    chooseCategory();
  }
  answered = false;
  const q = questions[currentQuestion];
  document.getElementById('quiz-image').src = q.image;
  const optsDiv = document.getElementById('options');
  optsDiv.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => {
      document.getElementById('feedback').textContent =
        opt === q.correct ? '✅ Correct!' : '❌ Nope!';
      if (!answered && opt === q.correct) {
        score += 1;
      }
      answered = true;
    };
    optsDiv.appendChild(btn);
  });
  document.getElementById('feedback').textContent = '';
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentQuestion += 1;
  loadQuestion();
});

document.getElementById('start-btn').addEventListener('click', startQuiz);

window.onload = () => {
  renderBoard();
};
