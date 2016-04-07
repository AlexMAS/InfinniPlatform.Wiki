---
layout: doc
title: "Collection.toArray"
position: 39
---

Возвращает массив всех элементов коллекции.

# Syntax

```js
Collection.toArray()
```

## Returns

Массив, содержащий все элементы коллекции в том же порядке, в котором они были представлены на момент
вызова данной функции. Массив хранит ссылки на элементы соответствующей коллекции, но его модификация
не меняет внутреннее состояние коллекции также, как и модификация коллекции не меняет состав массива.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C' ]);
var array = collection.toArray();

collection.push('X');
array.push('Y');

collection.forEach(function(item) {
  console.log(item);
});

// Output:
// A
// B
// C
// X

array.forEach(function(item) {
  console.log(item);
});

// Output:
// A
// B
// C
// Y
```

# See Also

* [`forEach()`](../Collection.forEach/)
* [`filter()`](../Collection.filter/)
* [`take()`](../Collection.take/)
* [`clone()`](../Collection.clone/)
