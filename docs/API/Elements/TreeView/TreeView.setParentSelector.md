---
layout: doc
title: "TreeView.setParentSelector"
position: 4
---

Устанавливает [функцию](../../../Core/Script/) выборки из элемента коллекции идентификатора родителя.

# Syntax

```js
TreeView.setParentSelector(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
`value`|[`Script`](../../../Core/Script/)|[Функция](../../../Core/Script/) выборки из элемента коллекции идентификатора родителя.

## Returns

Нет.

# Examples

```js
var parentSelector = function (context, args) {
    return args.value ? args.value['parentId'] : null;
}
treeview.setParentSelector(parentSelector);
```

# See Also

* [`getParentSelector`](../TreeView.getParentSelector/)
