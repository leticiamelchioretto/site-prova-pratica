# Banco de dados da Aliança Rebelde
 
Página web sobre o universo de Star Wars, feita com HTML, CSS e JavaScript puros (sem frameworks ou bibliotecas). O projeto reúne uma pequena enciclopédia de personagens, naves e planetas e uma calculadora de tempo de viagem pelo hiperespaço.
 
## Funcionalidades
 
### Enciclopédia
- Cards organizados em cinco painéis: Lado Luminoso, Lado Sombrio, Não sensitivos à Força, Naves e Planetas.
- Painéis expansivos: ao clicar no título de um painel, ele abre e os outros se fecham. Clicar no painel já aberto o fecha.
- Itens do Universo Legends (histórias que deixaram de ser oficiais em 2014, quando a Disney comprou a Lucasfilm) são marcados com uma etiqueta no card.

### Calculadora de viagem pelo hiperespaço
- O usuário informa a distância (em anos-luz) e a velocidade** da nave (em anos-luz por hora).
- A página calcula o tempo da viagem em horas e em dias.
- Validação dos campos, com mensagens de erro para:
  - campo vazio;
  - valor que não é número;
  - valor menor ou igual a zero.
- Aceita vírgula como separador decimal (`12,5` é tratado como `12.5`).

## Estrutura do projeto
 
```
projeto/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── fundo.webp
    ├── luke-skywalker.webp
    ├── darth-vader.webp
    └── ... (demais imagens dos cards)
```
 
| Arquivo | Função |
|---|---|
| `index.html` | Estrutura da página: menu, enciclopédia e formulário da calculadora. |
| `css/style.css` | Aparência da página: fundo, cores, painéis, cards, formulário e responsividade. |
| `js/script.js` | Comportamento: abrir/fechar painéis, validar o formulário e calcular a viagem. |
| `img/` | Imagem de fundo e imagens dos cards. |
 
## Como executar
 
Não é preciso instalar nada.
 
1. Baixe ou clone o projeto.
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).

## Tecnologias
 
- HTML5
- CSS3 
- JavaScript 

### Auxilio de Inteligencia Artificial
Ouve uso do Claude para auxilio no desenvolvimento do JavaScipt do projeto além para aprender a fazer as sessões expansivas do projeto


## Autor
 
Projeto desenvolvido por Letícia Melchioretto da turma  EMDS 2025/1 M3, Curso Técnico de Desenvolvimento de Sistemas, matéria Programação de Aplicativos.