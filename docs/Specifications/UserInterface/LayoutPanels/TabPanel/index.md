---
layout: doc
title: "TabPanel"
position: 1
---

Контейнер в виде набора закладок.

# Description

Панель закладок - контейнер визуальных элементов в виде прямоугольной области с набором закладок,
которые позволяют переключаться между связанными с ними [страницами](TabPage/). При переключении
на какую-либо страницу, она занимает все пространство контейнера, перекрывая при этом все остальные
страницы панели закладок.

# Extends

[`Element`](../../KeyConcepts/Element/)

# Syntax

```js
new TabPanel([parent])
```

## Parameters

`parent`

Необязательный. Родительский [элемент](../../KeyConcepts/Element/).

# Methods

## [`getHeaderLocation()`](TabPanel.getHeaderLocation/)

Возвращает [расположение закладок](TabHeaderLocation/).

## [`setHeaderLocation()`](TabPanel.setHeaderLocation/)

Устанавливает [расположение закладок](TabHeaderLocation/).

## [`getHeaderOrientation()`](TabPanel.getHeaderOrientation/)

Возвращает [ориентацию закладок](TabHeaderOrientation/).

## [`setHeaderOrientation()`](TabPanel.setHeaderOrientation/)

Устанавливает [ориентацию закладок](TabHeaderOrientation/).

## [`getHeaderTemplate()`](TabPanel.getHeaderTemplate/)

Возвращает [функцию](../../KeyConcepts/Script/) шаблонизации закладок дочерних элементов панели.

## [`setHeaderTemplate()`](TabPanel.setHeaderTemplate/)

Устанавливает [функцию](../../KeyConcepts/Script/) шаблонизации закладок дочерних элементов панели.

## [`getItemTemplate()`](TabPanel.getItemTemplate/)

Возвращает [функцию](../../KeyConcepts/Script/) шаблонизации дочерних элементов панели.

## [`setItemTemplate()`](TabPanel.setItemTemplate/)

Устанавливает [функцию](../../KeyConcepts/Script/) шаблонизации дочерних элементов панели.

## [`getItems()`](TabPanel.getItems/)

Возвращает [коллекцию](../../KeyConcepts/Collection/) дочерних элементов панели.

## [`getSelectedItem()`](TabPanel.getSelectedItem/)

Возвращает выделенный дочерний элемент панели.

## [`setSelectedItem()`](TabPanel.setSelectedItem/)

Устанавливает выделенный дочерний элемент панели.

# Events

## [`onSelectedItemChanged`](TabPanel.onSelectedItemChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что выделенный элемент изменился.
