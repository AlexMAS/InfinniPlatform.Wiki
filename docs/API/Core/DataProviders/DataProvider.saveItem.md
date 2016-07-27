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
|item<sup>*</sup>|Элемент источника данных|
|success|Обработчик события о том, что элемент сохранен|
|error|Обработчик события о том, что при сохранении элемента произошла ошибка|

<sup>*</sup> Обязательный аргумент.

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
