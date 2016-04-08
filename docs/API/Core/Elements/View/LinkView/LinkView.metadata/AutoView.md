---
layout: doc
title: "AutoView"
position: 2
---

Метаданные типа [`LinkView`](../../). Позволяет задать содержимое представления, указав путь (названия конфигурации и документа, где хранится представление, и название представления) до соответсвующий метаданных.

# Schema

|Name|Type|Description|
|----|----|-----------|
|OpenMode|`String`|Название стратегии отображения представления|
|DialogWidth|`String`|Ширина диалогового окна (актуально в случае OpenMode = 'Dialog')|
|Container|`String`|Название контейнера (актуально в случае OpenMode = 'Container')|
|ConfigId|`String`|Название конфигурации|
|DocumentId|`String`|Название документа|
|MetadataName|`String`|Название представления|
|Parameters|`Array`|Коллекция [параметров представления](../../../../../Parameters/)|

# Examples

```json
{
	"LinkView": {
		"AutoView": {
			"OpenMode": "Dialog",
			"DialogWidth": "Small",
			"ConfigId": "Hospital",
			"DocumentId": "Patient",
			"MetadataName": "EditView",
			"Parameters": [
				{
					"Name": "RefreshInfo",
					"Value": true
				}
	        ]
		}
	}
}
```