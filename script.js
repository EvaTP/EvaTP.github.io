// Page active
console.log("Script chargé !");
const currentPage = window.location.href;

document.querySelectorAll("a").forEach(link => {
  const href = link.getAttribute("href");
  if (href && currentPage.includes(href)) {
    link.classList.add("active");
  }
});

// nav bar responsive
// const burger = document.getElementById('burger');
// const navLinks = document.getElementById('nav-links');

// burger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });


//Ciblage du titre A propos//
let titreApropos = document.querySelector('#apropostitre');
let divApropos = document.querySelector('.apropos.hidden');


titreApropos.addEventListener('click', () => {
  if(divApropos.classList.contains('hidden')){
    divApropos.classList.remove('hidden');
    divApropos.classList.add('show');
    }else{
      divApropos.classList.remove('show');
      divApropos.classList.add('hidden');
    }
  });

  let titreMonStack = document.querySelector('#monstacktitre');
  let divMonStack = document.querySelector('.monstack.hidden');
  
  titreMonStack.addEventListener('click', () =>{
    if(divMonStack.classList.contains('hidden')){
      divMonStack.classList.remove('hidden');
      divMonStack.classList.add('show');
    }else{
      divMonStack.classList.remove('show');
      divMonStack.classList.add('hidden');
    }
});











// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Script chargé");

//   const links = document.querySelectorAll('.navbar a');
//   const currentPage = window.location.pathname.split("/").pop();
//   console.log("Page courante :", currentPage);

//   links.forEach(link => {
//     console.log("Lien vérifié :", link.getAttribute("href"));
//     console.log("😆Comparaison :", linkHref, "===", currentPage);
//     if (link.getAttribute("href") === currentPage) {
//       link.classList.add("active");
//     }
//   });
// });




