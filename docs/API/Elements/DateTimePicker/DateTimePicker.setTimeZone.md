---
layout: doc
title: "DateTimePicker.setTimeZone"
position: 4
---

Устанавливает смещение часового пояса. Смещение задается разностью в минутах между временем UTC и местным временем.

# Syntax

```js
DateTimePicker.setTimeZone(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|`Integer`|Смещение часового пояса.|

# Examples

```js
//js-demo

//  Format
var format = new DateTimeFormat("G");
var timeZone = -180; // UTC+3
format.setOptions({TimeZone: timeZone});    
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
dtPicker.setTimeZone(timeZone);
dtPicker.setDisplayFormat(displayFormat);
dtPicker.setEditMask(editMask);
dtPicker.onValueChanged(function (context, args) {
    dtPicker.setHintText("New Value: " + args.newValue);
    dtPicker.setWarningText("TimeZone: " + dtPicker.getTimeZone());
});

//  Render
$elementForExample.append(dtPicker.render());
```

# See Also

* [`getTimeZone()`](../DateTimePicker.getTimeZone/)
