---
layout: doc
title: "DataBinding.getSource()"
position: 6
---

Возвращает источник данных привязки.

# Syntax

```js
DataBinding.getSource()
```

## Returns

Источник данных привязки, установленный вызовом метода [`bindSource()`](../DataBinding.bindSource/).

# Examples

```js
DataBinding.bindSource(context.dataSources.dataSource1, '$.FirstName');
var source = DataBinding.getSource(); // source === context.dataSources.dataSource1
```

# See Also

* [`bindSource()`](../DataBinding.bindSource/)
* [`getSourceProperty()`](../DataBinding.getSourceProperty/)
