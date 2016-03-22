---
layout: doc
title: "DataBinding.getElementProperty()"
position: 10
---

Возвращает путь к свойству элемента привязки.

# Syntax

```js
dataBinding.getElementProperty()
```

## Parameters

Нет

## Returns

Путь к свойству элемента привязки, установленный вызовом метода [`bindElement()`](../DataBinding.bindElement/).

# Examples

```js
dataBinding.bindElement(context.controls['TextBox1'], 'Value');
var elementProperty = dataBinding.getElementProperty(); // elementProperty === 'Value'
```

# See Also

* [`bindElement()`](../DataBinding.bindElement/)
* [`getElement()`](../DataBinding.getElement/)
