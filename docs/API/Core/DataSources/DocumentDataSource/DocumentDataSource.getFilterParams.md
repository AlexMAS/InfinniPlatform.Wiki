---
layout: doc
title: "DocumentDataSource.getFilterParams()"
position: 6
---

Возвращает значение параметра.

# Syntax

```js
DocumentDataSource.getFilterParams(value)
```

## Parameters

|Name|Description|
|----|---------|
|value|Название параметра|

## Returns

Значение указанного параметра, либо объект со всеми параметрами, если метод вызывался без названия параметра.

# Examples

```js
var filterParams = DocumentDataSource.getFilterParams();
var documentName = DocumentDataSource.getFilterParams('documentName');
```

# See Also

* [`setFilterParams`](../DocumentDataSource.setFilterParams/)
* [`getFilter()`](../DocumentDataSource.getFilter/)
* [`setFilter()`](../DocumentDataSource.setFilter/)
