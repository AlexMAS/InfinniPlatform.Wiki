---
layout: doc
title: "AddAction.metadata"
position: 0
---

Метаданные типа [`AddAction`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|LinkView<sup>*</sup>|[`LinkView.metadata`](../../../Elements/View/LinkView/LinkView.metadata/)|Объект, который будет создавать и настраивать [представление](../../../Elements/View/)|
|SourceValue.Source<sup>*</sup>|`String`|Название редактируемого источника данных на представлении редактирования|
|DestinationValue.Source|`String`|Название редактируемого источника данных, на представлении, откуда редактирование было вызвано|
|DestinationValue.Property|`String`|Путь до поля в источнике данных, которое будет редактироваться. Данное поле должно быть представлено массивом|

<sup>*</sup> Обязательное свойство.

# Examples

```json
{
	"AddAction": {
		"DestinationValue": {
		  "Source": "ParentsDataSource",
		  "Property": "$.Children"
		},
		"SourceValue": {
		  "Source": "MainDataSource"
		},
		"LinkView": {
		  "InlineView": {
		  	...
		  }
		}
	}
}
```