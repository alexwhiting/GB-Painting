export function generateHeader() {
  const html = `
    <div class="row hstack">
      <div class="col-12 col-md-4">
        <a href="index.html" class="header-img"><img src="images/logo.jpg" alt="logo" width="384" height="200"></a>
      </div>
      <div class="col-12 col-md-4">
        <!-- Navigation -->
        <nav class="nav">
          <a href="index.html">Home</a>
          <a href="index.html#about-bookmark">About</a>
          <a href="services.html">Services</a>
          <a href="portfolio.html">Portfolio</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>
      <div class="col-12 col-md-4">
        <a data-bs-toggle="modal" data-bs-target="#contactModal" class="button" id="button1">
          <span>Free Estimate!</span>
        </a>
      </div>
    </div>
  `;

  document.querySelector('.js-pc-header')
    .innerHTML = html;
}

export function generateMobileHeader() {
  const html = `
    <div class="row align-items-center">
      <a href="index.html" class="col-4"><img class="logo" src="images/logo.jpg" alt="logo"></a>
      <div class="col-8">
        <button class="js-dropbtn dropbtn"><i class="fa-solid fa-bars js-mobile-menu-icon"></i></button>
      </div>
      <ul class="mobile-menu-dropdown-list js-mobile-menu-dropdown-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html#about-bookmark">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="contact.html">Contact</a></li>
        <a data-bs-toggle="modal" data-bs-target="#contactModal"
          class="button mobile-dropdown-button justify-content-center align-items-center">
          <span>Free Estimate!</span>
        </a>
      </ul>
    </div>
  `;

  document.querySelector('#header2')
    .innerHTML = html;
}

export function toggleMobileMenu() {
  let isClicked = false;
  const contentElement = document.querySelector('.js-mobile-menu-dropdown-list');
  const buttonElement = document.querySelector('.js-dropbtn');

  document.querySelector('.js-dropbtn').addEventListener('click', () => {
    if (!isClicked) {
      isClicked = true;
      contentElement.style.display = 'block';
      buttonElement.innerHTML = '<i class="fa-solid fa-xmark js-mobile-menu-icon"></i>';
    } else {
      isClicked = false;
      contentElement.style.display = 'none';
      buttonElement.innerHTML = '<i class="fa-solid fa-bars js-mobile-menu-icon"></i>';
    }
  });
}