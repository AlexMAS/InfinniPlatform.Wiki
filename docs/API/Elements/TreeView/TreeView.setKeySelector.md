---
layout: doc
title: "TreeView.setKeySelector"
position: 2
---

Устанавливает [функцию](../../../Core/Script/) выборки из элемента коллекции идентификатора.

# Syntax

```js
TreeView.setKeySelector(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|[`Script`](../../../Core/Script/)|[Функция](../../../Core/Script/) выборки из элемента коллекции идентификатора.|

## Returns

Нет.

# Examples

```js
var keySelector = function (context, args) {
    return args.value ? args.value['Id'] : null;
}
treeview.setKeySelector(keySelector);
```

# See Also

* [`getKeySelector`](../TreeView.getKeySelector/)
