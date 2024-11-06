# Estrutura do Projeto e Explicação

## Pastas

### `.next`
- **Descrição**: Essa é a pasta de build gerada automaticamente pelo Next.js quando você executa o projeto (`yarn dev` ou `yarn build`).
- **Função**: Armazena os arquivos de build da aplicação, otimizados para produção ou desenvolvimento. Inclui código pré-renderizado, cache de páginas, e outros arquivos que ajudam a melhorar o desempenho do projeto.
- **Observação**: Geralmente é ignorada pelo Git (presente no `.gitignore`), pois é uma pasta gerada automaticamente.

### `node_modules`
- **Descrição**: Diretório onde o Yarn (ou npm) armazena todas as dependências do projeto.
- **Função**: Contém os pacotes e bibliotecas que o projeto precisa para funcionar, como React, Next.js, Tailwind, entre outros.
- **Observação**: Também é ignorado pelo Git, pois as dependências podem ser reinstaladas a partir do `package.json`.

### `public`
- **Descrição**: Pasta para arquivos públicos, que podem ser acessados diretamente no navegador.
- **Função**: Armazena imagens, ícones, fontes, e outros ativos que serão usados no projeto. Os arquivos nessa pasta são servidos diretamente no navegador, por exemplo, `public/image.jpg` pode ser acessado em `http://localhost:3000/image.jpg`.
- **Observação**: Não é processada pelo Webpack, então tudo aqui é servido "como está".

### `src`
- **Descrição**: A pasta principal de código do projeto.
- **Função**: Geralmente, contém todo o código fonte, incluindo componentes, páginas, estilos, utilitários e qualquer outro código necessário para o funcionamento do projeto.
- **Estrutura Típica**: Dentro de `src`, normalmente, encontramos subpastas como `components`, `pages` (ou `app` no Next.js 13+), `styles`, entre outras.

---

## Arquivos na Raiz do Projeto

### `.eslintrc.json`
- **Função**: Arquivo de configuração para o ESLint, que define regras de linting e estilos de código. Ajuda a manter o código consistente e sem erros comuns.
- **Exemplo de Configuração**: Pode incluir regras como a proibição de `console.log` em código de produção, ou obrigar o uso de ponto e vírgula no final de cada linha.

### `.gitignore`
- **Função**: Lista de arquivos e pastas que o Git deve ignorar e não versionar.
- **Exemplo de Conteúdo**: `node_modules`, `.next`, `.env`, que não são necessários no repositório.

### `.prettierrc`
- **Função**: Arquivo de configuração do Prettier, que define o estilo de formatação do código (ex.: uso de aspas simples, largura máxima de linha, uso de ponto e vírgula).
- **Exemplo de Configuração**: Configurações como `singleQuote: true` (para usar aspas simples) e `printWidth: 100` (para limitar a linha a 100 caracteres).

### `next-env.d.ts`
- **Função**: Arquivo de declaração de tipos gerado automaticamente pelo Next.js para o TypeScript. Define tipos específicos do Next.js para que o TypeScript compreenda as APIs e funcionalidades do framework.
- **Observação**: Esse arquivo não deve ser editado manualmente, pois é gerado e atualizado automaticamente.

### `next.config.js`
- **Função**: Arquivo de configuração do Next.js, usado para personalizar o comportamento do framework, como otimização de imagem, redirects, configurações de roteamento, e muito mais.
- **Exemplo de Configuração**: Configurações como habilitar imagens externas ou configurar redirects de rotas.

### `package.json`
- **Função**: Arquivo principal de configuração do projeto Node.js. Define as dependências (pacotes que o projeto usa), scripts de execução (`yarn dev`, `yarn build`), e outras informações do projeto.
- **Exemplo de Conteúdo**: Dependências como `react`, `next`, `tailwindcss` e scripts como `"dev": "next dev"` para iniciar o servidor de desenvolvimento.

### `postcss.config.js`
- **Função**: Arquivo de configuração para o PostCSS, uma ferramenta de processamento de CSS. Necessário para o Tailwind CSS.
- **Exemplo de Configuração**: Plugins como `tailwindcss` e `autoprefixer`, que adicionam funcionalidades e compatibilidade ao CSS.

### `README.md`
- **Função**: Arquivo de documentação do projeto, onde normalmente se descreve o propósito do projeto, como instalar e rodar o projeto, e outros detalhes importantes para desenvolvedores ou colaboradores.
- **Exemplo de Conteúdo**: Instruções como `yarn install` para instalar dependências e `yarn dev` para iniciar o projeto localmente.

### `tailwind.config.js`
- **Função**: Arquivo de configuração para o Tailwind CSS, onde se define temas personalizados, cores, fontes, e outras configurações de estilo.
- **Exemplo de Configuração**: Configuração de temas customizados, especificação de onde Tailwind deve procurar por classes usadas (`content`), entre outros.

### `tsconfig.json`
- **Função**: Arquivo de configuração do TypeScript. Define as opções do compilador TypeScript, como quais diretórios incluir/excluir, regras de tipo e restrições.
- **Exemplo de Configuração**: `strict: true` para garantir verificação estrita de tipos e `include` para incluir arquivos específicos no projeto.

### `yarn.lock`
- **Função**: Arquivo de lock do Yarn, que garante que todos os desenvolvedores e ambientes usem as mesmas versões das dependências.
- **Exemplo de Conteúdo**: Especificações detalhadas das versões exatas das dependências e suas dependências internas, para garantir consistência no ambiente de desenvolvimento.
