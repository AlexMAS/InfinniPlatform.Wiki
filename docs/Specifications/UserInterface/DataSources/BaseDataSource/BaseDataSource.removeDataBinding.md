---
layout: doc
title: "BaseDataSource.removeDataBinding()"
position: 26
---

Удаляет [привязку](../../../DataBindings/BaseDataBinding/) из списка привязок источника данных.

# Syntax

```js
BaseDataSource.removeDataBinding(dataBinding)
```

## Parameters

`dataBinding`

[Привязка данных](../../../DataBindings/BaseDataBinding/).

# Examples

```js
var dataBindings = BaseDataSource.getDataBindings();
BaseDataSource.removeDataBinding(dataBindings[0]);
```
