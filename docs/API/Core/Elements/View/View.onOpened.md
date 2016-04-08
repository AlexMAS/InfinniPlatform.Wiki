---
layout: doc
title: "View.onOpened"
position: 101
---

Устанавливает [обработчик события](../../../Script/) о том, что представление было открыто.

# Description

Вызов метода [`open()`](../View.open/) приводит к возникновению события [`onOpening`](../View.onOpening/).
Представление будет открыто, если нет ни одного обработчика, подписанного на событие [`onOpening`](../View.onOpening/),
либо если все обработчики этого события вернули значение, отличное от `false`. Открытие представления
приводит к возникновению события `onOpened`. В обработчике события `onOpened`
можно зарегистрировать факт открытия представления.

# Syntax

```js
view.onOpened(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[`Script`](../../../Script/)|Обработчик события о том, что представление было открыто|

# Examples

```js
view.onOpened(
  function(context, argument) { alert('View is opened!'); }
);
```

# See Also

* [`open()`](../View.open/)
* [`onOpening`](../View.onOpening/)
