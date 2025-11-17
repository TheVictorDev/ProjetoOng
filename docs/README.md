# Plataforma para ONG – Projeto Acadêmico

Este projeto foi desenvolvido como parte de exercícios acadêmicos de desenvolvimento web. O objetivo é criar uma plataforma simples, responsiva e acessível para uma ONG fictícia, utilizando HTML, CSS e JavaScript puro, com navegação em estilo SPA (Single Page Application).

## Funcionalidades Principais

A plataforma foi desenhada para atender às necessidades de diferentes usuários, incluindo administradores, voluntários, doadores e visitantes.

*   **Área Institucional:** Apresentação da ONG, sua missão, visão, valores e relatórios de transparência.
*   **Gestão de Projetos:** Cadastro e visualização de projetos com galerias de fotos, vídeos e indicadores de impacto.
*   **Engajamento de Voluntários:** Portal para encontrar e se inscrever em oportunidades de voluntariado.
*   **Captação de Recursos:** Campanhas de arrecadação com sistema de doações online e acompanhamento de metas.
*   **Comunicação:** Blog de notícias, newsletter e central de documentos para manter a transparência.

## Tecnologias Utilizadas

*   **HTML5:** Para uma estrutura semântica, acessível e bem organizada.
*   **CSS3:** Para estilização moderna, criação de leiautes responsivos com Flexbox e Grid, e um sistema de design consistente.
*   **JavaScript (Puro):** Para interatividade, manipulação do DOM, validação de formulários e implementação da navegação SPA.

## Implementação Técnica

### Entrega I – Fundamentos e Estruturação (HTML5)

*   **Estrutura Semântica:** O projeto conta com 3 páginas principais (`index.html`, `projetos.html`, `cadastro.html`) utilizando tags semânticas do HTML5 (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, etc.) para garantir a acessibilidade e a organização do conteúdo.
*   **Formulários Complexos:** A página de cadastro (`cadastro.html`) possui um formulário completo com tipos de input específicos do HTML5 (email, date, tel) e validações nativas (`required`, `pattern`).
*   **Máscaras de Input:** Foram aplicadas máscaras para os campos de CPF, telefone e CEP para melhorar a experiência do usuário.

### Entrega II – Estilização e Leiautes (CSS3)

*   **Sistema de Design:** Foi criado um Design System coeso utilizando variáveis CSS, com paleta de cores, tipografia hierárquica e sistema de espaçamento modular.
*   **Leiautes Responsivos:** O design é *mobile-first* e totalmente responsivo, utilizando **CSS Grid** para a estrutura principal e **Flexbox** para componentes internos. Foram definidos múltiplos breakpoints para garantir a adaptação em diferentes tamanhos de tela.
*   **Componentes Reutilizáveis:** Foram desenvolvidos componentes de interface como cards para projetos, botões com diferentes estados (`:hover`, `:focus`, etc.) e um menu de navegação responsivo com submenu (dropdown) e versão mobile (hambúrguer).

### Entrega III – Interatividade e Funcionalidades (JavaScript)

*   **Navegação do tipo SPA (Single Page Application):** O site utiliza uma mini-SPA construída manualmente com JavaScript:
    *   Links com o atributo `data-spa` não recarregam a página.
    *   O JavaScript intercepta o clique, faz `fetch()` da página clicada e injeta o conteúdo dinamicamente dentro da tag `<main>`.
*   **Validação de Formulários:** Implementado um sistema de verificação de consistência de dados nos formulários, exibindo avisos ao usuário em caso de preenchimento incorreto, tudo via JavaScript.

### Entrega IV – Versionamento, Acessibilidade e Deploy

*   **Controle de Versão (Git/GitHub):**
    *   **GitFlow:** O projeto seguiu uma estratégia de branching baseada no GitFlow para organizar o desenvolvimento.
    *   **Commits Semânticos:** O histórico de commits é limpo e organizado, seguindo a convenção de Commits Semânticos.
*   **Acessibilidade (WCAG 2.1 Nível AA):**
    *   **Navegação por Teclado:** Todos os elementos interativos são acessíveis via teclado.
    *   **Contraste de Cores:** A paleta de cores foi escolhida para garantir um contraste mínimo de 4.5:1.
    *   **Leitores de Tela:** A estrutura semântica e o uso de atributos ARIA garantem compatibilidade com leitores de tela.
    *   **Modo Escuro:** Foi implementada uma versão de alto contraste (modo escuro) para melhorar a acessibilidade.
*   **Otimização para Produção:**
    *   **Minificação:** Os arquivos CSS e JavaScript foram minificados.
    *   **Compressão de Imagens:** As imagens foram otimizadas para garantir um tempo de carregamento rápido (inferior a 5 segundos).

## Estrutura de Pastas

O projeto está organizado da seguinte forma para manter o código limpo e modular:

/
├── css/
│ └── styles.css
├── js/
│ └── app.js
├── images/
│ └── [imagens do projeto]
├── docs/
│ └── README.md
├── index.html
├── projetos.html
├── cadastro.html
└── .gitignore

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd seu-repositorio
    ```
3.  **Abra o arquivo `index.html` no seu navegador de preferência.**

Pronto! A plataforma estará rodando localmente no seu navegador.