---
layout: doc
title: "BaseDataSource.getProperty()"
position: 25
---

Возвращает значение указанного свойства источника.

# Description

Методы [`getProperty()`](../BaseDataSource.getProperty/), [`setProperty()`](../BaseDataSource.setProperty/)
и событие [`onPropertyChanged`](../BaseDataSource.onPropertyChanged/) используются механизмом
[привязки данных](../../../DataBinding/). Вместе с этим они предоставляют универсальный
унифицированный интерфейс для работы со свойствами источника данных.

# Syntax

```js
BaseDataSource.getProperty(property)
```

## Parameters

`property`

Путь к свойству.

## Returns

Значение свойства.

# Examples

```js
var value = BaseDataSource.getProperty('$.Property1');
```

# See Also

* [`setProperty()`](../BaseDataSource.setProperty/)
* [`onPropertyChanged`](../BaseDataSource.onPropertyChanged/)
* [`DataBinding`](../../../DataBinding/)
