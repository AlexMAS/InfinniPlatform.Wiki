---
layout: doc
title: "BaseDataBinding.setConverter()"
position: 6
---

Устанавливает [преобразователь данных между элементом и источником](../BindingConverter/).

# Syntax

```js
BaseDataBinding.setConverter(value)
```

## Parameters

`value`

[Преобразователь данных между элементом и источником](../BindingConverter/).

# Examples

```js
BaseDataBinding.setConverter({
  toSource: function(context, argument) {
    return parseInt(argument.value); // string to integer
  },
  toElement: function(context, argument) {
    return argument.value.toString(); // integer to string
  }
});
```

# See Also

* [`getConverter()`](../BaseDataBinding.getConverter/)
* [`BindingConverter`](../BindingConverter/)
