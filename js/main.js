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