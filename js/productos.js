// Actualiza con la cantidad de articulos comprados
// actualizarCarrito();

const elementProductos= document.getElementById("idproductos");
// Muestra en la pagina los cards con los articulos destacados 

let htmlProductos= "" ;
// Genera un string con los elementos htmls y estilos a agregar por cada destacado
let vProductos= getProductosDelStorage();
if (vProductos.length > 0){
    vProductos.forEach(producto=>{ 
        console.log(producto);

        htmlProductos += ' ' +

        ' <div class="col-md-4">    ' +
        ' <figure class="card card-product-grid">   ' +
        '    <div class="img-wrap">    ' +
        '       <!--span class="badge badge-danger"> Nuevo </span--> ' +
        '                        <img src="' + producto.imagen + '" class="img-fluid">   ' +
        '        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i>Vista Rápida</a> ' +
        '    </div> <!-- img-wrap.// -->   ' +
        '    <figcaption class="info-wrap"> ' +
        '        <div class="fix-height"> ' +
        '            <a href="#" class="title">' + producto.descripcion + '</a> ' +
        '            <div class="price-wrap mt-2">  ' +
        '                <span class="price">$' + producto.precio + '</span>    ' +
        '                <!--del class="price-old">$550</del--> ' +
        '            </div> <!-- price-wrap.// --> ' +
        '        </div> ' +
        '        <a href="javascript:comprarProducto(\'' + producto.codigo + '\',1)" class="btn btn-block btn-primary">Comprar</a> ' +
        '    </figcaption>  ' +
        ' </figure> ' +
        ' </div> <!-- col.// -->    ' ;
    });
    elementProductos.innerHTML = htmlProductos;
}