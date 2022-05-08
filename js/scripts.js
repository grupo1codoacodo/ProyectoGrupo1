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
        for (prod in articulosComprados){
            if (prod.getCodigo() == producto.getCodigo){
                prod.SetCantidad (prod.getCantidad() + cantidad); 
                bExiste= true;
                break;
            }
            
        }
        // Agrega el producto al array de articulos comprados
        if (bExiste == false){
            const articuloComprado= new articuloCarrito(producto, cantidad)
            this.articulosComprados.push(articuloComprado);
        }
    }
     //  Borra un articulo del carrito
    delArticulo (codProducto){
        let pos= 0;
        for (prod in articulosComprados){
            if (prod.getCodigo() == codProducto){
                this.articulosComprados.splice(pos);
                break;
            }
            pos++;            
        }
    }
    // Obtiene la cantidad de articulos
    getCantArticulos(){
         return this.articulosComprados.length();
    }
     // Obtiene la suma total del importe de los productos comprados en el carrito
    getSumaTotal(){
         let total= 0;
         for (prod in articulosComprados){
             total += prod.getPrecio() * prod.cantidad;
         }
         return total;
    }
}


// Carga Los productos del sitio en el localstorage
function cargarProductosEnStorage (){
    const productosSitio= [];
    const ravioles= new articulo ("ravioles", "Ravioles Plancha de 450 gramos",550, 450, "images/raviolesdet.webp", 
        true
    );

    productosSitio.push(pizza);

    const tallarines= new articulo ("tallarines", "Tallarines elaborados en el día",430, 430, "images/fideoset.webp", 
        true
    );

    productosSitio.push(tallarines);

    const tuco= new articulo ("tuco", "Tuco fileto 400 gramos",250, 250, "images/tucodet.webp", 
        true
    );
    productosSitio.push (tuco);

    const pizza= new articulo ("pizza", "Prepizza elaborada con la mejor harina",380, 380, "images/pizzadet.webp", 
        true
    );
    productosSitio.push (tuco);

    // Guardo la lista de productos como un string en localstorage
    localStorage.setItem('datos', JSON.stringify(productosSitio));
}

// Obtiene el array de productos del localstorage
function getProductosDelStorage(){
    var guardado = localStorage.getItem('datos');

    return(JSON.parse(guardado));
}

// Emite el alerta al finalizar la compra
function finalizarCompra(){
    alert ("Gracias por su Compra");
    location.href = 'https://tpgrupo1codoacodo.netlify.app/';
}
