// Asociar la función al clic del botón
    $(document).ready(function() {
        $('#home').on('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace
            loadPartialView('/home', document.querySelector('.app'))
        });
    });
    $(document).ready(function() {
        $('#mycourses').on('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace
            loadPartialView('/prueba', document.querySelector('.app'))
        });
    });
    $(document).ready(function() {
        $('#calendar').on('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace
            loadPartialView('/calendar', document.querySelector('.app'))
        });
    });
    $(document).ready(function() {
        $('#more').on('click', function(event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace
            loadPartialView('/prueba2', document.querySelector('.app'))
        });
    });