---
layout: doc
title: "DocumentDataSource.setDocumentId()"
position: 4
---

Устанавливает идентификатор документа.

# Description

Документ InfinniPlatform идентифицируется двумя свойствами: идентификатор конфигурации (ConfigId) и
идентификатор документа (DocumentId). Оба этих свойства являются обязательными при определении
источника данных [`DocumentDataSource`](../).

# Syntax

```js
DocumentDataSource.setDocumentId(value)
```

## Parameters

`value`

Идентификатор документа.

# Examples

```js
DocumentDataSource.setDocumentId('MyDocument');
```

# See Also

* [`getDocumentId()`](../DocumentDataSource.getDocumentId/)
* [`getConfigId()`](../DocumentDataSource.getConfigId/)
* [`setConfigId()`](../DocumentDataSource.setConfigId/)
