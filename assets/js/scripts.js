const navbar = document.getElementById('navbar');
const heroTitle = document.getElementById('hero-title');
let scrolled = false;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50 && !scrolled) {
        navbar.classList.add('show');
        heroTitle.style.top = '1rem';
        heroTitle.style.left = '2rem';
        heroTitle.style.transform = 'translate(0, 0) scale(0.5)';
        heroTitle.style.color = '#007aff';
        scrolled = true;
    } else if (scrollY <= 50 && scrolled) {
        navbar.classList.remove('show');
        heroTitle.style.top = '50%';
        heroTitle.style.left = '50%';
        heroTitle.style.transform = 'translate(-50%, -50%) scale(1)';
        heroTitle.style.color = '#f5f5f7';
        scrolled = false;
    }
});
