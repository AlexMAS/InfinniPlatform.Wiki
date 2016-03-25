---
layout: doc
title: "DataBinding.getSource()"
position: 6
---

Возвращает источник данных привязки.

# Syntax

```js
dataBinding.getSource()
```

## Parameters

Нет

## Returns

Источник данных привязки, установленный вызовом метода [`bindSource()`](../DataBinding.bindSource/).

# Examples

```js
dataBinding.bindSource(context.dataSources['DataSource1'], '$.FirstName');
var source = dataBinding.getSource(); // source === context.dataSources['DataSource1']
```

# See Also

* [`bindSource()`](../DataBinding.bindSource/)
* [`getSourceProperty()`](../DataBinding.getSourceProperty/)
