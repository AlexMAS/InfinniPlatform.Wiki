---
layout: doc
title: "DocumentDataSource.setConfigId()"
position: 2
---

Устанавливает идентификатор конфигурации.

# Description

Документ InfinniPlatform идентифицируется двумя свойствами: идентификатор конфигурации (ConfigId) и
идентификатор документа (DocumentId). Оба этих свойства являются обязательными при определении
источника данных [`DocumentDataSource`](../).

# Syntax

```js
DocumentDataSource.setConfigId(value)
```

## Parameters

`value`

Идентификатор конфигурации.

# Examples

```js
DocumentDataSource.setConfigId('MyConfig');
```

# See Also

* [`getConfigId()`](../DocumentDataSource.getConfigId/)
* [`getDocumentId()`](../DocumentDataSource.getDocumentId/)
* [`setDocumentId()`](../DocumentDataSource.setDocumentId/)
