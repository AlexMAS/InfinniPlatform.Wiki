---
layout: doc
title: "DataProvider.deleteItem()"
position: 5
---

Удаляет элемент.

# Syntax

```js
DataProvider.deleteItem(item, success, error)
```

## Parameters

|Name|Description|
|----|-----------|
|item|Элемент источника данных|
|success|(Необязательный) Обработчик события о том, что элемент удален|
|error|(Необязательный) Обработчик события о том, что при удалении элемента произошла ошибка|

## Returns

Метод ничего не возвращает.

# Examples

```js
DataProvider.getItems(
	function (items) {
		DataProvider.deleteItem(items[0]);
    });
```
