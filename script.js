// au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Portfolio Script chargé !");

  /* =================================
     1. GESTION DE LA NAV ACTIVE
     ================================= */
  const currentPage = window.location.pathname;
  // Gère le cas où l'on est à la racine "/" ou dans un sous-dossier comme "/en/"
  const currentFile = currentPage.split("/").pop() || "index.html";

  // On sélectionne tous les liens de la navbar, SAUF ceux dans .lang-switch
  document
    .querySelectorAll(".navbarul li:not(.lang-switch) a")
    .forEach((link) => {
      const linkFile =
        link.getAttribute("href").split("/").pop() || "index.html";

      if (currentFile === linkFile) {
        link.classList.add("active");
      }

      // document.querySelectorAll(".navbar a").forEach((link) => {
      //   const href = link.getAttribute("href");
      //   if (href) {
      //     const linkFile = href.split("/").pop() || "index.html";
      //     if (currentFile === linkFile) {
      //       link.classList.add("active");
      //     }
      // }
    });

  /* =======================================
     2. OUVERTURE DE LA BIO INTERACTIVE
     ======================================= */
  const toggleBioBtn = document.getElementById("toggle-bio-btn");
  const bioContent = document.getElementById("bio-content");

  if (toggleBioBtn && bioContent) {
    toggleBioBtn.addEventListener("click", () => {
      // Bascule les classes d'affichage/masquage
      bioContent.classList.toggle("is-hidden");
      bioContent.classList.toggle("is-visible");

      // Détecte la langue courante (FR ou EN) pour adapter le texte du bouton
      const isEnglish = document.documentElement.lang === "en";

      if (bioContent.classList.contains("is-visible")) {
        toggleBioBtn.textContent = isEnglish
          ? "Hide my profile"
          : "Masquer mon parcours";
      } else {
        toggleBioBtn.textContent = isEnglish
          ? "Discover my story"
          : "Découvrir mon parcours";
      }
    });
  }

  /* =========================================
     3. ANIMATION DU BLOC CONTACT AU SCROLL
     ========================================= */
  const contactBlock = document.querySelector(".contact-block");

  if (contactBlock) {
    function revealOnScroll() {
      const rect = contactBlock.getBoundingClientRect();
      // Se déclenche un peu avant que le bloc n'arrive tout en haut de l'écran
      if (rect.top < window.innerHeight - 50) {
        contactBlock.classList.add("visible");
        // Optionnel : on retire le listener une fois l'animation jouée pour optimiser les performances
        window.removeEventListener("scroll", revealOnScroll);
      }
    }
    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
    revealOnScroll(); // Lancement immédiat au cas où le bloc est déjà visible sans scroller
  }

  /* ===================================
     4. AUTOMATISATION DU COPYRIGHT
     =================================== */
  const year = new Date().getFullYear();
  const copyright = document.getElementById("copyright");
  if (copyright) {
    const isEnglish = document.documentElement.lang === "en";
    const rightsText = isEnglish
      ? "All rights reserved."
      : "Tous droits réservés.";
    copyright.textContent = `© ${year} Eva Tharrats | ${rightsText}`;
  }
});

/* ==========================================
   5. MODE DEBUG RESPONSIVE (Isolé & Propre)
   ========================================== */
const DEBUG_MODE = false; // Passe à true pour l'avoir pendant tes sessions de dev responsive

if (DEBUG_MODE) {
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
    pointer-events: none; /* Évite de bloquer les clics en bas de page */
  `;
  document.body.appendChild(debugBadge);

  function updateWidth() {
    debugBadge.textContent = `📐 ${window.innerWidth}px`;
  }
  updateWidth();
  window.addEventListener("resize", updateWidth);
}
