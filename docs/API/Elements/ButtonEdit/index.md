---
layout: doc
title: "ButtonEdit"
position: 1000
---

Текстовое поле с кнопкой.

# Extends

[`TextBox`](../TextBox)

# Syntax

```js
new ButtonEdit(parent)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|parent|[`Element`](../../Core/Elements/Element)|Родительский элемент|

## Returns

Элемент ButtonEdit.


# Methods

|Name|Description|
|----|-----------|
|[getIcon](ButtonEdit.getIcon/)|Возвращает название иконки, отображаемой на кнопке|
|[setIcon](ButtonEdit.setIcon/)|Устанавливает название иконки, отображаемой на кнопке|
|[getReadOnly](ButtonEdit.getReadOnly/)|Возвращает значение, определяющее, возможно ли редактирование текстового поля|
|[setReadOnly](ButtonEdit.setReadOnly/)|Устанавливает значение, определяющее, возможно ли редактирование текстового поля|
|[getShowClear](ButtonEdit.getShowClear/)|Возвращает значение, определяющее наличие кнопки, очищающей указанное значение|
|[setShowClear](ButtonEdit.setShowClear/)|Устанавливает значение, определяющее наличие наличие кнопки, очищающей указанное значение|

# Events

Name|Description
----|-----------
[onButtonClick](ButtonEdit.onButtonClick/)|Устанавливает [обработчик события](../../Core/Script/) нажатия на кнопку
