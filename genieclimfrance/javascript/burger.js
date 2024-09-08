const menuBtn = document.getElementById('menu-btn');
const body = document.body;

menuBtn.addEventListener('change', function() {
    if (this.checked) {
        body.style.overflow = 'hidden'; // Bloque le scroll quand le menu est ouvert
    } else {
        body.style.overflow = ''; // Réactive le scroll quand le menu est fermé
    }
});
        