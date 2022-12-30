const productos = [
  {
    titulo: "terminator 2",
    categoria: "vhs",
    precio: 1350,
    id: 1,
  },
  { titulo: "donatello", categoria: "figuras", precio: 900, id: 2 },
  {
    titulo: "masters of the universe",
    categoria: "comics",
    precio: 700,
    id: 3,
  },
  {
    titulo: "viewmaster",
    categoria: "gadgets",
    precio: 3100,
    id: 4,
  },
  {
    titulo: "reproductor beta-max",
    categoria: "gadgets",
    precio: 7200,
    id: 5,
  },
  {
    titulo: "cartucho adventure island",
    categoria: "videojuegos",
    precio: 450,
    id: 6,
  },
  { titulo: "the Goonies", categoria: "vhs", precio: 970, id: 7 },
  { titulo: "joker", categoria: "comics", precio: 1860, id: 8 },
  { titulo: "stormtrooper", categoria: "figuras", precio: 2050, id: 9 },
  {
    titulo: "consola nes",
    categoria: "videojuegos",
    precio: 6120,
    id: 10,
  },
  {
    titulo: "poster jurassic park",
    categoria: "posters",
    precio: 1460,
    id: 11,
  },
  {
    titulo: "airwolf",
    categoria: "vhs",
    precio: 965,
    id: 12,
  },
  {
    titulo: "leon-o",
    categoria: "figuras",
    precio: 1120,
    id: 13,
  },
  {
    titulo: "blade runner",
    categoria: "poster",
    precio: 1475,
    id: 14,
  },
  {
    titulo: "metal gear solid",
    categoria: "videojuegos",
    precio: 1890,
    id: 15,
  },
  {
    titulo: "dragon ball",
    categoria: "comics",
    precio: 1230,
    id: 16,
  },
];

const home = document.getElementById("home");
const carro = document.getElementById("carro");

const catalogoProductos = new CatalogoProductos(productos);

console.log("PRODUCTOS ORIGINAL", catalogoProductos.productos);

if (home) {
  listarProductos();
  function listarProductos() {
    const nodoPrincipal = document.getElementById("main_list");
    nodoPrincipal.innerHTML = "";

    catalogoProductos.productos.forEach((producto) => {
      const divProducto = document.createElement("div");
      divProducto.classList.add("item_list", "h-100");
      divProducto.innerHTML = `<div class='item_body'>
                                    <div><img src=https://via.placeholder.com/550x550 class="img-fluid mb-2"></div>
                                    <h3 class="mb-2">${producto.titulo}</h3>
                                    <div class='details d-flex justify-content-between align-items-baseline  mb-2'>
                                        <div class='precio'> ${producto.categoria}</div>
                                        <div>$ ${producto.precio}</div>
                                    </div>
                                </div>`;
      const button = document.createElement("a");
      button.classList.add("btn_principal", "mb-2");
      button.setAttribute("id", `${producto.id}`);
      button.innerHTML = "AGREGAR";
      button.addEventListener("click", () => {
        button.classList.add("btn", "disabled");
        button.innerHTML = "AGREGADO";
        alertAgregado();
        addToCart(producto);
      });
      function addToCart(producto) {
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }
      nodoPrincipal.appendChild(divProducto);
      divProducto.appendChild(button);
    });
  }
  function alertAgregado() {
    swal.fire({
      timer: 2000,
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
    });
  }

  cargarPreferencias();

  function mostrarMenu() {
    //----- CREACION DE BOTONES-----//

    const showPanel = document.getElementById("searchAll");
    showPanel.classList.remove("d-none");
    showPanel.classList.add("d-flex", "flex-column");

    const buscaTituloBtn = document.createElement("button");
    buscaTituloBtn.setAttribute("type", "submit");
    buscaTituloBtn.setAttribute("value", "buscar");
    buscaTituloBtn.setAttribute("id", "buscarPorTitulo");
    buscaTituloBtn.classList.add("btn_principal");
    buscaTituloBtn.innerText = "BUSCAR POR PRODUCTO";

    const buscaCategoriaBtn = document.createElement("button");
    buscaCategoriaBtn.setAttribute("type", "submit");
    buscaCategoriaBtn.setAttribute("value", "buscar");
    buscaCategoriaBtn.setAttribute("id", "buscarPorCategoria");
    buscaCategoriaBtn.classList.add("btn_principal");
    buscaCategoriaBtn.innerText = "BUSCAR POR CATEGORIA";

    const buscaPrecioBtn = document.createElement("button");
    buscaPrecioBtn.setAttribute("type", "submit");
    buscaPrecioBtn.setAttribute("value", "buscar");
    buscaPrecioBtn.setAttribute("id", "buscarPorPrecio");
    buscaPrecioBtn.classList.add("btn_principal");
    buscaPrecioBtn.innerText = "BUSCAR POR PRECIO";

    const closeSearch = document.createElement("button");
    closeSearch.innerText = `CERRAR`;
    closeSearch.setAttribute("id", "searchPanel");
    closeSearch.classList.add("btn_principal");

    const busquedaPrincipal = document.getElementById("mainSearch");
    busquedaPrincipal.innerHTML = "";
    busquedaPrincipal.appendChild(buscaTituloBtn);
    busquedaPrincipal.appendChild(buscaCategoriaBtn);
    busquedaPrincipal.appendChild(buscaPrecioBtn);
    busquedaPrincipal.appendChild(closeSearch);

    const btnBusquedaPorTitulo = document.getElementById("buscarPorTitulo");
    btnBusquedaPorTitulo.addEventListener("click", () => {
      buscarTitulo();
    });

    const btnBusquedaPorCategoria =
      document.getElementById("buscarPorCategoria");
    btnBusquedaPorCategoria.addEventListener("click", () => {
      buscarCategoria();
    });

    const btnBusquedaPorPrecio = document.getElementById("buscarPorPrecio");
    btnBusquedaPorPrecio.addEventListener("click", () => {
      ingresarPrecio();
    });
    const btnCerrarBusqueda = document.getElementById("searchPanel");
    btnCerrarBusqueda.addEventListener("click", () => {
      cerrarPanel();
    });
  }
  function ordenarLista() {
    catalogoProductos.ordenarLista();
  }
  function ordenarPrecio() {
    catalogoProductos.ordenarPrecio();
  }
  function cerrarPanel() {
    const panel = document.getElementById("searchAll");
    panel.classList.add("d-none");
  }
}

//----- CARRO -----//

if (carro) {
  cargarPreferencias();

  function ordenarLista() {
    mainCarro.ordenarLista();
  }
  function ordenarPrecio() {
    mainCarro.ordenarPrecio();
  }

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (carrito) {
    listarCarro();
    function listarCarro() {
      let nodoCarro = document.getElementById("carro_list");
      nodoCarro.innerHTML = "";
      carrito.forEach((producto) => {
        let divProducto = document.createElement("div");
        divProducto.classList.add("item_list", "h-100");
        divProducto.innerHTML = `<div class='item_body'>
                                        <div><img src=https://via.placeholder.com/550x550 class="img-fluid mb-2"></div>
                                        <h3 class="mb-2">${producto.titulo}</h3>
                                        <div class='details d-flex justify-content-between align-items-baseline  mb-2'>
                                            <div class='precio'>${productos.categoria}</div>
                                            <div>$ ${producto.precio}</div>
                                        </div>
                                    </div>`;
        let buttonLess = document.createElement("a");
        buttonLess.classList.add("btn_principal");
        buttonLess.setAttribute("id", `${producto.id}`);
        buttonLess.innerHTML = "QUITAR";
        buttonLess.addEventListener("click", () => {
          alertQuitar();
        });

        function alertQuitar() {
          swal.fire({
            icon: "question",
            title: "Está seguro de quitar este producto del carrito?",
            showConfirmButton: true,
          });
          let confirm = Swal.getConfirmButton();
          confirm.classList.add("btn_principal");
          confirm.innerHTML = `SI`;
          confirm.addEventListener("click", () => {
            removeFromCarro(producto);
            function removeFromCarro(producto) {
              let index = carrito.indexOf(producto);
              if (index > -1) {
                carrito.splice(index, 1);
                localStorage.setItem("carrito", JSON.stringify(carrito));
              }
              listarCarro();
            }
          });
        }

        nodoCarro.appendChild(divProducto);
        divProducto.appendChild(buttonLess);
      });
    }
  }
}

//-----BOTON IR ARRIBA-----//

const btn_scrolltop = document.getElementById("btn_scrolltop");
btn_scrolltop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.onscroll = () => {
  add_btn_scrolltop();
};

const add_btn_scrolltop = () => {
  if (window.scrollY < 300) {
    btn_scrolltop.classList.remove("btn-scrolltop-on");
  } else {
    btn_scrolltop.classList.add("btn-scrolltop-on");
  }
};
