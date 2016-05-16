---
layout: doc
title: "DocumentDataSource.getNeedTotalCount()"
position: 18
---

Возвращает значение, определяющее необходимость подсчета общего количества документов.

# Description

Функции [`setPageNumber`](../DocumentDataSource.setPageNumber/) и [`setPageSize`](../DocumentDataSource.setPageSize/) определяют, какие документы, из хранящихся в InfinniPlatform, будут загружены в источник данных и сколько их будет. Однако, иногда возникает необходимость узнать общее количество документов. В таком случае необходимо установить [needTotalCount](../#specific-properties) равным true (например, с помощью метода [`setNeedTotalCount`](../DocumentDataSource.setNeedTotalCount/)), [обновить список элементов источника данных](../../BaseDataSource/BaseDataSource.updateItems/) и получит искомое количество с помощью метода [`getTotalCount`](../DocumentDataSource.getTotalCount/).

# Syntax

```js
DocumentDataSource.getNeedTotalCount()
```

## Parameters

Нет

## Returns

Логическое значение, определяющее необходимость подсчета общего количества документов.

# Examples

```js
var needTotalCount = DocumentDataSource.getNeedTotalCount();
```

# See Also

* [`setNeedTotalCount()`](../DocumentDataSource.setNeedTotalCount/)
* [`getTotalCount()`](../DocumentDataSource.getTotalCount/)
