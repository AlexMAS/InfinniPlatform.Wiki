---
layout: doc
title: "Element.setProperty()"
position: 28
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

`property`

Путь к свойству.

`value`

Значение свойства.

# Examples

```js
Element.setProperty('Visible', true); // Element.setVisible(true);
```

# See Also

* [`getProperty()`](../Element.getProperty/)
* [`onPropertyChanged`](../Element.onPropertyChanged/)
* [`DataBinding`](../../../DataBinding/)
