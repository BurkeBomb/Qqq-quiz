
const quizData = [
  {
    image: "public/images/spanner.jpg",
    correct: "Spanner",
    options: ["Spanner", "Wrench", "Tweezer", "Hammer"]
  },
  {
    image: "public/images/tampon.jpg",
    correct: "Tampon",
    options: ["Tampon", "Lipstick", "Marker", "Eraser"]
  },
  {
    image: "public/images/lashes.jpg",
    correct: "False Eyelashes",
    options: ["False Eyelashes", "Caterpillars", "Hair Extension", "Brush"]
  },
  {
    image: "public/images/diaper.jpg",
    correct: "Diaper",
    options: ["Diaper", "Bib", "Towel", "Bandage"]
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("quiz-image").src = q.image;
  const optsDiv = document.getElementById("options");
  optsDiv.innerHTML = "";
  q.options.forEach(opt => {
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
  currentQuestion = (currentQuestion + 1) % quizData.length;
  loadQuestion();
});

window.onload = loadQuestion;
