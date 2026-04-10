const quizForm = document.getElementById("quiz-form");
const questionsContainer = document.getElementById("questions-container");
const resultBox = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

let selectedQuestions = [];

function pickRandomQuestions(pool, count) {
  const shuffled = pool.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function renderQuestions(questions) {
  questionsContainer.innerHTML = "";
  questions.forEach((q, index) => {
    const section = document.createElement("section");
    section.className = "question";

    const heading = document.createElement("h2");
    heading.innerHTML = `${index + 1}) ${q.question}`;
    section.appendChild(heading);

    ["a", "b", "c", "d"].forEach((key) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="q${index}" value="${key}"> ${q.options[key]}`;
      section.appendChild(label);
    });

    questionsContainer.appendChild(section);
  });
}

function initQuiz() {
  selectedQuestions = pickRandomQuestions(allQuestions, 10);
  renderQuestions(selectedQuestions);
  resultBox.classList.add("hidden");
  resultBox.textContent = "";
}

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;
  const total = selectedQuestions.length;

  selectedQuestions.forEach((q, index) => {
    const selected = quizForm.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score += 1;
    }
  });

  const percentage = Math.round((score / total) * 100);
  let grade = "Needs Improvement";

  if (percentage >= 80) {
    grade = "Excellent";
  } else if (percentage >= 60) {
    grade = "Good";
  }

  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <h2>Result</h2>
    <p><strong>Score:</strong> ${score} / ${total}</p>
    <p><strong>Percentage:</strong> ${percentage}%</p>
    <p><strong>Performance:</strong> ${grade}</p>
  `;
});

resetBtn.addEventListener("click", () => {
  quizForm.reset();
  initQuiz();
});

initQuiz();
