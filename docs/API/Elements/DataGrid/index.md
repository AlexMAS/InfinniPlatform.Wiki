---
layout: doc
title: "DataGrid"
position: 1020
---

Таблица.

# Extends

[`ListEditorBase`](../ListEditorBase/)

# Syntax

```js
new DataGrid([parent])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`parent`|[`Element`](../../Core/Elements/Element)|Родительский элемент|

# Methods

Name|Description
----|-----------
[`getColumns`](DataGrid.getColumns/)|Возвращает [коллекцию](../../Core/Collection/) колонок таблицы.
[`getShowSelectors`](DataGrid.getShowSelectors/)|Возвращает значение, определяющее показывать ли колонку с CheckBox/Radio для выбора элементов.
[`setShowSelectors`](DataGrid.setShowSelectors/)|Устанавливает значение, определяющее показывать ли колонку с CheckBox/Radio для выбора элементов.
[`getCheckAllVisible`](DataGrid.getCheckAllVisible/)|Возвращает значение, определяющее виден ли элемент "Выбрать все" в шапке таблицы.
[`setCheckAllVisible`](DataGrid.setCheckAllVisible/)|Устанавливает значение, определяющее виден ли элемент "Выбрать все" в шапке таблицы.
[`getCheckAll`](DataGrid.getCheckAll/)|Возвращает состояние элемента "Выбрать все" из шапки таблицы.

# Events

Name|Description
----|-----------
[`onCheckAllChanged`](DataGrid.onCheckAllChanged/)|Устанавливает [обработчик события](../../Core/Script/) о том, что состоняие элемента "Выбрать все" в шапке таблицы изменилось.
