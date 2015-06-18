---
layout: doc
title: "Parameter.setProperty()"
position: 16
---

Устанавливает значение указанного свойства параметра.

# Description

Методы [`getProperty()`](../Parameter.getProperty/), [`setProperty()`](../Parameter.setProperty/)
и событие [`onPropertyChanged`](../Parameter.onPropertyChanged/) используются механизмом
[привязки данных](../../../DataBinding/). Вместе с этим они предоставляют универсальный
унифицированный интерфейс для работы со свойствами параметра.

# Syntax

```js
Parameter.setProperty(property, value)
```

## Parameters

`property`

Путь к свойству.

`value`

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

* [`getProperty()`](../Parameter.getProperty/)
* [`onPropertyChanged`](../Parameter.onPropertyChanged/)
* [`DataBinding`](../../../DataBinding/)
