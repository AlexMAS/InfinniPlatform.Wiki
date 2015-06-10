---
layout: doc
title: "MetadataDataSource"
position: 3
---

Источник данных представления для метаданных InfinniPlatform.

# Description

С метаданными InfinniPlatform можно работать, как с обычными данными. Для этого следует использовать
источник данных `MetadataDataSource`. Для определения источника данных необходимо указать [тип метаданных](MetadataType/),
с которым будет осуществляться работа. Выбранный тип метаданных определяет обязательность остальных параметров.

Метаданные InfinniPlatform имеют иерархическую структуру, от которой следует отталкиваться при работе
с источником данных `MetadataDataSource`. Ниже приведена иерархия типов метаданных. Например, для
работы с метаданными документов (Document) необходимо указать идентификатор конфигурации, которая
содержит соответствующие документы. Для работы с метаданными визуальных представлений (View)
необходимо указать идентификатор конфигурации и идентификатор документа, который содержит
соответствующие визуальные представления.

```bash
InfinniPlatform
├── Configuration
|   ├── Menu
|   ├── Document
|   |   ├── View
|   |   ├── PrintView
|   |   ├── Service
|   |   ├── Process
|   |   ├── Scenario
|   |   ├── Generator
|   |   ├── Report
|   |   ├── ValidationError
|   |   ├── ValidationWarning
|   |   └── DocumentStatus
|   ├── Register
|   └── Assembly
...
```

# Extends

[`BaseDataSource`](../BaseDataSource/)

# Syntax

```js
new MetadataDataSource(view[, metadataType[, configId[, documentId]]])
```

## Parameters

`view`

Родительское [представление](../../KeyConcepts/View/) источника данных.

`metadataType`

Необязательный. [Тип метаданных](MetadataType/).

`configId`

Необязательный. Идентификатор конфигурации.

`documentId`

Необязательный. Идентификатор документа.

# Methods

## [`getMetadataType()`](MetadataDataSource.getMetadataType/)

Возвращает [тип метаданных](MetadataType/).

## [`setMetadataType()`](MetadataDataSource.setMetadataType/)

Устанавливает [тип метаданных](MetadataType/).

## [`getConfigId()`](MetadataDataSource.getConfigId/)

Возвращает идентификатор конфигурации.

## [`setConfigId()`](MetadataDataSource.setConfigId/)

Устанавливает идентификатор конфигурации.

## [`getDocumentId()`](MetadataDataSource.getDocumentId/)

Возвращает идентификатор документа.

## [`setDocumentId()`](MetadataDataSource.setDocumentId/)

Устанавливает идентификатор документа.
