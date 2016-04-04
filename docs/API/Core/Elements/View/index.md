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
new View([parent])
```

## Parameters


|Name|Type|Description|
|----|----|-----------|
|parent|[Element](../Element/)|Родительский элемент|


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
createControl
getApplicationView
isApplication
registerElement
getIcon
setIcon
getScriptsStorage
setOpenStrategy
setHeaderTemplate
getHeaderTemplate
setCloseButton
getCloseButton
noDataSourceOnView
registerMember
getDeferredOfMember

# Events

|Name|Description|
|----|---------|
|[`onOpening`](View.onOpening/)|Устанавливает [обработчик события](../../Script/) о том, что представление открывается|
|[`onOpened`](View.onOpened/)|Устанавливает [обработчик события](../../Script/) о том, что представление было открыто|
|[`onClosing`](View.onClosing/)|Устанавливает [обработчик события](../../Script/) о том, что представление закрывается|
|[`onClosed`](View.onClosed/)|Устанавливает [обработчик события](../../Script/) о том, что представление было закрыто|
|[`onBeforeLoaded`](View.onBeforeLoaded/)|Устанавливает [обработчик события](../../Script/) о том, что представление было загружено. Данный обработчик сработает до [`onLoaded`](../Element/Element.onLoaded/)|
