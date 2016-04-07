---
layout: doc
title: "TextEditorBase.metadata"
position: 9
---

Метаданные типа [`TextEditorBase`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|`LabelText`|`String`||Текст метки|
|`LabelFloating`|`Boolean`|`false`|Является ли метка плавающей|
|`DisplayFormat`|`String`||Формат отображения значения|
|`EditMask`|`EditMask`||Маска ввода значения|

# Examples

```js
{
	"LabelText": "Birthday",
	"LabelFloating": true,
	"DisplayFormat": ":d",
	"EditMask": {
	    "DateTimeEditMask": {
	        "Mask": "d"
	    }
	}
}
```