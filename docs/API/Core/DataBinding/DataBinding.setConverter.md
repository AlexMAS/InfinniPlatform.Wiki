---
layout: doc
title: "DataBinding.setConverter()"
position: 4
---

Устанавливает [преобразователь данных между элементом и источником](../BindingConverter/).

# Syntax

```js
DataBinding.setConverter(value)
```

## Parameters

`value`

[Преобразователь данных между элементом и источником](../BindingConverter/).

# Examples

```js
DataBinding.setConverter({
  toSource: function(context, argument) {
    return parseInt(argument.value); // string to integer
  },
  toElement: function(context, argument) {
    return argument.value.toString(); // integer to string
  }
});
```

# See Also

* [`getConverter()`](../DataBinding.getConverter/)
* [`BindingConverter`](../BindingConverter/)
