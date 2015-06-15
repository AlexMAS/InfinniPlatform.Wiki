---
layout: doc
title: "PropertyBinding"
position: 3
---

Привязка элемента и [источника данных представления](../../DataSources/BaseDataSource/).

# Description

Привязка элемента и [источника данных представления](../../DataSources/BaseDataSource/) - наиболее
часто используемый тип привязки. Привязка типа `PropertyBinding` позволяет связать элемент и источник
данных представления.

# Extends

[`BaseDataBinding`](../BaseDataBinding/)

# Syntax

```js
new PropertyBinding(source[, property])
```

## Parameters

`source`

[Источник данных представления](../../DataSources/BaseDataSource/), выступающий в роли источника данных.

`property`

Необязательный. Путь к свойству объекта источника данных.

# Methods

## [`getDataSource()`](PropertyBinding.getDataSource/)

Возвращает [источник данных представления](../../DataSources/BaseDataSource/), выступающий в роли источника данных.

# Examples

```js
var binding1 = new PropertyBinding(context.dataSources.dataSource1);
var binding2 = new PropertyBinding(context.dataSources.dataSource1, '$.Property1');
```
