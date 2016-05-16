---
layout: doc
title: "View.open()"
position: 7
---

Открывает представление.

# Description

Вызов метода `open` приводит к возникновению события [`onOpening`](../View.onOpening/).
Представление будет открыто, если нет ни одного обработчика, подписанного на событие [`onOpening`](../View.onOpening/),
либо если все обработчики этого события вернули значение, отличное от `false`. Открытие представления
приводит к возникновению события [`onOpened`](../View.onOpened/). В обработчике события [`onOpened`](../View.onOpened/)
можно зарегистрировать факт открытия представления.

# Syntax

```js
view.open(success, error)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|success|[`Script`](../../../Script/)| (Необязательный) Обработчик события о том, что представление открыто|
|error|[`Script`](../../../Script/)| (Необязательный) Обработчик события о том, что при открытии произошла ошибка|

## Returns

Метод ничего не возвращает.

# Examples

```js
view.open();
```

# See Also

* [`onOpening`](../View.onOpening/)
* [`onOpened`](../View.onOpened/)
* [`close()`](../View.close/)
