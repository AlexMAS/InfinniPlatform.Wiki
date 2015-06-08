---
layout: doc
title: "DocumentDataSource.getConfigId()"
position: 1
---

Возвращает идентификатор конфигурации.

# Description

Документ InfinniPlatform идентифицируется двумя свойствами: идентификатор конфигурации (ConfigId) и
идентификатор документа (DocumentId). Оба этих свойства являются обязательными при определении
источника данных [`DocumentDataSource`](../).

# Syntax

```js
DocumentDataSource.getConfigId()
```

## Returns

Идентификатор конфигурации.

# Examples

```js
var configId = DocumentDataSource.getConfigId();
```

# See Also

* [`setConfigId()`](../DocumentDataSource.setConfigId/)
* [`getDocumentId()`](../DocumentDataSource.getDocumentId/)
* [`setDocumentId()`](../DocumentDataSource.setDocumentId/)
