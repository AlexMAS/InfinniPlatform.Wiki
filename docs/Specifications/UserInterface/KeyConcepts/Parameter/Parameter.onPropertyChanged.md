---
layout: doc
title: "Parameter.onPropertyChanged"
position: 100
---

Устанавливает [обработчик события](../../Script/) о том, что одно из свойств параметра изменилось.

# Description

Методы [`getProperty()`](../Parameter.getProperty/), [`setProperty()`](../Parameter.setProperty/)
и событие [`onPropertyChanged`](../Parameter.onPropertyChanged/) используются механизмом
[привязки данных](../../../DataBinding/). Вместе с этим они предоставляют универсальный
унифицированный интерфейс для работы со свойствами параметра.

# Syntax

```js
Parameter.onPropertyChanged(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что одно из свойств параметра изменилось. В параметре
`argument` передается информация о произошедшем событии. Свойство `property` содержит путь к свойству,
`argument.oldValue` - предыдущее значение, `argument.newValue` - новое значение.

# Examples

```js
Parameter.onPropertyChanged(
  function(context, argument) { alert('Property ' + argument.property + ' is changed!'); }
);
```

# See Also

* [`getProperty()`](../Parameter.getProperty/)
* [`setProperty()`](../Parameter.setProperty/)
* [`DataBinding`](../../../DataBinding/)
