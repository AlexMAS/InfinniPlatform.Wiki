---
layout: doc
title: "View.open()"
position: 21
---

Открывает представление.

# Description

Вызов метода [`open()`](../View.open/) приводит к возникновению события [`onOpening`](../View.onOpening/).
Представление будет открыто, если нет ни одного обработчика, подписанного на событие [`onOpening`](../View.onOpening/),
либо если все обработчики этого события вернули значение, отличное от `false`. Открытие представления
приводит к возникновению события [`onOpened`](../View.onOpened/). В обработчике события [`onOpened`](../View.onOpened/)
можно зарегистрировать факт открытия представления.

# Syntax

```js
View.open([success[, error]])
```

## Parameters

`success`

Необязательный. [Обработчик события](../../Script/) о том, что представление открыто.

`error`

Необязательный. [Обработчик события](../../Script/) о том, что при открытии произошла ошибка.

# Examples

```js
View.open();
```

# See Also

* [`onOpening`](../View.onOpening/)
* [`onOpened`](../View.onOpened/)
* [`close()`](../View.close/)
