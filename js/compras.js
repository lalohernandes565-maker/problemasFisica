const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
const subtotal = precio * cantidad;

    //calculadora descuento
    let descuento;

    if (subtotal < 500) {
        
        descuento = 0;

    } else if (subtotal < 1000) {

        descuento = subtotal * 0.10;

    } else {

        descuento = subtotal * 0.15;
    }

    //Calcular total
    const total = subtotal - descuento;

    //Mostrar resultado
    resultado.innerHTML = 
})