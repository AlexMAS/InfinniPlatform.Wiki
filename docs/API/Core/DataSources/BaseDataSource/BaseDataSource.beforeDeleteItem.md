---
layout: doc
title: "BaseDataSource.beforeDeleteItem()"
position: 38
---

Вы можете переопределить этот метод в наследнике BaseDataSource, если есть необходимость выполнять некие действия перед удалением элемента

# Syntax

```js
BaseDataSource.beforeDeleteItem(item)
```

## Parameters

|Name|Description|
|----|-----------|
|item|Элемент источника данных|

## Returns

Метод ничего не возвращает

# Examples

```js
var selectedItem = BaseDataSource.getSelectedItem();
BaseDataSource.beforeDeleteItem(selectedItem);
```

# See Also

* [`deleteItem()`](../BaseDataSource.deleteItem/)