---
layout: doc
title: "DataProvider.createItem()"
position: 2
---

Создает новый элемент.

# Description

Для создания нового элемента в DataProvider используются 2 метода: [`createLocalItem`](../DataProvider.createLocalItem/) и `createItem`.  
Существенное отличие методов в том, что [`createLocalItem`](../DataProvider.createLocalItem/) создает новый элемент локально, в то время как при вызове `createItem` создание происходит на сервере. Для сохранения нового элемента используйте метод [`saveItem`](../DataProvider.saveItem/).

# Syntax

```js
DataProvider.createItem(callback, idProperty)
```

## Parameters

|Name|Description|
|----|-----------|
|callback|Обработчик события о том, что элемент создан. Первым параметром получает новый элемент|
|idProperty|Наименование свойства, хранящего идентификатор элемента|

## Returns

Метод ничего не возвращает.

# Examples

```js
BaseDataSource.createItem(
  function(newItem) { alert('Id:' + newItem['_id']); },
  "_id"
);
```

# See Also

* [`createLocalItem`](../DataProvider.createLocalItem/)
* [`saveItem`](../DataProvider.saveItem/)