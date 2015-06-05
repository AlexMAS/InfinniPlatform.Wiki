---
layout: doc
title: "BaseDataSource.addDataBinding()"
position: 19
---

Добавляет [привязку](../../../DataBindings/BaseDataBinding/) в список привязок источника данных.

# Syntax

```js
BaseDataSource.addDataBinding(dataBinding)
```

## Parameters

`dataBinding`

[Привязка данных](../../../DataBindings/BaseDataBinding/).

# Examples

```js
var dataBinding = new PropertyBinding(view, 'dataSource1', 'property1');
BaseDataSource.addDataBinding(dataBinding);
```

# See Also

* [`getDataBindings()`](../BaseDataSource.getDataBindings/)
* [`removeDataBinding()`](../BaseDataSource.removeDataBinding/)
* [`BaseDataBinding`](../../../DataBindings/BaseDataBinding/)
