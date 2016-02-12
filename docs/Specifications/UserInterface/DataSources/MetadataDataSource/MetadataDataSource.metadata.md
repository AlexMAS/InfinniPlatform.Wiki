---
layout: doc
title: "MetadataDataSource.metadata"
position: 0
---

Метаданные источника данных представления для метаданных InfinniPlatform.

# Schema

{% include github.html path="InfinniPlatform.Core/.schema/UI/DataSource/MetadataDataSource/MetadataDataSource.resjson" lang="json" %}

# Examples

Работа со списком конфигураций:

```json
{
  "Name": "metadataDataSource1",
  "MetadataType": "Configuration"
}
```

Работа со списком документов конфигурации:

```json
{
  "Name": "metadataDataSource1",
  "MetadataType": "Document",
  "ConfigId": "MyConfig"
}
```

Работа со списком представлений документа конфигурации:

```json
{
  "Name": "metadataDataSource1",
  "MetadataType": "View",
  "ConfigId": "MyConfig",
  "DocumentId": "MyDocument"
}
```
