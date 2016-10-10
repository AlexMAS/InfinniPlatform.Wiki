---
layout: doc
title: "DeleteAction.metadata"
position: 0
---

Метаданные типа [`DeleteAction`](../).

# Properties

|Name|Type|Default|Description|
|----|----|----|-----------|
|DestinationValue.Source<sup>*</sup>|`String`|–|Название источника данных, из которого производится удаление|
|DestinationValue.Property<sup>*</sup>|`String`|–|Путь до документа в источнике данных, который будет удалятся|
|Accept|`Boolean`|true|Значение, определяющее, нужно ли перед удалением спросить согласие пользователя на удаление|
|OnSuccess|[`Script`](../../../Script/)|–|Устанавливает обработчик успешного завершения действия|
|OnError|[`Script`](../../../Script/)|–|Устанавливает обработчик завершения действия с ошибкой|


<sup>*</sup> Обязательное свойство.

# Examples

```json
{
	"DeleteAction": {
		"DestinationValue": {
		  "Source": "DataSource1",
		  "Property": "$"
		},
		"Accept": false,
		"OnSuccess": "{ alert('onSuccess'); }",
		"OnError": "{ alert('onError'); }"
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