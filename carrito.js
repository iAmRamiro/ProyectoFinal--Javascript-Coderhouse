
let carritoProductos = localStorage.getItem("productoCarrito");
carritoProductos = JSON.parse(carritoProductos);


const carritoContenedor_productos = document.getElementById("contenedor-carrito");
const carritoVacio = document.getElementById("carrito-vacio");
const carritoAcciones = document.getElementById("carrito-acciones");
let botonesEliminar = document.querySelectorAll(".carrito__producto-eliminar");
const botonTotal = document.getElementById("total");


function cargarProductosCarrito (){
    if(carritoProductos && carritoProductos.length > 0){

        carritoVacio.classList.add("disabled");
        carritoContenedor_productos.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
    
        carritoContenedor_productos.innerHTML = "";
    
        carritoProductos.forEach(producto =>{
    
            const div = document.createElement("div");
            div.classList.add("carrito__producto");
            div.innerHTML = `
            <img class="carrito__producto-img" src="${producto.imagen}" alt="${producto.name}">
            <div class="carrito__producto-nombre">
                <small>Titulo</small>
                <h3>${producto.name}</h3>
            </div>
            <div class="carrito__producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito__producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito__producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
    
            <button class="carrito__producto-eliminar" id="${producto.id}"><i class="fa-solid fa-trash"></i></button>
            `;
    
    
            carritoContenedor_productos.append(div);
        })
    
    }else{
    
        carritoVacio.classList.remove("disabled");
        carritoContenedor_productos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
    }

    actulizarProductoBotonEliminar();
    totalApagar();

}

cargarProductosCarrito();


function totalApagar() {

    let totalNuevo  = carritoProductos.reduce((acc, prod ) => acc + prod.precio, 0);
    botonTotal.innerHTML = totalNuevo

}






function actulizarProductoBotonEliminar (){
    productoBotonEliminar = document.querySelectorAll(".carrito__producto-eliminar")

    productoBotonEliminar.forEach( boton => {
        boton.addEventListener("click" , eliminarDelCarrito);
    })
}



function eliminarDelCarrito(e){

    let idBoton = e.currentTarget.id;
    
    let index = carritoProductos.findIndex( product => product.id === idBoton);

    carritoProductos.splice(index,1);
    cargarProductosCarrito();

    localStorage.setItem("productoCarrito" , JSON.stringify(carritoProductos))

}

