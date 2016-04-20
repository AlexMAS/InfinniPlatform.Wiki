---
layout: doc
title: "BaseDataSource.saveItem()"
position: 30
---

Сохраняет элемент в источнике данных.

# Description

Вызов метода [`saveItem()`](../BaseDataSource.saveItem/) производит сохранение всех изменений
указанного элемента в соответствующем источнику данных хранилище. Сохранение производится только
в том случае, если указанный элемент [не содержит ошибок](../BaseDataSource.validateOnErrors/).
Успешное сохранение элемента приводит к возникновению события [`onItemSaved`](../BaseDataSource.onItemSaved/).

# Syntax

```js
BaseDataSource.saveItem(item, success, error)
```

## Parameters

|Name|Description|
|----|-----------|
|item|Элемент источника данных|
|success|(Необязательный) [Обработчик события](../../../Script/) о том, что элемент сохранен. В данный обработчик приходят 2 параметра: [context](../../../Context/) и args. args.source содержит ссылку на [источник данных](../), args.value - сохраненный элемент,  args.result информация о сохранении|
|error|(Необязательный) [Обработчик события](../../../Script/) о том, что при сохранении элемента произошла ошибка. В данный обработчик приходят 2 параметра: [context](../../../Context/) и args. args.value содержит сообщение об ошибке|

## Returns

Метод ничего не возвращает.

# Examples

```js
var items = BaseDataSource.getItems();
BaseDataSource.saveItem(items[0]);
```

# See Also

* [`onItemSaved`](../BaseDataSource.onItemSaved/)
* [`createItem()`](../BaseDataSource.createItem/)
* [`deleteItem()`](../BaseDataSource.deleteItem/)
* [`validateOnErrors()`](../BaseDataSource.validateOnErrors/)
