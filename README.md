<p align="center">
  <a href="https://antonionarcilio-move-it.vercel.app">
    <img title="Visualizar aplicação" width="25%" src="./.github/move-it.svg">
  </a>
</p>

<h4 align="center">

[Descrição](#desc) ✦ [Tecnologias](#tec) ✦ [Projeto](#Projeto) ✦ [Prototipagem](#prototipagem) ✦ [Rodando localmente](#local) ✦ [Licença](#lic)

</h4>

<br>

<h2 id="desc">
💟 Sobre o projeto
</h2>

<p align="justify">
O <b>Move it</b> é uma aplicação desenvolvida com o intuito de ajudar aqueles que passam um bom tempo à frente do computador, como é o caso de nós <i>desenvolvedores</i> 👨‍💻.
<br/>
O que acontece é que essas pessoas com o passar do tempo, acabam desenvolvendo certos problemas gerados por esse uso excessivo, seja eles nas articulações ou nos olhos gerando problema de visão. Com isso o <i>Move it</i> entra para ajudar, unido a <i><u> técnica de pomodoro</u></i> com os exercícios/alongamentos que "ajudam a evitar esse problema citado acima". Tudo isso junto em uma aplicação que usa a gamificação para deixar os desafios mais divertidos.
</p>

<h2 id="tec">
🛸 Tecnologias
</h2>

<a href="https://reactjs.org">
 <img alt="reactjs" title="reactjs" src="https://img.shields.io/static/v1?label=React&message=Javascript%20library&style=social&logo=React&logoColor=0088CC" />
</a>

<br/>

<p align="left">
<a href="https://nextjs.org">
 <img alt="nextjs" title="nextjs" src="https://img.shields.io/static/v1?label=next%20js&message=Framework%20react&style=social&logo=Next.js&logoColor=black" />
</a>

<br/>

<a href="https://www.typescriptlang.org/download">
 <img alt="typescript" title="typescript" src="https://img.shields.io/static/v1?label=TypeScript&message=Typed%20JavaScript&style=social&logo=typescript&logoColor=27609E" />
</a>

<br/>

<a href="">
 <img alt="vercel" title="vercel" src="https://img.shields.io/static/v1?label=Styled%20Components&message=Library, CSS in JS&&style=social&logo=Styled-Components" />
</a>

<br/>

<a href="https://vercel.com">
 <img alt="vercel" title="vercel" src="https://img.shields.io/static/v1?label=vercel&message=Deploy&&style=social&logo=Vercel" />
</a>

<br>

<a href="https://www.figma.com/file/cniET9Xo3ZIwoqJ4PWcovu/Move.it-1.0?node-id=160%3A2761">
 <img alt="figma" title="figma" src="https://img.shields.io/static/v1?label=Figma&message=Project%20prototyping&style=social&logo=Figma&logoColor=F24E1E" />
</a>

<br>

<a href="https://www.framer.com/motion/">
 <img alt="framer-motion" title="framer-motion" src="https://img.shields.io/static/v1?label=Framer-Motion&message=Motion%20library%20for%20React&style=social&logo=Framer&logoColor=0055FF" />
</a>

<br>

<a href="https://lottiefiles.com">
 <img alt="Lottie Files" title="Lottie Files" src="https://img.shields.io/static/v1?label=Lottie%20Files&message=Animations&style=social&logo=&logoColor=F24E1E" />
</a>

<br>

<h2>⚔ Funcionalidades</h2>

- [x] Opção de `Iniciar um ciclo` para receber um desafio.
- [x] `Barra de progresso` (xp) do usuário atual.
- [x] `Numero de desafios concluído`.
- [x] `Receber um desafio`, quando o tempo estipulado (25 min) do ciclo chegar ao fim.
- [x] `Notificação` quando o ciclo chega ao fim.
- [x] Opções de `desafio concluído` ou `desafio não concluído` ao receber um desafio.
- [x] Disponibilidade para `iniciar um novo ciclo` ao selecionar desafio não concluído.
- [x] `Receber experiencia` ao concluir um desafio.
- [x] `Subir de nível` ao obter a quantidade estipulada para ir para o próximo level.
- [x] `Animação` ao subir de level.
- [x] `Navegação` entre pagina pelo side bar.

<br>

<h2 id="Projeto">
👔 Projeto
</h2>

<a href="https://antonionarcilio-move-it.vercel.app">
<img title="move.it" src="./.github/moveit-display.png">
</a>
<h6 align="center">Clique na imagem para visualizar a aplicação</h6>

<br>

<h2>🖥 Capturas de tela</h2>

<table>
  <tr align="center">
    <td><h5>Notificação</h5></td>
    <td><h5>Subindo de level</h5></td>
  </tr>
  <tr>
    <td><img src="./.github/notification.webp"></td>
    <td><img src="./.github/levelup.webp"></td>
  </tr>
  <tr>
</table>

<br>

<h2 id="prototipagem">
✈ Prototipagem
</h2>

<a href="https://www.figma.com/file/cniET9Xo3ZIwoqJ4PWcovu/Move.it-1.0?node-id=160%3A2761">
<img title="move.it" src="./.github/prototipagem.png">
</a>
<h6 align="center">Clique na imagem para ver o projeto no figma</h6>

<br>

<h2 id="local">
⚛ Rodando aplicação localmente
</h2>

> **⚠ Atenção !** <br> Antes de prosseguir com o passo a passo abaixo você precisa ter instalado em sua máquina o gerenciador de pacote [yarn](https://classic.yarnpkg.com/en/docs/install).

<br>

> 📝 Clonando o repositório e entrando no diretório criado.

```shell
git clone git@github.com:antonionarcilio/move-it.git && cd move-it
```

> 📝 Baixando / Instalando dependências.

```shell
yarn install
```

> 📝 Rodando Aplicação

```shell
yarn dev
```

> Pronto 🎉 se tudo ocorreu conforme o esperado 😁 a aplicação estará
> rodando na porta 3000. Basta acessar o endereço no navegador
> http://localhost:3000 e você verá a aplicação funcionando.

<br>

<h2 id="lic">
📃 Licença
</h2>

Este projeto esta sobe a licença [MIT](./LICENSE).

created by [Antonio Narcilio](https://github.com/AntonioNarcilio) ft. [Rocketseat](https://github.com/Rocketseat)
