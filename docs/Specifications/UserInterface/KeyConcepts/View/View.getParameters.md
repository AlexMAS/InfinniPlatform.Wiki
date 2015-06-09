---
layout: doc
title: "View.getParameters()"
position: 6
---

Возвращает ассоциативный список [параметров представления](../../Parameter/).

# Syntax

```js
View.getParameters()
```

## Returns

Ассоциативный список [параметров представления](../../Parameter/).

# Examples

```js
var parameters = View.getParameters();
var parameter1 = parameters.myParameter;
var parameter2 = parameters['myParameter']; // parameter2 === parameter1
```

# See Also

* [`addParameter()`](../View.addParameter/)
* [`removeParameter()`](../View.removeParameter/)
* [`Parameter`](../../Parameter/)
