---
layout: doc
title: "BaseDataSource.idOfItem()"
position: 26
---

Возвращает значение идентификатора по переданному элементу item.

# Syntax

```js
BaseDataSource.idOfItem(item)
```

## Parameters

|Name|Description|
|----|-----------|
|item|Элемент источника данных|

## Returns

Значение идентификатора.

# Examples

```js
var selectedItem = BaseDataSource.getSelectedItem();
var selectedId = BaseDataSource.idOfItem(selectedItem);
```

# See Also

* [`getIdProperty()`](../BaseDataSource.getIdProperty/)
* [`setIdProperty()`](../BaseDataSource.setIdProperty/)
