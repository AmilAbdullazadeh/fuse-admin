---
title: React Pagination component
components: Pagination, PaginationItem
---

# Paginação

<p class="description">O componente de paginação permite ao usuário selecionar uma página específica a partir de um intervalo de páginas.</p>

## Paginação básica

{{"demo": "pages/components/pagination/BasicPagination.js"}}

## Paginação delineada

{{"demo": "pages/components/pagination/PaginationOutlined.js"}}

## Paginação arredondada

{{"demo": "pages/components/pagination/PaginationRounded.js"}}

## Tamanho da paginação

{{"demo": "pages/components/pagination/PaginationSize.js"}}

## Botões

Você pode habilitar opcionalmente  os botões de primeira página e de última página, ou desabilitar botões de página anterior e de próxima página.

{{"demo": "pages/components/pagination/PaginationButtons.js"}}

## Intervalos de paginação

Você pode especificar quantos dígitos exibir a qualquer lado da página atual com a propriedade `siblingRange`, e adjacente ao número da página inicial e final com a propriedade `boundaryRange`.

{{"demo": "pages/components/pagination/PaginationRanges.js"}}

## Paginação controlada

{{"demo": "pages/components/pagination/PaginationControlled.js"}}

## Integração com router

{{"demo": "pages/components/pagination/PaginationLink.js"}}

## `usePagination`

For advanced customization use cases, we expose a headless `usePagination()` hook. Ele aceita quase as mesmas opções que o componente de paginação, menos todas as propriedades relacionadas à renderização de JSX. O componente de paginação usa este hook internamente.

```jsx
import { usePagination } from '@material-ui/lab/Pagination';
```

{{"demo": "pages/components/pagination/UsePagination.js"}}

## Paginação em tabelas

O componente `Pagination` foi projetado para paginar uma lista de itens arbitrários quando a carga infinita não é usada. É preferível em contextos onde o SEO é importante, por exemplo, um blog.

Para a paginação de um conjunto grande de dados tabulares, você deve usar o componente `TablePagination`.

{{"demo": "pages/components/pagination/TablePagination.js"}}

Você pode aprender mais sobre este caso de uso na [seção de tabela](/components/tables/#custom-pagination-options) da documentação.

## Acessibilidade

### ARIA

O nó raiz tem uma role de "navigation" e o rótulo aria-label "pagination navigation" por padrão. Os itens da página têm um rótulo aria-label que identifica a finalidade do item ("go to first page", "go to previous page", "go to page 1" etc.). Você pode substituir estes padrões usando a propriedade `getItemAriaLabel`.

### Teclado

Os itens de paginação estão em ordem de tabulação, com um índice de tabulação iniciando em "0".
