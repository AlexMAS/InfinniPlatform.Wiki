---
layout: doc
title: "DataBinding.getElementProperty()"
position: 10
---

Возвращает путь к свойству элемента привязки.

# Syntax

```js
DataBinding.getSourceProperty()
```

## Returns

Путь к свойству элемента привязки, установленный вызовом метода [`bindElement()`](../DataBinding.bindElement/).

# Examples

```js
DataBinding.bindElement(context.controls.textBox1, 'Value');
var elementProperty = DataBinding.getElementProperty(); // elementProperty === 'Value'
```

# See Also

* [`bindElement()`](../DataBinding.bindElement/)
* [`getElement()`](../DataBinding.getElement/)
