
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

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentQuiz.length === 0) return;
  currentQuestion = (currentQuestion + 1) % currentQuiz.length;
  loadQuestion();
});

document.getElementById("category-select").addEventListener("change", e => {
  setCategory(e.target.value);
  loadQuestion();
});

document.addEventListener("DOMContentLoaded", () => {
  populateCategories();
  setCategory("All");
  loadQuestion();
});
