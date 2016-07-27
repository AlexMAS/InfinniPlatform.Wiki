---
layout: doc
title: "TextEditorBase.metadata"
position: 0
---

Метаданные типа [`TextEditorBase`](../).

# Properties

|Name|Type|Default|Description|
|----|----|-------|-----------|
|`LabelText`|`String`||Текст метки|
|`LabelFloating`|`Boolean`|`false`|Является ли метка плавающей|
|`DisplayFormat`|`String`||Формат отображения значения|
|`EditMask`|[`EditMask`](/docs/API/Core/EditMask/)||Маска ввода значения|

# Examples

```json
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