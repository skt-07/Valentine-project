const noOptions = [
  "No",
  "Are you sure??",
  "What if I offer you a dosa??",
  "Please na 😔",
  "Pretty Please",
  "What about a date in Morabadi?",
  "What about a romantic dance?",
  "Please Varshu",
  "What if I make pav bhaji for you?",
  "But 😔",
  "😔",
  "No",
  "No",
  "No",
  "No"
];

let step = 0;
const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalEl = document.getElementById("final");

yesBtn.addEventListener("click", () => {
  finalEl.style.display = "block";
  questionEl.style.display = "none";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  step++;
  if (step < noOptions.length) {
    noBtn.textContent = noOptions[step];
    if (step >= 10) {
      let yesScale = 1 + (step - 9) * 0.1;   // gradual growth
      let noScale = Math.max(0.6, 1 - (step - 9) * 0.05); // shrinks but visible
      yesBtn.style.transform = `scale(${yesScale})`;
      noBtn.style.transform = `scale(${noScale})`;
    }
  } else {
    noBtn.textContent = "No";
  }
});
