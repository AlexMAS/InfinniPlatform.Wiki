---
layout: doc
title: "View.close()"
position: 22
---

Закрывает представление.

# Description

Вызов метода [`close()`](../View.close/) приводит к возникновению события [`onClosing`](../View.onClosing/).
Представление будет закрыто, если нет ни одного обработчика, подписанного на событие [`onClosing`](../View.onClosing/),
либо если все обработчики этого события вернули значение, отличное от `false`. Закрытие представления
приводит к возникновению события [`onClosed`](../View.onClosed/). В обработчике события [`onClosed`](../View.onClosed/)
можно зарегистрировать факт закрытия представления.

# Syntax

```js
View.close([success[, error]])
```

## Parameters

`success`

Необязательный. [Обработчик события](../../Script/) о том, что представление закрыто.

`error`

Необязательный. [Обработчик события](../../Script/) о том, что при закрытии произошла ошибка.

# Examples

```js
View.close();
```

# See Also

* [`onClosing`](../View.onOpening/)
* [`onClosed`](../View.onOpened/)
* [`open()`](../View.open/)
