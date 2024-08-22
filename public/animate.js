document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animShow');
      } else {
        entry.target.classList.remove('animShow');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.animHidden');
  hiddenElements.forEach((element) => observer.observe(element));
});
