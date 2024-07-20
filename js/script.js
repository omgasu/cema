//funcion abre el modal
function abrirModal() {
  //cambia el estilo al vuzualizar 
  document.getElementById("modalOverlay").style.display = "flex";
}

//funcion cierra el modal
function cerrarModal() {
  //cambia el estilo al vuzualizar 
  document.getElementById("modalOverlay").style.display = "none";
}

//funcion envia el formulario
function enviarFormulario() {
  //ocultar el modal
  document.getElementById("modalOverlay").style.display = "none";
  //muestra alerta
  alert("Se ha reservado su cita correctamente!")
}
//funcion para enviar info
function enviarTelefono() {
  //muestra alerta
  alert("Hemos recivido tu  número telefonico, te llamaremos en breve!")
}

//funcion de contacto
function contactoEmpresa() {
  //muestra alerta
  alert("Gracias por ponerse en contacto con nosotros!")
}