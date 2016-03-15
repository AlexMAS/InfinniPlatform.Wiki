---
layout: doc
title: "ViewContext.scripts"
position: 3
---

Возвращает ассоциативный список [скриптов представления](../../Script/).

# Syntax

```js
ViewContext.scripts
```

# Examples

```js
var function1 = ViewContext.scripts.myFunction;
var function2 = ViewContext.scripts['myFunction']; // function2 === function1
```

# See Also

* [`Script`](../../Script/)
