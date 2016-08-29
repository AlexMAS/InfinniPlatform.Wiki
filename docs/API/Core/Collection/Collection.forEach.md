---
layout: doc
title: "Collection.forEach"
position: 36
---

Перечисляет все элементы коллекции.

# Syntax

```js
Collection.forEach(callback, thisArg)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`predicate`<sup>*</sup>|`Function`|Функция для обработки очередного элемента коллекции. <br>Функция принимает три параметра: <br> &#9679; `item` - очередной элемент коллекции, <br> &#9679; `index` - индекс очередного элемента коллекции, <br> &#9679; `collection` - обрабатываемая коллекция.|
|`thisArg`|&#42;|Объект, используемый как контекст исполнения `this` предиката `predicate`.|

<sup>*</sup> Обязательный аргумент.

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
