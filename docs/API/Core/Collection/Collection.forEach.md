---
layout: doc
title: "Collection.forEach"
position: 36
---

Перечисляет все элементы коллекции.

# Syntax

```js
Collection.forEach(callback[, thisArg])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`predicate`|`Function`|Функция для обработки очередного элемента коллекции. Функция принимает три параметра: <ul><li>`item` - очередной элемент коллекции, </li><li>`index` - индекс очередного элемента коллекции, </li><li>`collection` - обрабатываемая коллекция.</li></ul>|
|`thisArg`|&#42;|Необязательный. Объект, используемый как контекст исполнения `this` предиката `predicate`.|

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
