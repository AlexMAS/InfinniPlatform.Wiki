---
layout: doc
title: "View"
position: 0
---

Визуальное представление.

# Description

Визуальное представление - программный объект, который может быть отображен на экране и представляет
собой контейнер взаимосвязанных друг с другом визуальных и невизуальных элементов. Визуальное
представление расширяет [базовый тип контейнера элементов](../Container/), таким образом, одно
представление может являться частью другого.

# Extends

## [`Container`](../Container/)

# Syntax

```js
new View(parent)
```

## Parameters


|Name|Type|Description|
|----|----|-----------|
|parent|[Element](../Element/)| (Необязательный) Родительский элемент|


# Methods

|Name|Description|
|----|---------|
|[`getContext`](View.getContext/)|Возвращает [контекст представления](../../Context/)|
|[`getScripts`](View.getScripts/)|Возвращает [коллекцию](../../Collection/) [скриптов представления](../../Script/)|
|[`getParameters`](View.getParameters/)|Возвращает [коллекцию](../../Collection/) [параметров представления](../../Parameters/)|
|[`getDataSources`](View.getDataSources/)|Возвращает [коллекцию](../../Collection/) [источников данных представления](../../DataSources/BaseDataSource/)|
|[`getDialogResult`](View.getDialogResult/)|Возвращает [результат работы представления](DialogResult/)|
|[`setDialogResult`](View.setDialogResult/)|Устанавливает [результат работы представления](DialogResult/)|
|[`open`](View.open/)|Открывает представление|
|[`close`](View.close/)|Закрывает представление|
|[`setOpenStrategy`](View.setOpenStrategy/)|Устанавливает [стратегию отображения представления](LinkView/OpenMode/)|
|[`getHeaderTemplate`](View.getHeaderTemplate/)|Возвращает [функцию](../../Script/) шаблонизации заголовка представления|
|[`setHeaderTemplate`](View.setHeaderTemplate/)|Устанавливает [функцию](../../Script/) шаблонизации заголовка представления|
|[`getCloseButtonVisibility`](View.getCloseButtonVisibility/)|Возвращает флаг видимости кнопки закрытия|
|[`setCloseButtonVisibility`](View.setCloseButtonVisibility/)|Устанавливает флаг видимости кнопки закрытия|
|[`getApplicationView`](View.getApplicationView/)|Возвращает корневое представление|
|[`getFocusOnControl`](View.getFocusOnControl/)|Возвращает имя элемента представления, который получит фокус при открытии представления|
|[`setFocusOnControl`](View.setFocusOnControl/)|Устанавливает имя элемента представления, который получит фокус при открытии представления|


# Events

|Name|Description|
|----|---------|
|[`onOpening`](View.onOpening/)|Устанавливает [обработчик события](../../Script/) о том, что представление открывается|
|[`onOpened`](View.onOpened/)|Устанавливает [обработчик события](../../Script/) о том, что представление было открыто|
|[`onClosing`](View.onClosing/)|Устанавливает [обработчик события](../../Script/) о том, что представление закрывается|
|[`onClosed`](View.onClosed/)|Устанавливает [обработчик события](../../Script/) о том, что представление было закрыто|
|[`onBeforeLoaded`](View.onBeforeLoaded/)|Устанавливает [обработчик события](../../Script/) о том, что представление было загружено. Данный обработчик сработает до [`onLoaded`](../Element/Element.onLoaded/)|
