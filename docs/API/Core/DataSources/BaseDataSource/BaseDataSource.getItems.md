---
layout: doc
title: "BaseDataSource.getItems()"
position: 11
---

Возвращает список элементов источника данных.

# Description

Вызов метода [`getItems()`](../BaseDataSource.getItems/) возвращает список элементов источника данных,
который был загружен ранее. Список элементов содержит актуальное состояние источника данных, включая
все изменения, которые производились над элементами.

# Syntax

```js
BaseDataSource.getItems()
```

## Parameters

Нет

## Returns

Массив элементов источника данных.

# Examples

```js
var items = BaseDataSource.getItems();
```

# See Also

* [`updateItems()`](../BaseDataSource.updateItems/)
