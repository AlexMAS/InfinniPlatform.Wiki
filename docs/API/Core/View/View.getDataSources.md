---
layout: doc
title: "View.getDataSources()"
position: 4
---

Возвращает [коллекцию](../../Collection/) [источников данных представления](../../DataSources/BaseDataSource/).

# Syntax

```js
view.getDataSources()
```

## Parameters

Нет

## Returns

[Коллекция](../../Collection/) [источников данных представления](../../DataSources/BaseDataSource/).

# Examples

```js
var myDataSource = new ObjectDataSource(View);
myDataSource.setName('myDataSource');

var dataSources = view.getDataSources();
dataSources.add(myDataSource);

var myDataSource2 = dataSources.getById('myDataSource'); // myDataSource2 === myDataSource
```

# See Also

* [`Collection`](../../Collection/)
* [`BaseDataSource`](../../DataSources/BaseDataSource/)
