---
title: Компонент React Dialog
components: Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide
---

# Dialog (диалог)

<p class="description">Диалоги информируют пользователей о задаче и могут содержать критическую информацию, требовать решения или включать несколько задач.</p>

[Диалог](https://material.io/design/components/dialogs.html) представляет собой тип [модальных](/components/modal/) окон, который появляется над приложением, чтобы предоставить важную информацию или для предоставления решения. Диалоги отключают все функции приложения, когда они появляются, и остаются на экране до тех пор, пока не будут подтверждены, отклонены или пока не будут предприняты необходимые действия.

Диалоги целенаправленно останавливают, поэтому их следует использовать с осторожностью.

## Простые диалоги

Простые диалоговые окна могут предоставить дополнительные сведения или действия об элементе списка. Например, они могут отображать аватары, иконки, уточнение подтекста, или действия (например, добавление учетной записи).

Особенности механики касаний:

- Выбор опции немедленно фиксирует ее и закрывает меню
- Касание за пределами диалога или нажатие Назад отменяет действие и закрывает диалоговое окно

{{"demo": "pages/components/dialogs/SimpleDialog.js"}}

## Оповещения

Оповещения - это срочные сообщения, требующие подтверждения, которые информируют пользователя о ситуации.

Большинство предупреждений не нужны заголовки. They summarize a decision in a sentence or two by either:

- Задать вопрос (например, «Удалить этот разговор?»)
- Создать заявления, связанное с кнопками действий

Use title bar alerts only for high-risk situations, such as the potential loss of connectivity. Users should be able to understand the choices based on the title and button text alone.

Если требуется название:

- Используйте четкий вопрос или утверждение с пояснением в области содержимого, например «Очистить USB-накопитель?».
- Избегайте извинений, двусмысленности или вопросов, таких как «Предупреждение!» Или «Вы уверены?»

{{"demo": "pages/components/dialogs/AlertDialog.js"}}

## Переходы

Вы также можете поменять анимацию, в следующем примере используется `Slide`.

{{"demo": "pages/components/dialogs/AlertDialogSlide.js"}}

## Диалоги с формой

Диалоги с формой позволяют пользователям заполнять поля формы внутри диалога. Например, если ваш сайт предлагает потенциальным подписчикам заполнить свой адрес электронной почты, они могут заполнить поле электронной почты и нажать «Отправить».

{{"demo": "pages/components/dialogs/FormDialog.js"}}

## Индивидуальные диалоги

Ниже находится пример кастомизации компонента. You can learn more about this in the [overrides documentation page](/customization/components/).

Данный диалог имеет кнопку закрытия, добавленную для удобства использования.

{{"demo": "pages/components/dialogs/CustomizedDialogs.js"}}

## Полноэкранные диалоги

{{"demo": "pages/components/dialogs/FullScreenDialog.js"}}

## Опциональные размеры

Вы можете установить максимальную ширину диалога с помощью числового значения `maxWidth` в сочетании с булевым значением `fullWidth`. Когда свойство `fullWidth` имеет значение true, диалоговое окно будет адаптировано на основе значения `maxWidth`.

{{"demo": "pages/components/dialogs/MaxWidthDialog.js"}}

## Отзывчивый полноэкранный режим

You may make a dialog responsively full screen using [`useMediaQuery`](/components/use-media-query/#usemediaquery).

```jsx
import useMediaQuery from '@material-ui/core/useMediaQuery';

function MyComponent() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return <Dialog fullScreen={fullScreen} />
}
```

{{"demo": "pages/components/dialogs/ResponsiveDialog.js"}}

## Диалоги подтверждения

Диалоги подтверждения требуют, чтобы пользователи явно подтвердили свой выбор, прежде чем их выбор будет сохранен. Например, пользователи могут прослушивать несколько мелодий, но сделать окончательный выбор только после нажатия «ОК.».

Нажатие кнопки «Отмена» в диалоговом окне подтверждения или нажатие «Назад» отменяет действие, отменяет любые изменения и закрывает диалоговое окно.

{{"demo": "pages/components/dialogs/ConfirmationDialog.js"}}

## Перетаскиваемый диалог

Вы можете создать перетаскиваемый диалог, используя [react-draggable](https://github.com/mzabriskie/react-draggable). Для этого вы можете передать импортированный компонент `Draggable` как компонент `PaperComponent` компонента `Dialog`. Это сделает весь диалог перетаскиваемым.

{{"demo": "pages/components/dialogs/DraggableDialog.js"}}

## Прокрутка длинного контента

Когда диалоги становятся слишком длинными для окна просмотра или устройства пользователя, они их прокручивают.

- `scroll = paper` содержимое диалогового окна прокручивается внутри элемента paper.
- `scroll = body` содержимое диалога прокручивается внутри элемента body.

Попробуйте демо ниже, чтобы увидеть, что мы имеем в виду:

{{"demo": "pages/components/dialogs/ScrollDialog.js"}}

## Ограничения

Follow the [Modal limitations section](/components/modal/#limitations).

## Доступность

Смотри [раздел доступности модальных окон](/components/modal/#accessibility).