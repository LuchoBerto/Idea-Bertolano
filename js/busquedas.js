function buscarTitulo() {
  const inputPregunta = document.createElement("input");
  inputPregunta.setAttribute("id", "titulo");
  inputPregunta.setAttribute("placeholder", "Ingrese Producto");
  inputPregunta.classList.add("form-control");
  inputPregunta.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      tituloSearch();
    }
  });

  const buscar = document.createElement("button");
  buscar.setAttribute("type", "submit");
  buscar.setAttribute("id", "buscar");
  buscar.classList.add("btn_principal");
  buscar.innerText = "BUSCAR";
  buscar.onclick = () => {
    tituloSearch();
  };

  function tituloSearch() {
    const tituloABuscar = document.getElementById("titulo").value;
    catalogoProductos.buscarTituloIngresado(tituloABuscar);
  }

  const busqueda = document.getElementById("subSearch");
  busqueda.innerHTML = "";
  busqueda.appendChild(inputPregunta);
  busqueda.appendChild(buscar);
}

function buscarCategoria() {
  const inputPregunta = document.createElement("input");
  inputPregunta.setAttribute("id", "categoria");
  inputPregunta.setAttribute("placeholder", "Ingrese Categoria");
  inputPregunta.classList.add("form-control");
  inputPregunta.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      autorSearch();
    }
  });

  const buscar = document.createElement("button");
  buscar.setAttribute("type", "submit");
  buscar.setAttribute("id", "buscar");
  buscar.classList.add("btn_principal");
  buscar.innerText = "BUSCAR";
  buscar.onclick = () => {
    categoriaSearch();
  };

  function categoriaSearch() {
    const tituloABuscar = document.getElementById("categoria").value;
    catalogoProductos.buscarCategoriaIngresado(tituloABuscar);
  }

  const busqueda = document.getElementById("subSearch");
  busqueda.innerHTML = "";
  busqueda.appendChild(inputPregunta);
  busqueda.appendChild(buscar);
}

function ingresarPrecio() {
  const inputPregunta = document.createElement("input");
  inputPregunta.setAttribute("id", "precio");
  inputPregunta.setAttribute("type", "number");
  inputPregunta.setAttribute(
    "placeholder",
    "Ingrese el precio máximo que desea abonar"
  );
  inputPregunta.classList.add("form-control");
  inputPregunta.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      precioSearch();
    }
  });

  const buscar = document.createElement("button");
  buscar.setAttribute("type", "submit");
  buscar.setAttribute("id", "buscar");
  buscar.classList.add("btn_principal");
  buscar.innerText = "BUSCAR";
  buscar.onclick = () => {
    precioSearch();
  };

  function precioSearch() {
    const precioABuscar = document.getElementById("precio").value;
    catalogoProductos.buscarPrecioIngresado(precioABuscar);
  }

  const busqueda = document.getElementById("subSearch");
  busqueda.innerHTML = "";
  busqueda.appendChild(inputPregunta);
  busqueda.appendChild(buscar);
}
