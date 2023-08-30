

const contenidoProductos = document.getElementById("contenidoProductos")
const abrirCarrito = document.getElementById("abrirCarrito")
const contenidoCarrito = document.getElementById("contenidoCarrito")
const contenidoCompra = document.getElementById("contenidoCompra")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []


fetch ("productos.json")
    .then (response => response.json())
    .then (data => {
        const productos = data.productos
        
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
    })


const verCarrito = () => {
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
            <img src="assets/icons/x.svg" alt="x" class="eliminar-productos">
        `;
        contenidoCarrito.append(carritoContent);

        let eliminar = carritoContent.querySelector(".eliminar-productos")
        eliminar.addEventListener("click", () => {
            eliminarDeCarrito(producto.id)
        })
    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0)
    const totalCompra = document.createElement("div")
    totalCompra.className = "contenido-total"
    totalCompra.innerHTML = `
        <p>Total a pagar: $${total}</p>
        <button id="btnPagar"><a href="compra.html">Pagar</a></button>
    `;
    contenidoCarrito.append(totalCompra)
}  

abrirCarrito.addEventListener("click", verCarrito)

const eliminarDeCarrito = (id) => {
    const encontrarID = carrito.find((element) => element.id === id)
    carrito = carrito.filter((carritoID) => {
        return carritoID !== encontrarID;
    });
    guardarLocalStorage()
    verCarrito();
}


const guardarLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


const compra = () => {
    let compraContent = document.createElement("div")
    compraContent.className = "compra-content"
    compraContent.innerHTML = `
        <p>Finaliza tu compra</p>
        
        <label id="labelNombre" for="nombre">Nombre:</label>
        <input type="text" name="Nombre" id="Nombre" placeholder="Nombre">

        <label for="Correo">Correo:</label>
        <input type="email" name="Correo" id="Correo" placeholder="Correo">

    `;
}
contenidoCompra.append(compraContent)
