---
layout: doc
title: "DataProvider.getItems()"
position: 1
---

Запрашивает список элементов.

# Syntax

```js
DataProvider.getItems(success, error)
```

## Parameters

|Name|Description|
|----|-----------|
|success|(Необязательный) Обработчик события о том, что список элементов получен. Первым параметром получает список элементов|
|error|(Необязательный) Обработчик события о том, что получить список элементов не удалось|

## Returns

Метод ничего не возвращает.

# Examples

```js
DataProvider.getItems(
	function (data) {
		console.log(data);
    }, 
    function () {
    	console.log('error');
    });
```
