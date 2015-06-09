---
layout: doc
title: "View.addParameter()"
position: 7
---

Добавляет [параметр](../../Parameter/) в представление.

# Syntax

```js
View.addParameter(name, value)
```

## Parameters

`name`

Наименование параметра. Должно быть уникальным в рамках представления.

`value`

[Параметр представления](../../Parameter/).

# Examples

```js
var parameter = new Parameter(View);
View.addParameter('myParameter', parameter);
```

# See Also

* [`getParameters()`](../View.getParameters/)
* [`removeParameter()`](../View.removeParameter/)
* [`Parameter`](../../Parameter/)
