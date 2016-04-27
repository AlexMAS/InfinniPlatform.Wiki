---
layout: doc
title: "DocumentDataSource.setFilterParams()"
position: 7
---

Устанавливает значение параметра.

# Syntax

```js
serverAction.setFilterParams(name, value)
serverAction.setFilterParams(value)
```

## Parameters

|Name|Description|
|----|---------|
|name|Название параметра|
|value|Значение, которое необходимо установить|

## Returns

Метод ничего не возвращает

# Examples

```js
serverAction.setFilterParams('documentName', 'Patient');

serverAction.setFilterParams({
	documentName: 'Patient',
	userId: '12345'
});
```

# See Also

* [`getFilterParams`](../DocumentDataSource.getFilterParams/)
* [`getFilter()`](../DocumentDataSource.getFilter/)
* [`setFilter()`](../DocumentDataSource.setFilter/)
