document.addEventListener('DOMContentLoaded', function () {
  // Toggle za mobilni meni
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');

  if (menuToggle && nav) {
      menuToggle.addEventListener('click', function () {
          nav.classList.toggle('active');
      });
  }

  // Lightbox funkcionalnost
  window.openLightbox = function (imgElement) {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      if (lightbox && lightboxImg) {
          lightbox.style.display = 'flex';
          lightboxImg.src = imgElement.src;
      }
  }

  window.closeLightbox = function () {
      const lightbox = document.getElementById('lightbox');
      if (lightbox) {
          lightbox.style.display = 'none';
      }
  }

  // Slideshow
  const slideshowImages = document.querySelectorAll('.menu-slideshow img');
  if (slideshowImages.length > 0) {
      let current = 0;

      function showSlide(index) {
          slideshowImages.forEach((img, i) => {
              img.classList.remove('active');
              if (i === index) img.classList.add('active');
          });
      }

      function nextSlide() {
          current = (current + 1) % slideshowImages.length;
          showSlide(current);
      }

      showSlide(current);
      setInterval(nextSlide, 5000);
  }
});
