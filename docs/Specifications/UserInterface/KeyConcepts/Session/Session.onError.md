---
layout: doc
title: "Session.onError"
position: 104
---

Устанавливает [обработчик события](../../Script/) о том, произошла ошибка.

# Description

[Обработчик события](../../Script/) [`onError`](../Session.onError/) позволяет отлавливать все
ошибки, которые возникают на уровне [провайдер для работы сессией пользователя](../).

# Syntax

```js
Session.onError(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что на уровне [провайдера для работы сессией пользователя](../)
произошла ошибка. В параметре `argument` передается информация о произошедшем событии. Свойство
`argument.error` содержит информацию об ошибке.

# Examples

```js
Session.onError(
  function(context, argument) { alert(argument.error); }
);
```

# See Also

* [`Session`](../)
