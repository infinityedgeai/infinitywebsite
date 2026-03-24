AOS.init({ duration: 1000, once: true });

document.querySelector('.footer-year').textContent = new Date().getFullYear();

// Preloader removal
window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(function () { preloader.style.display = 'none'; }, 500);
  }
});

// Back-to-top button
var backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile dropdown toggle
if (window.innerWidth <= 768) {
  document.querySelectorAll('.dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      var dropdown = this.nextElementSibling;
      dropdown.classList.toggle('active');
    });
  });
}
