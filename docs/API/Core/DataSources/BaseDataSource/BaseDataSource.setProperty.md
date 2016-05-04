---
layout: doc
title: "BaseDataSource.setProperty()"
position: 22
---

Устанавливает значение указанного свойства источника.

# Description

Методы [`getProperty()`](../BaseDataSource.getProperty/), [`setProperty()`](../BaseDataSource.setProperty/)
и событие [`onPropertyChanged`](../BaseDataSource.onPropertyChanged/) используются механизмом
[привязки данных](../../../DataBinding/). Вместе с этим они предоставляют универсальный
унифицированный интерфейс для работы со свойствами источника данных.

# Syntax

```js
BaseDataSource.setProperty(property, value)
```

## Parameters

|Name|Description|
|----|-----------|
|property|Путь к свойству (подробности использования см. в разделе [Path rules](../BaseDataSource.getProperty/#path-rules))|
|value|Значение свойства|

## Returns

Метод ничего не возвращает.

# Examples

```js
BaseDataSource.setProperty('$.Property1', 123);
```

# See Also

* [`getProperty()`](../BaseDataSource.getProperty/)
* [`onPropertyChanged`](../BaseDataSource.onPropertyChanged/)
* [`DataBinding`](../../../DataBinding/)
