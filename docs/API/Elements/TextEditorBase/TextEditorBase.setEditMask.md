---
layout: doc
title: "TextEditorBase.setEditMask"
position: 8
---

Устанавливает [маску ввода данных](../EditMaskBase/).

# Syntax

```js
TextEditorBase.setEditMask(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|[EditMaskBase](../EditMaskBase/)|[Маска ввода данных](../EditMaskBase/).|

# Examples

```js
var editMask = new NumberEditMask('n2');
TextEditorBase.setEditMask(editMask);
```

# See Also

* [`getEditMask()`](../TextEditorBase.getEditMask/)
