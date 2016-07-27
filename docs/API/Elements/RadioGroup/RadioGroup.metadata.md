---
layout: doc
title: "RadioGroup.metadata"
position: 0
---

Метаданные типа [`RadioGroup`](../).

# Properties

Метаданные строятся по той же схеме, что и [`ListBox.metadata`](../../ListBox/ListBox.metadata/).

# Examples

```json
{
  "RadioGroup": {
    "ItemTemplate": {
	    "Label": {
	      "Value": {
	        "Source": "MainDataSource",
	        "Property": "$.Childrens.#.Name"
	      }
	    }
    },
    "Items": {
      "Source": "MainDataSource",
      "Property": "$.Childrens"
    }
  }
}
```
