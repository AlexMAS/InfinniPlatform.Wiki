---
layout: doc
title: "EditAction.metadata"
position: 0
---

Метаданные типа [`EditAction`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|LinkView<sup>*</sup>|[`LinkView.metadata`](../../../Elements/View/LinkView/LinkView.metadata/)|Объект, который будет создавать и настраивать [представление](../../../Elements/View/)|
|SourceValue.Source<sup>*</sup>|`String`|Название редактируемого источника данных на представлении редактирования|
|DestinationValue.Source<sup>*</sup>|`String`|Название редактируемого источника данных, на представлении, откуда редактирование было вызвано|
|DestinationValue.Property<sup>*</sup>|`String`|Путь до поля в источнике данных, которое будет редактироваться|

<sup>*</sup> Обязательное свойство.

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