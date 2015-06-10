---
layout: doc
title: "MetadataDataSource.setConfigId()"
position: 4
---

Устанавливает идентификатор конфигурации.

# Description

Для всех [типов метаданных](../MetadataType/), кроме `MetadataType.configuration`, необходимо указать
идентификатор конфигурации с которой осуществляется работа.

# Syntax

```js
MetadataDataSource.setConfigId(value)
```

## Parameters

`value`

Идентификатор конфигурации.

# Examples

```js
MetadataDataSource.setConfigId('MyConfig');
```

# See Also

* [`getConfigId()`](../MetadataDataSource.getConfigId/)
* [`getDocumentId()`](../MetadataDataSource.getDocumentId/)
* [`setDocumentId()`](../MetadataDataSource.setDocumentId/)
