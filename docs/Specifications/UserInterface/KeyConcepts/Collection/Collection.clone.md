---
layout: doc
title: "Collection.clone()"
position: 42
---

Создает копию коллекции элементов.

# Description

Метод создает создает новый экземпляр [коллекции элементов](../), который является копией исходной
коллекции. При этом копируется только состав и порядок элементов, сами элементы не клонируются.
Также не копируются обработчики событий исходной коллекции. Полученный экземпляр является абсолютно
независимым от исходной коллекции, также, как и исходная коллекция не зависит от созданного экземпляра.
Таким образом, модификация одной коллекции никак не сказывается на состоянии другой и наоборот.

# Syntax

```js
Collection.clone()
```

## Returns

Новый экземпляр [коллекции элементов](../), который является копией исходной коллекции.

# Examples

```js
var collection1 = new Collection([ 'A', 'B', 'C' ]);
var collection2 = collection1.clone();

collection1.add('X');
collection2.add('Y');

collection1.forEach(function(item) {
  console.log(item);
});

// Output:
// A
// B
// C
// X

collection2.forEach(function(item) {
  console.log(item);
});

// Output:
// A
// B
// C
// Y
```

# See Also

* [`toArray()`](../Collection.toArray/)
