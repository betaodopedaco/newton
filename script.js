// Nenhum código JavaScript foi encontrado no HTML fornecido.
// Se você tiver scripts específicos para este site no futuro,
// eles devem ser adicionados aqui.

// Exemplo de script (para rolagem suave e menu móvel, se aplicável):
// (Este é um exemplo genérico e pode precisar de adaptação dependendo do seu HTML)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect (example from a previous interaction)
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
if (mobileMenu && navMenu) { // Check if elements exist
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Animate on scroll (Intersection Observer)
const animateElements = document.querySelectorAll('.animate-on-scroll');
const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

animateElements.forEach(element => {
    observer.observe(element);
});
