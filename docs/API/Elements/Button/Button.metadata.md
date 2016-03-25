---
layout: doc
title: "Button.metadata"
position: 0
---

Метаданные типа [`Button`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|Action|[`ActionMetadata`](../../../Core/Action/Action.metadata/)| - |Основное действие кнопки|
|Content|`String`| - |Содержимое кнопки|
|ContentTemplate|[ElementMetadata](../../../Core/Elements/Element/Element.metadata/)| - |Шаблон содержимого кнопки|

# Examples

```js
{
	"ContentTemplate": {
		"Icon": {
		  "Value": "pencil"
		}
	},
	"Action": {
		"EditAction": {
			/** ... **/
		}
	}
}
```