---
layout: doc
title: "Collection.comparator"
position: 2
---

Возвращает [функцию сравнения элементов коллекции](../Comparator/).

# Syntax

```js
Collection.comparator
```

## Returns

[Функция сравнения элементов коллекции](../Comparator/), указанная при ее создании.

# Examples

```js
var items = [
  { key: 3, value: 'C' },
  { key: 2, value: 'B' },
  { key: 1, value: 'A' }
];

var comparator = function(a, b) {
  if (a.key < b.key) return -1;
  if (a.key > b.key) return 1;
  return 0;
};

var collection = new Collection(items, 'key', comparator);

collection.forEach(function(item) {
  console.log(item.value);
});

// Output:
// C
// B
// A

collection.sort();

collection.forEach(function(item) {
  console.log(item.value);
});

// Output:
// A
// B
// C
```

# See Also

* [`sort()`](../Collection.sort/)
* [`Comparator`](../Comparator/)
