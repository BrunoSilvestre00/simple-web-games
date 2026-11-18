# Simple Web Games

Jogos de navegador feitos com React, TypeScript e styled-components.

**[Jogar online](https://brunosilvestre00.github.io/simple-web-games/)**

- Jogo da Velha
- Genius
- Jogo da Forca
- Campo Minado: estrutura inicial, ainda em desenvolvimento

## Desenvolvimento

Use Node.js 26 LTS (a versão está em `.nvmrc`) e Yarn Classic 1.22.22.

```sh
nvm install
nvm use
npm install --global yarn@1.22.22
yarn install --frozen-lockfile
yarn start
```

No nvm-windows, use `nvm install 26.13.1` e `nvm use 26.13.1`.
No PowerShell com scripts bloqueados, use `npm.cmd`, `npx.cmd` e `yarn.cmd`.

A aplicação fica disponível em `http://localhost:3000`.

```sh
yarn lint
yarn format:check
yarn typecheck
yarn test
yarn build
```

`yarn build` verifica os tipos e gera os arquivos estáticos em `dist/`.
`yarn format` aplica a formatação e `yarn lint:fix` corrige os problemas automáticos de lint.

## Estrutura

```text
src/
  components/       Componentes compartilhados pelos jogos
  pages/            Páginas e componentes de cada jogo
  routes/           Rotas e layout compartilhado
  App.tsx
  index.tsx
public/             Templates HTML da aplicação e do redirecionamento
tests/              Testes com o executor nativo do Node.js
.github/workflows/  Validação e publicação no GitHub Pages
```

O Webpack já presente no projeto concentra o desenvolvimento e o build.
O caminho duplicado de build com `react-scripts` foi removido.
React 19, React Router 7 e styled-components 6 mantêm a stack original.
TypeScript 6 e ESLint 9 foram mantidos nas versões compatíveis com os plugins de lint.
As dependências têm versões fixas e o `yarn.lock` deve ser versionado.

Na auditoria de 18/11/2026, as dependências de produção não apresentaram alertas.
As ferramentas de desenvolvimento ainda dependem de `picomatch`, que tem um
[alerta de ReDoS sem versão corrigida disponível](https://github.com/advisories/GHSA-fc5q-39xc-vjpf).

## GitHub Pages e CI/CD

O workflow `CI and GitHub Pages` executa lint, formatação, testes e build nas
pull requests e nos pushes para `master`. Depois das verificações, os pushes
para `master` publicam `dist/` no GitHub Pages. Também é possível executar o
workflow manualmente pela aba **Actions**.

Em **Settings → Pages → Build and deployment → Source**, o repositório deve usar
**GitHub Actions**. A publicação não depende da branch `gh-pages` nem de tokens
adicionais: usa as permissões do próprio workflow.

As rotas usam `HashRouter`, por exemplo:

```text
https://brunosilvestre00.github.io/simple-web-games/#/tic-tac-toe
https://brunosilvestre00.github.io/simple-web-games/#/genesis
https://brunosilvestre00.github.io/simple-web-games/#/hangman
```

O fragmento `#` permite abrir e recarregar os jogos em hospedagem estática.
O `404.html` redireciona os links antigos, como `/simple-web-games/hangman`,
para a rota correspondente. Ao publicar em outro caminho, ajuste `homepage`
no `package.json`, usado para gerar esse redirecionamento.
