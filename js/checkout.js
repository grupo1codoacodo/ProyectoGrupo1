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

guardarEnStorage("precioTotal", total);
}

articulosCheckout (carrito);


/*' <ul class="list-group mb-3"> ' +
' <li> ' +
 '  <div>  ' +
 '   <h6> </h6> ' +
 '   <small> </small> ' +
 '  </div> ' +
 '  <span> </span> ' +
 '</li> ' +
 '<li> ' +
 '  <div> ' +
 '    <h6> </h6> ' +
 '    <small> </small> ' +
 '  </div> ' +
 '  <span> </span> ' +
 ' </li> ' +
 '<li> ' +
 '  <div> ' +
 '    <h6> </h6> ' +
 '    <small> </small> ' +
 '  </div> ' +
 '  <span> </span> ' +
 ' </li> ' +
 '<li class="list-group-item d-flex justify-content-between lh-condensed"> ' +
 '    <div> ' +
 '      <h6 class="my-0">Envío</h6> ' + 
 '      <small class="text-muted">Envío por correo argentino</small> ' +
 '    </div> ' +
 '    <span class="text-muted">$500</span> ' +
 '  </li> ' +  
 '<li class="list-group-item d-flex justify-content-between bg-light">' +
 '  <div class="text-success">' +
 '    <h6 class="my-0">Código de Promoción</h6>' +
 '    <small>CODIGOPROMO</small>'
 '  </div>' +
 '  <span class="text-success">-$5</span>' +
 '</li>' +
 '<li class="list-group-item d-flex justify-content-between">' +
 '<span>Total</span>' +
 '<strong>'+ carrito.getSumaTotal()+'</strong>';
if (carrito.getSumaTotal() > 0){
    htmlArticulosCheckout +=
    ' <form action="./index.html">  ' +
    ' <button type="submit" class="btn btn-success"> ' +
'     Comprar<span class="glyphicon glyphicon-play"></span> ' +
' </button> ' +
' </form>   ' ;
}
htmlArticulosCheckout +=
'</li>' +
'</ul>';
elementArticulosCheckout.innerHTML =htmlArticulosCheckout;
}
*/

