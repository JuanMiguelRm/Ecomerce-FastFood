// Esperar a que el documento HTML se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a elementos del DOM
  const carritoButton = document.querySelector("#ver-carrito"); // Botón para mostrar el carrito
  const carritoMenu = document.querySelector(".carrito-menu"); // Contenedor del carrito
  const cerrarCarritoButton = document.querySelector("#cerrar-carrito"); // Botón para cerrar el carrito
  const listaProductos = document.querySelector("#lista-productos"); // Lista de productos en el carrito
  const totalCarrito = document.querySelector("#total-carrito"); // Total del carrito
  const carrito = []; // Arreglo para almacenar los productos en el carrito

  // Agregar un evento de clic al botón "Ver Carrito"
  carritoButton.addEventListener("click", () => {
    // Mostrar el carrito al agregar la clase "show"
    carritoMenu.classList.add("show");
    mostrarCarrito(); // Llamar a la función para mostrar el carrito
  });

  // Agregar un evento de clic al botón "Cerrar Carrito"
  cerrarCarritoButton.addEventListener("click", () => {
    // Ocultar el carrito al quitar la clase "show"
    carritoMenu.classList.remove("show");
  });

  // Función para agregar un producto al carrito
  function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio }); // Agregar el producto al arreglo del carrito
    mostrarCarrito(); // Actualizar la vista del carrito
  }

  // Función para mostrar los productos en el carrito
  function mostrarCarrito() {
    listaProductos.innerHTML = ""; // Limpiar la lista de productos
    let total = 0; // Inicializar el total a 0

    // Recorrer los productos en el carrito
    carrito.forEach((item, index) => {
      const listItem = document.createElement("li"); // Crear un elemento de lista
      listItem.innerHTML = `
              ${item.producto}: $${item.precio}
              <button class="eliminar-producto" data-index="${index}">Eliminar</button>
          `;
      listaProductos.appendChild(listItem); // Agregar el elemento a la lista
      total += item.precio; // Sumar el precio al total
    });

    totalCarrito.textContent = total.toFixed(2); // Actualizar el total en el DOM

    // Agregar eventos para eliminar productos
    const eliminarBotones = document.querySelectorAll(".eliminar-producto");
    eliminarBotones.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        carrito.splice(index, 1); // Eliminar el producto del carrito
        mostrarCarrito(); // Actualizar la vista del carrito
      });
    });
  }

  // Agregar eventos para agregar productos al carrito
  const agregarCarritoBotones = document.querySelectorAll(".carrito");
  agregarCarritoBotones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const producto = boton.dataset.producto;
      const precio = parseFloat(boton.dataset.precio);
      agregarAlCarrito(producto, precio); // Llamar a la función para agregar al carrito
    });
  });
});
