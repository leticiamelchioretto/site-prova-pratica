const secoes = document.querySelectorAll("section.painel-expansivel");

secoes.forEach(function (secao) {
  const botao = secao.querySelector("button");

  // aria-expanded avisa o leitor de tela se a seção está aberta
  botao.setAttribute("aria-expanded", secao.classList.contains("aberta"));

  botao.addEventListener("click", function () {
    // Vê se essa seção já estava aberta
    const estavaAberta = secao.classList.contains("aberta");

    // Fecha todas
    secoes.forEach(function (s) {
      s.classList.remove("aberta");
      s.querySelector("button").setAttribute("aria-expanded", "false");
    });

    // Se estava fechada, abre
    if (!estavaAberta) {
      secao.classList.add("aberta");
      botao.setAttribute("aria-expanded", "true");
    }
  });
});


const formulario = document.getElementById("formulario");
const caixaErro = document.getElementById("mensagem-erro");
const caixaResultado = document.getElementById("resultado");

// Lê um campo numérico e confere se está correto.
// Se algo estiver errado, lança um erro (throw) com a mensagem para o usuário.
function lerNumero(idDoCampo, nomeDoCampo) {
  // Tira os espaços e troca vírgula por ponto (12,5 vira 12.5)
  const texto = document.getElementById(idDoCampo).value.trim().replace(",", ".");

  if (texto === "") {
    throw new Error('Preencha o campo "' + nomeDoCampo + '".');
  }

  const numero = Number(texto);

  if (!Number.isFinite(numero)) {
    throw new Error('O campo "' + nomeDoCampo + '" precisa ser um número.');
  }

  if (numero <= 0) {
    throw new Error('O campo "' + nomeDoCampo + '" precisa ser maior que zero.');
  }

  return numero;
}

// Envio do formulário
formulario.addEventListener("submit", function (evento) {
  // Impede a página de recarregar
  evento.preventDefault();

  // Apaga as mensagens do envio anterior
  caixaErro.textContent = "";
  caixaResultado.textContent = "";

  try {
    const distancia = lerNumero("distancia", "Distância");
    const velocidade = lerNumero("velocidade", "Velocidade");

    // Cálculo: tempo = distância / velocidade
    const horas = distancia / velocidade;
    const dias = horas / 24;

    caixaResultado.textContent =
      "A viagem leva " + horas + " horas. Em dias, isso dá " + dias + ".";

  } catch (erro) {
    // Qualquer erro lançado acima cai aqui e vira mensagem na página
    caixaErro.textContent = erro.message;
  }
});