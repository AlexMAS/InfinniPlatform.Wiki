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
|item<sup>*</sup>|Элемент источника данных|
|success|Обработчик события о том, что элемент удален|
|error|Обработчик события о том, что при удалении элемента произошла ошибка|

<sup>*</sup> Обязательный аргумент.


## Returns

Метод ничего не возвращает.

# Examples

```js
DataProvider.getItems(
	function (items) {
		DataProvider.deleteItem(items[0]);
    });
```
