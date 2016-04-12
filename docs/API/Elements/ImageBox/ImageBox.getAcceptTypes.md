---
layout: doc
title: "ImageBox.getAcceptTypes"
position: 3
---

Возвращает [коллекцию](../../../Core/Collection/) допустимых форматов данных.

# Syntax

```js
ImageBox.getAcceptTypes()
```

## Parameters

Нет

## Returns

[Коллекция](../../../Core/Collection/) допустимых форматов данных.

# Examples

```js
var collection = imageBox.getAcceptTypes();
console.log(collection.toArray().join(','));
```

# See Also

* [`setAcceptTypes`](../ImageBox.setAcceptTypes/)
* [`Collection`](../../../Core/Collection/)
