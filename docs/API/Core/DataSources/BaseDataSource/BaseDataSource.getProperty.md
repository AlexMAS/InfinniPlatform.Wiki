---
layout: doc
title: "BaseDataSource.getProperty()"
position: 17
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

|Name|Description|
|----|-----------|
|property|Путь к свойству (подробности использования см. в разделе [Path rules](#path-rules))|

## Returns

Значение свойства.

# Path rules

По умолчанию методы [getProperty](../BaseDataSource.getProperty/), [setProperty](../BaseDataSource.setProperty/) и [onPropertyChanged](../BaseDataSource.onPropertyChanged/) обращаются к свойствам элементов источников данных. Например, dataSource.getProperty('0.Name') вернёт свойство Name первого элемента.  
Однако, иногда необходимо обращаться к [собственным свойствам источника данных](../#specific-properties), тогда передназванием свойства укажите точку. 
Например, dataSource.getProperty('.selectedItem') вернёт текущий элемент.  

# Examples

```js
var value = BaseDataSource.getProperty('$.Property1');
```

# See Also

* [`setProperty()`](../BaseDataSource.setProperty/)
* [`onPropertyChanged`](../BaseDataSource.onPropertyChanged/)
* [`DataBinding`](../../../DataBinding/)
