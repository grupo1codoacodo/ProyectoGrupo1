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

// Obtenemos los datos del carrito
let checkout = [];

// Validamos que tenemos datos en el carrito en el storage
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}


const articulosCheckout = (articulos) => {
let elementArticulosCheckout= document.getElementById("idcheckout");
// Muestra en la pagina los cards con los articulos destacados 
let total = 0

carrito.forEach  (articulo => {

    total += articulo.precio;
    let checkoutProductos = document.createElement("div");
    checkoutProductos.className = "my-0";

let articuloCheckout= `
        <li class="list-group-item d-flex justify-content-between lh-condensed"> 
        <div>
        <h6 class="my-0"> ${articulo.codigo} </h6> 
        <small class="text-muted">${articulo.precio}</small> 
        </div> 
         <span class="text-muted"> ${articulo.precio * articulo.cantidad} </span>
        </li> 
        `;
    // Escribimos el contenido de la plantilla card en la etiqueta div que creamos (Texto - String)
checkoutProductos.innerHTML = articuloCheckout;
elementArticulosCheckout.appendChild(checkoutProductos);
});

guardarEnStorage ("precioTotal", total);
}

articulosCheckout (carrito);


