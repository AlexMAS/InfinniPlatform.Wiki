---
layout: doc
title: "TextEditorBase"
position: 0
---

Базовый тип редакторов текстовых значений.

# Extends

[`Element`](../../Core/Elements/Element), [`EditorBase`](../EditorBase/)

# Syntax

```js
new TextEditorBase([parent])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`parent`|[`Element`](../../Core/Elements/Element)|Необязательный. Родительский [элемент](../../Core/Elements/Element).|

# Methods

|Name|Description|
|----|-----------|
|[`getLabelText`](TextEditorBase.getLabelText/)|Возвращает текст метки.|
|[`setLabelText`](TextEditorBase.setLabelText/)|Устанавливает текст метки.|
|[`getLabelFloating`](TextEditorBase.getLabelFloating/)|Возвращает значение, определяющее, является ли метка плавающей.|
|[`setLabelFloating`](TextEditorBase.setLabelFloating/)|Устанавливает значение, определяющее, является ли метка плавающей.|
|[`getDisplayFormat`](TextEditorBase.getDisplayFormat/)|Возвращает [функцию](../../Core/Script/) форматирования [значения](../EditorBase/EditorBase.getValue/) для отображения.|
|[`setDisplayFormat`](TextEditorBase.setDisplayFormat/)|Устанавливает [функцию](../../Core/Script/) форматирования [значения](../EditorBase/EditorBase.getValue/) для отображения.|
|[`getEditMask`](TextEditorBase.getEditMask/)|Возвращает [маску ввода данных](/docs/API/Core/EditMask/).|
|[`setEditMask`](TextEditorBase.setEditMask/)|Устанавливает [маску ввода данных](/docs/API/Core/EditMask/).|
