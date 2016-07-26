---
layout: doc
title: "Cell.metadata"
position: 0
---

Метаданные типа [`Cell`](../).

# Schema

|Name|Type|Description|
|----|----|-----------|
|ColumnSpan|`Integer`|(Необязательное) Размер ячейки|

# Example

```json
{
    "Cell": {
	  "ColumnSpan": 2,
	  "Items": [
	    {
	      "Label": {
	        "Value": "Cell text"
	      }
	    }
	  ]
	}
}
```
