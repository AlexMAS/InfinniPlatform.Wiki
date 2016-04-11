---
layout: doc
title: "ListBox.metadata"
position: 0
---

Метаданные типа [`ListBox`](../).

# Schema

Метаданные полностью определяются [`ListEditorBase.metadata`](../../ListEditorBase/ListEditorBase.metadata/)

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
