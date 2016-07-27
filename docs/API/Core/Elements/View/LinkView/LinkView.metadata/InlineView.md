---
layout: doc
title: "InlineView"
position: 1
---

Метаданные типа [`LinkView`](../../). Позволяет задать содержимое представления с помощью [метаданных](../../../View.metadata/).

# Properties

|Name|Type|Default|Description|
|----|----|-------|-----------|
|OpenMode|`String`|'Default'|Название [стратегии отображения](../../OpenMode) представления|
|DialogWidth|`String`| |Ширина диалогового окна (актуально в случае OpenMode = 'Dialog')|
|Container|`String`| |Название контейнера (актуально в случае OpenMode = 'Container')|
|View<sup>*</sup>|`Object`| |Шаблон содержимого [представления](../../../)|

<sup>*</sup> Обязательное свойство.


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