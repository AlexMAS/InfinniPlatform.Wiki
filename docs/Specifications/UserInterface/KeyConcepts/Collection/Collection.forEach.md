---
layout: doc
title: "Collection.forEach()"
position: 36
---

Перечисляет все элементы коллекции.

# Syntax

```js
Collection.forEach(callback[, thisArg])
```

## Parameters

`callback`

Функция для обработки очередного элемента коллекции. Функция принимает три параметра: `item` -
очередной элемент коллекции, `index` - индекс очередного элемента коллекции, `collection` -
обрабатываемая коллекция.

`thisArg`

Необязательный. Объект, используемый как контекст исполнения `this` предиката `predicate`.

## Returns

Возвращает `true`, если есть элемент, удовлетворяющий указанному условию, иначе - `false`.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C' ]);

collection.forEach(function(item, index, collection) {
  console.log(item);
});

// Output:
// A
// B
// C
```

# See Also

* [`filter()`](../Collection.filter/)
* [`take()`](../Collection.take/)
* [`toArray()`](../Collection.toArray/)
