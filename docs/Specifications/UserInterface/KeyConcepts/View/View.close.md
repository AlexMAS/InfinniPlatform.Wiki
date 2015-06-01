---
layout: doc
title: "View.close()"
position: 10
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
View.close()
```

# Examples

```js
View.close();
```
