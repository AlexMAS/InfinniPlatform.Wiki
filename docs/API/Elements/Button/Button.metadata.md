---
layout: doc
title: "Button.metadata"
position: 0
---

Метаданные типа [`Button`](../).

# Schema

|Name|Type|Default|Required|Description|
|----|----|:--:|:--:|-----------|
|Action|[`Action`](../../Action)| - | - |Основное действие кнопки|
|Content|???| - | - |Содержимое кнопки|
|ContentTemplate|[ContentTemplate](???)| - | - |Шаблон содержимого кнопки|

# Examples

```js
//infinni-ui-demo
{
	"DataSources": [
    ],
    "Items": [{
//infinni-ui-display-begin
"Button": {
	"Text": "Push me",
	"OnClick": "{ alert("Hello!"); }"
}
//infinni-ui-display-end
	}]
}

```

```json
{
	"ContentTemplate": {
		"Icon": {
		  "Value": "pencil"
		}
	},
	"Action": {
		"EditAction": {
			...
		}
	}
}
```