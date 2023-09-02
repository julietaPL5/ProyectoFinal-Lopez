

const contenidoCompra = document.getElementById("contenidoCompra");
const contenidoCarritoCompra = document.getElementById("contenidoCarritoCompra");
const compraFinalizada = document.getElementById("compraFinalizada");
const seguirComprando = document.getElementById("seguirComprando");
const carrito = JSON.parse(localStorage.getItem("carrito"));
const total = JSON.parse(localStorage.getItem("localStorageTotalCompra"));

const tituloCarrito = document.createElement("h2");
tituloCarrito.innerText = "Carrito:";
tituloCarrito.className = "titulo-carrito";
contenidoCarritoCompra.append(tituloCarrito);


carrito.forEach((producto) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "carrito-content";
    carritoContent.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p class="nombre">${producto.nombre}</p>
        <p class="precio">$${producto.precio}</p>
    `;
    contenidoCarritoCompra.append(carritoContent);
})

const totalCompra = document.createElement("div");
totalCompra.className = "contenido-total";
totalCompra.innerHTML = `
    <p>Total a pagar: $${total}</p>
`;
contenidoCarritoCompra.append(totalCompra);

let compraContent = document.createElement("div");
compraContent.className = "compra-content";
compraContent.innerHTML = `
    <h1>Finaliza tu compra</h1>

    <div class="formulario">
        <label for="Nombre">Nombre:</label>
        <input type="text" name="Nombre" id="inputNombre" placeholder="Nombre">

        <label for="Correo">Correo:</label>
        <input type="email" name="Correo" id="inputCorreo" placeholder="Correo">

        <label for="Telefono">Telefono:</label>
        <input type="number" name"Telefono" id="inputTelefono" placeholder="Telefono">


        <h2>Datos de la tarjeta</h2>

        <label for="Numero">Numero de tarjeta:</label>
        <input type="number" name="Numero" id="inputNumeroTarjeta" placeholder="Numero de tarjeta">

        <label for="Nombre">Nombre del titular:</label>
        <input type="text" name="Nombre" id="inputNombreTarjeta" placeholder="Nombre">

        <label for="Fecha">Vencimiento:</label>
        <input type="number" name="Vencimiento" id="inputVencimiento" placeholder="00/00">

        <label for="Codigo">Codigo de seguridad:</label>
        <input type="number" name="Codigo" id="inputCodigo" placeholder="000">

        <button id="btnComprar">Confirmar compra</button>
    </div>
`;
contenidoCompra.append(compraContent);

document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("inputNombre");
    const inputCorreo = document.getElementById("inputCorreo");
    const inputTelefono = document.getElementById("inputTelefono");
    const inputNumeroTarjeta = document.getElementById("inputNumeroTarjeta");
    const inputNombreTarjeta = document.getElementById("inputNombreTarjeta");
    const inputVencimiento = document.getElementById("inputVencimiento");
    const inputCodigo = document.getElementById("inputCodigo");
    const btnEnviar = document.getElementById("btnComprar");

    btnEnviar.addEventListener("click", () => {
        const nombre = inputNombre.value;
        const correo = inputCorreo.value;
        const telefono = inputTelefono.value;
        const numeroTarjeta = inputNumeroTarjeta.value;
        const nombreTarjeta = inputNombreTarjeta.value;
        const vencimiento = inputVencimiento.value;
        const codigo = inputCodigo.value;

        
        if ((nombre != "") && (correo != "") && (telefono != "") && (numeroTarjeta != "") && (nombreTarjeta != "") && esVencimientoValido(vencimiento) && esCodigoValido(codigo)) {
            
            swal("Compra confirmada", "¡Muchas gracias " + nombre + " por tu compra! Pronto te llegara la factura a tu correo " + correo, "success");

            inputNombre.value = "";
            inputCorreo.value = "";
            inputTelefono.value = "";
            inputNumeroTarjeta.value = "";
            inputNombreTarjeta.value = "";
            inputVencimiento.value = "";
            inputCodigo.value = "";

            localStorage.clear(carrito);
            contenidoCarritoCompra.remove();
            let contenidoFinal = document.createElement("div");
            compraFinalizada.className = "contenido-final"
            compraFinalizada.innerHTML = `
                <p>Compra finalizada.</p>
                <button><a href="index.html">Volver al incio</a></button>
            `
            compraFinalizada.append(contenidoFinal);
            seguirComprando.remove();
        } else {
            
            swal("Error", "Por favor, completa todos los campos correctamente.", "error");

            if (!nombre) {
                inputNombre.classList.add("input-error");
            } else {
                inputNombre.classList.remove("input-error");
            }

            if (!correo) {
                inputCorreo.classList.add("input-error");
            } else {
                inputCorreo.classList.remove("input-error");
            }

            if (!telefono) {
                inputTelefono.classList.add("input-error");
            } else {
                inputTelefono.classList.remove("input-error");
            }

            if (!numeroTarjeta) {
                inputNumeroTarjeta.classList.add("input-error");
            } else {
                inputNumeroTarjeta.classList.remove("input-error");
            }

            if (!nombreTarjeta) {
                inputNombreTarjeta.classList.add("input-error");
            } else {
                inputNombreTarjeta.classList.remove("input-error");
            }

            if (!esVencimientoValido(vencimiento)) {
                inputVencimiento.classList.add("input-error");
            } else {
                inputVencimiento.classList.remove("input-error");
            }

            if (!esCodigoValido(codigo)) {
                inputCodigo.classList.add("input-error");
            } else {
                inputCodigo.classList.remove("input-error");
            }
        }
        if ((nombre != "") && (correo != "") && (telefono != "") && (numeroTarjeta != "") && (nombreTarjeta != "") && esVencimientoValido(vencimiento) && esCodigoValido(codigo)) {
            inputNombre.classList.remove("input-error");
            inputCorreo.classList.remove("input-error");
            inputTelefono.classList.remove("input-error");
            inputNumeroTarjeta.classList.remove("input-error");
            inputNombreTarjeta.classList.remove("input-error");
            inputVencimiento.classList.remove("input-error");
            inputCodigo.classList.remove("input-error");
        }
    });
});

const esCodigoValido = (codigo) => {
    const regex = /^\d{3}$/;
    return regex.test(codigo);
}
const esVencimientoValido = (vencimiento) => {
    const regex = /^\d{4}$/;
    return regex.test(vencimiento);
}


