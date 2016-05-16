---
layout: doc
title: "DocumentDataSource"
position: 3
---

Источник данных представления для документов InfinniPlatform.

# Description

Для работы с документами, хранящимися в InfinniPlatform, следует использовать источник данных
`DocumentDataSource`. Для определения источника данных достаточно указать идентификатор документа, с которым будет
осуществляться работа. 

# Extends

[`RestDataSource`](../RestDataSource/)

# Syntax

```js
new DocumentDataSource(parameters)
```

## Parameters

|Name|Type|Description|
|----|----------|---------|
|parameters|`Object`| Объект с параметрами представления. Один из параметров обязательный: parameters.view - родительское представление источника данных|


# Properties

Нет

# Specific Properties

Для работы с данными свойствами используйте методы [getProperty](../BaseDataSource/BaseDataSource.getProperty/) и [setProperty](../BaseDataSource/BaseDataSource.setProperty/).  
Обратите внимание, что для работы с данными свойствами необходимо [указывать точку в названии](../BaseDataSource/BaseDataSource.getProperty/#path-rules).

|Name|Default|Description|
|----|:--:|---------|
|documentId| |Идентификатор документа|
|filter| |Правило фильтрации документов|
|filterParams| |Параметры фильтра|
|pageNumber|0|Номер страницы|
|pageSize|15|Размер страницы|
|search| |Строка полнотекстового поиска|
|select| |Правило отображения документов|
|order| |Правило сортировки документов|
|needTotalCount|false|Необходимость подсчета общего количества документов|

# Methods

|Name|Description|
|----|---------|
|[getDocumentId](DocumentDataSource.getDocumentId/)|Возвращает идентификатор документа|
|[setDocumentId](DocumentDataSource.setDocumentId/)|Устанавливает идентификатор документа|
|[getFilter](DocumentDataSource.getFilter/)|Возвращает правило фильтрации документов|
|[setFilter](DocumentDataSource.setFilter/)|Устанавливает правило фильтрации документов|
|[setIdFilter](DocumentDataSource.setIdFilter/)|Устанавливает фильтр элементов по идентификатору|
|[getFilterParams](DocumentDataSource.getFilterParams/)|Возвращает параметры фильтра|
|[setFilterParams](DocumentDataSource.setFilterParams/)|Устанавливает параметры фильтра|
|[getPageNumber](DocumentDataSource.getPageNumber/)|Возвращает номер страницы|
|[setPageNumber](DocumentDataSource.setPageNumber/)|Устанавливает номер страницы|
|[getPageSize](DocumentDataSource.getPageSize/)|Возвращает размер страницы|
|[setPageSize](DocumentDataSource.setPageSize/)|Устанавливает размер страницы|
|[getSearch](DocumentDataSource.getSearch/)|Возвращает строку полнотекстового поиска|
|[setSearch](DocumentDataSource.setSearch/)|Устанавливает строку полнотекстового поиска|
|[getSelect](DocumentDataSource.getSelect/)|Возвращает правило отображения документов|
|[setSelect](DocumentDataSource.setSelect/)|Устанавливает правило отображения документов|
|[getOrder](DocumentDataSource.getOrder/)|Возвращает правило сортировки документов|
|[setOrder](DocumentDataSource.setOrder/)|Устанавливает правило сортировки документов|
|[getNeedTotalCount](DocumentDataSource.getNeedTotalCount/)|Возвращает значение, определяющее необходимость подсчета общего количества документов|
|[setNeedTotalCount](DocumentDataSource.setNeedTotalCount/)|Устанавливает значение, определяющее необходимость подсчета общего количества документов|
|[getTotalCount](DocumentDataSource.getTotalCount/)|Возвращает общее количество документов, хранящихся в InfinniPlatform и соответсвующих запросу|

# Events

Нет
