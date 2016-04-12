---
layout: doc
title: "DateTimePicker.setMaxValue"
position: 4
---

Устанавливает максимальное значение для ввода.

# Syntax

```js
DateTimePicker.setMaxValue(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|`Date`|Максимальное значение для ввода.|

# Examples

```js
//js-demo

//  Format
var format = new DateTimeFormat("G");
var displayFormat = function (context, args) {
    return format.formatValue(args.value);
}

//  EditMask
var editMask = new DateTimeEditMask();
editMask.mask = "G";
editMask.format = format;

//  DateTimePicker
var dtPicker = new DateTimePicker();
dtPicker.setMode("DateTime");
dtPicker.setMaxValue(new Date());   // Set maximum value
dtPicker.setDisplayFormat(displayFormat);
dtPicker.setEditMask(editMask);
dtPicker.onValueChanged(function (context, args) {
    dtPicker.setHintText("New Value: " + args.newValue);
});

//  Render
$elementForExample.append(dtPicker.render());
```

# See Also

* [`getMaxValue()`](../DateTimePicker.getMaxValue/)
