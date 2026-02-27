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

// ===== MUZIK =====

const muzikValasztasok = 
[
  "Air on the G String - Bach-restored.mp3",
  "03-02. Stolen Lisa.mp3",
  "03-03. The Adventure Begins.mp3",
  "03-04. Big Button.mp3",
  "03-07. Looking For Clues.mp3",
  "04-07. Watch Your Step.mp3",
  "05-03. A Great Match.mp3"
];

const eztinditsd = document.getElementById("eztinditsd")
const stopandgo = document.getElementById("stopandgo")
const skipEl = document.getElementById("skip")
const pause = document.getElementById("pause")
/* eztinditsd.src = muzikValasztasok[Math.floor(Math.random()*7)]
console.log(eztinditsd.src) */

function play(){
  if (eztinditsd.paused) {
    eztinditsd.play()
    stopandgo.src = "pause-solid-full.svg"
  } else {
    eztinditsd.pause()
    stopandgo.src = "play-solid-full.svg"
  }
}


/* console.log(muzikValasztasok.findIndex((plsmukodj) => {return plsmukodj === eztinditsd.src} )) */
function skip(){
  /* console.log(muzikValasztasok.indexOf(eztinditsd.getAttribute("src"))) */
  if (muzikValasztasok.indexOf(eztinditsd.getAttribute("src")) + 1 === muzikValasztasok.length) {
    eztinditsd.src = muzikValasztasok[0]
    stopandgo.src = "play-solid-full.svg"
    eztinditsd.pause()
  } else {
    eztinditsd.src = muzikValasztasok[muzikValasztasok.indexOf(eztinditsd.getAttribute("src")) + 1]
    stopandgo.src = "play-solid-full.svg"
    eztinditsd.pause()
  }
  
}

function mute() {
  if (eztinditsd.muted){
    eztinditsd.muted = false
    pause.src = "volume-solid-full.svg"
  }
  else{
    eztinditsd.muted = true
    pause.src = "volume-xmark-solid-full.svg"
  }
}
/*
console.log(Math.random())
document.getElementById("valtoztasd-meg-ezt").src = muzikValasztasok[Math.floor(Math.random()*7)]
console.log(document.getElementById("valtoztasd-meg-ezt").src) */

