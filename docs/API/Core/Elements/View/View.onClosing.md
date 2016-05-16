---
layout: doc
title: "View.onClosing"
position: 102
---

Устанавливает [обработчик события](../../../Script/) о том, что представление закрывается.

# Description

Вызов метода [`close()`](../View.close/) приводит к возникновению события `onClosing`.
Представление будет закрыто, если нет ни одного обработчика, подписанного на событие `onClosing`,
либо если все обработчики этого события вернули значение, отличное от `false`. Закрытие представления
приводит к возникновению события [`onClosed`](../View.onClosed/). В обработчике события [`onClosed`](../View.onClosed/)
можно зарегистрировать факт закрытия представления.

# Syntax

```js
view.onClosing(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[`Script`](../../../Script/)|Обработчик события о том, что представление закрывается|

# Examples

```js
view.onClosing(
  function(context, argument) { alert('View is closing!'); }
);
```

# See Also

* [`close()`](../View.close/)
* [`onClosed`](../View.onClosed/)
