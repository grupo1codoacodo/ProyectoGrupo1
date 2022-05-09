    
// Carga Productos y carrito en Localstorage
function initSite(){
    // if (localStorage.getItem('datos') == null){
        const productosSitio= [];
        const ravioles= new articulo ("Ravioles", "Ravioles Plancha de 450 gramos",550, 450, "images/raviolesdet.webp", 
            true
        );

        productosSitio.push(ravioles);
        
        const pizza= new articulo ("Pizza", "Prepizza elaborada con la mejor harina",380, 380, "images/pizzadet.webp", 
        true
        );
        productosSitio.push (pizza);

        const tallarines= new articulo ("Tallarines", "Tallarines elaborados en el día",430, 430, "images/fideosdet.webp", 
            true
        );

        productosSitio.push(tallarines);

        const tuco= new articulo ("Tuco", "Tuco fileto 400 gramos",250, 250, "images/tucodet.webp", 
            true
        );
        productosSitio.push (tuco);

        const vianda= new articulo ("Vianda", "Vianda Bajas Calorías 280 cal.",650, 650, "images/vianda.webp", 
            false
        );
        productosSitio.push (vianda);
        
        const medialunas= new articulo ("Medialunas", "Docena de Medialunas",480, 480, "images/medialunasdocena.webp", 
           false
        );
        productosSitio.push (medialunas);
    
        

        // Guardo la lista de productos como un string en localstorage
        localStorage.setItem('datos', JSON.stringify(productosSitio));
    // }
      // Inicializa por primera vez el carrito de productos comprados
    if (localStorage.getItem('carrito') == null){
      let vArticulos= [];
      localStorage.setItem('carrito', JSON.stringify(vArticulos));
    }

    // saveCarritoEnStorage(carritost)
}
window.onload= initSite();