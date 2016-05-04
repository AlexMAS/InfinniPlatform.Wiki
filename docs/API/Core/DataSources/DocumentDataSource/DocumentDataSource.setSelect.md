---
layout: doc
title: "DocumentDataSource.setSelect()"
position: 15
---

Устанавливает правило отображения документов.

# Syntax

```js
DocumentDataSource.setSelect(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`String`|Правило отображения документов|

## Returns

Метод ничего не возвращает.

# Select Format

|Syntax|Description|
|----|-----------|
|include(f1, f2, ...)|Элементы источника данных будут содержать только поля f1, f2, ...|
|exclude(f1, f2, ...)|Элементы источника данных будут содержать все свои исходные поля, кроме f1, f2, ...|

# Examples

```js
BaseDataSource.setSelect("include(name, full_address, stage)");
```

# See Also

* [`getSelect()`](../DocumentDataSource.getSelect/)