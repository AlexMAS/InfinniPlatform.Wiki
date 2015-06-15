---
layout: doc
title: "DocumentDataSource"
position: 2
---

Источник данных представления для документов InfinniPlatform.

# Description

Для работы с документами, хранящимися в InfinniPlatform, следует использовать источник данных
`DocumentDataSource`. Для определения источника данных достаточно указать документ, с которым будет
осуществляться работа. Документ InfinniPlatform идентифицируется двумя свойствами: идентификатор
конфигурации и идентификатор документа. Помимо этого `DocumentDataSource` позволяет переопределить
действия по умолчанию, которые совершаются при выполнении CRUD-операций над документами. Для этого
вместо действия по умолчанию необходимо указать имя прикладного обработчика, который будет выполнен
на стороне InfinniPlatform при совершении соответствующей CRUD-операции.

# Extends

[`BaseDataSource`](../BaseDataSource/)

# Syntax

```js
new DocumentDataSource(view[, configId[, documentId]])
```

## Parameters

`view`

Родительское [представление](../../KeyConcepts/View/) источника данных.

`configId`

Необязательный. Идентификатор конфигурации.

`documentId`

Необязательный. Идентификатор документа.

# Methods

## [`getConfigId()`](DocumentDataSource.getConfigId/)

Возвращает идентификатор конфигурации.

## [`setConfigId()`](DocumentDataSource.setConfigId/)

Устанавливает идентификатор конфигурации.

## [`getDocumentId()`](DocumentDataSource.getDocumentId/)

Возвращает идентификатор документа.

## [`setDocumentId()`](DocumentDataSource.setDocumentId/)

Устанавливает идентификатор документа.

## [`getCreateAction()`](DocumentDataSource.getCreateAction/)

Возвращает наименование действия на создание документа.

## [`setCreateAction()`](DocumentDataSource.setCreateAction/)

Устанавливает наименование действия на создание документа.

## [`getReadAction()`](DocumentDataSource.getReadAction/)

Возвращает наименование действия на чтение документа.

## [`setReadAction()`](DocumentDataSource.setReadAction/)

Устанавливает наименование действия на чтение документа.

## [`getUpdateAction()`](DocumentDataSource.getUpdateAction/)

Возвращает наименование действия на изменение документа.

## [`setUpdateAction()`](DocumentDataSource.setUpdateAction/)

Устанавливает наименование действия на изменение документа.

## [`getDeleteAction()`](DocumentDataSource.getDeleteAction/)

Возвращает наименование действия на удаление документа.

## [`setDeleteAction()`](DocumentDataSource.setDeleteAction/)

Устанавливает наименование действия на удаление документа.

# Examples

```js
var dataSource = new DocumentDataSource(view, 'MyConfig', 'MyDocument');
```
