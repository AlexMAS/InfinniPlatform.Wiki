---
layout: doc
title: "DocumentDataSource.getTotalCount()"
position: 20
---

Возвращает общее количество документов, хранящихся в InfinniPlatform и соответсвующих запросу.

# Description

Функции [`setPageNumber`](../DocumentDataSource.setPageNumber/) и [`setPageSize`](../DocumentDataSource.setPageSize/) определяют, какие документы, из хранящихся в InfinniPlatform, будут загружены в источник данных и сколько их будет. Однако, иногда возникает необходимость узнать общее количество документов. В таком случае необходимо установить [needTotalCount](../#specific-properties) равным true (например, с помощью метода [`setNeedTotalCount`](../DocumentDataSource.setNeedTotalCount/)), [обновить список элементов источника данных](../../BaseDataSource/BaseDataSource.updateItems/) и получит искомое количество с помощью метода `getTotalCount`.

# Syntax

```js
DocumentDataSource.getTotalCount()
```

## Parameters

Нет

## Returns

Общее количество документов, хранящихися в InfinniPlatform и соответсвующих запросу.

# Examples

```js
var totalCount = DocumentDataSource.getTotalCount();
```

# See Also

* [`getNeedTotalCount()`](../DocumentDataSource.getNeedTotalCount/)
* [`setNeedTotalCount()`](../DocumentDataSource.setNeedTotalCount/)
