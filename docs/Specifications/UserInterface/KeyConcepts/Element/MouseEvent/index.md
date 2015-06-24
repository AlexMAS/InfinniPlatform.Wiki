---
layout: doc
title: "MouseEvent"
position: 1002
---

Событие от мыши.

# Syntax

```js
new MouseEvent()
```

# Properties

## `source`

Источник события - [визуальный элемент](../).

## `buttons`

Возвращает информацию о нажатых [кнопках мыши](../MouseButton/) (логическая дизъюнкция).

## `altKey`

Возвращает `true`, если событие произошло, когда была нажата кнопка `Alt`, иначе - `false`.

## `ctrlKey`

Возвращает `true`, если событие произошло, когда была нажата кнопка `Ctrl`, иначе - `false`.

## `shiftKey`

Возвращает `true`, если событие произошло, когда была нажата кнопка `Shift`, иначе - `false`.

# See Also

* [`MouseButton`](../MouseButton/)
