---
layout: doc
title: "Element.setToolTip()"
position: 30
---

Устанавливает всплывающую подсказку элемента.

# Syntax

```js
Element.setToolTip(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`String`/[`Element`](../)|Текст или визуальный элемент, появляющийся при наведении на элемент|

## Returns

Метод не возвращает значений

# Examples

```js
var toolTip = new Label();
toolTip.setValue('Help text');
Element.setToolTip(toolTip);
```

# See Also

* [`getToolTip()`](../Element.getToolTip/)
