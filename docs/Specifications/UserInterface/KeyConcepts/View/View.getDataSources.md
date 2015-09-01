---
layout: doc
title: "View.getDataSources()"
position: 15
---

Возвращает [коллекцию](../../Collection/) [источников данных представления](../../../DataSources/BaseDataSource/).

# Syntax

```js
View.getDataSources()
```

## Returns

[Коллекция](../../Collection/) [источников данных представления](../../../DataSources/BaseDataSource/).

# Examples

```js
var myDataSource = new ObjectDataSource(View);
myDataSource.setName('myDataSource');

var dataSources = View.getDataSources();
dataSources.add(myDataSource);
var myDataSource2 = dataSources.getById('myDataSource'); // myDataSource2 === myDataSource
```

# See Also

* [`Collection`](../../Collection/)
* [`BaseDataSource`](../../../DataSources/BaseDataSource/)
