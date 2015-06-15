---
layout: doc
title: "ObjectBinding"
position: 1
---

Привязка элемента и произвольного объекта.

# Description

Вполне допустима ситуация, когда в роли источника данных для элемента выступает некоторая константа
либо предопределенный объект. В этом случае нет необходимости в объявлении источника данных, так как
достаточно воспользоваться привязкой типа `ObjectBinding` - она позволят объявить произвольный объект,
который будет выступать в роли источника данных для соответствующего элемента.

# Extends

[`BaseDataBinding`](../BaseDataBinding/)

# Syntax

```js
new ObjectBinding(source[, property])
```

## Parameters

`source`

Значение, выступающее в роли источника данных.

`property`

Необязательный. Путь к свойству объекта источника данных.

# Methods

## [`getValue()`](ObjectBinding.getValue/)

Возвращает значение, выступающее в роли источника данных.

# Examples

```js
var binding1 = new ObjectBinding(3.14);
var binding2 = new ObjectBinding({ Property1: 3.14 }, 'Property1');
```
