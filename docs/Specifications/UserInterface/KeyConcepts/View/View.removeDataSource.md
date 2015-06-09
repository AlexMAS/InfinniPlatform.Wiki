---
layout: doc
title: "View.removeDataSource()"
position: 11
---

Удаляет [источник данных](../../../DataSources/BaseDataSource/) из представления.

# Syntax

```js
View.removeDataSource(name)
```

## Parameters

`name`

Наименование источника данных. Должно быть уникальным в рамках представления.

# Examples

```js
View.removeDataSource('myDataSource');
```

# See Also

* [`getDataSources()`](../View.getDataSources/)
* [`addDataSource()`](../View.addDataSource/)
* [`BaseDataSource`](../../../DataSources/BaseDataSource/)
