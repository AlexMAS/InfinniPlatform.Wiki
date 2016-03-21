---
layout: doc
title: "DataBinding.getSourceProperty()"
position: 7
---

Возвращает путь к свойству источника данных привязки.

# Syntax

```js
DataBinding.getSourceProperty()
```

## Returns

Путь к свойству источника данных привязки, установленный вызовом метода [`bindSource()`](../DataBinding.bindSource/).

# Examples

```js
DataBinding.bindSource(context.dataSources.dataSource1, '$.FirstName');
var sourceProperty = DataBinding.getSourceProperty(); // sourceProperty === '$.FirstName'
```

# See Also

* [`bindSource()`](../DataBinding.bindSource/)
* [`getSource()`](../DataBinding.getSource/)
