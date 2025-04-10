document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
// Funkcija za otvaranje lightboxa
function openLightbox(imgElement) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex'; // Prikazivanje lightboxa
    lightboxImg.src = imgElement.src; // Postavljanje izvora slike na kliknutu sliku
  }
  
  // Funkcija za zatvaranje lightboxa
  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Sakrivanje lightboxa
  }
  