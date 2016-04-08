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
dtPicker.setValue("2016-07-04T17:00");
dtPicker.setDisplayFormat(displayFormat);
dtPicker.setEditMask(editMask);
dtPicker.onValueChanged(function (context, args) {
    dtPicker.setHintText("New Value: " + args.newValue);
});

//  Render
$elementForExample.append(dtPicker.render());
```

# See Also

* [`getMode()`](../DateTimePicker.getMode/)
