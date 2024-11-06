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

# Estrutura do Diretório `src`

## 1. `app`
- **Descrição**: Contém as páginas e rotas principais da aplicação.
- **Função**: Este é o diretório onde estão as páginas que compõem o aplicativo Next.js. Cada subpasta ou arquivo dentro de `app` representa uma rota na aplicação, por exemplo, `app/home` pode representar a rota `/home`.
- **Observação**: Este diretório é a base para o roteamento de páginas no Next.js, e os arquivos `page.tsx` dentro de cada subpasta representam o conteúdo dessas rotas.

## 2. `components`
- **Descrição**: Armazena os componentes reutilizáveis da interface do usuário (UI).
- **Função**: Os componentes dentro desta pasta são blocos de construção reutilizáveis que podem ser utilizados em várias partes da aplicação. Eles ajudam a criar uma UI consistente e modular, como botões, formulários, cabeçalhos, rodapés, etc.
- **Observação**: Manter os componentes isolados facilita a manutenção e a reutilização de elementos de UI, melhorando a consistência visual do projeto.

## 3. `interfaces`
- **Descrição**: Contém definições de interfaces TypeScript utilizadas no projeto.
- **Função**: As interfaces definem a estrutura e os tipos dos dados que o projeto utiliza, fornecendo segurança de tipo no TypeScript. Isso ajuda a garantir que os dados sejam passados corretamente entre os componentes, evitando erros comuns de tipagem.
- **Observação**: Este diretório é essencial para o desenvolvimento com TypeScript, pois ajuda a manter a consistência dos dados em toda a aplicação.

## 4. `styles`
- **Descrição**: Contém os arquivos de estilo global e temas do projeto.
- **Função**: Os arquivos aqui são responsáveis por definir estilos globais, configurações de tema, e quaisquer outras regras CSS que se aplicam em toda a aplicação. Isso inclui arquivos CSS, SCSS ou configurações específicas para frameworks de estilo como Tailwind CSS.
- **Observação**: Centralizar os estilos globais e temas facilita a gestão de estilos em um único local, assegurando uma aparência consistente em todo o projeto.

## 5. `utils`
- **Descrição**: Armazena funções utilitárias e helpers.
- **Função**: Contém funções auxiliares e utilitárias que podem ser reutilizadas em várias partes do código, como formatação de datas, manipulação de strings, ou qualquer outra funcionalidade que seja útil em diferentes contextos do projeto.
- **Observação**: Manter funções utilitárias em `utils` ajuda a evitar duplicação de código e melhora a organização, pois concentra as funções genéricas e auxiliares em um único local.

# Estrutura do Diretório `src/app`

## Pastas e Arquivos

### `articles`
- **Descrição**: Pasta que representa a seção ou página de "Artigos" no projeto.
- **Arquivos**:
  - **`page.tsx`**: Arquivo que define o conteúdo e layout da página de artigos. Este arquivo serve como a entrada principal para a rota `/articles`, exibindo uma lista de artigos ou conteúdo relacionado a essa seção.

### `education`
- **Descrição**: Pasta que representa a seção ou página de "Educação" no projeto.
- **Arquivos**:
  - **`page.tsx`**: Arquivo que define o conteúdo e layout da página de educação. Esse arquivo serve como a entrada principal para a rota `/education`, onde é possível mostrar informações sobre a formação educacional, cursos ou qualificações.

### `experience`
- **Descrição**: Pasta que representa a seção ou página de "Experiência" no projeto.
- **Arquivos**:
  - **`page.tsx`**: Arquivo que define o conteúdo e layout da página de experiência. Ele serve como a entrada principal para a rota `/experience`, exibindo informações sobre a experiência profissional, projetos anteriores, ou outras atividades relevantes.

### `resume`
- **Descrição**: Pasta que representa a seção ou página de "Resumo" (ou currículo) no projeto.
- **Arquivos**:
  - **`page.tsx`**: Arquivo que define o conteúdo e layout da página de resumo ou currículo. Esse arquivo serve como a entrada principal para a rota `/resume`, onde pode ser mostrado um resumo das qualificações, habilidades e experiências de forma condensada.

### Arquivos na Raiz de `src/app`

- **`page.tsx`**: 
  - **Função**: Esse é o arquivo que define a página principal da aplicação (geralmente a homepage ou a página de introdução). Ele serve como a entrada principal para a rota raiz `/` do projeto.

- **`error.tsx`**: 
  - **Função**: Arquivo que define a página de erro, exibida para o usuário em caso de problemas na navegação ou carregamento de conteúdo. É usado para lidar com erros de forma personalizada, proporcionando uma experiência amigável para o usuário.

- **`layout.tsx`**: 
  - **Função**: Define o layout padrão para as páginas da aplicação. Este arquivo controla o design e a estrutura comuns, como cabeçalhos, rodapés e barras de navegação, garantindo consistência visual em todas as páginas.

- **`loading.tsx`**: 
  - **Função**: Arquivo que define um componente de carregamento (loading). Este componente é exibido enquanto a página ou conteúdo está sendo carregado, proporcionando feedback visual ao usuário e melhorando a experiência de navegação.

- **`not-found.tsx`**: 
  - **Função**: Arquivo que define a página "Não Encontrado" (404), exibida quando o usuário tenta acessar uma rota inexistente. Esse arquivo fornece uma experiência amigável para informar que a página requisitada não foi encontrada.

---

Cada pasta dentro de `src/app` representa uma seção específica da aplicação, enquanto os arquivos na raiz do diretório controlam o layout geral, o comportamento de carregamento, erros e a homepage. Essa estrutura organizada permite que cada rota e funcionalidade tenha seu próprio espaço, facilitando a manutenção e a navegação no projeto.
