// Controle de Ativação das Abas (Buttons)
const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Revelação ao Scroll (Efeito Premium)
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// Inicialização das animações
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
    });
});

// Tradução Simples
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-pt]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}