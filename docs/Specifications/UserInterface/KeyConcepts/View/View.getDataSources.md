---
layout: doc
title: "View.getDataSources()"
position: 9
---

Возвращает ассоциативный список [источников данных представления](../../../DataSources/BaseDataSource/).

# Syntax

```js
View.getDataSources()
```

## Returns

Ассоциативный список [источников данных представления](../../../DataSources/BaseDataSource/).

# Examples

```js
var dataSources = View.getDataSources();
var dataSource1 = dataSources.myDataSource;
var dataSource2 = dataSources['myDataSource']; // dataSource2 === dataSource1
```

# See Also

* [`addDataSource()`](../View.addDataSource/)
* [`removeDataSource()`](../View.removeDataSource/)
* [`BaseDataSource`](../../../DataSources/BaseDataSource/)
