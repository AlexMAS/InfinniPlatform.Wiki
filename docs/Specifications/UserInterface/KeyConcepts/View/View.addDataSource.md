---
layout: doc
title: "View.addDataSource()"
position: 10
---

Добавляет [источник данных](../../../DataSources/BaseDataSource/) в представление.

# Syntax

```js
View.addDataSource(name, value)
```

## Parameters

`name`

Наименование источника данных. Должно быть уникальным в рамках представления.

`value`

[Источник данных представления](../../../DataSources/BaseDataSource/).

# Examples

```js
var dataSource = new ObjectDataSource(View);
View.addDataSource('myDataSource', dataSource);
```

# See Also

* [`getDataSources()`](../View.getDataSources/)
* [`removeDataSource()`](../View.removeDataSource/)
* [`BaseDataSource`](../../../DataSources/BaseDataSource/)
