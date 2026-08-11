const btnConsultar = document.getElementById("btnConsultar");
const inputPlaca = document.getElementById("placa");

btnConsultar.addEventListener("click", function () {
    //O método .trim() remove espaços em branco e quebras de linha das extremidades de uma string
    const placa = inputPlaca.value.trim().toUpperCase();

    //Expressões regulares para aceitar os dois tipos de placa. OBS: A API fake possui apenas dados no formato novo, mas pensei que seria interessante estruturar o projeto para os dois modelos:
    const placaAntiga = /^[A-Z]{3}[0-9]{4}$/;
    const placaMercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;

    //Testa se o modelo digitado pelo usuário é um dos dois modelos válidos:
    const placaValida = placaAntiga.test(placa) || placaMercosul.test(placa);
    
    if (!placaValida) {
        console.log("Placa inválida");
        return;
    }

    console.log("Placa válida:", placa);

});