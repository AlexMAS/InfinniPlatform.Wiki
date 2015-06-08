---
layout: doc
title: "MetadataDataSource.getConfigId()"
position: 1
---

Возвращает идентификатор конфигурации.

# Description

Для всех [типов метаданных](../MetadataType/), кроме `MetadataType.configuration`, необходимо указать
идентификатор конфигурации с которой осуществляется работа.

# Syntax

```js
MetadataDataSource.getConfigId()
```

## Returns

Идентификатор конфигурации.

# Examples

```js
var configId = MetadataDataSource.getConfigId();
```

# See Also

* [`setConfigId()`](../MetadataDataSource.setConfigId/)
* [`getDocumentId()`](../MetadataDataSource.getDocumentId/)
* [`setDocumentId()`](../MetadataDataSource.setDocumentId/)
