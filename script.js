document.addEventListener("DOMContentLoaded", () => {
  console.log("Script chargé !");

  // Montrer la page active
  const currentPage = window.location.href;
  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && currentPage.includes(href)) {
      link.classList.add("active");
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
