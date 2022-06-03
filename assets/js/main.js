//Aciona o evento do scroll ao garregar a janela
window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    MenuTopo.classList.add('bg-pink')
  } else {
    MenuTopo.classList.remove('bg-pink');
  }
}

function showBackToTopOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
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