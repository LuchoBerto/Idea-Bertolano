function openLog() {
  const formLog = document.getElementById("loginForm");
  formLog.classList.remove("d-none");
  formLog.classList.add("d-flex");
  //loguear.innerHTML="";
}
openFromCarro();
function openFromCarro() {
  loguear = document.getElementById("loginBtn");
  loguear.innerHTML = "login";
  loguear.addEventListener("click", () => {
    loguear.classList.add("d-none");
    openLog();
  });
}

programarBotonLogin();
function programarBotonLogin() {
  const btn = document.getElementById("ingresar");
  btn.addEventListener("click", () => {
    precesarLoguin();
  });
}

function precesarLoguin() {
  const userLog = document.getElementById("user").value;
  const passLog = document.getElementById("pass").value;

  localStorage.setItem("userLogued", JSON.stringify(userLog));
  localStorage.setItem("passLogued", JSON.stringify(passLog));

  if (userLog === "" || passLog === "") {
    alertInvalid();
  } else {
    if (userLog === "user1" && passLog === "pass1") {
      JSON.parse(localStorage.getItem("userLog"));
      swal.fire({
        html: `<span class="modal_text">Bienvenido ${userLog}</span>`,
        showConfirmButton: false,
        timer: 2000,
      });
      const nodo = document.getElementById("loginForm");
      nodo.classList.add("user_name");
      nodo.innerHTML = `Hola, ${userLog}`;
      closeSession();
    } else {
      alertInvalid();
    }
  }
}

function alertInvalid() {
  swal.fire({
    html: `<span class="modal_text_error">Datos inválidos o incompletos, intente nuevamente</span>`,
    showConfirmButton: false,
    timer: 2000,
  });
}

function cargarPreferencias() {
  const loguear = document.getElementById("loginBtn");
  nodo = document.getElementById("loginForm");
  userLog = localStorage.getItem("userLogued");
  if (userLog) {
    //valorFuente !=== null, undefined, 0, false, ""
    loguear.innerHTML = `Hola, ${userLog}`;
    loguear.classList.remove("btn_principal");
    loguear.classList.add("user_name");
    closeSession();
  } else {
    loguear.innerHTML = "login";
    loguear.addEventListener("click", () => {
      loguear.classList.add("d-none");
      openLog();
    });
  }
}

function closeSession() {
  const cerrarBtn = document.getElementById("btn_session");
  const close = document.createElement("button");
  close.setAttribute("id", "closeSession");
  close.classList.add("btn_principal", "btn_exit");
  close.innerHTML = `salir`;

  cerrarBtn.appendChild(close);

  close.addEventListener("click", () => {
    borrarDatos();
  });
}

function borrarDatos() {
  localStorage.removeItem("userLogued");
  localStorage.removeItem("passLogued");
  location.reload();
}
