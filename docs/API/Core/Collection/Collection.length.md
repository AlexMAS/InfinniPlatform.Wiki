---
layout: doc
title: "Collection.length"
position: 0
---

Возвращает количество элементов в коллекции.

# Syntax

```js
Collection.length
```

## Returns

Количество элементов в коллекции.

# Examples

```js
var collection = new Collection(); // Collection.length === 0
collection.add('A'); // Collection.length === 1
collection.add('B'); // Collection.length === 2
collection.add('C'); // Collection.length === 3
```

# See Also

* [`size()`](../Collection.size/)
