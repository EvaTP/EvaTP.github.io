// au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script chargé !");

  // Montrer la page active dans la navbar
  const currentPage = window.location.pathname;
  const currentFile = currentPage.split("/").pop() || "index.html"; // Récupère le nom du fichier

  document.querySelectorAll(".navbar a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href) {
      const linkFile = href.split("/").pop() || "index.html";
      if (currentFile === linkFile) {
        link.classList.add("active");
      }
    }
  });

  // Ciblage du titre "A propos"
  const titreApropos = document.querySelector("#apropostitre");
  const divApropos = document.querySelector(".apropos.hidden");
  if (titreApropos && divApropos) {
    titreApropos.addEventListener("click", () => {
      if (divApropos.classList.contains("hidden")) {
        divApropos.classList.remove("hidden");
        divApropos.classList.add("show");
      } else {
        divApropos.classList.remove("show");
        divApropos.classList.add("hidden");
      }
    });
  }

  // Ciblage du titre "Mon stack"
  const titreMonStack = document.querySelector("#monstacktitre");
  const divMonStack = document.querySelector(".monstack.hidden");
  if (titreMonStack && divMonStack) {
    titreMonStack.addEventListener("click", () => {
      if (divMonStack.classList.contains("hidden")) {
        divMonStack.classList.remove("hidden");
        divMonStack.classList.add("show");
      } else {
        divMonStack.classList.remove("show");
        divMonStack.classList.add("hidden");
      }
    });
  }

  // Footer automatisation date
  const year = new Date().getFullYear();
  const copyright = document.getElementById("copyright");
  if (copyright) {
    copyright.textContent = `© ${year} Eva Tharrats | Tous droits réservés.`;
  }
});

// Code de déboggage responsive (isolé du code fonctionnel): voir largeur page (visible uniquement en debug = true)
const DEBUG_MODE = false; // false en production

if (DEBUG_MODE) {
  // Créer un badge de debug
  const debugBadge = document.createElement("div");
  debugBadge.style.cssText = `
    position: fixed;
    bottom: 10px;
    right: 12px;
    background: rgba(0, 255, 255, 0.9);
    color: black;
    padding: 10px 12px;
    border-radius: 5px;
    font-family: monospace;
    font-size: 18px;
    z-index: 9999;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(debugBadge);

  function updateWidth() {
    debugBadge.textContent = `💡 ${window.innerWidth}px`;
  }
  updateWidth();
  window.addEventListener("resize", updateWidth);
}

// Ancien script pour afficher la largeur de la fenêtre dans l'onglet du navigateur (visible pour tous)
// document.addEventListener("DOMContentLoaded", () => {
//   function showWidth() {
//     document.title = `Largeur : ${window.innerWidth}px`;
//   }
//   showWidth(); // Affiche dès le chargement
//   window.addEventListener("resize", showWidth);
// });
