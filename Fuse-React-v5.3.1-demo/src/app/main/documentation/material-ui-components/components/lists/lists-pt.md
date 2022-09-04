---
title: React List component
components: Collapse, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader
---

# Listas

<p class="description">Listas são continuas, apresentam verticalmente texto ou imagens.</p>

[Listas](https://material.io/design/components/lists.html) são um grupo contínuo de texto ou imagens. Elas são compostas por itens contendo ações primárias e complementares, que são representados por ícones e texto.

## Lista Simples

{{"demo": "pages/components/lists/SimpleList.js", "bg": true}}

O último item da demonstração anterior mostra como você pode renderizar um link:

```jsx
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//...

<ListItemLink href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemLink>
```

Você pode encontrar uma [demonstração com React Router seguindo esta seção](/guides/composition/#react-router) da documentação.

## Lista Aninhada

{{"demo": "pages/components/lists/NestedList.js", "bg": true}}

## Lista de Pastas

{{"demo": "pages/components/lists/FolderList.js", "bg": true}}

## Interativo

Abaixo está uma demonstração interativa que permite explorar os resultados visuais das diferentes configurações:

{{"demo": "pages/components/lists/InteractiveList.js", "bg": true}}

## Lista com item selecionado

{{"demo": "pages/components/lists/SelectedListItem.js", "bg": true}}

## Alinhar itens da lista

Você deve alterar o alinhamento do item da lista ao exibir 3 linhas ou mais, alterando a propriedade `alignItems="flex-start"`.

{{"demo": "pages/components/lists/AlignItemsList.js", "bg": true}}

## Controles de Lista

### Caixa de seleção

Uma caixa de seleção pode ser uma ação primária ou uma ação secundária.

A caixa de seleção é a ação principal e o indicador de estado para o item da lista. O botão de comentário é uma ação secundária e um destino separado.

{{"demo": "pages/components/lists/CheckboxList.js", "bg": true}}

A caixa de seleção é uma ação secundária, sem interferir com o estado do item da lista.

{{"demo": "pages/components/lists/CheckboxListSecondary.js", "bg": true}}

### Interruptor

O interruptor é uma ação secundária, sem interferir com o estado do item da lista.

{{"demo": "pages/components/lists/SwitchListSecondary.js", "bg": true}}

## Lista com subtítulo fixado

Após a rolagem, os subtítulos permanecem fixos na parte superior da tela até serem empurrados para fora da área de visualização pelo próximo subtítulo.

Esse recurso depende do posicionamento fixo do CSS. Infelizmente, [não é implementado](https://caniuse.com/#search=sticky) por todos os navegadores. O padrão é `disableSticky` quando não é suportado.

{{"demo": "pages/components/lists/PinnedSubheaderList.js", "bg": true}}

## Lista de inclusão

{{"demo": "pages/components/lists/InsetList.js", "bg": true}}

## Lista virtualizada

No exemplo a seguir, nós demonstramos como usar a biblioteca [react-window](https://github.com/bvaughn/react-window) com o componente `List`. Ela renderiza 200 linhas e pode facilmente lidar com mais. A virtualização ajuda a lidar com problemas de desempenho.

{{"demo": "pages/components/lists/VirtualizedList.js", "bg": true}}

O uso da biblioteca [react-window](https://github.com/bvaughn/react-window), quando possível, é recomendado. Se no seu caso esta biblioteca não resolver, você deve considerar o uso de [react-virtualized](https://github.com/bvaughn/react-virtualized), e em seguida, como alternativa [react-virtuoso](https://github.com/petyosi/react-virtuoso).

## Customização

🎨 Se você está procurando inspiração, você pode verificar [os exemplos de customização de MUI Treasury](https://mui-treasury.com/styles/list-item).