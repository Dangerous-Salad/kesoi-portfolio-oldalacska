// ===== HAMBURGER MENU =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== SCROLL ANIMATION =====
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});

// ===== FORM VALIDATION =====
const form = document.getElementById("contact-form");
const message = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "Üzenet elküldve!";
  message.style.color = "green";
  form.reset();
});