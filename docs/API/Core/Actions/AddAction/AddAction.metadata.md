---
layout: doc
title: "AddAction.metadata"
position: 0
---

Метаданные типа [`AddAction`](../).

# Schema

|Name|Type|Default|Required|Description|
|----|----|:--:|:--:|-----------|
|LinkView|[`LinkView.metadata`](../../../LinkView/LinkView.metadata/)| - | + |Объект, который будет создавать и настраивать [представление](../../../Elements/View/)|
|SourceValue.Source|`String`| - | + |Название редактируемого источника данных на представлении редактирования|
|DestinationValue.Source|`String`| - | + |Название редактируемого источника данных, на представлении, откуда редактирование было вызвано|
|DestinationValue.Property|`String`| - | - |Путь до поля в источнике данных, которое будет редактироваться. Данное поле должно быть представлено массивом|


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
		  "AutoView": {
		    "ConfigId": "PTA",
		    "DocumentId": "Child",
		    "MetadataName": "ChildEditViewFromParent",
		    "OpenMode": "Dialog"
		  }
		}
	}
}
```