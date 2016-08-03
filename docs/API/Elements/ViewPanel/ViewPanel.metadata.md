---
layout: doc
title: "ViewPanel.metadata"
position: 0
---

Метаданные типа [`ViewPanel`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|LinkView|[`LinkView`](/docs/API/Core/Elements/View/LinkView/LinkView.metadata/)|Объект, который создает и настраивает представление, отображаемое внутри ViewPanel|

# Examples

```json
{
	"ViewPanel": {
		"LinkView": {
			"AutoView": {
				"Path": "/view/patients/listView.json"
			}
		}
	}
}
```