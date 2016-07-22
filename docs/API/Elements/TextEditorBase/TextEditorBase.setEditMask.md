---
layout: doc
title: "TextEditorBase.setEditMask"
position: 8
---

Устанавливает [маску ввода данных](/docs/API/Core/EditMask/).

# Syntax

```js
TextEditorBase.setEditMask(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|[EditMask](/docs/API/Core/EditMask/)|Маска ввода данных.|

# Examples

```js
var editMask = new NumberEditMask('n2');
TextEditorBase.setEditMask(editMask);
```

# See Also

* [`getEditMask()`](../TextEditorBase.getEditMask/)
