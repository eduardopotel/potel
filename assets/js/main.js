//Aciona o evento do scroll ao garregar a janela
window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    MenuTopo.classList.add('bg-pink')
  } else {
    MenuTopo.classList.remove('bg-pink');
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
          #home,
          #home img,
          #home .status,
          #services,
          #services header,
          #services .card,
          #about,
          #about header,
          #about .content,
          #contact header, 
          #contact .content`)