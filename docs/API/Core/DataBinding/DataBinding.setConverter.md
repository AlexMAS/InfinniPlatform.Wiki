---
layout: doc
title: "DataBinding.setConverter()"
position: 4
---

Устанавливает [преобразователь данных между элементом и источником](../BindingConverter/).

# Syntax

```js
dataBinding.setConverter(value)
```

## Parameters

|Name|Type|Required|Description|
|----|----|:--:|-----------|
|value|[`BindingConverter`](../BindingConverter/)|-|Преобразователь данных между элементом и источником|

## Returns

Метод ничего не возвращает.


# Examples

```js
dataBinding.setConverter({
  toSource: function(context, args) {
    return parseInt(args.value); // string to integer
  },
  toElement: function(context, args) {
    return args.value.toString(); // integer to string
  }
});
```

# See Also

* [`getConverter()`](../DataBinding.getConverter/)
* [`BindingConverter`](../BindingConverter/)
