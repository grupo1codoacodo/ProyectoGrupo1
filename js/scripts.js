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
        super (articulo.codigo, articulo.descripcion, articulo.precio, articulo.preciosale,
            articulo.imagen, articulo.destacado);
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
    constructor (vArticulosComprados) {
      this.articulosComprados = vArticulosComprados; 
      localStorage.setItem('carrito', JSON.stringify(this.articulosComprados));          
    }
    // Getter
    getArticulos() {
       this.articulosComprados= getArticulosCompradosDelStorage();
       return this.articulosComprados;
    }
     // Agregar un articulo al carrito y la cantidad comprada
    addArticulo(artCarrito){
        this.articulosComprados= getArticulosCompradosDelStorage();
        let bExiste= false;
        // Buscar en la lista para saber si el articulo ya fue comprado y le suma la nueva
        // Cantidad
        for (i= 0; i < this.articulosComprados.length ; i++) {
            prod= this.articulosComprados[i];
            if (prod.codigo == artCarrito.getCodigo){
                prod.cantidad= prod.cantidad + artCarrito.cantidad; 
                bExiste= true;
                break;
            }            
        };
        // Agrega el producto al array de articulos comprados
        if (bExiste == false){
            this.articulosComprados.push(artCarrito);
            // Guardo la lista de productos como un string en localstorage
            localStorage.setItem('carrito', JSON.stringify(this.articulosComprados));
        }
    }
     //  Borra un articulo del carrito
    delArticulo (codProducto){
        this.articulosComprados= getArticulosCompradosDelStorage();
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
        this.articulosComprados= getArticulosCompradosDelStorage();
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
        console.log(prod.codigo + ' ' + prod.isDestacado);
        if (prod.isDestacado == true){
            vDestacados.push (prod);
        }
      });
    return vDestacados;
}

// obtiene un producto dado un codigo
function getProductoByCodigo(codProducto){
    let productoBuscado;
    const productos= getProductosDelStorage();
    for (i= 0; i < productos.length ; i++) {
        prod= productos[i];
        if (prod.codigo == codProducto){
                productoBuscado= prod;
                break;
        }            
    }
    return productoBuscado;
}

// Actualiza la cantidad de articulos en el carrito 
function actualizarCarrito(){
    // Pone la cantidad de articulos comprados en el icono del cart
    const cart= document.getElementById ("cantCarrito");
    cart.innerHTML = carritost.getCantArticulosComprados();
}
// Emite el alerta al finalizar la compra
function finalizarCompra(){
    alert ("Gracias por su Compra");
    location.href = 'https://tpgrupo1codoacodo.netlify.app/';
}

// Agrega un producto al carrito y lo redirecciona a la pagina
function comprarProducto(codProducto, cantidad){
    prodComprado= getProductoByCodigo(codProducto);
    let artCarrito= new articuloCarrito(prodComprado,1);
    carritost.addArticulo (artCarrito);
    console.log ("derivo");
    location.href= "./carrito.html";
}

// Obtiene el array de articuloscomprados
function getArticulosCompradosDelStorage(){
    var guardado = localStorage.getItem('carrito');

    return(JSON.parse(guardado));
}

let vArtComprados= []
// Define el carrito del sitio
var carritost= new carrito(vArtComprados);