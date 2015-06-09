---
layout: doc
title: "View.addScript()"
position: 4
---

Добавляет [скрипт](../../Script/) в представление.

# Syntax

```js
View.addScript(name, value)
```

## Parameters

`name`

Наименование скрипта. Должно быть уникальным в рамках представления.

`value`

[Скрипт представления](../../Script/).

# Examples

```js
View.addScript('myAddFunction', function(context, argument) {
  return argument.left + argument.right;
});
```

# See Also

* [`getScripts()`](../View.getScripts/)
* [`removeScript()`](../View.removeScript/)
* [`Script`](../../Script/)
