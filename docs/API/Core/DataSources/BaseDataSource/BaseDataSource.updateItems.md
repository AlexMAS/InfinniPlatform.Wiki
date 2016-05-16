---
layout: doc
title: "BaseDataSource.updateItems()"
position: 32
---

Обновляет список элементов источника данных.

# Description

Вызов метода [`updateItems()`](../BaseDataSource.updateItems/) производит загрузку списка элементов
из соответствующего источнику данных хранилища. Если в источнике данных были несохраненные изменения,
они будут потеряны, так как загруженные ранее данные будут заменены (обновлены) новыми. Загрузка
элементов производится с учетом всех имеющихся [фильтров](../BaseDataSource.getFilter/).
Успешное обновление списка элементов приводит к возникновению события [`onItemsUpdated`](../BaseDataSource.onItemsUpdated/).

# Syntax

```js
BaseDataSource.updateItems(success, error)
```

## Parameters

|Name|Description|
|----|-----------|
|success|(Необязательный) [Обработчик события](../../../Script/) о том, что список элементов обновлен. Параметр args данного обработчика содержит поле value, в котором хранится новый список элементов источника данных|
|error|(Необязательный) [Обработчик события](../../../Script/) о том, что при обновлении списка элементов произошла ошибка|

## Returns

Метод ничего не возвращает.

# Examples

```js
BaseDataSource.updateItems();
```

# See Also

* [`onItemsUpdated`](../BaseDataSource.onItemsUpdated/)
* [`getFilter()`](../BaseDataSource.getFilter/)
* [`isModifiedItems()`](../BaseDataSource.isModified/)
