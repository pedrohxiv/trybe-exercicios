document.getElementById("btnEnviar").addEventListener("click", (event) => {
  event.preventDefault();
});

document.getElementById("btnLimpar").addEventListener("click", () => {
  document.querySelector("form").reset();
});
