---
layout: doc
title: "Parameter.getProperty()"
position: 6
---

Возвращает значение указанного свойства параметра.

# Description

Методы [`getProperty()`](../Parameter.getProperty/), [`setProperty()`](../Parameter.setProperty/)
и событие [`onPropertyChanged`](../Parameter.onPropertyChanged/) используются механизмом
[привязки данных](../../../DataBinding/). Вместе с этим они предоставляют универсальный
унифицированный интерфейс для работы со свойствами параметра.

# Syntax

```js
Parameter.getProperty(property)
```

## Parameters

`property`

Путь к свойству.

## Returns

Значение свойства.

# Examples

```js
var originalValue = { Property1: 123 };

// Parameter.setValue(originalValue);
Parameter.setProperty('', originalValue);

// var value = Parameter.getValue(); // originalValue
var value = Parameter.getProperty('');

// var property1 = originalValue.Property1; // 123
var property1 = Parameter.getProperty('Property1');

// originalValue.Property1 = 456;
Parameter.setProperty('Property1', 456);

// property1 = originalValue.Property1; // 456
property1 = Parameter.getProperty('Property1');
```

# See Also

* [`setProperty()`](../Parameter.setProperty/)
* [`onPropertyChanged`](../Parameter.onPropertyChanged/)
* [`DataBinding`](../../../DataBinding/)
