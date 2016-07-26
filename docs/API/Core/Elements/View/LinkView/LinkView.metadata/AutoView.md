---
layout: doc
title: "AutoView"
position: 2
---

Метаданные типа [`LinkView`](../../). Позволяет задать содержимое представления, указав путь (названия конфигурации и документа, где хранится представление, и название представления) до соответсвующий метаданных.

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|OpenMode|`String`|'Default'|Название [стратегии отображения](../../OpenMode) представления|
|DialogWidth|`String`| |Ширина диалогового окна (актуально в случае OpenMode = 'Dialog')|
|Container|`String`| |Название контейнера (актуально в случае OpenMode = 'Container')|
|Path|`String`| |Путь до метаданных. Полный путь до метаданных будет выглядеть так: [InfinniUI.config](/docs/API/Core/InfinniUI/InfinniUI.config/).serverUrl + '/' + Path.|
|Parameters|`Array`| |Коллекция [параметров представления](../../../../../Parameters/)|

# Examples

```json
{
	"LinkView": {
		"AutoView": {
			"OpenMode": "Dialog",
			"DialogWidth": "Small",
			"Path": "content/metadata/Views/PersonalAccount/EditView.json",
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