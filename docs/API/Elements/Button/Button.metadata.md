---
layout: doc
title: "Button.metadata"
position: 0
---

Метаданные типа [`Button`](../).

# Schema

|Name|Type|Default|Description|
|----|----|----|-----------|
|Action|[`ActionMetadata`](../../../Core/Actions/Action.metadata/)| |(Необязательное) Основное действие кнопки|
|Content|`String`| |(Необязательное) Содержимое кнопки|
|ContentTemplate|[ElementMetadata](../../../Core/Elements/Element/Element.metadata/)| |(Необязательное) Шаблон содержимого кнопки|
|ViewMode|[`viewMode`](../../Core/viewMode/)|`common`|(Необязательное) Может принимать значения: 'link' или 'common'. Если указать значение 'link', то кнопка примет вид ссылки|

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