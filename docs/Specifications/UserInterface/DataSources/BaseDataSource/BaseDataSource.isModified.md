---
layout: doc
title: "BaseDataSource.isModified()"
position: 25
---

Проверяет, есть ли несохраненные элементы.

# Syntax

```js
BaseDataSource.isModified([item])
```

## Parameters

`item`

Необязательный. Элемент источника данных. Если указан, на наличие изменений проверяется только
указанный элемент; если не указан, на наличие изменений проверяются все элементы.

## Returns

Возвращает `true`, если есть несохраненные изменения, иначе возвращается `false`.

# Examples

```js
var isModified = BaseDataSource.isModified();
```

# See Also

* [`saveItem()`](../BaseDataSource.saveItem/)
* [`updateItems()`](../BaseDataSource.updateItems/)
* [`addNextItems()`](../BaseDataSource.addNextItems/)
* [`onSelectedItemModified`](../BaseDataSource.onSelectedItemModified/)
