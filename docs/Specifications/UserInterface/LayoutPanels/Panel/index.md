---
layout: doc
title: "Panel"
position: 0
---

Контейнер в виде прямоугольной области.

# Description

Панель - контейнер визуальных элементов в виде прямоугольной области. Дочерние элементы панели
располагаются внутри контейнера и визуально не могут выходить за его пределы. Способ расположения
элементов внутри контейнера зависит от их настроек выравнивания -
[`Element.getHorizontalAlignment()`](../../KeyConcepts/Element/Element.getHorizontalAlignment/)
и [`Element.getVerticalAlignment()`](../../KeyConcepts/Element/Element.getVerticalAlignment/).

# Extends

[`Element`](../../KeyConcepts/Element/)

# Syntax

```js
new Panel(view)
```

## Parameters

`view`

Родительское [представление](../../KeyConcepts/View/) элемента.

# Methods

## [`getIcon()`](Panel.getIcon/)

Возвращает изображение заголовка панели.

## [`setIcon()`](Panel.setIcon/)

Устанавливает изображение заголовка панели.

## [`getCollapsible()`](Panel.getCollapsible/)

Возвращает значение, определяющее, разрешено ли сворачивание панели.

## [`setCollapsible()`](Panel.setCollapsible/)

Устанавливает значение, определяющее, разрешено ли сворачивание панели.

## [`getCollapsed()`](Panel.getCollapsed/)

Возвращает значение, определяющее, свернута ли панель.

## [`setCollapsed()`](Panel.setCollapsed/)

Устанавливает значение, определяющее, свернута ли панель.

## [`getItemTemplate()`](Panel.getItemTemplate/)

Возвращает [функцию](../../KeyConcepts/Script/) шаблонизации дочерних элементов панели.

## [`setItemTemplate()`](Panel.setItemTemplate/)

Устанавливает [функцию](../../KeyConcepts/Script/) шаблонизации дочерних элементов панели.

## [`getItems()`](Panel.getItems/)

Возвращает [коллекцию](../../../KeyConcepts/Collection/) дочерних элементов панели.

# Events

## [`onExpanding`](Panel.onExpanding/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что панель разворачивается.

## [`onExpanded`](Panel.onExpanded/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что панель была развернута.

## [`onCollapsing`](Panel.onCollapsing/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что панель сворачивается.

## [`onCollapsed`](Panel.onCollapsed/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что панель была свернута.

# Examples

```js
var panel = new Panel(view);
```
