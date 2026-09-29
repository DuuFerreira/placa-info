# 🚗 Placa Info

Aplicação web para consulta de informações de veículos através da placa.

O **Placa Info** foi desenvolvido como um projeto de portfólio com o objetivo de praticar e consolidar conhecimentos em **HTML, CSS, JavaScript, Bootstrap, manipulação do DOM, consumo de dados com `fetch()` e tratamento de erros**.

A aplicação simula o funcionamento de um sistema de consulta veicular utilizando uma base de dados fictícia em formato JSON.

---

## 📋 Sobre o projeto

A proposta do Placa Info é permitir que o usuário informe uma placa de veículo e receba algumas de suas principais informações.

O projeto foi desenvolvido desde a criação da interface até a implementação da lógica de consulta e apresentação dos dados.

Como APIs reais de consulta veicular podem possuir custos, autenticação e outras restrições, foi utilizada uma **API fictícia**, representada pelo arquivo `db.json`.

Dessa forma, foi possível reproduzir no projeto o fluxo de uma aplicação que realiza uma requisição, recebe dados e os apresenta dinamicamente na interface.

---

## 🎯 Objetivos

O desenvolvimento do projeto teve como principais objetivos:

* Praticar a construção de interfaces com HTML;
* Utilizar Bootstrap para estruturação e responsividade;
* Criar estilizações personalizadas com CSS;
* Trabalhar com JavaScript e manipulação do DOM;
* Consumir dados utilizando `fetch()`;
* Trabalhar com dados estruturados em JSON;
* Validar dados fornecidos pelo usuário;
* Utilizar expressões regulares para validação de placas;
* Implementar tratamento de erros;
* Criar mensagens de feedback para o usuário;
* Trabalhar com funções assíncronas utilizando `async/await`;
* Praticar a organização e estruturação de um projeto web.

---

## 🖥️ Funcionalidades

### Consulta por placa

O usuário pode informar uma placa e realizar a consulta através do botão **Consultar**.

Também é possível iniciar a consulta pressionando a tecla **Enter**.

### Validação da placa

A aplicação verifica se a placa informada corresponde a um dos formatos aceitos:

* Modelo antigo: `ABC1234`
* Modelo Mercosul: `ABC1D23`

A entrada também é normalizada antes da consulta, removendo espaços desnecessários e convertendo os caracteres para letras maiúsculas.

### Consulta dos dados

Após a validação, a aplicação utiliza `fetch()` para carregar os dados do arquivo `db.json` e procura pelo veículo correspondente à placa informada.

### Exibição dos resultados

Quando o veículo é encontrado, são apresentadas informações como:

* Placa;
* Marca;
* Modelo;
* Versão;
* Ano;
* Motor;
* Câmbio;
* Cor;
* Combustível.

### Feedback ao usuário

A aplicação apresenta mensagens para diferentes situações, como:

* Placa inválida;
* Consulta em andamento;
* Veículo não encontrado;
* Erro durante a consulta.

Durante a consulta, o botão é temporariamente desabilitado para evitar múltiplas requisições simultâneas.

---

## 🛠️ Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**
* **Bootstrap 5.3.8**
* **JSON**
* **Fetch API**

O Bootstrap é utilizado para auxiliar na construção da estrutura, responsividade e componentes da interface, enquanto o CSS próprio é responsável por personalizações visuais, como a representação da placa e o fundo da aplicação.

---

## 📁 Estrutura do projeto

```text
PlacaInfo/
│
├── css/
│   └── style.css
│
├── data/
│   └── db.json
│
├── js/
│   └── app.js
│
├── index.html
└── README.md
```

### `index.html`

Responsável pela estrutura da aplicação e pelos elementos que compõem a interface.

Entre eles estão:

* Campo para digitação da placa;
* Botão de consulta;
* Área para mensagens;
* Card de resultados;
* Campos para apresentação das informações do veículo.

O Bootstrap também é carregado no documento através de CDN.

### `css/style.css`

Contém as personalizações visuais da aplicação.

Entre os elementos estilizados estão:

* Fundo da página;
* Representação visual da placa;
* Cabeçalho da placa;
* Campo de entrada;
* Placeholder;
* Efeito de foco;
* Cards individuais das informações do veículo.

A placa foi construída utilizando HTML e CSS, sem a necessidade de uma imagem externa.

### `js/app.js`

Contém toda a lógica da aplicação.

Entre as principais responsabilidades estão:

* Capturar elementos do DOM;
* Validar a placa;
* Normalizar a entrada;
* Carregar os dados;
* Procurar o veículo;
* Exibir os resultados;
* Limpar resultados anteriores;
* Exibir mensagens;
* Tratar erros;
* Controlar o estado do botão;
* Permitir consulta através da tecla Enter.

### `data/db.json`

Contém a base de dados fictícia utilizada pelo projeto.

Cada veículo possui informações como:

```json
{
  "id": 4,
  "placa": "CNR4T12",
  "chassi": "9LBRWI6FFB5Y6PGLG",
  "renavam": "85345929491",
  "marca": "Volkswagen",
  "modelo": "Polo",
  "versao": "TSI",
  "anoFabricacao": 2016,
  "anoModelo": 2016,
  "cor": "Vermelho",
  "combustivel": "Gasolina",
  "cambio": "Manual",
  "categoria": "Sedã",
  "portas": 2,
  "motor": "2.0",
  "municipio": "Goiânia",
  "uf": "GO",
  "situacao": "Licenciado"
}
```

A estrutura também possui informações relacionadas à FIPE, além de outros dados do veículo.

---

## 🔄 Como funciona a aplicação

O fluxo principal da aplicação pode ser representado da seguinte forma:

```text
Usuário informa a placa
        ↓
Normalização da entrada
        ↓
Validação do formato
        ↓
Placa válida?
   ↓            ↓
 Não           Sim
 ↓              ↓
Mensagem     Limpa resultados
de erro          ↓
             Inicia consulta
                  ↓
             fetch(db.json)
                  ↓
             Procura a placa
                  ↓
          ┌───────┴────────┐
          ↓                ↓
       Encontrado       Não encontrado
          ↓                ↓
     Exibe dados       Mensagem
```

A função responsável pela consulta utiliza `fetch()` para carregar o arquivo JSON e verifica se os dados recebidos possuem a estrutura esperada antes de procurar o veículo.

---

# 🧑‍💻 Processo de desenvolvimento

O Placa Info foi desenvolvido de forma incremental, adicionando e refinando funcionalidades conforme o projeto evoluía.

## 1. Planejamento

A ideia inicial foi criar uma aplicação capaz de simular uma consulta de informações de veículos através da placa.

Como não seria utilizado inicialmente um serviço real de consulta veicular, foi definida a utilização de uma base de dados fictícia em JSON.

Isso permitiu concentrar o desenvolvimento na construção da aplicação e no aprendizado das tecnologias utilizadas.

---

## 2. Construção da interface

O primeiro passo foi estruturar a página utilizando HTML.

Foi criado um formulário visual simples contendo:

* Título;
* Descrição;
* Representação de uma placa;
* Campo de entrada;
* Botão de consulta;
* Área para mensagens;
* Área para exibição dos resultados.

Posteriormente, o Bootstrap foi incorporado ao projeto para facilitar a criação do layout responsivo.

A área principal da aplicação foi centralizada vertical e horizontalmente utilizando classes do Bootstrap, mantendo uma largura máxima para o conteúdo.

---

## 3. Criação da representação da placa

Um dos objetivos visuais do projeto foi fazer com que o campo de entrada se parecesse com uma placa veicular.

Para isso, foi criada uma estrutura própria utilizando HTML e CSS.

A placa possui:

* Bordas;
* Cantos arredondados;
* Cabeçalho azul;
* Texto "BRASIL";
* Campo central para digitação;
* Limitação de largura;
* Proporção semelhante à de uma placa.

O próprio campo de entrada mantém o `id="placa"`, permitindo que a aparência personalizada continue integrada à lógica JavaScript.

---

## 4. Criação da base de dados fictícia

Para simular uma API, foi criada uma base de dados em JSON contendo veículos fictícios.

Cada registro possui diferentes informações sobre o veículo, permitindo que a aplicação trabalhe com dados estruturados de maneira semelhante ao que aconteceria ao consumir uma API externa.

A estrutura também possibilitou praticar a navegação em objetos e arrays utilizando JavaScript.

---

## 5. Implementação do `fetch()`

Depois da criação da base de dados, foi implementada a função responsável por carregar os veículos.

```javascript
const resposta = await fetch("data/db.json");
const dados = await resposta.json();
```

Após receber os dados, a aplicação verifica se a resposta foi bem-sucedida e se o objeto recebido possui um array `veiculos`.

Somente depois dessas verificações é realizada a busca pelo veículo correspondente.

---

## 6. Busca do veículo

Com os dados carregados, o método `.find()` é utilizado para localizar o veículo cuja placa corresponde à placa pesquisada.

```javascript
const veiculo = dados.veiculos.find(function (veiculo) {
    return veiculo.placa === placa;
});
```

Esse foi um dos pontos importantes do desenvolvimento, pois foi necessário entender a estrutura do JSON para acessar corretamente o array de veículos.

---

## 7. Validação das placas

A aplicação foi estruturada para aceitar os dois principais formatos de placa utilizados no projeto:

```javascript
const placaAntiga = /^[A-Z]{3}[0-9]{4}$/;
const placaMercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
```

Antes da validação, a entrada do usuário é normalizada:

```javascript
const placa = inputPlaca.value.trim().toUpperCase();
```

Dessa maneira, espaços desnecessários são removidos e letras minúsculas são convertidas para maiúsculas.

Embora a base fictícia utilizada no projeto possua registros no formato Mercosul, a validação foi estruturada para reconhecer também o formato antigo.

---

## 8. Tratamento de mensagens

Durante o desenvolvimento foi criada uma função específica para exibir mensagens utilizando os componentes de alerta do Bootstrap:

```javascript
function mostrarMensagem(texto, tipo) {
    mensagem.innerHTML = `
        <div class="alert alert-${tipo}" role="alert">
            ${texto}
        </div>
    `;
}
```

Isso permitiu reutilizar a mesma função para diferentes situações, alterando apenas o texto e o tipo da mensagem.

---

## 9. Tratamento de erros

A consulta foi estruturada utilizando `try`, `catch` e `finally`.

Com isso, a aplicação consegue lidar com situações como:

* Falha ao carregar os dados;
* Estrutura inválida do JSON;
* Erros durante a consulta;
* Veículo inexistente.

Além disso, o botão de consulta é reativado no bloco `finally`, independentemente do resultado da operação.

---

## 10. Feedback durante a consulta

Para melhorar a experiência do usuário, a aplicação apresenta uma mensagem de carregamento:

> Consultando veículo...

Enquanto a consulta está sendo realizada, o botão também é desabilitado.

Após uma consulta bem-sucedida, a mensagem de carregamento é removida e os dados do veículo são apresentados.

---

## 11. Consulta utilizando a tecla Enter

Além do botão, foi implementada a possibilidade de iniciar a consulta pressionando **Enter** dentro do campo da placa.

```javascript
inputPlaca.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        consultarPlaca();
    }

});
```

Isso torna a interação mais natural para o usuário.

---

## 12. Refinamento visual

Após a implementação da lógica principal, a interface passou por uma etapa de refinamento.

Foram trabalhados:

* Espaçamentos;
* Centralização;
* Responsividade;
* Tamanho da placa;
* Cores;
* Bordas;
* Sombras;
* Estados de foco;
* Organização dos resultados.

Também foram utilizados componentes e classes do Bootstrap em conjunto com CSS próprio.

Para os resultados, por exemplo, foi utilizada uma estrutura baseada em `row` e `col`, permitindo que as informações sejam reorganizadas de acordo com o tamanho da tela.

---

# 🧩 Principais desafios e aprendizados

Durante o desenvolvimento, alguns problemas contribuíram diretamente para o aprendizado.

## Estrutura dos dados

Um dos desafios foi compreender corretamente a estrutura do JSON e acessar o array que continha os veículos.

Isso reforçou a importância de conhecer a estrutura dos dados recebidos antes de tentar manipulá-los.

---

## Diferença entre ano de fabricação e ano do modelo

A base de dados possui tanto `anoFabricacao` quanto `anoModelo`.

Para a apresentação no resultado da consulta, foi escolhido o `anoModelo`.

```javascript
document.getElementById("ano").textContent = veiculo.anoModelo;
```

---

## `Failed to fetch`

Durante os testes surgiu um problema importante ao tentar executar o projeto diretamente pelo arquivo HTML.

Como o JavaScript utiliza:

```javascript
fetch("data/db.json")
```

o navegador precisa conseguir realizar a requisição ao arquivo.

Ao abrir o `index.html` diretamente pelo sistema de arquivos, utilizando o protocolo `file://`, essa requisição pode ser bloqueada pelo navegador.

Por isso, durante o desenvolvimento, o projeto deve ser executado através de um **servidor local**, como o **Live Server**.

Esse foi um aprendizado importante sobre a diferença entre simplesmente abrir uma página HTML e executar uma aplicação através de um servidor.

---

# 📱 Responsividade

A interface foi construída pensando em diferentes tamanhos de tela.

O Bootstrap é utilizado para auxiliar na adaptação do layout, enquanto o CSS utiliza recursos como `width`, `max-width`, `aspect-ratio` e `clamp()` para controlar o comportamento da representação da placa.

O campo da placa, por exemplo, utiliza:

```css
font-size: clamp(1rem, 8vw, 3.5rem);
```

permitindo que o tamanho do texto se adapte ao espaço disponível.

---

# 🚧 Limitações atuais

O projeto possui algumas limitações intencionais.

### API fictícia

Os dados utilizados são fictícios e armazenados localmente em `db.json`.

Portanto, a aplicação **não realiza uma consulta real a bancos de dados governamentais ou serviços comerciais de consulta veicular**.

### Execução local

Como os dados são carregados através de `fetch()`, o projeto precisa ser executado através de um servidor local para que a consulta funcione corretamente.

### Dados limitados

As informações apresentadas dependem dos registros existentes na base de dados fictícia.

---

# 🔮 Possíveis melhorias futuras

Algumas possibilidades para futuras versões do projeto:

* Substituir o `db.json` por uma API real;
* Criar um backend próprio;
* Implementar um banco de dados;
* Adicionar autenticação;
* Adicionar histórico de consultas;
* Permitir pesquisa por outros dados;
* Exibir informações adicionais do veículo;
* Melhorar a experiência de carregamento;
* Implementar uma página de detalhes do veículo;
* Adicionar testes automatizados;
* Publicar a aplicação em um serviço de hospedagem.

---

# ▶️ Como executar o projeto

## 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

## 2. Entre na pasta

```bash
cd PlacaInfo
```

## 3. Inicie um servidor local

O projeto pode ser executado utilizando uma extensão como **Live Server** no Visual Studio Code.

Após iniciar o servidor, abra a aplicação pelo endereço fornecido por ele.

> **Importante:** não abra o `index.html` diretamente pelo explorador de arquivos utilizando `file://`, pois a aplicação precisa carregar o `db.json` através de uma requisição `fetch()`.

## 4. Faça uma consulta

Digite uma das placas existentes na base de dados e clique em **Consultar** ou pressione **Enter**.

---

# 📚 O que este projeto representa

Mais do que uma aplicação de consulta de veículos, o Placa Info representa uma etapa prática do aprendizado em desenvolvimento web.

O projeto permitiu colocar em prática conhecimentos que vão desde a estruturação de uma página HTML até a criação de uma aplicação interativa utilizando JavaScript.

Durante o desenvolvimento, o foco não foi apenas fazer a aplicação funcionar, mas compreender **por que cada parte funciona e como as diferentes tecnologias se relacionam**.

O projeto também serviu para praticar a resolução de problemas encontrados durante o desenvolvimento, transformando erros e limitações em oportunidades de aprendizado.

---

# 👨‍💻 Autor

**Eduardo Ferreira**

Desenvolvedor Web Full Stack em formação.

Este projeto faz parte do meu portfólio e representa minha evolução prática no desenvolvimento de aplicações web.

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.
