---
layout: doc
title: "Panel"
position: 0
---

Контейнер в виде прямоугольной области.

# Description

Панель - контейнер визуальных элементов в виде прямоугольной области. Дочерние элементы панели
располагаются внутри контейнера и визуально не могут выходить за его пределы. Способ расположения
элементов внутри панели зависит от их настроек выравнивания -
[`Element.getHorizontalAlignment()`](../../KeyConcepts/Element/Element.getHorizontalAlignment/)
и [`Element.getVerticalAlignment()`](../../KeyConcepts/Element/Element.getVerticalAlignment/).

# Extends

[`Container`](../../KeyConcepts/Container/)

# Syntax

```js
new Panel([parent])
```

## Parameters

`parent`

Необязательный. Родительский [элемент](../../KeyConcepts/Element/).

# Methods

## [`getCollapsible()`](Panel.getCollapsible/)

Возвращает значение, определяющее, разрешено ли сворачивание панели.

## [`setCollapsible()`](Panel.setCollapsible/)

Устанавливает значение, определяющее, разрешено ли сворачивание панели.

## [`getCollapsed()`](Panel.getCollapsed/)

Возвращает значение, определяющее, свернута ли панель.

## [`setCollapsed()`](Panel.setCollapsed/)

Устанавливает значение, определяющее, свернута ли панель.

## [`getHeaderTemplate()`](Panel.getHeaderTemplate/)

Возвращает [функцию](../../KeyConcepts/Script/) шаблонизации заголовка панели.

## [`setHeaderTemplate()`](Panel.setHeaderTemplate/)

Устанавливает [функцию](../../KeyConcepts/Script/) шаблонизации заголовка панели.

## [`getHeader()`](Panel.getHeader/)

Возвращает заголовок панели.

## [`setHeader()`](Panel.setHeader/)

Устанавливает заголовок панели.

# Events

## [`onExpanding`](Panel.onExpanding/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что панель разворачивается.

## [`onExpanded`](Panel.onExpanded/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что панель была развернута.

## [`onCollapsing`](Panel.onCollapsing/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что панель сворачивается.

## [`onCollapsed`](Panel.onCollapsed/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что панель была свернута.
