document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.querySelector(".heart");
  const noButton = document.querySelector(".square");
  const fallingContainer = document.querySelector(".falling-hearts");

  // Redirects
  yesButton.addEventListener("click", () => {
    window.location.href = "yes.html";
  });

  noButton.addEventListener("click", () => {
    window.location.href = "no.html";
  });

  // Falling hearts animation
  function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-fall");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    fallingContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }

  setInterval(createFallingHeart, 800);
});
