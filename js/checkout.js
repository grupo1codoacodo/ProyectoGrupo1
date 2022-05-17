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

const elementArticulosCheckout= document.getElementById("idcheckout");
// Muestra en la pagina los cards con los articulos destacados 

var htmlArticulosCheckout= "" ;
// Genera un string con los elementos htmls y estilos a agregar por cada destacado
let vArticulosCarrito= carrito.getArticulos();
if (vArticulosCarrito.length > 0){
    vArticulosCarrito.forEach(articulo =>{ 
        console.log(articulo);

        htmlArticulosCheckout += ' ' +
       ' <ul class="list-group mb-3"> ' +
       ' <li class="list-group-item d-flex justify-content-between lh-condensed"> ' +
        '  <div>  ' +
        '   <h6 class="my-0">'+ articulo.codigo+ '</h6> ' +
        '   <small class="text-muted">'+ articulo.precio+'</small> ' +
        '  </div> ' +
        '  <span class="text-muted">'+ articulo.precio * articulo.cantidad +'</span> ' +
        '</li> ' 
    });
htmlArticulosCheckout +=' ' +
' <ul class="list-group mb-3"> ' +
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


