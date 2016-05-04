---
layout: doc
title: "DataProvider.saveItem()"
position: 4
---

Сохраняет элемент.

# Syntax

```js
DataProvider.saveItem(item, success, error)
```

## Parameters

|Name|Description|
|----|-----------|
|item|Элемент источника данных|
|success|(Необязательный) Обработчик события о том, что элемент сохранен|
|error|(Необязательный) Обработчик события о том, что при сохранении элемента произошла ошибка|

## Returns

Метод ничего не возвращает.

# Examples

```js
var item = DataProvider.createLocalItem();
DataProvider.saveItem(item);
```

# See Also

* [`createItem`](../DataProvider.createItem/)
* [`createLocalItem`](../DataProvider.createLocalItem/)
