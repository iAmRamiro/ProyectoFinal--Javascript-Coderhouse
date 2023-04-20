// PRODUCTOS 

const productos = [

    // PROCESADORES

    {
        id: "procesador-01",
        titulo: "Procesador AMD", 
        categoria: "procesador-amd",
        marca: "AMD",
        name: "RYZEN 3 3200G",
        imagen: "img/procesadores/amd/ID-1.jpg",
        precio: 53150,
        caracteristicas: {
            socket: "AM4 APU 2th Gen",
            nucleos: 4,
            frecuencia: "3600.00 mhz",
            hilos: 4,
            procesoDeFabricacion: "12nm",
            frecuenciaTurbo: "400mhz"
        },
    },
    {
        id: "procesador-02",
        titulo: "Procesador AMD", 
        categoria: "procesador-amd",
        marca: "AMD",
        name: "RYZEN 5 3600",
        imagen: "img/procesadores/amd/ID-2.jpg",
        precio: 54990,
        caracteristicas: {
            socket: "AM4 Ryzen 3th Gen",
            nucleos: 6,
            frecuencia: "3600.00 mhz",
            hilos: 12,
            procesoDeFabricacion: "7nm",
            frecuenciaTurbo: "4200mhz"
        },
    },
    {
        id: "procesador-03",
        titulo: "Procesador AMD", 
        categoria: "procesador-amd",
        marca: "AMD",
        name: "RYZEN 5 7600",
        imagen: "img/procesadores/amd/ID-3.jpg",
        precio: 110600,
        caracteristicas: {
            socket: "AM5 Ryzen 7000",
            nucleos: 6,
            frecuencia: "3800.00 mhz",
            hilos: 12,
            procesoDeFabricacion: "5nm",
            frecuenciaTurbo: "4200mhz"
        },
    },
    {
        id: "procesador-04",
        titulo: "Procesador AMD", 
        categoria: "procesador-amd",
        marca: "AMD",
        name: "RYZEN 7 7700",
        imagen: "img/procesadores/amd/ID-4.jpg",
        precio: 176500,
        caracteristicas: {
            socket: "AM5 Ryzen 7000",
            nucleos: 6,
            frecuencia: "3800.00 mhz",
            hilos: 12,
            procesoDeFabricacion: "5nm",
            frecuenciaTurbo: "4200mhz"
        },
    },
    {
        id: "procesador-05",
        titulo: "Procesador INTEL", 
        categoria: "procesador-intel",
        marca: "INTEL",
        name: "Intel Core i5 11400F",
        imagen: "img/procesadores/intel/ID-1.jpg",
        precio: 57350,
        caracteristicas: {
            socket: "1200 Comet Lake",
            nucleos: 6,
            frecuencia: "2900.00 mhz",
            hilos: 12,
            procesoDeFabricacion: "14nm",
            frecuenciaTurbo: "4300mhz"
        },
    },
    {
        id: "procesador-06",
        titulo: "Procesador INTEL", 
        categoria: "procesador-intel",
        marca: "INTEL",
        name: "Intel Core i7 10700F",
        imagen: "img/procesadores/intel/ID-2.jpg",
        precio: 107700,
        caracteristicas: {
            socket: "1200 Comet Lake",
            nucleos: 8,
            frecuencia: "2900.00 mhz",
            hilos: 16,
            procesoDeFabricacion: "14nm",
            frecuenciaTurbo: "4800mhz"
        },
    },
    {
        id: "procesador-07",
        titulo: "Procesador INTEL", 
        categoria: "procesador-intel",
        marca: "INTEL",
        name: "Intel Core i3 10105F",
        imagen: "img/procesadores/intel/ID-3.jpg",
        precio: 31700,
        caracteristicas: {
            socket: "1200 Comet Lake",
            nucleos: 4,
            frecuencia: "3700.00 mhz",
            hilos: 8,
            procesoDeFabricacion: "14nm",
            frecuenciaTurbo: "4400mhz"
        },
    },
    {
        id: "procesador-08",
        titulo: "Procesador INTEL", 
        categoria: "procesador-intel",
        marca: "INTEL",
        name: "Intel Core i5 11600k",
        imagen: "img/procesadores/intel/ID-4.jpg",
        precio: 98700,
        caracteristicas: {
            socket: "1200 Rocket Lake-S",
            nucleos: 6,
            frecuencia: "3900.00 mhz",
            hilos: 12,
            procesoDeFabricacion: "14nm",
            frecuenciaTurbo: "4400mhz"
        },
    },

    // PLACA DE VIDEO

    {
        id: "video-01",
        titulo: "Placa de Video GTX", 
        categoria:"Placa_de_Video-gtx",
        marca: "GeForce" ,
        name: "RTX 3070 Ti 8GB" ,
        imagen: "img/placas de video/Geforce gtx/ID-1.jpg",
        precio: 258250,
        caracteristicas:{
            tipo: "pcie",
            chipsetGPU: "RTX 3070 Ti",
            backplate: true,
            coolersFan: 3,

        },

    },

    {
        id: "video-02",
        titulo: "Placa de Video GTX", 
        categoria:"Placa_de_Video-gtx",
        marca: "GeForce" ,
        name: " RTX 3090 24GB" ,
        imagen: "img/placas de video/Geforce gtx/ID-2.jpg",
        precio: 403250,
        caracteristicas:{
            tipo: "pcie",
            chipsetGPU: "RTX 3090",
            backplate: true,
            coolersFan: 3,

        },

    },

    {
        id: "video-03",
        titulo: "Placa de Video GTX", 
        categoria:"Placa_de_Video-gtx",
        marca: "GeForce" ,
        name: "RTX 3080 10GB" ,
        imagen: "img/placas de video/Geforce gtx/ID-3.jpg",
        precio:  284900,
        caracteristicas:{
            tipo: "pcie",
            chipsetGPU: "RTX 3090",
            backplate: true,
            coolersFan: 3,

        },

    },

    
    {
        id: "video-04",
        titulo: "Placa de Video AMD", 
        categoria:"Placa_de_Video-amd",
        marca: "AMD" ,
        name: "Radeon RX 6500 XT" ,
        imagen: "img/placas de video/Radeon Amd/ID-1.jpg",
        precio: 90650,
        caracteristicas:{
            tipo: "pcie",
            chipsetGPU: "RX 6500 XT",
            backplate: true,
            coolersFan: 2,

        },

    },

    {
        id: "video-05",
        titulo: "Placa de Video AMD", 
        categoria:"Placa_de_Video-amd",
        marca: "AMD" ,
        name: "Radeon RX 6800 XT 16GB" ,
        imagen: "img/placas de video/Radeon Amd/ID-2.jpg",
        precio: 249900,
        caracteristicas:{
            tipo: "pcie",
            chipsetGPU: "RX 6800 XT",
            backplate: true,
            coolersFan: 2,

        },

    },

    {
        id: "video-06",
        titulo: "Placa de Video AMD", 
        categoria:"Placa_de_Video-amd",
        marca: "AMD" ,
        name: "Radeon RX 6600 XT 8GB" ,
        imagen: "img/placas de video/Radeon Amd/ID-3.jpg",
        precio: 170850,
        caracteristicas:{
            tipo: "pcie",
            chipsetGPU: "RX 6600 XT",
            backplate: true,
            coolersFan: 2,

        },

    },

    {
        id: "video-07",
        titulo: "Placa de Video AMD", 
        categoria:"Placa_de_Video-amd",
        marca: "AMD" ,
        name: "Radeon RX 6700 XT 12GB" ,
        imagen: "img/placas de video/Radeon Amd/ID-4.jpg",
        precio: 186000,
        caracteristicas:{
            tipo: "pcie",
            chipsetGPU: "RX 6700 XT",
            backplate: true,
            coolersFan: 2,

        },

    },

    // MOTHERBOARD

    {
        id: "motherboard-01",
        titulo: "MotherBoard AMD", 
        categoria: "motherboard-amd",
        marca: "AMD",
        name: "Mother Asrock B450 Steel Legend",
        imagen: "img/mothers/amd/ID-1.jpg",
        precio: 55450 ,
    },
    
    {
        id: "motherboard-02",
        titulo: "MotherBoard AMD", 
        categoria: "motherboard-amd",
        marca: "AMD",
        name: "Mother Asrock B450M Pro4-F AM4 R2.0",
        imagen: "img/mothers/amd/ID-2.jpg",
        precio: 40450 ,
    },

    {
        id: "motherboard-03",
        titulo: "MotherBoard AMD", 
        categoria: "motherboard-amd",
        marca: "AMD",
        name: "Mother Asrock B550 Phantom Gaming ITX/AX",
        imagen: "img/mothers/amd/ID-3.jpg",
        precio: 92850 ,
    },

    {
        id: "motherboard-04",
        titulo: "MotherBoard INTEL", 
        categoria: "motherboard-intel",
        marca: "AMD",
        name: "Mother Asrock B550M-HDV",
        imagen: "img/mothers/amd/ID-4.jpg",
        precio: 41650 ,
    },

    {
        id: "motherboard-05",
        titulo: "MotherBoard INTEL", 
        categoria: "motherboard-intel",
        marca: "INTEL",
        name: "Mother Asrock H610M-HVS LGA 1700",
        imagen: "img/mothers/intel/ID-1.jpg",
        precio: 26250 ,
    },

    
    {
        id: "motherboard-06",
        titulo: "MotherBoard INTEL", 
        categoria: "motherboard-intel",
        marca: "INTEL",
        name: "Mother ASUS PRIME H510M-E Socket 1200",
        imagen: "img/mothers/intel/ID-2.jpg",
        precio: 29400 ,
    },
    
    {
        id: "motherboard-07",
        titulo: "MotherBoard INTEL", 
        categoria: "motherboard-intel",
        marca: "INTEL",
        name: "Mother ASUS PRIME H610M-E D4 S1700",
        imagen: "img/mothers/intel/ID-3.jpg",
        precio: 34650 ,
    },

    // GABINETES

    {
        id: "gabinetes-01",
        titulo: "Gabinetes", 
        categoria: "gabinetes",
        marca: "CORSAIR",
        name: "Corsair Crystal 465X Mid Tower",
        imagen: "img/gabinetes/ID-1.jpg",
        precio: 70350 ,
    },

    {
        id: "gabinetes-02",
        titulo: "Gabinetes", 
        categoria: "gabinetes",
        marca: "Thermaltake",
        name: "Thermaltake V200 Mid Tower ATX",
        imagen: "img/gabinetes/ID-2.jpg",
        precio: 70350 ,
    },

    {
        id: "gabinetes-03",
        titulo: "Gabinetes", 
        categoria: "gabinetes",
        marca: "Cougar",
        name: "Cougar Panzer EVO ",
        imagen: "img/gabinetes/ID-3.jpg",
        precio: 101350 ,
    },

    // Fuentes

    {
        id: "fuentes-01",
        titulo: "Fuentes", 
        categoria: "fuentes",
        marca: "Aerocool",
        name: "Aerocool Cylon 500W  80 Plus Bronze",
        imagen: "img/fuentes/ID-1.jpg",
        precio: 23350 ,
    },

    {
        id: "fuentes-02",
        titulo: "Fuentes",
        categoria: "fuentes",
        marca: "Aerocool",
        name: "Aerocool Cylon 500W  80 Plus Bronze",
        imagen: "img/fuentes/ID-1.jpg",
        precio: 23350 ,
    },
];




// DOM
const contenedorProductos = document.getElementById("contenedor-productos");
const nav__links = document.querySelectorAll(".nav__link");
const tituloPrincipal = document.getElementById("titulo-principal");
let productoAgregar = document.querySelectorAll(".producto__agregar");
const numeroCarrito = document.getElementById("numeroCarrito");





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




