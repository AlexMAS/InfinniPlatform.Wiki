---
layout: doc
title: "View.close()"
position: 8
---

Закрывает представление.

# Description

Вызов метода `close` приводит к возникновению события [`onClosing`](../View.onClosing/).
Представление будет закрыто, если нет ни одного обработчика, подписанного на событие [`onClosing`](../View.onClosing/),
либо если все обработчики этого события вернули значение, отличное от `false`. Закрытие представления
приводит к возникновению события [`onClosed`](../View.onClosed/). В обработчике события [`onClosed`](../View.onClosed/)
можно зарегистрировать факт закрытия представления.

# Syntax

```js
view.close(success, error)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|success|[`Script`](../../../Script/)|Обработчик события о том, что представление закрыто|
|error|[`Script`](../../../Script/)|Обработчик события о том, что при закрытии произошла ошибка|

## Returns

Метод ничего не возвращает.

# Examples

```js
view.close();
```

# See Also

* [`onClosing`](../View.onClosing/)
* [`onClosed`](../View.onClosed/)
* [`open()`](../View.open/)
