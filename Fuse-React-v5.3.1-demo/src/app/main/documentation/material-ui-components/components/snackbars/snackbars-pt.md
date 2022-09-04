---
title: React Snackbar component
components: Snackbar, SnackbarContent
---

# Snackbar

<p class="description">Snackbars fornecem mensagens breves sobre os processos de aplicativos. O componente também é conhecido como toast(torrada).</p>

[Snackbars](https://material.io/design/components/snackbars.html) informam aos usuários de um processo que a aplicação realizou ou irá executar. Eles aparecem temporariamente, na parte inferior da tela. Eles não devem interromper a experiência do usuário e não exigem ação do usuário para desaparecerem.

Snackbars contêm uma única linha de texto diretamente relacionada à operação realizada. Eles podem conter uma ação de texto, mas não ícones. Você pode usá-los para exibir notificações.

#### Frequência

Apenas um snackbar pode ser exibido por vez.

## Snackbars simples

Um snackbar básico que tem como objetivo reproduzir o comportamento do Google Keep's snackbar.

{{"demo": "pages/components/snackbars/SimpleSnackbar.js"}}

## Snackbars customizados

Aqui estão alguns exemplos de customização do componente. Você pode aprender mais sobre isso na [página de documentação de sobrescritas](/customization/components/).

{{"demo": "pages/components/snackbars/CustomizedSnackbars.js"}}

## Snackbars posicionados

Em leiautes amplos, os snackbars podem ser alinhados para a esquerda ou alinhados ao centro se forem colocados consistentemente no mesmo lugar na parte inferior da tela, no entanto, pode haver circunstâncias em que a posição do snackbar tenha de ser mais flexível. Você pode controlar a posição do snackbar especificando a propriedade `anchorOrigin`.

{{"demo": "pages/components/snackbars/PositionedSnackbar.js"}}

## Comprimento da mensagem

Alguns snackbars com tamanho variável de mensagem.

{{"demo": "pages/components/snackbars/LongTextSnackbar.js"}}

## Transições

### Snackbars Consecutivos

Quando várias atualizações de snackbar são necessárias, eles devem aparecer um por vez.

{{"demo": "pages/components/snackbars/ConsecutiveSnackbars.js"}}

### Snackbars e botões de ação flutuante (BAFs)

Snackbars devem aparecer acima de BAFs (no mobile).

{{"demo": "pages/components/snackbars/FabIntegrationSnackbar.js", "iframe": true, "maxWidth": 400}}

### Modificando a transição

[Grow](/components/transitions/#grow) é a transição padrão, mas você pode usar uma diferente.

{{"demo": "pages/components/snackbars/TransitionsSnackbar.js"}}

### Controlando a direção do Slide

Você pode alterar a direção da transição do [Slide](/components/transitions/#slide).

{{"demo": "pages/components/snackbars/DirectionSnackbar.js"}}

## Projetos Complementares

Para situações de uso mais avançadas, você pode tirar proveito com:

### notistack

![estrelas](https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/notistack.svg)

Este exemplo demonstra como usar com [notistack](https://github.com/iamhosseindhv/notistack). notistack tem uma **API imperativa** que facilita a exibição de snackbars, sem ter que lidar com seu estado de aberto/fechado. Também permite que você **empilhe** eles em cima um do outro (embora isso não seja recomendado pela especificação do Material Design).

{{"demo": "pages/components/snackbars/IntegrationNotistack.js", "defaultCodeOpen": false}}

## Acessibilidade

(WAI-ARIA: https://www.w3.org/TR/wai-aria-1.1/#alert)

- Por padrão, o snackbar não irá se esconder automaticamente. No entanto, se você decidir usar a propriedade `autoHideDuration`, é recomendado dar ao usuário [tempo suficiente](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html) para compreensão.