// Fade sections into view on scroll
const fadeSections = document.querySelectorAll('.fade-section');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

fadeSections.forEach(s => fadeObserver.observe(s));

// Active nav highlight on scroll
const navLinks = document.querySelectorAll('.nav-links a');
const pageSections = document.querySelectorAll('main section[id]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  },
  { threshold: 0.4 }
);

pageSections.forEach(s => navObserver.observe(s));
