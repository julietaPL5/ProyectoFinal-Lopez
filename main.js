

const contenidoProductos = document.getElementById("contenidoProductos")
const abrirCarrito = document.getElementById("abrirCarrito")
const contenidoCarrito = document.getElementById("contenidoCarrito")


const productos = [
    {
        id: 1,
        nombre: "CD Fearless (Taylor's Version)",
        precio: 6000,
        imagen: "assets/images/fearless/cd.webp"
    },
    {
        id: 2,
        nombre: "Vinilo Fearless (Taylor's Version)",
        precio: 13000,
        imagen: "assets/images/fearless/vinilo.webp"
    },
    {
        id: 3,
        nombre: "Cassette Fearless (Taylor's Version)",
        precio: 11000,
        imagen: "assets/images/fearless/cassette.webp"
    },
    {
        id: 4,
        nombre: "CD Speak Now (Taylor's Version)",
        precio: 7000,
        imagen: "assets/images/speak-now/cd.webp"
    },
    {
        id: 5,
        nombre: "Vinilo Speak Now (Taylor's Version)",
        precio: 14000,
        imagen: "assets/images/speak-now/vinilo.webp"
    },
    {
        id: 6,
        nombre: "Cassette Speak Now (Taylor's Version)",
        precio: 11500,
        imagen: "assets/images/speak-now/cassette.webp"
    },
    {
        id: 7,
        nombre: "CD Red (Taylor's Version)",
        precio: 5000,
        imagen: "assets/images/red/cd.webp"
    },
    {
        id: 8,
        nombre: "Vinilo Red (Taylor's Version)",
        precio: 13000,
        imagen: "assets/images/red/vinilo.webp"
    },
    {
        id: 9,
        nombre: "CD 1989 (Taylor's Version)",
        precio: 7000,
        imagen: "assets/images/1989/cd.webp"
    },
    {
        id: 10,
        nombre: "Vinilo 1989 (Taylor's Version)",
        precio: 13000,
        imagen: "assets/images/1989/vinilo.webp"
    },
    {
        id: 11,
        nombre: "Cassette 1989 (Taylor's Version)",
        precio: 11000,
        imagen: "assets/images/1989/cassette.webp"
    },
    {
        id: 12,
        nombre: "CD Midnights",
        precio: 5000,
        imagen: "assets/images/midnights/cd-moonstone_blue2.webp"
    },
    {
        id: 13,
        nombre: "Vinilo Midnights",
        precio: 12000,
        imagen: "assets/images/midnights/vinilo-moonstone_blue.webp"
    }
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

productos.forEach((producto) => {
    let contenido = document.createElement("div")
    contenido.className = "card"
    contenido.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p class="nombre">${producto.nombre}</p>
        <p class="precio">Precio: $${producto.precio}</p>
    `;
    contenidoProductos.append(contenido)

    let agregarAlCarrito = document.createElement("button")
    agregarAlCarrito.innerText = "Agregar al carrito"
    agregarAlCarrito.className = "agregar-carrito"

    contenido.append(agregarAlCarrito)

    agregarAlCarrito.addEventListener("click", () => {
        carrito.push({
            id: producto.id,
            imagen: producto.imagen,
            nombre: producto.nombre,
            precio: producto.precio
        })
        guardarLocalStorage()
    })
});


abrirCarrito.addEventListener("click", () => {
    contenidoCarrito.innerHTML = ""
    contenidoCarrito.style.display = "block"
    const carritoHeader = document.createElement("div")
    carritoHeader.className = "carrito-header"
    carritoHeader.innerHTML = `
        <h1 class="carrito-header-titulo">Carrito</h1>
    `;
    contenidoCarrito.append(carritoHeader)

    const modalButton = document.createElement("div")
    modalButton.className = "carrito-header-button"
    modalButton.innerHTML = `
        <img src="assets/icons/x.svg" alt="x">
    `;

    modalButton.addEventListener("click", () => {
        contenidoCarrito.style.display = "none"
    })

    carritoHeader.append(modalButton);

    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "carrito-content"
        carritoContent.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p class="nombre">${producto.nombre}</p>
            <p class="precio">$${producto.precio}</p>
        `;
        contenidoCarrito.append(carritoContent);
    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0)
    const totalCompra = document.createElement("div")
    totalCompra.className = "contenido-total"
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    contenidoCarrito.append(totalCompra)
})

const guardarLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

