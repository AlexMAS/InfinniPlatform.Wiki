---
layout: doc
title: "TreeView.metadata"
position: 0
---

Метаданные типа [`TreeView`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|KeySelector|[`Script`](../../../Core/Script)|Функция выборки из элемента коллекции идентификатора.|
|KeyProperty|`String`|Свойство элемента коллекции с идентификатором.|
|ParentSelector|[`Script`](../../../Core/Script)|Функция выборки из элемента коллекции идентификатора родителя.|
|ParentProperty|`String`|Свойство элемента коллекции с идентификатором родителя.|

# Examples

```json
{
  "KeyProperty": "Id",
  "ParentProperty": "ParentId",
  "ItemProperty": "DisplayName",
  "Items": {
    "Source": "dataSource1"
  }
}
```
