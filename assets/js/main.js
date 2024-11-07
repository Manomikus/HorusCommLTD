function enterSite() {
  const loadingScreen = document.querySelector(".loading-screen");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const logo = document.querySelector(".logo");
  let progress = 0;

  // Masque tout le contenu sauf l'écran de chargement
  document.body.classList.add("hidden-content");
  loadingScreen.classList.remove("hidden");

  const loadingInterval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(loadingInterval);

      // Déclenche une animation de disparition et redirige après l'animation
      loadingScreen.classList.add("fadeOut"); // Active la transition de fade-out

      setTimeout(() => {
        window.location.replace("home.html"); // Ou window.location.assign("pages/about.html")
      }, 500);
    } else {
      progress += 5;
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${progress}%`;
      logo.style.transform = `rotateY(${progress * 3.6}deg)`;
    }
  }, 100);
}
// Header behaviour

let lastScrollTop = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Gérer l'apparition du header
  if (scrollTop < window.innerHeight && scrollTop > 0) {
    // Le header reste caché dans le bloc hero
    header.classList.add("hidden");
  } else if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scroll Down - Hide Header
    header.classList.add("hidden");
  } else if (scrollTop < lastScrollTop && scrollTop > window.innerHeight) {
    // Scroll Up - Show Header
    header.classList.remove("hidden");
  } else if (scrollTop <= 0) {
    // Retour à la position de départ
    header.classList.remove("hidden");
    header.classList.add("transparent");
  }

  // Ajuster l'opacité selon la position de défilement
  if (scrollTop > window.innerHeight) {
    header.classList.remove("transparent");
    header.classList.add("translucent");
  } else {
    header.classList.remove("translucent");
    header.classList.add("transparent");
  }

  lastScrollTop = scrollTop;
});

// Sélectionner le bouton toggle et le menu de navigation
const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector("header nav");

// Activer/désactiver le menu
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("open"); // Active la croix sur le bouton
  nav.classList.toggle("open-menu"); // Affiche le menu
});

document
  .querySelector(".submit-button")
  .addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)";
    this.style.boxShadow = "0px 8px 20px rgba(81, 165, 244, 0.7)";
  });

document
  .querySelector(".submit-button")
  .addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "0px 4px 15px rgba(81, 165, 244, 0.5)";
  });

document.querySelectorAll(".card-container").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector(".card-front").style.transform =
      "translateY(-10px) scale(1.05)";
    card.querySelector(".card-front").style.boxShadow =
      "0px 8px 20px rgba(81, 165, 244, 0.5)";
  });

  card.addEventListener("mouseleave", () => {
    card.querySelector(".card-front").style.transform =
      "translateY(0) scale(1)";
    card.querySelector(".card-front").style.boxShadow =
      "0px 4px 12px rgba(0, 0, 0, 0.3)";
  });
});
