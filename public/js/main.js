
const quizData = [
  {
    image: "images/spanner.jpg",
    correct: "Spanner",
    category: "Tools",
    options: ["Spanner", "Wrench", "Tweezer", "Hammer"]
  },
  {
    image: "images/tampon.jpg",
    correct: "Tampon",
    category: "Health",
    options: ["Tampon", "Lipstick", "Marker", "Eraser"]
  },
  {
    image: "images/lashes.jpg",
    correct: "False Eyelashes",
    category: "Beauty",
    options: ["False Eyelashes", "Caterpillars", "Hair Extension", "Brush"]
  },
  {
    image: "images/diaper.jpg",
    correct: "Diaper",
    category: "Baby",
    options: ["Diaper", "Bib", "Towel", "Bandage"]
  }
];

let currentQuiz = [];
let currentQuestion = 0;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function populateCategories() {
  const select = document.getElementById("category-select");
  const categories = [...new Set(quizData.map(q => q.category))].sort();
  select.innerHTML = "<option value='All'>All (Random)</option>";
  categories.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}

function setCategory(cat) {
  if (cat === "All") {
    currentQuiz = [...quizData];
  } else {
    currentQuiz = quizData.filter(q => q.category === cat);
  }
  shuffle(currentQuiz);
  currentQuestion = 0;
}

function loadQuestion() {
  if (currentQuiz.length === 0) return;
  const q = currentQuiz[currentQuestion];
  const imgEl = document.getElementById("quiz-image");
  imgEl.src = q.image;
  imgEl.alt = q.correct;
  const optsDiv = document.getElementById("options");
  optsDiv.innerHTML = "";
  const opts = shuffle([...q.options]);
  opts.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      document.getElementById("feedback").textContent = opt === q.correct ? "✅ Correct!" : "❌ Nope!";
    };
    optsDiv.appendChild(btn);
  });
  document.getElementById("feedback").textContent = "";
}

let timerInterval;
let playerName = "";

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function startTimer(mins) {
  let remaining = mins * 60;
  const timerEl = document.getElementById("timer");
  timerEl.textContent = formatTime(remaining);
  timerInterval = setInterval(() => {
    remaining--;
    timerEl.textContent = formatTime(remaining);
    if (remaining <= 0) {
      clearInterval(timerInterval);
      alert(`Time's up ${playerName}!`);
    }
  }, 1000);
}

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentQuiz.length === 0) return;
  currentQuestion = (currentQuestion + 1) % currentQuiz.length;
  loadQuestion();
});

document.getElementById("category-select").addEventListener("change", e => {
  setCategory(e.target.value);
  loadQuestion();
});

document.getElementById("start-btn").addEventListener("click", () => {
  const name = document.getElementById("name-input").value.trim();
  const mins = parseInt(document.getElementById("minutes-input").value, 10);
  if (!name || isNaN(mins) || mins <= 0) return;
  playerName = name;
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  populateCategories();
  setCategory("All");
  loadQuestion();
  startTimer(mins);
});

document.addEventListener("DOMContentLoaded", () => {
  // nothing here yet
});
