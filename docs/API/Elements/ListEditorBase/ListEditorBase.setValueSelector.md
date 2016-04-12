---
layout: doc
title: "ListEditorBase.setValueSelector"
position: 10
---

Устанавливает [функцию](../../Core/Script/) выборки из элемента коллекции значимой части.

# Description

Устанавливает [функцию](../../Core/Script/) выборки значения для элемента коллекции, который передается в параметре `args.value`.

# Syntax

```js
ListEditorBase.setValueSelector(selector);
```

## Returns

Нет

# Examples

```js
var idSelector = function (context, args) {
    var item = args.value;
    return item ? item.id : null;
};

ListEditorBase.setValueSelector(idSelector);
```

# See Also

* [`setValueSelector()`](../ListEditorBase.getValueSelector/)
