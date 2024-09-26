const track = document.querySelector('.carouseltrack');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_next');
const prevButton = document.querySelector('.carousel_prev');
const slideWidth = slides[0].getBoundingClientRect().width;

let currentSlide = 0;


const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide * slideWidth + 'px)';
  currentSlide = targetSlide;
  return currentSlide;
};


nextButton.addEventListener('click', () => {
  currentSlide = moveToSlide(track, currentSlide, (currentSlide + 1) % slides.length);
});

prevButton.addEventListener('click', () => {
  currentSlide = moveToSlide(track, currentSlide, (currentSlide - 1 + slides.length) % slides.length);
});
const listaExperiencia = document.getElementById('experiencia-laboral');

listaExperiencia.addEventListener('click', (event) => {
  const elementoClicK = event.target.closest('li'); 

  if (elementoClicK) {
    const detalles = elementoClicK.querySelector('.detalles');
    detalles.style.display = detalles.style.display === 'block' ? 'none' : 'block';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  
  const prefersDarkMode = localStorage.getItem('darkMode') === 'enabled';
  if (prefersDarkMode) {
    body.classList.add('darkmode');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('darkmode');

    
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});
