---
layout: doc
title: "ViewContext.dataSources"
position: 5
---

Возвращает ассоциативный список [источников данных представления](../../DataSources/BaseDataSource/).

# Syntax

```js
ViewContext.dataSources
```

# Examples

```js
var dataSource1 = ViewContext.dataSources.myDataSource;
var dataSource2 = ViewContext.dataSources['myDataSource']; // dataSource2 === dataSource1
```

# See Also

* [`BaseDataSource`](../../DataSources/BaseDataSource/)
