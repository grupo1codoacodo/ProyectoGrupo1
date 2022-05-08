/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Clase de un articulo vendible
class articulo {
    constructor (codigo, descripcion, precio, preciosale, imagen, destacado){
        this.codigo= codigo;
        this.descripcion= descripcion;
        this.precio= precio;
        this.preciosale= preciosale;
        this.imagen= imagen;
        this.isDestacado= destacado;
    }
    getPrecio (){
        return precio;
    }
    getImagen (){
        return this.imagen;
    }
    getDescripcion (){
        return this.descripcion;
    }
    isDestacado (){
        return this.isDestacado;
    }
    getCodigo(){
        return this.codigo;
    }       
}

// Articulo agregado al carrito
class articuloCarrito extends articulo {
    constructor (articulo, cantidad) {
        this.codigo= articulo.codigo;
        this.descripcion= articulo.descripcion;
        this.precio= articulo.precio;
        this.preciosale= articulo.preciosale;
        this.imagen= articulo.imagen;
        this.isDestacado= articulo.destacado;
        this.cantidad= cantidad;
    }
    // Establece la cantidad comprada
    getCantidad(){
        return this.cantidad;
    }
    // Obtiene la cantidad comprada
    setCantidad(cantidad){
        this.cantidad= cantidad;
    }
}

// Clase carrito de compra con los articulos comprados
class carrito {
    constructor () {
      this.articulosComprados = [];            
    }
    // Getter
    getArticulos() {
       return this.articulosComprados;
    }
     // Agregar un articulo al carrito y la cantidad comprada
    addArticulo(producto, cantidad){
        let bExiste= false;
        // Buscar en la lista para saber si el articulo ya fue comprado y le suma la nueva
        // Cantidad
        for (i= 0; i < articulosComprados.length ; i++) {
            prod= articulosComprados[i];
            if (prod.getCodigo() == producto.getCodigo){
                prod.SetCantidad (prod.getCantidad() + cantidad); 
                bExiste= true;
                break;
            }            
        };
        // Agrega el producto al array de articulos comprados
        if (bExiste == false){
            const articuloComprado= new articuloCarrito(producto, cantidad)
            this.articulosComprados.push(articuloComprado);
        }
    }
     //  Borra un articulo del carrito
    delArticulo (codProducto){
        let pos= 0;
        for (i= 0; i < articulosComprados.length ;i++){
            prod= articulosComprados[i];
            if (prod.getCodigo() == codProducto){
                this.articulosComprados.splice(pos);
                break;
            }
            pos++;            
        };
    }
    // Obtiene la cantidad de articulos
    getCantArticulosComprados(){
         return this.articulosComprados.length;
    }
     // Obtiene la suma total del importe de los productos comprados en el carrito
    getSumaTotal(){
         let total= 0;
         for (i= 0; i < articulosComprados.length; i++){
             prod= articulosComprados[i];
             total += prod.getPrecio() * prod.cantidad;
         };
         return total;
    }
}


// Obtiene el array de productos del localstorage
function getProductosDelStorage(){
    var guardado = localStorage.getItem('datos');

    return(JSON.parse(guardado));
}

// retorna un array con los productos Destacados
function getProductosDestacados(){
    vDestacados= [];
    const productos= getProductosDelStorage();
    productos.forEach (prod => {
        console.log (prod);
        console.log(prod.codigo + ' ' + prod.isDestacado);
        if (prod.isDestacado == true){
            vDestacados.push (prod);
            console.log (prod);
        }
      });
    return vDestacados;
}
// Emite el alerta al finalizar la compra
function finalizarCompra(){
    alert ("Gracias por su Compra");
    location.href = 'https://tpgrupo1codoacodo.netlify.app/';
}

