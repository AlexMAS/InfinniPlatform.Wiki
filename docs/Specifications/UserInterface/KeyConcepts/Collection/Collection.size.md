---
layout: doc
title: "Collection.size()"
position: 10
---

Возвращает количество элементов в коллекции.

# Syntax

```js
Collection.size()
```

## Returns

Количество элементов в коллекции.

# Examples

```js
var collection = new Collection(); // Collection.size() === 0
collection.add('A'); // Collection.size() === 1
collection.add('B'); // Collection.size() === 2
collection.add('C'); // Collection.size() === 3
```

# See Also

* [`length`](../Collection.length/)
