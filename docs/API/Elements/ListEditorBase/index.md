---
layout: doc
title: "ListEditorBase"
position: 0
---

Базовый тип редакторов коллекций данных.

# Extends

[`Container`](../../Core/Elements/Container), [`EditorBase`](../EditorBase/)

# Syntax

```js
new ListEditorBase(parent)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`parent`|[`Element`](../../Core/Elements/Element)|Родительский [элемент](../../Core/Elements/Element).|

# Methods

|Name|Description|
|----|-----------|
|[`getMultiSelect`](ListEditorBase.getMultiSelect/)|Возвращает значение, определяющее, разрешен ли выбор нескольких элементов.|
|[`setMultiSelect`](ListEditorBase.setMultiSelect/)|Устанавливает значение, определяющее, разрешен ли выбор нескольких элементов.|
|[`getValueSelector`](ListEditorBase.getValueSelector/)|Возвращает [функцию](../../Core/Script/) выборки из элемента коллекции значимой части.|
|[`setValueSelector`](ListEditorBase.setValueSelector/)|Устанавливает [функцию](../../Core/Script/) выборки из элемента коллекции значимой части.|
|[`getSelectedItem`](ListEditorBase.getSelectedItem/)|Возвращает выделенный элемент коллекции.|
|[`setSelectedItem`](ListEditorBase.setSelectedItem/)|Устанавливает выделенный элемент коллекции.|
|[`getDisabledItemCondition`](ListEditorBase.getDisabledItemCondition/)|Возвращает [функцию](../../Core/Script/), определяющую запрет на выбор элемента.|
|[`setDisabledItemCondition`](ListEditorBase.setDisabledItemCondition/)|Устанавливает [функцию](../../Core/Script/), определяющую запрет на выбор элемента.|
|[`setValueItem`](ListEditorBase.setValueItem/)|Устанавливает значение элемента по элементу коллекции.|

# Events

|Name|Description|
|----|-----------|
|[`onSelectedItemChanged`](ListEditorBase.onSelectedItemChanged/)|Устанавливает [обработчик события](../../Core/Script/) о том, что выделенный элемент изменился.|
