const btnCustomer = document.getElementById("btnCustomer");
const btnAdmin = document.getElementById("btnAdmin");
const formCustomer = document.getElementById("formCustomer");
const formAdmin = document.getElementById("formAdmin");

// Evento para mostrar formulario de Customer
btnCustomer.addEventListener("click", () => {
  btnCustomer.classList.add("active");
  btnAdmin.classList.remove("active");
  formCustomer.classList.add("active");
  formAdmin.classList.remove("active");
});

// Evento para mostrar formulario de Admin
btnAdmin.addEventListener("click", () => {
  btnAdmin.classList.add("active");
  btnCustomer.classList.remove("active");
  formAdmin.classList.add("active");
  formCustomer.classList.remove("active");
});
