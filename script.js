
let productos = [];


fetch("productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.getElementById("contenedor-productos");
const nav__links = document.querySelectorAll(".nav__link");
const tituloPrincipal = document.getElementById("titulo-principal");
let productoAgregar = document.querySelectorAll(".producto__agregar");
const numeroCarrito = document.getElementById("numeroCarrito");
let audioAñadir = document.getElementById("añadir");







function cargarProductos(productos){

    contenedorProductos.innerHTML = "";

    productos.forEach((prod) => {

        const div = document.createElement("div");
        div.classList.add("producto__item");
        div.innerHTML= `
                <img class="producto__img" src="${prod.imagen}" alt="${prod.name}">
                <div class="producto__details">
                    <h3 class="producto__details-titulo">${prod.name}</h3>
                    <p class="producto__details-precio">$${prod.precio}</p>
                    <button class="producto__agregar" id = ${prod.id}>Agregar</button>
                </div>
        `;
        contenedorProductos.append(div)
    })

    actulizarProductoBotonAgregar()

}

cargarProductos(productos);




nav__links.forEach((boton) => {

    boton.addEventListener("click", (e) =>{
        // Poner y sacar Active Class 
        nav__links.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");


        if(e.currentTarget.id != "todos"){

            const producto_titulo = productos.find( productos => productos.categoria === e.currentTarget.id);
            // añadiendo titulo principal
            tituloPrincipal.innerText = producto_titulo.titulo;

            // filtrando las categorias
            const productosBoton = productos.filter( productos => productos.categoria === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{

            // Se muestran todos los productos
            cargarProductos(productos)
            tituloPrincipal.innerText = "Todos los Productos"
        }       

    })

})




function actulizarProductoBotonAgregar (){
    productoAgregar = document.querySelectorAll(".producto__agregar")

    productoAgregar.forEach( boton => {
        boton.addEventListener("click" , AgregarAlCarrito);
    })
}

let carritoProductosLS = localStorage.getItem("productoCarrito");
let carritoProductos;

if(carritoProductosLS){

    carritoProductos = JSON.parse(carritoProductosLS);
    ActulizarNumeroCarrito();
}else{
    carritoProductos = [];
}

function AgregarAlCarrito(e){

    Toastify({
        text: "Se agrego al Carrito",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #215BE1, #477DE7)",
          borderRadius: "2rem",
          textTransform: "uppercase",
        },
        onClick: function(){} 
      }).showToast();

      audioAñadir.play();

    const botonId = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === botonId);

    if(carritoProductos.some(producto => producto.id === botonId)){

        const index = carritoProductos.findIndex( producto => producto.id === botonId);
        carritoProductos[index].cantidad ++;

    }else{
        productoAgregado.cantidad = 1
        carritoProductos.push(productoAgregado)
    }

    ActulizarNumeroCarrito();
    localStorage.setItem("productoCarrito",JSON.stringify(carritoProductos));
    
}


function ActulizarNumeroCarrito(){

    let nuevoNumero = carritoProductos.reduce((acc,prod) => acc+prod.cantidad, 0);
    numeroCarrito.innerText = nuevoNumero;

}


// DropDown Menu

let listClick = document.querySelectorAll(".list__button--click");
let listClick2 = document.getElementsByClassName(".list__button--click");


listClick.forEach(ListElement => {
    ListElement.addEventListener("click", () =>{
        ListElement.classList.toggle("arrow");


        let height = 0;
        let menu = ListElement.nextElementSibling; // selecciona el hermano adyacente, el que sigue
        console.log(menu.clientHeight) // te dice el height
        console.log(menu.scrollHeight) // calcular el height para desplegar

        if(menu.clientHeight == "0"){
            height= menu.scrollHeight;
        }
            
        menu.style.height = `${height}px`
    } )
    
});




