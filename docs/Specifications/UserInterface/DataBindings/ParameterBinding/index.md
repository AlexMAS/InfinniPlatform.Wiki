---
layout: doc
title: "ParameterBinding"
position: 2
---

Привязка элемента и [параметра представления](../../KeyConcepts/Parameter/).

# Description

[Параметр представления](../../KeyConcepts/Parameter/) может выступать в роли источника данных для
элемента. Для этого достаточно воспользоваться привязкой типа `ParameterBinding` и указать параметр,
который будет выступать в роли источника данных для соответствующего элемента.

# Extends

[`BaseDataBinding`](../BaseDataBinding/)

# Syntax

```js
new ParameterBinding(source[, property])
```

## Parameters

`source`

[Параметр представления](../../KeyConcepts/Parameter/), выступающий в роли источника данных.

`property`

Необязательный. Путь к свойству объекта источника данных.

# Methods

## [`getParameter()`](ParameterBinding.getParameter/)

Возвращает [параметр представления](../../KeyConcepts/Parameter/), выступающий в роли источника данных.

# Examples

```js
var binding1 = new ParameterBinding(context.parameters.param1);
var binding2 = new ParameterBinding(context.parameters.param1, 'Property1');
```
