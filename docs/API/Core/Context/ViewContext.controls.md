---
layout: doc
title: "ViewContext.controls"
position: 6
---

Возвращает ассоциативный список [визуальных элементов представления](../../Elements/Element/).

# Syntax

```js
ViewContext.controls
```

# Examples

```js
var control1 = ViewContext.controls.button1;
var control2 = ViewContext.controls['button1']; // control2 === control1
```

# See Also

* [`Element`](../../Elements/Element/)
