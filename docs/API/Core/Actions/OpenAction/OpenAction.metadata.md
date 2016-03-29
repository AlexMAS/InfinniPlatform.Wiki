---
layout: doc
title: "OpenAction.metadata"
position: 0
---

Метаданные типа [`OpenAction`](../).

# Schema

|Name|Type|Default|Required|Description|
|----|----|:--:|:--:|-----------|
|LinkView|[`LinkView.metadata`](../../../LinkView/LinkView.metadata/)| - | + |Объект, который будет создавать и настраивать [представление](../../../Elements/View/)|



# Examples

```json
{
	"OpenAction": {
		"LinkView": {
			"InlineView": {
				...
			}
		}
	}
}
```

# See Also

* [`LinkView`](../../../LinkView/)