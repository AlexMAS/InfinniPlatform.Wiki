---
layout: doc
title: "DataProvider.createLocalItem()"
position: 3
---

Создает новый элемент.

# Description

Для создания нового элемента в DataProvider используются 2 метода: `createLocalItem` и [`createItem`](../DataProvider.createItem/).  
Существенное отличие методов в том, что `createLocalItem` создает новый элемент локально, в то время как при вызове [`createItem`](../DataProvider.createItem/) создание происходит на сервере. Для сохранения нового элемента используйте метод [`saveItem`](../DataProvider.saveItem/).

# Syntax

```js
DataProvider.createLocalItem(idProperty)
```

## Parameters

|Name|Description|
|----|-----------|
|idProperty|Наименование свойства, хранящего идентификатор элемента|

## Returns

Новый элемент.

# Examples

```js
var newItem = DataProvider.createLocalItem("_id");
```

# See Also

* [`createItem`](../DataProvider.createItem/)
* [`saveItem`](../DataProvider.saveItem/)