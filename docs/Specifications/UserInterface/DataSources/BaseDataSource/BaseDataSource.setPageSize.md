---
layout: doc
title: "BaseDataSource.setPageSize()"
position: 11
---

Устанавливает размер страницы.

# Description

Изменение размера страницы приводит к возникновению события [`onPageSizeChanged`](../BaseDataSource.onPageSizeChanged/).
Если в источнике данных [разрешено обновление списка элементов](../BaseDataSource.resumeUpdate/),
изменение размера страницы приводит к автоматическому [обновлению списка элементов источника данных](../BaseDataSource.updateItems/).

# Syntax

```js
BaseDataSource.setPageSize(value[, success[, error]])
```

## Parameters

`value`

Размер страницы. Целое число, больше 0.

`success`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что размер страницы изменился.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.oldValue`
содержит предыдущий размер страницы, `argument.newValue` - новый размер страницы.

`error`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что при изменении размера
страницы произошла ошибка. В параметре `argument` передается информация о произошедшем событии.
Свойство `argument.error` содержит информацию об ошибке.

# Examples

```js
BaseDataSource.setPageSize(50);
```

# See Also

* [`getPageSize()`](../BaseDataSource.getPageSize/)
* [`onPageSizeChanged`](../BaseDataSource.onPageSizeChanged/)
* [`suspendUpdate()`](../BaseDataSource.suspendUpdate/)
* [`resumeUpdate()`](../BaseDataSource.resumeUpdate/)
* [`updateItems()`](../BaseDataSource.updateItems/)
* [`addNextItems()`](../BaseDataSource.addNextItems/)
