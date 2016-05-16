---
layout: doc
title: "NumericBox.setStartValue"
position: 8
---

Устанавливает начальное значение по умолчанию. Заданное значение будет автоматически подставляться в качестве значения в элементе при нажатии кнопок `+` / `-`, если значение еще не указано.

# Syntax

```js
NumericBox.setStartValue(value);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|`Number`|Начальное значение по умолчанию.|

## Returns

Нет.

# Examples

```js
//js-demo


var numericBox = new NumericBox();
numericBox.setStartValue(1980);
numericBox.setMinValue(1000);
numericBox.setMaxValue(2000);
//  Render
$elementForExample.append(numericBox.render());
```

# See Also

* [`getStartValue()`](../NumericBox.getStartValue/)
