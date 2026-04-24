// Inicialização do efeito Vanilla Tilt para os objetos em 3D da tela
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        max: 5,         // Rotação máxima em graus
        speed: 400,     // Velocidade da transição de entrada/saída
        glare: true,    // Efeito de brilho "luz de vidro"
        "max-glare": 0.2, // Opacidade máxima do brilho
        scale: 1.02     // Escala ao passar o mouse
    });
}

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLinksAnchors = document.querySelectorAll('.nav-links a');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon
    const icon = mobileBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
navLinksAnchors.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileBtn.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// Efeitos de Scroll (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');
const slideUpElements = document.querySelectorAll('.slide-up-anim');

// Callback observer unificado
const triggerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        // Ativar animação de acordo com as classes base
        if (entry.target.classList.contains('reveal')) {
            entry.target.classList.add('active');
        } else if (entry.target.classList.contains('slide-up-anim')) {
            entry.target.classList.add('visible');
        }
        
        // Para de observar o elemento
        observer.unobserve(entry.target);
    });
}, {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => triggerObserver.observe(el));
slideUpElements.forEach(el => triggerObserver.observe(el));

// Efeito glitch esporádico no título principal
const glitchText = document.querySelector('.glitch-text');

if (glitchText) {
    setInterval(() => {
        glitchText.style.textShadow = `
            ${Math.random() * 5 - 2.5}px ${Math.random() * 5 - 2.5}px 0 rgba(255, 85, 0, 0.7),
            ${Math.random() * -5 + 2.5}px ${Math.random() * -5 + 2.5}px 0 rgba(0, 229, 255, 0.7)
        `;
        setTimeout(() => {
            glitchText.style.textShadow = 'none';
        }, 150);
    }, 3000);
}
