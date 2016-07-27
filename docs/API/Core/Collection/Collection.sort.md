---
layout: doc
title: "Collection.sort"
position: 41
---

Сортирует список элементов коллекции.

# Description

Метод [`sort()`](../Collection.sort/) сортирует список элементов коллекции. Успешное выполнение
данного метода приводит к возникновению события [`onReset`](../Collection.onReset/). Вместе с этим
событием также генерируется событие [`onChange`](../Collection.onChange/), которое информирует о
наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.sort(comparator)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`comparator`|`Function`|[Функция сравнения элементов коллекции](../Comparator/). Если не указана, то используется функция [Collection.comparator](../Collection.comparator/), которая была указана при создании коллекции.|

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection([ 3, 30, 2, 20, 1, 10 ]);
collection.sort(function(a, b) { return a - b }); // [ 1, 2, 3, 10, 20, 30 ]
```

# See Also

* [`move()`](../Collection.sort/)
* [`onReset`](../Collection.onReset/)
* [`onChange`](../Collection.onChange/)
