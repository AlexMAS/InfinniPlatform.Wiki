---
layout: doc
title: "Element.setProperty()"
position: 45
---

Устанавливает значение указанного свойства элемента.

# Description

Методы [`getProperty()`](../Element.getProperty/), [`setProperty()`](../Element.setProperty/)
и событие [`onPropertyChanged`](../Element.onPropertyChanged/) используются механизмом
[привязки данных](../../../DataBinding/). Вместе с этим они предоставляют универсальный
унифицированный интерфейс для работы со свойствами элемента.

# Syntax

```js
Element.setProperty(property, value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|property|`String`|Путь к свойству.|
|value| * |Значение свойства.|

## Returns

Метод не возвращает значений.

# Examples

```js
Element.setProperty('Visible', true); // Идентично Element.setVisible(true);
```

# See Also

* [`getProperty()`](../Element.getProperty/)
* [`onPropertyChanged`](../Element.onPropertyChanged/)
* [`DataBinding`](../../../DataBinding/)
