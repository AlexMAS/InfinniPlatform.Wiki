---
layout: doc
title: "TabPanel"
position: 0
---

Контейнер в виде набора закладок.

# Description

Панель закладок - [контейнер](../../Core/Elements/Container/) визуальных элементов в виде прямоугольной
области с набором закладок, которые позволяют переключаться между связанными с ними [страницами](TabPage/).
При переключении на какую-либо страницу, она занимает все пространство контейнера, перекрывая при этом
все остальные страницы панели.

# Extends

[`Container`](../../Core/Elements/Container/)

# Syntax

```js
new TabPanel(parent)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|parent|[`Element`](../../Core/Elements/Element)| (Необязательный) Родительский элемент|

# Methods

|Name|Description|
|----|-----------|
|[getHeaderLocation](TabPanel.getHeaderLocation/)|Возвращает [расположение закладок](TabHeaderLocation/)|
|[setHeaderLocation](TabPanel.setHeaderLocation/)|Устанавливает [расположение закладок](TabHeaderLocation/)|
|[getHeaderTemplate](TabPanel.getHeaderTemplate/)|Возвращает [функцию](../../Core/Script/) шаблонизации закладок дочерних элементов панели|
|[setHeaderTemplate](TabPanel.setHeaderTemplate/)|Устанавливает [функцию](../../Core/Script/) шаблонизации закладок дочерних элементов панели|
|[getSelectedItem](TabPanel.getSelectedItem/)|Возвращает выделенный [дочерний элемент панели](TabPage/)|
|[setSelectedItem](TabPanel.setSelectedItem/)|Устанавливает выделенный [дочерний элемент панели](TabPage/)|

# Events

|Name|Description|
|----|-----------|
|[onSelectedItemChanged](TabPanel.onSelectedItemChanged/)|Устанавливает [обработчик события](../../Core/Script/) о том, что выделенный элемент изменился|

# See Also

* [`TabPage`](TabPage/)
* [`TabHeaderLocation`](TabHeaderLocation/)
* [`Container`](../../Core/Elements/Container/)
