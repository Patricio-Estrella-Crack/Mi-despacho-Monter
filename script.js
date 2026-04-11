let currentIndex = 0;
let slideInterval;

// Objeto con la información para el Modal
const infoServicios = [
    {
        titulo: "Dictamen de Impuesto sobre Nómina 4%",
        desc: "El dictamen es obligatorio para empresas en CDMX con más de 150 empleados o ciertos ingresos. Te ayudamos a presentar el aviso y el cumplimiento fiscal ante la Secretaría de Finanzas."
    },
    {
        titulo: "Contabilidad Integral para Empresas",
        desc: "Llevamos tu contabilidad de punta a punta: estados financieros, declaraciones mensuales, anuales y asesoría contable personalizada para tu negocio."
    },
    {
        titulo: "Estrategia Fiscal Especializada",
        desc: "Optimizamos tu carga tributaria dentro del marco legal. Análisis de deducciones, prevención de riesgos fiscales y atención de auditorías."
    }
];

function showSlide(index) {
    const titles = document.querySelectorAll('.rotate-text');
    const bullets = document.querySelectorAll('.bullet');
    titles.forEach(t => t.classList.remove('active'));
    bullets.forEach(b => b.classList.remove('active'));

    currentIndex = index;
    titles[currentIndex].classList.add('active');
    bullets[currentIndex].classList.add('active');
}

function nextSlide() {
    const titles = document.querySelectorAll('.rotate-text');
    let next = (currentIndex + 1) % titles.length;
    showSlide(next);
}

function currentSlide(index) {
    showSlide(index);
    resetTimer();
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Lógica del Modal
document.addEventListener('DOMContentLoaded', () => {
    resetTimer();

    const modal = document.getElementById("servicesModal");
    const btn = document.getElementById("openModal");
    const close = document.querySelector(".close-btn");

    btn.onclick = function() {
        // Al abrir, cargamos la info según el currentIndex actual
        document.getElementById("modalTitle").innerText = infoServicios[currentIndex].titulo;
        document.getElementById("modalDescription").innerText = infoServicios[currentIndex].desc;
        modal.style.display = "block";
    }

    close.onclick = function() { modal.style.display = "none"; }
    
    // Cerrar si hacen clic fuera de la ventana
    window.onclick = function(event) {
        if (event.target == modal) { modal.style.display = "none"; }
    }
});
let carouselIndex = 0;
function moveCarousel(direction) {
    const track = document.querySelector('.services-carousel-track');
    const cards = document.querySelectorAll('.service-card');
    const cardsVisible = 3;
    const maxIndex = cards.length - cardsVisible;

    carouselIndex += direction;
    if (carouselIndex < 0) carouselIndex = maxIndex;
    if (carouselIndex > maxIndex) carouselIndex = 0;

    const width = cards[0].offsetWidth;
    track.style.transform = `translateX(-${carouselIndex * width}px)`;
}
