function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

//DESAPARECER MENU

var x = document.getElementById("nav");
x.className = "";

// FUNCION QUE MUESTRA AL MENU RESPONSIVE 
function responsiveMenu(){
    var x= document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }
    else{
        x.className="";
    }
}
//funciones para mi boton volver arriba
function volverArriba() {
    document.body.scrollTop = 0; // Para navegadores antiguos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
}
    
    // Mostrar o ocultar el botón dependiendo de la posición de desplazamiento
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('volverArriba').style.display = 'block';
    } else {
        document.getElementById('volverArriba').style.display = 'none';
    }
};

//contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var formValid = true;
    var inputs = this.querySelectorAll('input, select, textarea');

    inputs.forEach(function(input) {
        if (!input.checkValidity()) {
            formValid = false;
        }
    });

    if (!formValid) {
        event.preventDefault();
        alert('Por favor complete todos los campos obligatorios.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    function initCarousel(containerId, prevBtnId, nextBtnId) {
        const container = document.getElementById(containerId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);

        let index = 0;
        const items = container.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        function updateCarousel() {
            items.forEach((item, i) => {
                item.style.display = i === index ? 'block' : 'none';
            });
        }

        prevBtn.addEventListener('click', function() {
            index = (index > 0) ? index - 1 : totalItems - 1;
            updateCarousel();
        });

        nextBtn.addEventListener('click', function() {
            index = (index < totalItems - 1) ? index + 1 : 0;
            updateCarousel();
        });

        updateCarousel();
    }

    initCarousel('carousel-container-hombres', 'prev-hombres', 'next-hombres');
    initCarousel('carousel-container-mujeres', 'prev-mujeres', 'next-mujeres');
});
