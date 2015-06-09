---
layout: doc
title: "View.getScripts()"
position: 3
---

Возвращает ассоциативный список [скриптов представления](../../Script/).

# Syntax

```js
View.getScripts()
```

## Returns

Ассоциативный список [скриптов представления](../../Script/).

# Examples

```js
var scripts = View.getScripts();
var function1 = scripts.myAddFunction;
var function2 = scripts['myAddFunction']; // function2 === function1
```

# See Also

* [`addScript()`](../View.addScript/)
* [`removeScript()`](../View.removeScript/)
* [`Script`](../../Script/)
