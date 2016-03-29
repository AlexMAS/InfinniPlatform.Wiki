---
layout: doc
title: "SaveAction.metadata"
position: 0
---

Метаданные типа [`SaveAction`](../).

# Schema

|Name|Type|Default|Description|
|----|----|----|-----------|
|DestinationValue.Source|`String`| |Название источника данных|
|CanClose|`Boolean`|true| (Необязательное) Значение, определяющее, нужно ли закрыть родительское представление после сохранения|



# Examples

```json
{
	"SaveAction": {
		"DestinationValue": {
			"Source": "DataSource1"
		},
		"CanClose": false
	}
}
```

# See Also

* [`DataSource`](../../../DataSources/)