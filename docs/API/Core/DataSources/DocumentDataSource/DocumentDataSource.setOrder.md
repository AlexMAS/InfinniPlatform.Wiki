---
layout: doc
title: "DocumentDataSource.setOrder()"
position: 17
---

Устанавливает правило сортировки документов.

# Syntax

```js
DocumentDataSource.setOrder(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`String`|Правило сортировки документов|

## Returns

Метод ничего не возвращает.

# Order Format

Правила сортировки можно указывать через запятую. При этом приоритет сортировки будет зависеть от порядка следования.

|Syntax|Description|
|----|-----------|
|asc(f1, f2, ...)|Элементы источника данных будут сортироваться по возврастанию полей f1, f2, ...|
|desc(f1, f2, ...)|Элементы источника данных будут сортироваться по убыванию полей f1, f2, ...|

# Examples

```js
BaseDataSource.setOrder("asc(LastName),desc(FirstName,MiddleName),asc(Birthday)");
```

# See Also

* [`getOrder()`](../DocumentDataSource.getOrder/)