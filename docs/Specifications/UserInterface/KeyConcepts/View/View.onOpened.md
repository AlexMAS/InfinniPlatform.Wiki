---
layout: doc
title: "View.onOpened"
position: 101
---

Устанавливает [обработчик события](../../Script/) о том, что представление было открыто.

# Description

Вызов метода [`open()`](../View.open/) приводит к возникновению события [`onOpening`](../View.onOpening/).
Представление будет открыто, если нет ни одного обработчика, подписанного на событие [`onOpening`](../View.onOpening/),
либо если все обработчики этого события вернули значение, отличное от `false`. Открытие представления
приводит к возникновению события [`onOpened`](../View.onOpened/). В обработчике события [`onOpened`](../View.onOpened/)
можно зарегистрировать факт открытия представления.

# Syntax

```js
View.onOpened(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что представление было открыто.

# Examples

```js
Session.onOpened(
  function(context, argument) { alert('View is opened!'); }
);
```

# See Also

* [`open()`](../View.open/)
* [`onOpening`](../View.onOpening/)
