---
layout: doc
title: "FileBox.getAcceptTypes"
position: 3
---

Возвращает [коллекцию](../../../Core/Collection/) допустимых форматов данных.

# Syntax

```js
FileBox.getAcceptTypes()
```

## Parameters

Нет

## Returns

[Коллекция](../../../Core/Collection/) допустимых форматов данных.

# Examples

```js
var collection = fileBox.getAcceptTypes();
console.log(collection.toArray().join(','));
```

# See Also

* [`setAcceptTypes`](../FileBox.setAcceptTypes/)
* [`Collection`](../../../Core/Collection/)
