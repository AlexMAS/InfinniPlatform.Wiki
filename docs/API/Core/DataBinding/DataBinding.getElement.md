---
layout: doc
title: "DataBinding.getElement()"
position: 9
---

Возвращает элемент привязки.

# Syntax

```js
DataBinding.getElement()
```

## Returns

Элемент привязки, установленный вызовом метода [`bindElement()`](../DataBinding.bindElement/).

# Examples

```js
DataBinding.bindElement(context.controls.textBox1, 'Value');
var element = DataBinding.getElement(); // element === context.controls.textBox1
```

# See Also

* [`bindElement()`](../DataBinding.bindElement/)
* [`getElementProperty()`](../DataBinding.getElementProperty/)
