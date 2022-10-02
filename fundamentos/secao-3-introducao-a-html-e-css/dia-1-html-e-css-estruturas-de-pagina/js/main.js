const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

document
  .querySelectorAll('.nav_link')
  .forEach((n) =>
    n.addEventListener('click', () =>
      document.getElementById('nav-menu').classList.remove('show-menu')
    )
  );

const skillsContent = document.getElementsByClassName('skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i += 1) {
    skillsContent[i].className = 'skills_content skills_close';
  }
  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open';
  }
}

skillsHeader.forEach((el) => el.addEventListener('click', toggleSkills));

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification_active');
    });
    target.classList.add('qualification_active');

    tabs.forEach((tab) => {
      tab.classList.remove('qualification_active');
    });
    tab.classList.add('qualification_active');
  });
});

const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});

let swiperPortfolio = new Swiper('.portfolio_container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let swiperTestimonial = new Swiper('.testimonial_container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav_menu a[href*=${sectionId}]`)
        .classList.add('active-link');
    } else {
      document
        .querySelector(`.nav_menu a[href*=${sectionId}]`)
        .classList.remove('active-link');
    }
  });
});

window.addEventListener('scroll', () => {
  const nav = document.getElementById('header');

  this.scrollY >= 80
    ? nav.classList.add('scroll-header')
    : nav.classList.remove('scroll-header');
});

window.addEventListener('scroll', () => {
  const scrollUp = document.getElementById('scroll-up');

  this.scrollY >= 560
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
});

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

document.getElementById('color-button').addEventListener('click', () => {
  document.documentElement.style.setProperty(
    '--hue-color',
    Math.floor(Math.random() * 360)
  );
});

window.addEventListener('load', () => {
  document.documentElement.style.setProperty(
    '--hue-color',
    Math.floor(Math.random() * 360)
  );
});
