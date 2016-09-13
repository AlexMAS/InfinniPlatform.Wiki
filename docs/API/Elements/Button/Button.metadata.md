---
layout: doc
title: "Button.metadata"
position: 0
---

Метаданные типа [`Button`](../).

# Properties

|Name|Type|Default|Description|
|----|----|----|-----------|
|Action|[`ActionMetadata`](../../../Core/Actions/Action.metadata/)| |Основное действие кнопки|
|Content|`String`| |Содержимое кнопки|
|ContentTemplate|[ElementMetadata](../../../Core/Elements/Element/Element.metadata/)| |Шаблон содержимого кнопки|
|ViewMode|[`viewMode`](../../Core/viewMode/)|`common`|Может принимать значения: 'link' или 'common'. Если указать значение 'link', то кнопка примет вид ссылки|

# Examples

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