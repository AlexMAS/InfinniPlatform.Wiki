---
layout: doc
title: "Parameter.onValueChanged"
position: 100
---

Устанавливает [обработчик события](../../Script/) о том, что значение параметра изменилось.

# Description

Вызов метода [`setValue()`](../Parameter.setValue/) осуществляет изменение значение параметра.
Успешное выполнение данной операции приводит к возникновению события [`onValueChanged`](../Parameter.onValueChanged/).

# Syntax

```js
Parameter.onValueChanged(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что значение параметра изменилось.В параметре `argument`
передается информация о произошедшем событии. Свойство `argument.oldValue` содержит предыдущее
значение параметра, `argument.newValue` - новое значение параметра.

# Examples

```js
Session.onValueChanged(
  function(context, argument) { alert('Parameter value is changed!'); }
);
```

# See Also

* [`setValue()`](../Parameter.setValue/)
