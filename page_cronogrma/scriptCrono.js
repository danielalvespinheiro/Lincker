let slideIndex = 0;
const tempoAutomatico = 10000;

function mostrarSlide(n) {
    const slides = document.querySelectorAll('.carrossel-slide');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.carrossel-container').style.transform = `translateX(${offset}%)`;
}

function mudarSlide(n) {
    mostrarSlide(slideIndex + n);
}


mostrarSlide(slideIndex);


setInterval(() => {
    mudarSlide(1); 
}, tempoAutomatico);


//delay links
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#linkList a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita o comportamento padrão do link

            const url = this.href;

            setTimeout(() => {
                // Abre o link na mesma aba após o delay
                window.location.href = url;
            }, 500); // Delay de 500ms
        });
    });
});
