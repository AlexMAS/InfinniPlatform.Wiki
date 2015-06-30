---
layout: doc
title: "TabPage"
position: 1000
---

Страница панели закладок [`TabPanel`](../).

# Description

Страница панели закладок - контейнер визуальных элементов в виде прямоугольной области, отображаемой
в рамках [панели закладок](../). Дочерние элементы страницы располагаются внутри контейнера и визуально
не могут выходить за его пределы. Способ расположения элементов внутри страницы зависит от их настроек
выравнивания - [`Element.getHorizontalAlignment()`](../../../KeyConcepts/Element/Element.getHorizontalAlignment/)
и [`Element.getVerticalAlignment()`](../../../KeyConcepts/Element/Element.getVerticalAlignment/).

# Extends

[`Container`](../../../KeyConcepts/Container/)

# Syntax

```js
new TabPage([parent])
```

## Parameters

`parent`

Необязательный. Родительский [элемент](../../../KeyConcepts/Element/).

# Methods

## [`getIcon()`](TabPage.getIcon/)

Возвращает изображение заголовка страницы.

## [`setIcon()`](TabPage.setIcon/)

Устанавливает изображение заголовка страницы.

## [`getCanClose()`](TabPage.getCanClose/)

Возвращает значение, определяющее, разрешено ли закрытие страницы.

## [`setCanClose()`](TabPage.setCanClose/)

Устанавливает значение, определяющее, разрешено ли закрытие страницы.

## [`close()`](TabPage.close/)

Закрывает страницу.

# Events

## [`onClosing`](TabPage.onClosing/)

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что страница закрывается.

## [`onClosed`](TabPage.onClosed/)

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что страница была закрыта.

# See Also

* [`TabPanel`](../)
