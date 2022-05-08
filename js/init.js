    
// Carga Productos y carrito en Localstorage
function initSite(){
    const productosSitio= [];
    const ravioles= new articulo ("Ravioles", "Ravioles Plancha de 450 gramos",550, 450, "images/raviolesdet.webp", 
        true
    );

    productosSitio.push(ravioles);

    const tallarines= new articulo ("Tallarines", "Tallarines elaborados en el día",430, 430, "images/fideosdet.webp", 
        true
    );

    productosSitio.push(tallarines);

    const tuco= new articulo ("Tuco", "Tuco fileto 400 gramos",250, 250, "images/tucodet.webp", 
        true
    );
    productosSitio.push (tuco);

    const pizza= new articulo ("Pizza", "Prepizza elaborada con la mejor harina",380, 380, "images/pizzadet.webp", 
        true
    );
    productosSitio.push (pizza);

    // Guardo la lista de productos como un string en localstorage
    localStorage.setItem('datos', JSON.stringify(productosSitio));


    // saveCarritoEnStorage(carritost)
}
window.onload= initSite();