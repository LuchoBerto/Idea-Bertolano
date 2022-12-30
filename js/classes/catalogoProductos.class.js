class CatalogoProductos {
  constructor(productos) {
    this.productos = productos;
  }

  darCantidad() {
    return this.productos.length;
  }

  buscarTituloIngresado(tituloABuscar) {
    let resultadoFiltrado = this.productos.filter((producto) =>
      producto.titulo.includes(tituloABuscar)
    );

    if (resultadoFiltrado.length > 0) {
      catalogoProductos.listarResultados(resultadoFiltrado);
    } else {
      alert("No se encontraron resultados");
    }
  }
  buscarCategoriaIngresado(categoriaABuscar) {
    let resultadoFiltrado = this.productos.filter((producto) =>
      producto.categoria.includes(categoriaABuscar)
    );

    if (resultadoFiltrado.length > 0) {
      catalogoProductos.listarResultados(resultadoFiltrado);
    } else {
      alert("No se encontraron resultados");
    }
  }

  buscarPrecioIngresado(precioABuscar) {
    let precioFiltrado = this.productos.filter(
      (producto) => producto.precio <= precioABuscar
    );

    if (precioFiltrado.length > 0) {
      catalogoProductos.listarResultados(precioFiltrado);
    } else {
      listarProductos();
    }
  }

  listarResultados(array) {
    const nodoResultado = document.getElementById("main_list");
    nodoResultado.innerHTML = "";
    array.forEach((producto) => {
      const divResultado = document.createElement("div");
      divResultado.classList.add("item_list", "h-100");
      divResultado.innerHTML = `<div class="item_body">
                                        <div><img src=https://via.placeholder.com/550x550 class="img-fluid"></div>
                                        <h3>${producto.titulo}</h3>
                                        <div class='details d-flex justify-content-between align-items-baseline'>                                        
                                            <div class='precio'> (${producto.categoria})</div>
                                            <div>$ ${producto.precio}</div>
                                        </div>
                                    </div>`;
      const buttonResultado = document.createElement("a");
      buttonResultado.classList.add("btn_principal");
      buttonResultado.setAttribute("id", `${producto.id}`);
      buttonResultado.innerHTML = "AGREGAR";
      buttonResultado.addEventListener("click", () => {
        buttonResultado.classList.add("btn", "disabled");
        buttonResultado.innerHTML = "AGREGADO";
        alertAgregado();
        addToCart(producto);
      });
      function addToCart(producto) {
        localStorage.setItem("agregado", JSON.stringify(producto));
      }

      nodoResultado.appendChild(divResultado);
      divResultado.appendChild(buttonResultado);
    });
  }

  ordenarLista() {
    const nodoPrincipal = document.getElementById("main_list");
    nodoPrincipal.innerHTML = "";
    catalogoProductos.productos.sort((productoA, productoB) => {
      if (productoA.titulo < productoB.titulo) {
        return -1;
      }
      return 1;
    });
    listarProductos();
  }

  ordenarPrecio() {
    const nodoPrincipal = document.getElementById("main_list");
    nodoPrincipal.innerHTML = "";
    catalogoProductos.productos.sort((productoA, productoB) => {
      if (productoA.precio < productoB.precio) {
        return -1;
      }
      return 1;
    });
    listarProductos();
  }

  agregarProducto(producto) {
    this.productos.unshift(producto);
  }
}
