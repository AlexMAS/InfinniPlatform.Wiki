---
layout: doc
title: "InlineView"
position: 1
---

Метаданные типа [`LinkView`](../../). Позволяет задать содержимое представления с помощью [метаданных](../../../View.metadata/).

# Schema

|Name|Type|Description|
|----|----|-----------|
|OpenMode|`String`|Название стратегии отображения представления|
|DialogWidth|`String`|Ширина диалогового окна (актуально в случае OpenMode = 'Dialog')|
|Container|`String`|Название контейнера (актуально в случае OpenMode = 'Container')|
|View|`Object`|Шаблон содержимого [представления](../../../)|

# Examples

```json
{
	"LinkView": {
		"InlineView": {
			"OpenMode": "Container",
			"Container": "CenterPanel",
			"View": {
				"Items": [
					{
						"Label": {
							"Text": "InlineView"
						}
					}
				]
			}
		}
	}
}
```