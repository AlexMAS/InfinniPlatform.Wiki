---
layout: doc
title: "DateTimePicker.setMinValue"
position: 2
---

Устанавливает минимальное значение для ввода.

# Syntax

```js
DateTimePicker.setMinValue(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|`Date`|Минимальное значение для ввода.|

# Examples

```js
//js-demo

//  Format
var format = new DateTimeFormat("G");
format.setOptions({TimeZone: -180});
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
dtPicker.setTimeZone(-180);
dtPicker.setMinValue(new Date());   // Set minimum value
dtPicker.setDisplayFormat(displayFormat);
dtPicker.setEditMask(editMask);
dtPicker.onValueChanged(function (context, args) {
    dtPicker.setHintText("New Value: " + args.newValue);
});

//  Render
$elementForExample.append(dtPicker.render());
```

# See Also

* [`getMinValue()`](../DateTimePicker.getMinValue/)
