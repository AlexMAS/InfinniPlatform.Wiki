---
layout: doc
title: "Element.setToolTip()"
position: 42
---

Устанавливает всплывающую подсказку элемента.

# Syntax

```js
Element.setToolTip(value)
```

## Parameters

`value`

Текст или визуальный элемент, появляющийся при наведении на элемент.

# Examples

```js
var toolTip = new Label();
toolTip.setValue('Help text');
Element.setToolTip(toolTip);
```

# See Also

* [`getToolTip()`](../Element.getToolTip/)
