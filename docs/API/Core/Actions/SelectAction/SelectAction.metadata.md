---
layout: doc
title: "SelectAction.metadata"
position: 0
---

Метаданные типа [`SelectAction`](../).

# Schema

|Name|Type|Description|
|----|----|-----------|
|LinkView|[`LinkView.metadata`](../../../LinkView/LinkView.metadata/)|Объект, который будет создавать и настраивать [представление](../../../Elements/View/)|
|SourceValue.Source|`String`|Название источника данных, из которого будет заполняться редактируемый источник данных|
|SourceValue.Property|`String`|Путь до поля в источнике данных, которое будет копироваться|
|DestinationValue.Source|`String`|Название редактируемого источника данных|
|DestinationValue.Property|`String`|Путь до поля в источнике данных, которое будет редактироваться|


# Examples

```json
{
	"SelectAction": {
		"DestinationValue": {
		  "Source": "Hospitalizations",
		  "Property": "$.Patient"
		},
		"SourceValue": {
		  "Source": "Patients",
		  "Property": "$"
		},
		"LinkView": {
		  "InlineView": {
		  	...
		  }
		}
	}
}
```