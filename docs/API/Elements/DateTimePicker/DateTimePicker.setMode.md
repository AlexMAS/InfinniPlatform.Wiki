---
layout: doc
title: "DateTimePicker.setMode"
position: 6
---

Устанавливает режим работы элемента.

# Syntax

```js
DateTimePicker.setMode(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|`String`|Режим работы элемента: `Date`, `Time` или `DateTime`.|

# Examples

```js
//js-demo
var dtPicker = new DateTimePicker();
var format = new DateTimeFormat("G");
var editMask = new DateTimeEditMask();

var displayFormat = function (context, args) {
    return format.formatValue(args.value);
}
dtPicker.setMode("DateTime");
dtPicker.setValue("2016-07-04T17:00");
dtPicker.setEnabled(false);
dtPicker.setDisplayFormat(displayFormat);
$elementForExample.append(dtPicker.render());
```

# See Also

* [`getMode()`](../DateTimePicker.getMode/)
