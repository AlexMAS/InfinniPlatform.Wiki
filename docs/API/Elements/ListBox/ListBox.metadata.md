---
layout: doc
title: "ListBox.metadata"
position: 0
---

Метаданные типа [`ListBox`](../).

# Properties

|Name|Type|Default|Description|
|----|----|----|-----------|
|ViewMode|`String`|`common`|[Режим отображения](../../../Core/viewMode/) списка. Может принимать значения: 'common', 'base', 'checking'.|

# Examples

```json
{
  "ListBox": {
    "Name": "ChildrenList",
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