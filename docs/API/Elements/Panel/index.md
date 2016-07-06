---
layout: doc
title: "Panel"
position: 0
---

Контейнер в виде прямоугольной области.

# Description

Панель - [контейнер](../../Core/Elements/Container/) визуальных элементов в виде прямоугольной области.
Дочерние элементы панели располагаются внутри контейнера и визуально не могут выходить за его пределы.

# Extends

[`Container`](../../Core/Elements/Container/)

# Syntax

```js
new Panel(parent)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|parent|[`Element`](../../Core/Elements/Element)| (Необязательный) Родительский элемент|

# Methods

|Name|Description|
|----|-----------|
|[getCollapsible](Panel.getCollapsible/)|Возвращает значение, определяющее, разрешено ли сворачивание панели|
|[setCollapsible](Panel.setCollapsible/)|Устанавливает значение, определяющее, разрешено ли сворачивание панели|
|[getCollapsed](Panel.getCollapsed/)|Возвращает значение, определяющее, свернута ли панель|
|[setCollapsed](Panel.setCollapsed/)|Устанавливает значение, определяющее, свернута ли панель|
|[getHeaderTemplate](Panel.getHeaderTemplate/)|Возвращает [функцию](../../Core/Script/) шаблонизации заголовка панели|
|[setHeaderTemplate](Panel.setHeaderTemplate/)|Устанавливает [функцию](../../Core/Script/) шаблонизации заголовка панели|
|[getHeader](Panel.getHeader/)|Возвращает заголовок панели|
|[setHeader](Panel.setHeader/)|Устанавливает заголовок панели|

# Events

|Name|Description|
|----|-----------|
|[onExpanding](Panel.onExpanding/)|Устанавливает [обработчик события](../../Core/Script/) о том, что панель разворачивается|
|[onExpanded](Panel.onExpanded/)|Устанавливает [обработчик события](../../Core/Script/) о том, что панель была развернута|
|[onCollapsing](Panel.onCollapsing/)|Устанавливает [обработчик события](../../Core/Script/) о том, что панель сворачивается|
|[onCollapsed](Panel.onCollapsed/)|Устанавливает [обработчик события](../../Core/Script/) о том, что панель была свернута|

# See Also

* [`Container`](../../Core/Elements/Container/)
