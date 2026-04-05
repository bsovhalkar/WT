const answers = {
  q1: "b",
  q2: "c",
  q3: "c",
  q4: "b",
  q5: "a"
};

const quizForm = document.getElementById("quiz-form");
const resultBox = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;
  const total = Object.keys(answers).length;

  for (const [question, correctAnswer] of Object.entries(answers)) {
    const selected = quizForm.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === correctAnswer) {
      score += 1;
    }
  }

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
  resultBox.classList.add("hidden");
  resultBox.textContent = "";
});
