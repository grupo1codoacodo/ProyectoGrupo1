// Actualiza con la cantidad de articulos comprados
// actualizarCarrito();

// Actualiza la cantidad de articulos en el carrito 
function actualizarCarrito(){
    // Pone la cantidad de articulos comprados en el icono del cart
    const cart= document.getElementsByClassName ("badge badge-secondary badge-pill")[0];
    cart.innerHTML = carrito.getCantArticulosComprados();
    console.log ("Actualizo cantidad del checkou");

}



actualizarCarrito();
