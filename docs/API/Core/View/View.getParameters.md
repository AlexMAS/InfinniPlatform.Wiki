---
layout: doc
title: "View.getParameters()"
position: 3
---

Возвращает [коллекцию](../../Collection/) [параметров представления](../../Parameters/).

# Syntax

```js
view.getParameters()
```

## Parameters

Нет

## Returns

[Коллекция](../../Collection/) [параметров представления](../../Parameters/).

# Examples

```js
var myParameter = new Parameter({view: parentView});
myParameter.setName('myParameter');
myParameter.setValue(123);

var parameters = parentView.getParameters();
parameters.add(myParameter);
var myParameter2 = parameters.getById('myParameter'); // myParameter2 === myParameter

myParameter2.getValue(); // 123
```

# See Also

* [`Collection`](../../Collection/)
* [`Parameter`](../../Parameters/)
