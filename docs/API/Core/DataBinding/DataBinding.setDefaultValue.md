---
layout: doc
title: "DataBinding.setDefaultValue()"
position: 12
---

Устанавливает значение по умолчанию для элемента. Элемент принимает это значение, если направление обмена данными в привязке установлено в [`twoWay`](../BindingMode/) или [`toElement`](../BindingMode/), до тех пор, пока источник данных не загрузится и не установит значение для элемента. 

# Syntax

```js
dataBinding.setDefaultValue(value)
```

## Parameters

|Name|Required|Description|
|----|:--:|-----------|
|value|-|Значение по умолчанию для элемента|

## Returns

Метод ничего не возвращает.


# Examples

```js
dataBinding.setDefaultValue("Ivanov");
```

# See Also

* [`getDefaultValue()`](../DataBinding.getDefaultValue/)
