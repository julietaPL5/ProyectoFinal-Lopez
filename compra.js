

const contenidoCompra = document.getElementById("contenidoCompra")
const contenidoCarritoCompra = document.getElementById("contenidoCarritoCompra")
const carrito = JSON.parse(localStorage.getItem("carrito"))
const total = JSON.parse(localStorage.getItem("localStorageTotalCompra"))

const tituloCarrito = document.createElement("h2")
tituloCarrito.innerText = "Carrito:"
tituloCarrito.className = "titulo-carrito"
contenidoCarritoCompra.append(tituloCarrito)


carrito.forEach((producto) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "carrito-content"
    carritoContent.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p class="nombre">${producto.nombre}</p>
        <p class="precio">$${producto.precio}</p>
    `;
    contenidoCarritoCompra.append(carritoContent);
})

const totalCompra = document.createElement("div")
totalCompra.className = "contenido-total"
totalCompra.innerHTML = `
    <p>Total a pagar: $${total}</p>
`;
contenidoCarritoCompra.append(totalCompra)

let compraContent = document.createElement("div")
compraContent.className = "compra-content"
compraContent.innerHTML = `
    <h1>Finaliza tu compra</h1>

    <div class="formulario">
        <label for="Nombre">Nombre:</label>
        <input type="text" name="Nombre" id="nombre" placeholder="Nombre">

        <label for="Correo">Correo:</label>
        <input type="email" name="Correo" id="correo" placeholder="Correo">

        <label for="Telefono">Telefono:</label>
        <input type="number" name"Telefono" id="telefono" placeholder="Telefono">


        <h2>Datos de la tarjeta</h2>

        <label for="Numero">Numero de tarjeta:</label>
        <input type="number" name="Numero" id="numeroTarjeta" placeholder="Numero de tarjeta">

        <label for="Nombre">Nombre del titular:</label>
        <input type="text" name="Nombre" id="nombreTarjeta" placeholder="Nombre">

        <label for="Fecha">Vencimiento:</label>
        <input type="text" name="Vencimiento" id="vencimiento" placeholder="00/00">

        <label for="Codigo">Codigo de seguridad:</label>
        <input type="number" name="Codigo" id="codigo" placeholder="000">

        <button>Confirmar compra</button>
    </div>

    <div>

    </div>
`;
contenidoCompra.append(compraContent)


