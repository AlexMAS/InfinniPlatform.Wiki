---
layout: doc
title: "View.onOpening"
position: 100
---

Устанавливает [обработчик события](../../Script/) о том, что представление открывается.

# Description

Вызов метода [`open()`](../View.open/) приводит к возникновению события [`onOpening`](../View.onOpening/).
Представление будет открыто, если нет ни одного обработчика, подписанного на событие [`onOpening`](../View.onOpening/),
либо если все обработчики этого события вернули значение, отличное от `false`. Открытие представления
приводит к возникновению события [`onOpened`](../View.onOpened/). В обработчике события [`onOpened`](../View.onOpened/)
можно зарегистрировать факт открытия представления.

# Syntax

```js
View.onOpening(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что представление открывается.

# Examples

```js
Session.onOpening(
  function(context, argument) { alert('Opening view!'); }
);
```
