const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');
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
const listaEducacion = document.getElementById('Educacion');

listaEducacion.addEventListener('click', (event) => {
  const elementoClicK = event.target.closest('li'); 

  if (elementoClicK) {
    const detalles = elementoClicK.querySelector('.informacion');
    detalles.style.display = detalles.style.display === 'block' ? 'none' : 'block';
  }
});

