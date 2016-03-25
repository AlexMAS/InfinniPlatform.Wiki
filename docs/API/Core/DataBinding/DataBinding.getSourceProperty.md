---
layout: doc
title: "DataBinding.getSourceProperty()"
position: 7
---

Возвращает путь к свойству источника данных привязки.

# Syntax

```js
dataBinding.getSourceProperty()
```

## Parameters

Нет

## Returns

Путь к свойству источника данных привязки, установленный вызовом метода [`bindSource()`](../DataBinding.bindSource/).

# Examples

```js
dataBinding.bindSource(context.dataSources['DataSource1'], '$.FirstName');
var sourceProperty = dataBinding.getSourceProperty(); // sourceProperty === '$.FirstName'
```

# See Also

* [`bindSource()`](../DataBinding.bindSource/)
* [`getSource()`](../DataBinding.getSource/)
