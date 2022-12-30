const btnSearchPrimary = document.getElementById("searchPrimary");
    btnSearchPrimary.addEventListener("click", () => {
    mostrarMenu();
})

const btnOrderAZ = document.getElementById("order");
btnOrderAZ.addEventListener("click", () => {
    ordenarLista();
})

const btnOrderPrice = document.getElementById("price");
btnOrderPrice.addEventListener("click", () => {
    ordenarPrecio();
})



const closeSearch = document.createElement("button");
closeSearch.innerHTML = `CERRAR`
closeSearch.classList.add("btn_principal");
closeSearch.addEventListener("click", () => {
    cerrarPanel();
});

