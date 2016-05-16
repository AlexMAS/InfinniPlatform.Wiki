---
layout: doc
title: "BaseDataSource.deleteItem()"
position: 31
---

Удаляет элемент в источнике данных.

# Description

Вызов метода [`deleteItem()`](../BaseDataSource.deleteItem/) производит удаление указанного элемента
в соответствующем источнику данных хранилище. Успешное удаление элемента приводит к возникновению
события [`onItemDeleted`](../BaseDataSource.onItemDeleted/).

# Syntax

```js
BaseDataSource.deleteItem(item, success, error)
```

## Parameters

|Name|Description|
|----|-----------|
|item|Элемент источника данных|
|success|(Необязательный) [Обработчик события](../../../Script/) о том, что элемент удален. Параметр `args` данного обработчика содержит поля: source - ссылка на [источник данных](../), value - удаленный элемент|
|error|(Необязательный) [Обработчик события](../../../Script/) о том, что при удалении элемента произошла ошибка. Параметр `args` данного обработчика содержит поля: source - ссылка на [источник данных](../), value - удаляемый элемент, error - сообщение об ошибке|

## Returns

Метод ничего не возвращает.

# Examples

```js
var items = BaseDataSource.getItems();
BaseDataSource.deleteItem(items[0]);
```

# See Also

* [`onItemDeleted`](../BaseDataSource.onItemDeleted/)
* [`createItem()`](../BaseDataSource.createItem/)
* [`saveItem()`](../BaseDataSource.saveItem/)
