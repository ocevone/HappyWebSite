// === TOAST - Réponses ===

function fermerToast() {
  const toast = document.getElementById("oceToast");
  toast.classList.remove("show");
  toast.classList.add("hide");
  setTimeout(() => {
    toast.parentElement.remove();
  }, 500);
}

function reponseGentille() {
  const image = document.getElementById("toastImage");
  image.src = "image/HappyLapi.png";
  image.alt = "Réaction gentille";
  image.style.width = "96px";
  image.style.height = "96px";
  image.style.imageRendering = "pixelated";

  document.querySelector(".toast-body p").innerHTML =
    "Merci t'es trop chou !<br> J’espère que tu vas rigoler en regardant tout ça.";

  document.querySelector('.toast-body .d-flex').innerHTML =
    '<button class="toast-btn-close mt-3 mx-auto" onclick="fermerToast()">Fermer</button>';
}

function reponseMich() {
  const image = document.getElementById("toastImage");
  image.src = "image/FuckinLapi.png";
  image.alt = "Réaction michto";
  image.style.width = "96px";
  image.style.height = "96px";
  image.style.imageRendering = "pixelated";

  document.querySelector(".toast-body p").innerHTML =
    "Toi t’as pas d’argent, de quoi tu parles Kaitae 😤😂";

  document.querySelector('.toast-body .d-flex').innerHTML =
    '<button class="toast-btn-close mt-3 mx-auto" onclick="fermerToast()">Fermer</button>';
}

// === CONSOLE EASTER EGG ===

console.log("%c👀 Coucou les curieux !", "font-size: 20px; color: #ff6f91; font-weight: bold;");
console.log("%cTapez %cocéane()%c pour une surprise !", "font-size: 16px; color: #555;", "font-size: 16px; color: #ff6f91;", "font-size: 16px; color: #555;");

function océane() {
  const secret = document.createElement("div");
  secret.innerHTML = "🌟 Bienvenue dans le club des petits hackers trop mims 🌟";
  secret.style.position = "fixed";
  secret.style.bottom = "20px";
  secret.style.left = "50%";
  secret.style.transform = "translateX(-50%)";
  secret.style.background = "#ffe3f1";
  secret.style.color = "#ff6f91";
  secret.style.padding = "1rem 2rem";
  secret.style.border = "2px dashed #ff9aa2";
  secret.style.borderRadius = "20px";
  secret.style.fontFamily = "'Chewy', cursive";
  secret.style.boxShadow = "5px 5px 0 #ff6f91";
  secret.style.zIndex = "99999";

  document.body.appendChild(secret);

  setTimeout(() => {
    secret.remove();
  }, 6000);
}