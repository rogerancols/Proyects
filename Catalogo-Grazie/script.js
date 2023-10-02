const productos = [
    //bota corta
    {
        id: "bota-01",
        titulo: "Bota 01",
        imagen: "./images/catalogo/image4.jpeg",
        descripcion: "Bota corta con accesorio tipo bolso",
        categoria: {
            nombre:"Botas cortas",
            id: "corta"
        },
        precio: 1500000
    },
    {
        id: "bota-02",
        titulo: "Bota 02",
        imagen: "./images/catalogo/image4.jpeg",
        categoria: {
            nombre:"Botas cortas",
            id: "corta"
        },
        precio: 150000
    },
    {
        id: "bota-03",
        titulo: "Bota 03",
        imagen: "./images/catalogo/image4.jpeg",
        categoria: {
            nombre:"Botas cortas",
            id: "corta"
        },
        precio: 150000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image4.jpeg",
        categoria: {
            nombre:"Botas cortas",
            id: "corta"
        },
        precio: 150000
    },
    {
        id: "bota-05",
        titulo: "Bota 05",
        imagen: "./images/catalogo/image4.jpeg",
        categoria: {
            nombre:"Botas cortas",
            id: "corta"
        },
        precio: 150000
    },
    {
        id: "bota-06",
        titulo: "Bota 06",
        imagen: "./images/catalogo/image6.jpeg",
        categoria: {
            nombre:"Botas altas",
            id: "alta"
        },
        precio: 175000
        
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image7.jpeg",
        categoria: {
            nombre:"Botas altas",
            id: "alta"
        },
        precio: 175000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image8.jpeg",
        categoria: {
            nombre:"Botas altas",
            id: "alta"
        },
        precio: 175000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image9.jpeg",
        categoria: {
            nombre:"Botas altas",
            id: "alta"
        },
        precio: 175000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image10.jpeg",
        categoria: {
            nombre:"Botas caña media",
            id: "media"
        },
        precio: 150000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image11.jpeg",
        categoria: {
            nombre:"Botas caña media",
            id: "media"
        },
        precio: 150000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image12.jpeg",
        categoria: {
            nombre:"Botas caña media",
            id: "media"
        },
        precio: 150000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image13.jpeg",
        categoria: {
            nombre:"Botas caña media",
            id: "media"
        },
        precio: 150000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image14.jpeg",
        categoria: {
            nombre:"Botas caña media",
            id: "media"
        },
        precio: 150000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image17.jpeg",
        categoria: {
            nombre:"Botas caña media",
            id: "media"
        },
        precio: 150000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image17.jpeg",
        categoria: {
            nombre:"Botas caña media",
            id: "media"
        },
        precio: 150000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image17.jpeg",
        categoria: {
            nombre:"Botas caña media",
            id: "media"
        },
        precio: 150000
    },
    {
        id: "bota-04",
        titulo: "Bota 04",
        imagen: "./images/catalogo/image17.jpeg",
        categoria: {
            nombre:"Botas caña media",
            id: "media"
        },
        precio: 150000
    },
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
let numerito = document.querySelector("#numerito");




function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.imagen}" />
        <div class="producto-detalles">
          <h3 class="producto-titulo">${producto.titulo}</h3>
          <p class="producto-precio">$${producto.precio}</p>
          <p id="descripcion">${producto.descripcion}</p>
          
        </div>
        `;
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            
            
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
        

    })


})



function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
 


if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();

}else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto=> producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito(); 
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}


