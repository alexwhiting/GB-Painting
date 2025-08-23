import { handleModalForm } from './modalForm.js';

handleModalForm();

// Script for scroll animations
document.addEventListener('DOMContentLoaded', function () {
  const animateOnScroll = function () {
    const elements = document.querySelectorAll('.scroll-animate');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition < windowHeight * 0.85) {
        element.classList.add('active');
      }
    });
  };


  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

const areas = [{
  location: 'Annapolis Valley',
  locationSpecifics: [
    'Wolfville',
    'New Minas',
    'Kentville',
    'And more!'
  ],
  icon: 'apple-whole'
}, {
  location: 'Halifax and Surrounding Areas',
  locationSpecifics: [
    'Bedford',
    'Sackville',
    'Tantallon',
    'And more!'
  ],
  icon: 'city'
}, {
  location: 'Dartmouth',
  locationSpecifics: [
    'Cole Harbour',
    'Eastern Passage',
    'Portland',
    'And more!'
  ],
  icon: 'tree-city'
}];

function areasOfOperationHTML() {
  let html = '';

  areas.forEach((area) => {
    let listItemsHTML = '';
    html +=
      `
      <div class="col-md-4 mb-4 scroll-animate">
        <div class="expertise-card">
          <div class="expertise-icon">
            <i class="fa-solid fa-${area.icon}" data-icon></i>
          </div>
          <h3 data-location>
            ${area.location}
          </h3>
          <ul class="expertise-list" data-location-specifics>
            ${area.locationSpecifics.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-areas-of-operation').innerHTML = html;
}

areasOfOperationHTML();
