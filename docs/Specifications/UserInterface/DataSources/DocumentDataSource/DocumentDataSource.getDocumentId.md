---
layout: doc
title: "DocumentDataSource.getDocumentId()"
position: 3
---

Возвращает идентификатор документа.

# Description

Документ InfinniPlatform идентифицируется двумя свойствами: идентификатор конфигурации (ConfigId) и
идентификатор документа (DocumentId). Оба этих свойства являются обязательными при определении
источника данных [`DocumentDataSource`](../).

# Syntax

```js
DocumentDataSource.getDocumentId()
```

## Returns

Идентификатор документа.

# Examples

```js
var documentId = DocumentDataSource.getDocumentId();
```

# See Also

* [`setDocumentId()`](../DocumentDataSource.setDocumentId/)
* [`getConfigId()`](../DocumentDataSource.getConfigId/)
* [`setConfigId()`](../DocumentDataSource.setConfigId/)
