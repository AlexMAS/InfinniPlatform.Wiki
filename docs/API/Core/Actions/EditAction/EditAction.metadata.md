---
layout: doc
title: "EditAction.metadata"
position: 0
---

Метаданные типа [`EditAction`](../).

# Schema

|Name|Type|Description|
|----|----|-----------|
|LinkView|[`LinkView.metadata`](../../../Elements/View/LinkView/LinkView.metadata/)|Объект, который будет создавать и настраивать [представление](../../../Elements/View/)|
|SourceValue.Source|`String`|Название редактируемого источника данных на представлении редактирования|
|DestinationValue.Source|`String`|Название редактируемого источника данных, на представлении, откуда редактирование было вызвано|
|DestinationValue.Property|`String`|Путь до поля в источнике данных, которое будет редактироваться|


# Examples

```json
{
	"EditAction": {
		"DestinationValue": {
		  "Source": "ParentsDataSource",
		  "Property": "$"
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