---
layout: doc
title: "TabPage"
position: 1000
---

Страница панели закладок [`TabPanel`](../).

# Description

Страница панели закладок - [контейнер визуальных элементов](../../../Core/Elements/Container/) в виде
прямоугольной области, отображаемой в рамках [панели закладок](../). Дочерние элементы страницы
располагаются внутри контейнера и визуально не могут выходить за его пределы.

# Extends

[`Container`](../../../Core/Elements/Container/)

# Syntax

```js
new TabPage(parent)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|parent|[`Element`](../../../Core/Elements/Element)| (Необязательный) Родительский элемент|

# Methods

|Name|Description|
|----|-----------|
|[getCanClose](TabPage.getCanClose/)|Возвращает значение, определяющее, разрешено ли закрытие страницы|
|[setCanClose](TabPage.setCanClose/)|Устанавливает значение, определяющее, разрешено ли закрытие страницы|
|[close](TabPage.close/)|Закрывает страницу|

# Events

|Name|Description|
|----|-----------|
|[onClosing](TabPage.onClosing/)|Устанавливает [обработчик события](../../../Core/Script/) о том, что страница закрывается|
|[onClosed](TabPage.onClosed/)|Устанавливает [обработчик события](../../../Core/Script/) о том, что страница была закрыта|

# See Also

* [`TabPanel`](../)
* [`Container`](../../../Core/Elements/Container/)
