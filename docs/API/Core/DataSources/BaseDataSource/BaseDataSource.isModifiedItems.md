---
layout: doc
title: "BaseDataSource.isModifiedItems()"
position: 28
---

Проверяет, есть ли несохраненные элементы.

# Syntax

```js
BaseDataSource.isModifiedItems()
```

## Parameters

Нет

## Returns

Возвращает `true`, если есть несохраненные элементы, иначе возвращает `false`.

# Examples

```js
var haveModifiedItems = BaseDataSource.isModifiedItems();
```

# See Also

* [`isModified()`](../BaseDataSource.isModified/)
* [`saveItem()`](../BaseDataSource.saveItem/)
* [`updateItems()`](../BaseDataSource.updateItems/)
