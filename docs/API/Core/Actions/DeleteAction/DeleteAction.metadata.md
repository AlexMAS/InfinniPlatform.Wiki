---
layout: doc
title: "DeleteAction.metadata"
position: 0
---

Метаданные типа [`DeleteAction`](../).

# Schema

|Name|Type|Default|Description|
|----|----|----|-----------|
|DestinationValue.Source|`String`| |Название источника данных, из которого производится удаление|
|DestinationValue.Property|`String`| |Путь до документа в источнике данных, который будет удалятся|
|Accept|`Boolean`|true| (Необязательное) Значение, определяющее, нужно ли перед удалением спросить согласие пользователя на удаление|


# Examples

```json
{
	"DeleteAction": {
		"DestinationValue": {
		  "Source": "DataSource1",
		  "Property": "$"
		},
		"Accept": false
	}
}
```

```json
{
	"DeleteAction": {
		"DestinationValue": {
		  "Source": "DataSource1",
		  "Property": "$.Hospitalizations.0"
		},
		"Accept": false
	}
}
```