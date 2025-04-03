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


// TOGGLE
// Option avec classList.toggle()
// 
// function toggleElement(titre, div) {
//   titre.addEventListener('click', () => {
//     div.classList.toggle('show');
//     div.classList.toggle('hidden');
//   });
// }

// toggleElement(titreApropos, divApropos);
// toggleElement(titreMonStack, divMonStack);



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
