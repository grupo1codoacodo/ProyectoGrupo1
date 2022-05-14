// Actualiza con la cantidad de articulos comprados
// actualizarCarrito();

const elementArticulosCarrito= document.getElementById("idcarrito");
// Muestra en la pagina los cards con los articulos destacados 

let htmlArticulosCarrito= "" ;
// Genera un string con los elementos htmls y estilos a agregar por cada destacado
let vArticulosCarrito= carrito.getArticulos();
if (vArticulosCarrito.length > 0){
    vArticulosCarrito.forEach(articulo =>{ 
        console.log(articulo);

        htmlArticulosCarrito += ' ' +
    '    <tr>   ' +
    '    <td class="col-sm-8 col-md-6"> ' +
    '    <div class="media">    ' +
    '        <a class="thumbnail pull-left" href="#"> <img class="media-object mx-4" src="' + articulo.imagen + '" style="width: 72px; height: 72px;"> </a> ' +
    '        <div class="media-body">   ' +
    '            <h5 class="media-heading"><a href="#">' + articulo.codigo + ' </a></h5> '  +
    '            <h6 class="media-heading">Elaborado por <a href="#">San Tallarín</a></h6>  ' +
    '            <span>Variedad: </span><span class="text-success"><strong>Sin restriccion</strong></span> ' +
    '        </div> ' +
    '    </div></td>    ' +
    '    <td class="col-sm-1 col-md-1" style="text-align: center">  ' +
    '    <input type="email" class="form-control" onchange="{ carrito.updArticulo(\'' + articulo.codigo + '\',' + 'this.value); location.reload(); }" id="exampleInputEmail1" value="' +  articulo.cantidad + '"> ' +
    '    </td> ' +
    '    <td class="col-sm-1 col-md-1 text-center"><strong>$' + articulo.precio + '</strong></td>   ' +
    '    <td class="col-sm-1 col-md-1 text-center"><strong>$' + articulo.precio * articulo.cantidad + '</strong></td> ' +
    '    <td class="col-sm-1 col-md-1">     ' +
    '    <button type="button" class="btn btn-danger" onclick="carrito.delArticulo(\'' + articulo.codigo + '\')">  ' +
    '        <span class="glyphicon glyphicon-remove"></span> Eliminar ' +
    '    </button></td> '   +
    '</tr>  ' 
    });
    htmlArticulosCarrito += ' ' +
    ' <tr>  ' +
    ' <td>   </td>  ' +
    ' <td>   </td>  ' +
    ' <td>   </td>  ' +
    ' <td><h6>Envío Estimado</h6></td>  ' +
    ' <td class="text-right"><h5><strong>$0</strong></h5></td> ' +
    '</tr>  ' +
    '<tr>   ' +
    ' <td>   </td>  ' +
    ' <td>   </td>  ' +
    ' <td>   </td>  ' +
    ' <td><h6>Total</h6></td>   ' +
    ' <td class="text-right"><h3><strong>$' + carrito.getSumaTotal() + '</strong></h3></td> ' +
    '</tr> ' +
    '<tr>   ' +
    ' <td>   </td>  ' +
    ' <td>   </td>  ' +
    ' <td>   </td>  ' +
    ' <td>  ' +
    ' <button type="button" class="btn btn-default"> ' +
    '     <span class="glyphicon glyphicon-shopping-cart"></span> Continuar comprando ' +
    ' </button></td>    ' +
    ' <td>          ' ;
        if (carrito.getSumaTotal() > 0){
            htmlArticulosCarrito +=
            ' <form action="./checkout.html">  ' +
            ' <button type="submit" class="btn btn-success"> ' +
        '     Ir al Pago<span class="glyphicon glyphicon-play"></span> ' +
        ' </button> ' +
        ' </form>   ' ;
        }
    htmlArticulosCarrito += 
    ' </td>      ' +                          
    '</tr>      ' ;
    elementArticulosCarrito.innerHTML = htmlArticulosCarrito;

}

