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
        window.location.replace("pages/about.html"); // Ou window.location.assign("pages/about.html")
      }, 500);
    } else {
      progress += 5;
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${progress}%`;
      logo.style.transform = `rotateY(${progress * 3.6}deg)`;
    }
  }, 100);
}

// Sélectionner le bouton toggle et le menu de navigation
const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector("header nav");

// Activer/désactiver le menu
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("open"); // Active la croix sur le bouton
  nav.classList.toggle("open-menu"); // Affiche le menu
});
