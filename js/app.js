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
    resultado.classList.add("d-none");

    //Prepara o botão para consulta
    btnConsultar.disabled = true;

    //Mostra o loading
    mostrarMensagem("Consultando veículo...", "info");

    try {
        const resposta = await fetch("data/db.json");

        if (!resposta.ok) {
           throw new Error("Não foi possível carregar os dados do servidor.");
        }
        
        const dados = await resposta.json();

        const veiculo = dados.veiculos.find(function (veiculo) {
            return veiculo.placa === placa;
        });

        if (!veiculo) {
            mostrarMensagem("Veículo não encontrado.", "warning");
            return;
        }

        document.getElementById("marca").textContent = veiculo.marca;
        document.getElementById("modelo").textContent = veiculo.modelo;
        document.getElementById("ano").textContent = veiculo.anoModelo;
        document.getElementById("cor").textContent = veiculo.cor;
        document.getElementById("combustivel").textContent = veiculo.combustivel;

        resultado.classList.remove("d-none");

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