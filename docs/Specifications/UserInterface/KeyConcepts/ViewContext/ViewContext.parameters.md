---
layout: doc
title: "ViewContext.parameters"
position: 4
---

Возвращает ассоциативный список [параметров представления](../../Parameter/).

# Syntax

```js
ViewContext.parameters
```

# Examples

```js
var parameter1 = ViewContext.parameters.myParameter;
var parameter2 = ViewContext.parameters['myParameter']; // parameter2 === parameter1
```

# See Also

* [`Parameter`](../../Parameter/)
