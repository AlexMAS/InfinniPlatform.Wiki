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
В случае, когда [`сервер`](http://infinniplatform.readthedocs.io/api/reference/InfinniPlatform.Sdk.Documents.Interceptors.IDocumentStorageInterceptor.html) сообщает о невозможности удалить элемент, возникает событие [`onErrorValidator`](../BaseDataSource.onErrorValidator/).

# Syntax

```js
BaseDataSource.deleteItem(item, success, error)
```

## Parameters

|Name|Description|
|----|-----------|
|item<sup>*</sup>|Элемент источника данных|
|success|[Обработчик события](../../../Script/) о том, что элемент удален. Параметр `args` данного обработчика содержит поля: source - ссылка на [источник данных](../), value - удаленный элемент|
|error|[Обработчик события](../../../Script/) о том, что при удалении элемента произошла ошибка. Параметр `args` данного обработчика содержит поля: item - удаляемый элемент, validationResult - [результат валидации](../ValidationResult/) (чтобы данное поле было заполнено, запрашиваемый сервис должен реализовать интерфейс IDocumentStorageInterceptor), originalResponse - ответ сервера|

<sup>*</sup> Обязательный аргумент.

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
