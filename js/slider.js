//Codigo se ejecuta cuando el DOM se halla cargado
document.addEventListener("DOMContentLoaded", function () {
    const botonesControl = document.querySelectorAll(".slider__acontrol");

    //Primer botón con la clase activa al cargar la página
    if (botonesControl.length > 0) {
        botonesControl[0].classList.add("activa");
    }
    //Solo un boton tiene la clase activa
    botonesControl.forEach(boton => {
        boton.addEventListener("click", function () {

            //quitar la clase activa de todos los botones
            botonesControl.forEach(boton => {
                boton.classList.remove("activa");
            });

            //clase activa en el botón clicado
            this.classList.add("activa");

        });
    });

});
