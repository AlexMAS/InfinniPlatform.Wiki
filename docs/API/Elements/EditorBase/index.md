---
layout: doc
title: "EditorBase"
position: 1000
---

Интерфейс редакторов значений.

# Extends

[`Element`](../../KeyConcepts/Element/)

# Syntax

```js
new EditorBase([parent])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`parent`|[Element](../../KeyConcepts/Element/)|Необязательный. Родительский [элемент](../../KeyConcepts/Element/).|

# Methods


|Name|Description|
|----|-----------|
|[`getValue`](EditorBase.getValue/)|Возвращает значение.|
|[`setValue`](EditorBase.setValue/)|Устанавливает значение.|
|[`getHintText`](EditorBase.getHintText/)|Возвращает текст с подсказкой для ввода.|
|[`setHintText`](EditorBase.setHintText/)|Устанавливает текст с подсказкой для ввода.|
|[`getErrorText`](EditorBase.getErrorText/)|Возвращает текст с информацией об ошибке.|
|[`setErrorText`](EditorBase.setErrorText/)|Устанавливает текст с информацией об ошибке.|
|[`getWarningText`](EditorBase.getWarningText/)|Возвращает текст с информацией о предупреждении.|
|[`setWarningText`](EditorBase.setWarningText/)|Устанавливает текст с информацией о предупреждении.|

# Events

|Name|Description|
|----|-----------|
|[`onValueChanging`](EditorBase.onValueChanging/)|Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что значение изменяется.|
|[`onValueChanged`](EditorBase.onValueChanged/)|Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что значение было изменено.|
