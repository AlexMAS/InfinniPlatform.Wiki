---
layout: doc
title: "DeleteAction.metadata"
position: 0
---

Метаданные типа [`DeleteAction`](../).

# Properties

|Name|Type|Default|Description|
|----|----|----|-----------|
|DestinationValue.Source<sup>*</sup>|`String`| |Название источника данных, из которого производится удаление|
|DestinationValue.Property<sup>*</sup>|`String`| |Путь до документа в источнике данных, который будет удалятся|
|Accept|`Boolean`|true|Значение, определяющее, нужно ли перед удалением спросить согласие пользователя на удаление|

<sup>*</sup> Обязательное свойство.

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