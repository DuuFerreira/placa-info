const btnConsultar = document.getElementById("btnConsultar");
const inputPlaca = document.getElementById("placa");
const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

function mostrarMensagem(texto, tipo) {
    mensagem.innerHTML = `
        <div class="alert alert-${tipo}" role="alert">
            ${texto}
        </div>
    `;
}

btnConsultar.addEventListener("click", async function () {
    //O método .trim() remove espaços em branco e quebras de linha das extremidades de uma string
    const placa = inputPlaca.value.trim().toUpperCase();

    //Expressões regulares para aceitar os dois tipos de placa. OBS: A API fake possui apenas dados no formato novo, mas pensei que seria interessante estruturar o projeto para os dois modelos:
    const placaAntiga = /^[A-Z]{3}[0-9]{4}$/;
    const placaMercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;

    //Testa se o modelo digitado pelo usuário é um dos dois modelos válidos:
    const placaValida = placaAntiga.test(placa) || placaMercosul.test(placa);

    if (!placaValida) {
        mostrarMensagem("Digite uma placa válida.", "danger");
        return;
    }

    mensagem.textContent = "";
    resultado.classList.add("d-none");

    try {
        const resposta = await fetch("data/db.json");

        if (!resposta.ok) {
           throw new Error("Erro ao carregar os dados.");
        }
        
        const dados = await resposta.json();

        const veiculo = dados.veiculos.find(function (veiculo) {
            return veiculo.placa === placa;
        });

        if (!veiculo) {
            mensagem.textContent = "Veículo não encontrado.";
            mensagem.className = "mt-3 text-warning";
            return;
        }

        document.getElementById("marca").textContent = veiculo.marca;
        document.getElementById("modelo").textContent = veiculo.modelo;
        document.getElementById("ano").textContent = veiculo.anoModelo;
        document.getElementById("cor").textContent = veiculo.cor;
        document.getElementById("combustivel").textContent = veiculo.combustivel;

        resultado.classList.remove("d-none");
    } catch (error) {
        mensagem.textContent = "Não foi possível consultar os dados. Tente novamente.";
        mensagem.className = "mt-3 text-danger";

        console.error(error);
    }

    

});