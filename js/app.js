const btnConsultar = document.getElementById("btnConsultar");
const inputPlaca = document.getElementById("placa");

btnConsultar.addEventListener("click", function () {
    //O método .trim() remove espaços em branco e quebras de linha das extremidades de uma string
    const placa = inputPlaca.value.trim().toUpperCase();

    console.log(placa);
});