---
layout: doc
title: "Factory.buildMany()"
position: 2
---

Осуществляет создание набора элементов по набору их метаданных.

# Syntax

```js
Factory.buildMany(view, metadataList)
```

## Parameters

`view`

[Визуальное представление](../../View).

`metadataList`

Массив метаданных элементов.

## Returns

Массив экземпляров элементов.

# Examples

```js
var elements = Factory.buildMany(view, [
  { Label: { Text: 'Name' } },
  { TextBox: { Value: 'John' } }
]);
```

# See Also

* [`register()`](../Factory.register/)
* [`build()`](../Factory.build/)
* [`Builder`](../Builder/)
* [`View`](../../View/)
