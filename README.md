# Chocolate Shopping Cart

Projeto criado colocando em prática os conhecimentos adquiridos em Front-End,  onde crio uma aplicação web desenvolvendo um “Carrinho de compras”, usando uma API armazenada neste projeto em './src/data' e listando os produtos exibindo o total da compra e uma mensagem informando se o pedido possui frete grátis.

---

# Sumário

- [Status](#status)
- [Habilidades desenvolvidas](#habilidades-desenvolvidas)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Organização e Estrutura do Projeto](#organização-e-estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
  - [Ferramentas necessárias](#ferramentas-necessárias)
  - [Rodando a aplicação local](#rodando-a-aplicação-local)
  - [Rodando a aplicação no heroku](#rodando-a-aplicação-no-heroku)
- [Autora](#autora)

---

# Status

Este projeto foi construído para um teste na empresa Codeby.

---

# Habilidades desenvolvidas

- Exercitar os conceitos básicos do JavaScript e React enquanto Framework;
- Realizar chamadas de funções de forma consciente;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Exercitar e aplicar hooks para tornar função acessível para outros componentes.
- Exercitar e aplicar hooks do react para gerenciamento de estados.
- Exercitar o uso de lógica de programação;
- Entender e desenvolver o CSS para estilizar a página;
- Exercitar a componentização de partes do código;
- Entender e aplicar os conceitos de markdown na criação de um README estruturado;
- Realizar o Deploy da aplicação no heroku;

---

# Tecnologias utilizadas

- [React](https://pt-br.reactjs.org/)
- [Heroku](https://www.heroku.com/)
- [GoogleFonts](https://fonts.google.com/)

---

# Organização e Estrutura do Projeto

O projeto está organizado e estruturado da seguinte maneira:

```bash
├── public
│    ├── favicon.ico
│    └── index.html
└── src
│    ├── components
│    │   ├── DataDownList.js
│    │   ├── DataUpList.js
│    │   └── InitialPage.js
│    ├── data
│    │   ├── data_down.js
│    │   └── data_up.js
│    ├── hooks
│    │   └── convertNumber.js
│    ├── styles
│    │   ├── App.css
│    │   ├── data.css
│    │   ├── index.css
│    │   └── initialPage.css
│    ├── App.js
│    ├── index.js
│    ├── reportWebVitals.js
│    └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```

# Pré-requisitos

## Ferramentas necessárias

Para rodar o projeto, você vai precisar instalar as seguintes ferramentas:
 - [Git](https://git-scm.com);
 - Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) ou outro de sua preferência;

## Rodando a aplicação local

 - Clone o Projeto e instale as dependências

    ```bash
    # Clone este repositório
     # via HTTPS
    $ git clone https://github.com/CamilaDamasio/shopping_cart.git
      # via SSH
    $ git clone git@github.com:CamilaDamasio/shopping_cart.git

    # Acesse a pasta do projeto no terminal/cmd
    $ cd shopping_cart

    # Instale as dependências
    $ npm install

    ```

 - Inicie o sistema:

    ```bash
    # Inicie o sistema
    $ npm start

    ```

## Rodando a aplicação no Heroku

  O deploy desta aplicação foi hospedada no heroku.

  - link: [https://shopping-cart-chocolate.herokuapp.com/](https://shopping-cart-chocolate.herokuapp.com/)

---

# Autora

  Camila de Souza Damásio
<br />
  Estudante de Desenvolvimento WEB na Trybe, sempre aprendendo algo novo e eterna apaixonada por tecnologia!

  <a href="https://www.linkedin.com/in/camilasdamasio/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

---