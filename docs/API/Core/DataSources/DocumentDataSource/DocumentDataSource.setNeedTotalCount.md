---
layout: doc
title: "DocumentDataSource.setNeedTotalCount()"
position: 19
---

Устанавливает значение, определяющее необходимость подсчета общего количества документов.

# Description

Функции [`setPageNumber`](../DocumentDataSource.setPageNumber/) и [`setPageSize`](../DocumentDataSource.setPageSize/) определяют, какие документы, из хранящихся в InfinniPlatform, будут загружены в источник данных и сколько их будет. Однако, иногда возникает необходимость узнать общее количество документов. В таком случае необходимо установить [needTotalCount](../#specific-properties) равным true (например, с помощью метода `setNeedTotalCount`, [обновить список элементов источника данных](../../BaseDataSource/BaseDataSource.updateItems/) и получит искомое количество с помощью метода [`getTotalCount`](../DocumentDataSource.getTotalCount/).

# Syntax

```js
DocumentDataSource.setNeedTotalCount(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`Boolean`|Значение, определяющее необходимость подсчета общего количества документов|


## Returns

Метод ничего не возвращает.

# Examples

```js
BaseDataSource.setNeedTotalCount(true);
```

# See Also

* [`getTotalCount()`](../DocumentDataSource.getTotalCount/)
* [`getNeedTotalCount()`](../DocumentDataSource.getNeedTotalCount/)