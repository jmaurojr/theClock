document.getElementById("btn-amarelo").addEventListener("click", function () {
  document.querySelector("body").setAttribute("class", "amarelo");
  console.log("amarelo");
});

document.getElementById("btn-vermelho").addEventListener("click", function () {
  document.querySelector("body").setAttribute("class", "vermelho");
  console.log("vermelho");
});

document.getElementById("btn-azul").addEventListener("click", function () {
  document.querySelector("body").setAttribute("class", "azul");
  console.log("azul");
});
