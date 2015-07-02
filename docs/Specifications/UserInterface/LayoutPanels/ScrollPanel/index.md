---
layout: doc
title: "ScrollPanel"
position: 1004
---

Контейнер в виде прокручиваемой области.

# Description

Прокручиваемая область - контейнер визуальных элементов, который позволяет отображать содержимое в
области, размер которой меньше размера содержимого. Когда содержимое контейнера не отображается
полностью, отображаются полосы прокрутки, с помощью которых можно перемещать видимую область
содержимого. Способ расположения элементов внутри контейнера зависит от их настроек выравнивания -
[`Element.getHorizontalAlignment()`](../../KeyConcepts/Element/Element.getHorizontalAlignment/)
и [`Element.getVerticalAlignment()`](../../KeyConcepts/Element/Element.getVerticalAlignment/).

# Extends

[`Container`](../../KeyConcepts/Container/)

# Syntax

```js
new ScrollPanel([parent])
```

## Parameters

`parent`

Необязательный. Родительский [элемент](../../KeyConcepts/Element/).

# Methods

## [`getHorizontalScroll()`](ScrollPanel.getHorizontalScroll/)

Возвращает [видимость полосы прокрутки](ScrollVisibility/) по горизонтали.

## [`setHorizontalScroll()`](ScrollPanel.setHorizontalScroll/)

Устанавливает [видимость полосы прокрутки](ScrollVisibility/) по горизонтали.

## [`getVerticalScroll()`](ScrollPanel.getVerticalScroll/)

Возвращает [видимость полосы прокрутки](ScrollVisibility/) по вертикали.

## [`setVerticalScroll()`](ScrollPanel.setVerticalScroll/)

Устанавливает [видимость полосы прокрутки](ScrollVisibility/) по вертикали.

# See Also

* [`ScrollVisibility`](ScrollVisibility/)
* [`Container`](../../KeyConcepts/Container/)
