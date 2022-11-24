let response = await fetch("/datos.json");

let blob = await response.blob(); // download as Blob object

// crear tag <img> para imagen
let div = document.createElement("div");
div.innerHTML = ` 
<div class="top__1">
<hr>
<h2 class="top__h2">Top 3</h2>
<hr>
<div class="top__sub" >
<p class="top__p2" >Nombre</p>
<p class="top__p" >Canciones</p>
</div>
</div>
<div class="top__audio" >
<hr>
<h5 class="top__h5" >Nuevamente</h5>
<audio controls class="top__controls" src ="../audio/ocho.mp3"></audio>
<hr>
<h5 class="top__h5">Suave</h5>
<audio controls class="top__controls" src ="/audio/cuatro.mp3"></audio>
<hr>
<h5 class="top__h5">Alas</h5>
<audio controls class="top__controls"  src ="/audio/seis.mp3"></audio>

 </div>

 `;
document.body.append(div);
// mostrar
div.text = URL.createObjectURL(blob);

//  Incio de Sesion
form.addEventListener("click", function (evt) {
  if (Correo.value.length > 30) {
    alert("Ingresar Usuario ");
    evt.preventDefault();
    return false;
  } else if (Contraseñá.value === "") {
    alert("El campo contraseña es obligatorio");
    evt.preventDefault();
    return false;
  }

  alert("datos enviatos");
  return true;
});

// registro

function limpiarErrores() {
  var errores = document.getElementsByClassName("error");
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }
}

function validar(formulario) {
  limpiarErrores();

  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Campo inválido";
    formulario.email.focus();
    return true;
  }

  if (formulario.contraseña.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Campo obligatorio";
    formulario.contraseña.focus();
    return false;
  }

  if (formulario.contraseñá.value.trim().length < 6) {
    document.getElementById("errorcontraseñá").innerText =
      "Campo inválido (Mínimo 6 caracteres)";
    formulario.contraseñá.focus();
    return false;
  }

  if (formulario.confirmacion.value != formulario.confirmacion.value) {
    document.getElementById("errorconfirmacion").innerText =
      "Confirmación no coincide";
    formulario.confirmacion.focus();
    return false;
  }

  if (formulario.Edad.value == "") {
    document.getElementById("errorEdad").innerText = "Campo obligatorio";
    return false;
  }

  if (formulario.Genero.value == "") {
    document.getElementById("errorGenero").innerText = "Campo obligatorio";
    formulario.Genero.focus();
    return false;
  }

  if (!formulario.terminos.checked) {
    document.getElementById("errorTerminos").innerText =
      "Debe aceptar los términos y condiciones";
    formulario.terminos.focus();
    return false;
  }
  alert("Datos enviados");
  return false;
}

// ocultar media querys//
const button = document.querySelector(".button__nav");
const query = document.querySelector(".query");

button.addEventListener("click", () => {
  query.classList.toggle("activo")
})
