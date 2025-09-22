const serviceAreas = [
  {
    area: 'Annapolis Valley',
    para: 'Serving the beautiful Annapolis Valley with reliable painting services.',
    locations: ['Wolfville', 'New Minas', 'Kentville'],
  },
  {
    area: 'Halifax & Surrounding Areas',
    para: 'Bringing professional painting expertise to HRM and surrounding communities.',
    locations: ['Halifax', 'Bedford', 'Sackville', 'Tantallon', 'Fall River', 'Hammonds Plains'],
  },
  {
    area: 'Dartmouth Area',
    para: 'Quality painting services across Dartmouth and the eastern communities of HRM.',
    locations: ['Dartmouth', 'Cole Harbour', 'Eastern Passage', 'Portland'],
  }
];

const services = [
  {
    service: 'Interior Painting',
    text: 'Applying paint to walls, ceilings, and trim within a building to improve and protect surfaces.',
    icon: 'fa-solid fa-house',
  },
  {
    service: 'Exterior Painting',
    text: 'Applying paint to siding and trim to the outer surfaces of a building to protect it from weather damage.',
    icon: 'fa-solid fa-building',
  },
  {
    service: 'Deck Staining',
    text: 'Applying paint or stain to all deck surfaces to enhance its appearance and prevent rot.',
    icon: 'fa-solid fa-paint-roller',
  }
];

const reviews = [
  {
    review: `They are so professional, they arrive on time and do the work properly. I’ve used them several times and  continue to be impressed. They painted our deck and shed in the past year. We plan to have them paint the inside of our house next.  I would recommend them to anyone.`,
    client: 'Sean M',
    clientLocation: 'Sackville, NS',
    stars: 5
  },
  {
    review: `Susan and I hired Groves and Bodnar Painting to look after the staining of our deck rails along with a 2nd story balcony. They were professional in every respect and the job was done well. We are planning to hire them again in 2026 for more deck work and painting some of the house exterior as well.`,
    client: 'Mike M',
    clientLocation: 'Fall River, NS',
    stars: 5
  },
  {
    review: `My experience having the exterior of our house painted by Groves and Bodnar Painting was extremely positive. The guys were respectful, friendly, trustworthy, and hardworking. Their communication was excellent, and they always showed up when they said they would. I am very happy with the end result, and I would have no hesitations recommending them to any of my friends and family.`,
    client: 'Leanne M',
    clientLocation: 'Halifax, NS',
    stars: 5
  }
];

function addAnimationDelay(array) {
  array.forEach((arrayItem, i) => {
    arrayItem.animationDelay = i * 100;
  });
}

addAnimationDelay(serviceAreas);
addAnimationDelay(services);
addAnimationDelay(reviews);

function generateServiceAreasHTML() {
  let html = '';

  serviceAreas.forEach((area) => {
    html += `
      <div class="card shadow-md max-w-xl mx-auto rounded-lg p-6 bg-white overflow-hidden max-lg:rounded-2xl 
      transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl" 
      data-aos="fade-down" data-aos-delay="${area.animationDelay}" data-animation>
        <div class="flex justify-center mb-4">
            <div class="rounded-full bg-[var(--primary-color)]/20 p-4 flex items-center justify-center">
              <i class="fa-solid fa-location-dot text-[var(--primary-color)] text-2xl"></i>
            </div>
          </div>

          <h1 class="text-center font-bold text-xl mb-2 data-area">${area.area}</h1>

          <p class="text-center text-[var(--light-font)] mb-4 data-para">
            ${area.para}
          </p>

          <div class="grid grid-cols-3 max-lg:grid-cols-3 max-md:mx-4 gap-2">
            ${area.locations.map(item => 
              `
                <div class="bg-[var(--primary-color)]/20 p-2 text-[var(--primary-color)] flex justify-center items-center text-center h-[64px]">
                  ${item}
                </div>
              `).join('')}
          </div>
        </div>
      </div>
    `;

    document.querySelector('#serviceAreaCards')
      .innerHTML = html;
  });
}

function generateServicesHTML() {
  let html = '';

  services.forEach((service) => {
    html += `
      <div class="card shadow-md max-w-xl rounded-lg p-6 mx-auto bg-white max-lg:rounded-full
      transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl" 
      data-aos="fade-down" data-aos-delay="${service.animationDelay}" data-animation>
        <div class="flex justify-center mb-4">
          <div class="rounded-full bg-[var(--primary-color)]/20 p-4 flex items-center justify-center">
            <i class="${service.icon} text-[var(--primary-color)] text-2xl data-icon"></i>
          </div>
        </div>

        <h1 class="text-center font-bold text-xl mb-2 data-service">${service.service}</h1>

        <p class="text-center text-[var(--light-font)] mb-4 data-text">
          ${service.text}
        </p>
      </div>
    `;
  });

  document.querySelector('#servicesCards')
    .innerHTML = html;

}

function generateTestimonials() {
  let html = '';

  reviews.forEach((review) => {
    html += `
      <div class="card bg-white shadow-md rounded-xl p-6 max-w-xl mx-auto
      transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl" 
      data-aos="zoom-in" data-aos-delay="${review.animationDelay}" data-animation>

        <div class="flex justify-start mb-4">
          <div class="rounded-full bg-[var(--primary-color)]/10 p-3">
            <i class="fa-solid fa-quote-left text-[var(--primary-color)] text-xl"></i>
          </div>
        </div>

        <p class="text-gray-700 text-base leading-relaxed mb-6 data-review">
          ${review.review}
        </p>

        <div class="border-t border-gray-200 pt-4 flex items-center justify-between">
          <div>
            <p class="font-semibold text-gray-900 data-client">${review.client}</p>
            <p class="text-sm text-gray-500 data-clientLocation">${review.clientLocation}</p>
          </div>
          <div class="flex text-[var(--primary-color)]">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('#testimonialCards')
    .innerHTML = html;
}

function toggleMobileNav() {
  let active = false;
  const buttonElement = document.querySelector('#mobileHamburger');
  const navElement = document.querySelector('#mobileNav');
  const buttonLinks = document.querySelectorAll('.js-mobile-nav-link');

  buttonElement.addEventListener('click', () => {
    if (!active) {
      active = true;
      buttonElement.innerHTML = '<i class="fa-solid fa-xmark js-mobile-menu-icon"></i>';
      navElement.classList.remove('hidden');
    } else {
      active = false;
      buttonElement.innerHTML = '<i class="fa-solid fa-bars js-mobile-menu-icon"></i>';
      navElement.classList.add('hidden');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      active = false;
      buttonElement.innerHTML = '<i class="fa-solid fa-bars js-mobile-menu-icon"></i>';
      navElement.classList.add('hidden');
    }
  });

  buttonLinks.forEach(link => {
    link.addEventListener('click', () => {
      active = false;
      buttonElement.innerHTML = '<i class="fa-solid fa-bars js-mobile-menu-icon"></i>';
      navElement.classList.add('hidden');
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const section = params.get('scroll');
  if (section) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

toggleMobileNav();

generateServiceAreasHTML();
generateServicesHTML();
generateTestimonials();