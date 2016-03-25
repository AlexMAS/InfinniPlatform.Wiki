---
layout: doc
title: "DataBinding.getElement()"
position: 9
---

Возвращает элемент привязки.

# Syntax

```js
dataBinding.getElement()
```

## Parameters

Нет

## Returns

Элемент привязки, установленный вызовом метода [`bindElement()`](../DataBinding.bindElement/).

# Examples

```js
dataBinding.bindElement(context.controls['TextBox1'], 'Value');
var element = dataBinding.getElement(); // element === context.controls['TextBox1']
```

# See Also

* [`bindElement()`](../DataBinding.bindElement/)
* [`getElementProperty()`](../DataBinding.getElementProperty/)
