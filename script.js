let currentIndex = 0;
let slideInterval;

// Objeto con la información para el Modal
const infoServicios = [
    {
        titulo: "CONTABILIDAD",
        desc: `<ul>
            <li>Contabilidad de Personas Morales y Personas Físicas de acuerdo a NIF.</li>
            <li>Emisión de Estados Financieros.</li>
            <li>Análisis de Estados Financieros mediante Consultoría Financiera.</li>
            <li>Ratios Financieros, KPI´S, Dashboard.</li>
            <li>Valuación de Proyectos, Capacidad de Crecimiento y expansión.</li>
        </ul>`
    },
    {
        titulo: "IMPUESTOS - FISCAL",
        desc: `<ul>
            <li>Determinación y Cálculo de Declaraciones Anuales y Pagos Provisionales.</li>
            <li>Atención de Auditorías (SAT, Secretaría de Finanzas, etc.).</li>
            <li>Atención de Vigilancia Profunda SAT, Invitaciones y Comunicados.</li>
            <li>Elaboración de Nóminas y Planeación de Previsión Social.</li>
            <li>Determinación de Cuotas IMSS, RCV e Infonavit.</li>
            <li>Presentación de avisos ante IMSS (IDSE).</li>
            <li>Trámite de Firmas electrónicas y Certificados para Factura Electrónica.</li>
            <li>Atención de requerimientos de Fiscalización ante Infonavit.</li>
        </ul>`
    },
    {
        titulo: "OTROS SERVICIOS (INNOVACIÓN)",
        desc: `<ul>
            <li>Sincronización y Análisis de Información Fiscal con el SAT mediante IA.</li>
            <li>Cruce de información fiscal con IA para cumplimiento eficiente.</li>
            <li>Detección de errores en expedición de XML.</li>
            <li>Detección y control de Operaciones con EFOS.</li>
        </ul>`
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
        document.getElementById("modalTitle").innerHTML = infoServicios[currentIndex].titulo;
        document.getElementById("modalDescription").innerHTML = infoServicios[currentIndex].desc;
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