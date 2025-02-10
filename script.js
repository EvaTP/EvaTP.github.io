//Ciblage du titre A propos//

let titreApropos = document.querySelector('.apropostitre');
let divApropos = document.querySelector('.apropos.hidden');

titreApropos.addEventListener('click', () => {
  if(divApropos.classList.contains('hidden')){
    divApropos.classList.remove('hidden');
    divApropos.classList.add('show');
    }else{
      divApropos.classList.remove('show');
      divApropos.classList.add('hidden');
    }
  
  // if (divApropos.style.display === 'none') {
  //   // divApropos.classList.remove('hidden');
  //   // divApropos.classList.add('show');
  //   divApropos.style.display = 'block';
  //   // divApropos.style.flexDirection = 'row';
  // } else {
  //   // divApropos.classList.remove('show');
  //   // divApropos.classList.add('hidden');
  //   divApropos.style.display = 'none';
  //   // divApropos.style.flexDirection = 'column';
  // }
});
