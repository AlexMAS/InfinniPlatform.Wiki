---
layout: doc
title: "BaseDataSource.setPageNumber()"
position: 9
---

Устанавливает номер страницы.

# Description

Изменение номера страницы приводит к возникновению события [`onPageNumberChanged`](../BaseDataSource.onPageNumberChanged/).
Если в источнике данных [разрешено обновление списка элементов](../BaseDataSource.resumeUpdate/),
изменение номера страницы приводит к автоматическому [обновлению списка элементов источника данных](../BaseDataSource.updateItems/).

# Syntax

```js
BaseDataSource.setPageNumber(value[, success[, error]])
```

## Parameters

`value`

Номер страницы. Целое число, начиная с 0.

`success`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что номер страницы изменился.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.oldValue`
содержит предыдущий номер страницы, `argument.newValue` - новый номер страницы.

`error`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что при изменении номера
страницы произошла ошибка. В параметре `argument` передается информация о произошедшем событии.
Свойство `argument.error` содержит информацию об ошибке.

# Examples

```js
BaseDataSource.setPageNumber(5);
```

# See Also

* [`getPageNumber()`](../BaseDataSource.getPageNumber/)
* [`onPageNumberChanged`](../BaseDataSource.onPageNumberChanged/)
* [`suspendUpdate()`](../BaseDataSource.suspendUpdate/)
* [`resumeUpdate()`](../BaseDataSource.resumeUpdate/)
* [`updateItems()`](../BaseDataSource.updateItems/)
* [`addNextItems()`](../BaseDataSource.addNextItems/)
