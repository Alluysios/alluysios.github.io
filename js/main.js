window.onscroll = function() {addSticky()};

const navbar = document.querySelector(".navigation");
const sticky = navbar.offsetTop;

const addSticky = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const about = document.getElementById('about');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');

window.onscroll = () => {
  let windowOffset = window.pageYOffset;
  if(windowOffset >= about.offsetTop - 300) {
    document.querySelectorAll('.service-card').forEach(card => {
      card.classList.add('fadeInTop');
    })
  }

  if(windowOffset >= about.offsetTop + 150) {
    document.querySelector('.about-me').classList.add('fadeInBottom');
  }

  if(windowOffset >= portfolio.offsetTop - 500) {
    document.querySelector('.portfolio-highlight').classList.add('fadeInBottom');
  }

  if(windowOffset >= portfolio.offsetTop + 500) {
    document.querySelectorAll('.portfolio-card').forEach(card => {
      card.classList.add('fadeInBottom');
    })
  }

  if(windowOffset >= contact.offsetTop - 500) {
    document.querySelector('.contact-detail').classList.add('fadeInTop');
  }
}

const slider = document.getElementById('slider');
const sliders = document.querySelectorAll('.slider__item');
const circle = document.querySelector('.circle');

slider.addEventListener('click', e => {
    let indexNumber;
    let currentSlider = document.querySelector('.main-slider');
    let currentCircle = document.querySelector('.main-circle');;
    if(e.target.dataset.index) {
      currentCircle.classList.remove('main-circle')
      e.target.classList.add('main-circle');
      indexNumber = +e.target.dataset.index;
      selectedSlider = sliders[indexNumber];
      currentSlider.classList.remove('main-slider');
      selectedSlider.classList.add('main-slider');
    }
    
});