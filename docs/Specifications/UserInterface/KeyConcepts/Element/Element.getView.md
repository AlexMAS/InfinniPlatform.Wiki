---
layout: doc
title: "Element.getView()"
position: 10
---

Возвращает родительское [представление](../../View/).

# Description

Результат работы метода зависит от значения, возвращаемого методом [`getParent()`](../Element.getParent/).

# Syntax

```js
Element.getView()
```

## Returns

Родительское [представление](../../View/) элемента.

# Examples

```js
var parentView = Element.getView();
```

# See Also

* [`getParent()`](../Element.getParent/)
* [`setParent()`](../Element.setParent/)
* [`View`](../../View/)
