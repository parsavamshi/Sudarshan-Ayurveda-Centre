// ==========================================================================
// Sudarshan Ayurveda Hospital - Main JS
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function setActiveLink() {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActiveLink);

  // ---- Collapse mobile navbar on link click ----
  const navMenu = document.getElementById('navMenu');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        bsCollapse.hide();
      }
    });
  });

  // ---- Back to top button ----
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  // ---- Contact form submit (demo) ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for reaching out! Our team will contact you shortly.');
      contactForm.reset();
    });
  }

});



// ---- Toggle navbar behavior on scroll ----
const siteHeader = document.getElementById('header');

function toggleHeaderBg() {
  if (window.scrollY > 60) {
    siteHeader.classList.add('scrolled');
    siteHeader.classList.add('fixed');
  } else {
    siteHeader.classList.remove('scrolled');
    siteHeader.classList.remove('fixed');
  }
}
window.addEventListener('scroll', toggleHeaderBg);
toggleHeaderBg(); // run once on load in case page refreshes mid-scroll



