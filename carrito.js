
let carritoProductos = localStorage.getItem("productoCarrito");
carritoProductos = JSON.parse(carritoProductos);


const carritoContenedor_productos = document.getElementById("contenedor-carrito");
const carritoVacio = document.getElementById("carrito-vacio");
const carritoAcciones = document.getElementById("carrito-acciones");
let botonesEliminar = document.querySelectorAll(".carrito__producto-eliminar");
const botonTotal = document.getElementById("total");
const botonVaciarCarrito = document.querySelector(".carrio__acciones-vaciar");
const botonComprar = document.querySelector(".carrito__acciones-comprar");
let audioEliminar = document.getElementById("eliminar");
let audioVaciar = document.getElementById("vaciar");
let audioCheck = document.getElementById("check");



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
    botonTotal.innerHTML = `$${totalNuevo}`;
}



function actulizarProductoBotonEliminar (){
    productoBotonEliminar = document.querySelectorAll(".carrito__producto-eliminar")

    productoBotonEliminar.forEach( boton => {
        boton.addEventListener("click" , eliminarDelCarrito);
    })
}



function eliminarDelCarrito(e){

    audioEliminar.play();

    Toastify({
        text: "Producto Eliminado",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #E80C0C, #ED7B7B)", 
          borderRadius: "2rem",
          textTransform: "uppercase",
        },
        onClick: function(){} 
      }).showToast();

  

    let idBoton = e.currentTarget.id;
    
    let index = carritoProductos.findIndex( product => product.id === idBoton);

    carritoProductos.splice(index,1);
    cargarProductosCarrito();

    localStorage.setItem("productoCarrito" , JSON.stringify(carritoProductos))

}


botonVaciarCarrito.addEventListener("click",vaciarCarrito);

function vaciarCarrito (){

    Swal.fire({

        title: '¿Estas seguro?',
        text: "No podras revertir los cambios!",
        icon: 'warning',
        customClass: "fontsize",
        showCancelButton: "true",
        cancelButtonText: "Cancelar",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Vaciar'

      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            customClass: "fontsize",
            icon: "success",
            text: "Carrito Vacio"
          }
          )
          audioVaciar.play();
          carritoProductos.length = 0;
          localStorage.setItem("productoCarrito", JSON.stringify(carritoProductos));
          cargarProductosCarrito()
        }
      })

}


botonComprar.addEventListener("click", comprarCarrito);

async function comprarCarrito(){

    const { value: email } = await Swal.fire({
        title: 'Ingresa un Correo',
        input: 'email',
        inputLabel: 'Te contactaremos para realizar el pago',
        inputPlaceholder: 'Email',
        customClass: "fontsize",
        confirmButtonText: 'Enviar'

      })
      
      if (email) {
        Swal.fire({
           icon: "success",
           title: "Pronto te contactamos!",
           customClass: "fontsize"
        })
        audioCheck.play();
        carritoProductos.length = 0;
        localStorage.setItem("productoCarrito", JSON.stringify(carritoProductos));
        carritoVacio.classList.remove("disabled");
        carritoContenedor_productos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");   
      
    }
    
}

