---
layout: doc
title: "DataBinding.setMode()"
position: 2
---

Устанавливает [направление обмена данными в привязке](../BindingMode/).

# Syntax

```js
dataBinding.setMode(value)
```

## Parameters

|Name|Type|Required|Description|
|----|----|:--:|-----------|
|value|[`BindingMode`](../BindingMode/)|+|Направление обмена данными в привязке|

## Returns

Метод ничего не возвращает.


# Examples

```js
dataBinding.setMode(BindingModes.twoWay);
```

# See Also

* [`getMode()`](../DataBinding.getMode/)
* [`BindingMode`](../BindingMode/)
