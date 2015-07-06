---
layout: doc
title: "TextEditorBase"
position: 1001
---

Базовый тип редакторов текстовых значений.

# Extends

[`Element`](../../KeyConcepts/Element/), [`EditorBase`](../EditorBase/)

# Syntax

```js
new TextEditorBase([parent])
```

## Parameters

`parent`

Необязательный. Родительский [элемент](../../KeyConcepts/Element/).

# Methods

## [`getLabelText()`](TextEditorBase.getLabelText/)

Возвращает текст метки.

## [`setLabelText()`](TextEditorBase.setLabelText/)

Устанавливает текст метки.

## [`getLabelFloating()`](TextEditorBase.getLabelFloating/)

Возвращает значение, определяющее, является ли метка плавающей.

## [`setLabelFloating()`](TextEditorBase.setLabelFloating/)

Устанавливает значение, определяющее, является ли метка плавающей.

## [`getDisplayFormat()`](TextEditorBase.getDisplayFormat/)

Возвращает [функцию](../../KeyConcepts/Script/) форматирования [значения](../EditorBase/EditorBase.getValue/) для отображения.

## [`setDisplayFormat()`](TextEditorBase.setDisplayFormat/)

Устанавливает [функцию](../../KeyConcepts/Script/) форматирования [значения](../EditorBase/EditorBase.getValue/) для отображения.

## [`getEditMask()`](TextEditorBase.getEditMask/)

Возвращает [маску ввода данных](EditMaskBase/).

## [`setEditMask()`](TextEditorBase.setEditMask/)

Устанавливает [маску ввода данных](EditMaskBase/).
