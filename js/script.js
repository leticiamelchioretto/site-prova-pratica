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
