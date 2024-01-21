
function openModal() {
  document.getElementById("modalOverlay").style.display = "flex";
}

function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
}

function sendForm(){
  document.getElementById("modalOverlay").style.display = "none";
  alert("Se ha reservado su cita correctamente!")
}

function sendPhone(){
  alert("Hemos recivido tu  número telefonico, te llamaremos en breve!")
}