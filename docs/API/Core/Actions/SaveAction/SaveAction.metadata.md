---
layout: doc
title: "SaveAction.metadata"
position: 0
---

Метаданные типа [`SaveAction`](../).

# Schema

|Name|Type|Default|Required|Description|
|----|----|:--:|:--:|-----------|
|DestinationValue.Source|`String`| - | + |Название источника данных|
|CanClose|`Boolean`| true | - |Флаг, определяющий, нужно ли закрыть родительское представление после сохранения|



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

* [`DataSource`](../../DataSources/)