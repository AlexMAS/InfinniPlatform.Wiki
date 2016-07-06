---
layout: doc
title: "TimePicker"
position: 0
---

Редактор времени. Значением данного элемента всегдя является UNIX time - количество секунд, прошедших с полуночи (00:00:00 UTC) 1 января 1970 года.

# Extends

[`DateTimePicker`](../DateTimePicker/)

# Syntax

```js
new TimePicker([parent])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`parent`|[Element](../../Core/Elements/Element)|Необязательный. Родительский [элемент](../../Core/Elements/Element/).|

# Examples

```js
//js-demo

//  Format
var timeZone = 0;
var format = new DateTimeFormat("t");
format.setOptions({TimeZone: timeZone});
var displayFormat = function (context, args) {
    return format.formatValue(args.value);
}

//  EditMask
var editMask = new DateTimeEditMask();
editMask.mask = "t";
editMask.format = format;

//  DateTimePicker
var minValue = InfinniUI.DateUtils.parseTimeISO8601toDate("09:00");
var maxValue = InfinniUI.DateUtils.parseTimeISO8601toDate("18:00");
var timePicker = new TimePicker();
timePicker.setDisplayFormat(displayFormat);
timePicker.setEditMask(editMask);
timePicker.setMinValue(minValue);   // Set maximum value "09:00"
timePicker.setMaxValue(maxValue);   // Set maximum value "18:00"
timePicker.onValueChanged(function (context, args) {
    timePicker.setHintText("New Value: " + args.newValue);
    timePicker.setErrorText("Min Value: " + timePicker.getMinValue());
    timePicker.setWarningText("Max Value: " + timePicker.getMaxValue());
});

//  Render
$elementForExample.append(timePicker.render());
```

# See Also

* [`DateTime`](../DatePicker/)
* [`DateTimePicker`](../DateTimePicker/)

