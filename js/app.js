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

function limparMensagem() {
    mensagem.innerHTML = "";
}

async function buscarVeiculo(placa) {

    const resposta = await fetch("data/db.json");

    if (!resposta.ok) {
        throw new Error("Não foi possível carregar os dados do servidor.");
    }

    const dados = await resposta.json();

    if (!dados.veiculos || !Array.isArray(dados.veiculos)) {
        throw new Error("Formato dos dados inválido.");
    }

    const veiculo = dados.veiculos.find(function (veiculo) {
        return veiculo.placa === placa;
    });

    return veiculo;
}

function mostrarResultado(veiculo){

    document.getElementById("marca").textContent = veiculo.marca;
    document.getElementById("modelo").textContent = veiculo.modelo;
    document.getElementById("versao").textContent = veiculo.versao;
    document.getElementById("ano").textContent = veiculo.anoModelo;
    document.getElementById("motor").textContent = veiculo.motor;
    document.getElementById("cambio").textContent = veiculo.cambio;
    document.getElementById("cor").textContent = veiculo.cor;
    document.getElementById("combustivel").textContent = veiculo.combustivel;

    resultado.classList.remove("d-none");
}

function limparResultado() {
    document.getElementById("marca").textContent = "";
    document.getElementById("modelo").textContent = "";
    document.getElementById("versao").textContent = "";
    document.getElementById("ano").textContent = "";
    document.getElementById("motor").textContent = "";
    document.getElementById("cambio").textContent = "";
    document.getElementById("cor").textContent = "";
    document.getElementById("combustivel").textContent = "";

    resultado.classList.add("d-none");
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

    //Limpa mensagens e resultados anteriores.
    limparMensagem();
    limparResultado();

    //Prepara o botão para consulta
    btnConsultar.disabled = true;

    //Mostra o loading
    mostrarMensagem("Consultando veículo...", "info");

    try {
        
        const veiculo = await buscarVeiculo(placa);

        if (!veiculo) {
            mostrarMensagem("Veículo não encontrado.", "warning");
            return;
        }

        mostrarResultado(veiculo);

        //Limpa o loading quando há sucesso na consulta:
        limparMensagem();

    } catch (error) {
        mostrarMensagem("Não foi possível consultar os dados. Tente novamente.", "danger");

        console.error("Erro na consulta:", error);
    } finally {
        // Reativa o botão independente do resultado
        btnConsultar.disabled = false;
    }
});