---
layout: doc
title: "AddAction.metadata"
position: 0
---

Метаданные типа [`AddAction`](../).

# Schema

|Name|Type|Description|
|----|----|-----------|
|LinkView|[`LinkView.metadata`](../../../LinkView/LinkView.metadata/)|Объект, который будет создавать и настраивать [представление](../../../Elements/View/)|
|SourceValue.Source|`String`|Название редактируемого источника данных на представлении редактирования|
|DestinationValue.Source|`String`|Название редактируемого источника данных, на представлении, откуда редактирование было вызвано|
|DestinationValue.Property|`String`| (Необязательное) Путь до поля в источнике данных, которое будет редактироваться. Данное поле должно быть представлено массивом|


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