---
layout: doc
title: "View.getParameters()"
position: 14
---

Возвращает [коллекцию](../../Collection/) [параметров представления](../../Parameter/).

# Syntax

```js
View.getParameters()
```

## Returns

[Коллекция](../../Collection/) [параметров представления](../../Parameter/).

# Examples

```js
var myParameter = new Parameter(View, 'myParameter', 123);

var parameters = View.getParameters();
parameters.add(myParameter);
var myParameter2 = parameters.getById('myParameter'); // myParameter2 === myParameter

myParameter2.getValue(); // 123
```

# See Also

* [`Collection`](../../Collection/)
* [`Parameter`](../../Parameter/)
