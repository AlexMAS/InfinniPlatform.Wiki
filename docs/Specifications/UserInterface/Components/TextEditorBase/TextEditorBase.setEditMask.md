---
layout: doc
title: "TextEditorBase.setEditMask()"
position: 17
---

Устанавливает [маску ввода данных](../EditMaskBase/).

# Syntax

```js
TextEditorBase.setEditMask(value)
```

## Parameters

`value`

[Маска ввода данных](../EditMaskBase/).

# Examples

```js
var editMask = new NumberEditMask('n2');
TextEditorBase.setEditMask(editMask);
```

# See Also

* [`getEditMask()`](../TextEditorBase.getEditMask/)
