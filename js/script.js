// Crear un nuevo objeto Swiper para el primer carrusel (carrusel-1)
var swiper = new Swiper(".carrusel-1", {
    slidesPerView: 1, // Muestra un solo slide a la vez
    spaceBetween: 30, // Espacio entre cada slide
    loop: true, // Hace que el carrusel sea infinito, de modo que después del último slide, vuelve al primero
    pagination: {
        el: ".swiper-pagination", // Elemento HTML que se utilizará como paginación (puede ser un div, ul, etc.)
        clickable: true, // Permite hacer clic en los puntos de paginación para navegar entre slides
    },
    navigation: {
        nextEl: ".swiper-button-next", // Elemento HTML que se utilizará como botón de "Siguiente"
        prevEl: ".swiper-button-prev", // Elemento HTML que se utilizará como botón de "Anterior"
    }
});

// Crear un nuevo objeto Swiper para el segundo carrusel (carrusel-2)
var swiper = new Swiper(".carrusel-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // En pantallas más pequeñas, muestra solo un slide a la vez
        },
        520: {
            slidesPerView: 2, // En pantallas con un ancho mínimo de 520px, muestra 2 slides a la vez
        },
        950: {
            slidesPerView: 3, // En pantallas con un ancho mínimo de 950px, muestra 3 slides a la vez
        }
    }
});


/**
 * busca elementos con la clase "tabInput", agrega un evento de cambio a cada uno de ellos y, 
 * cuando se produce un cambio en uno de estos elementos.
 * 
 * Para el carrusel de los productos a la venta
 */
// Seleccionar todos los elementos con la clase "tabInput" y guardarlos en una lista
let tabInputs = document.querySelectorAll(".tabInput")

// Agregar un evento de cambio a cada elemento de la lista
tabInputs.forEach(function (input) {
    input.addEventListener('change', function () {
        let id = input.ariaValueMax; // Obtener el valor del atributo "ariaValueMax" del elemento
        let thisSwiper = document.getElementById('swiper' + id); // Obtener un elemento del DOM con un ID específico
        thisSwiper.swiper.update(); // Actualizar el carrusel relacionado con el ID obtenido
    })
});
