---
layout: doc
title: "BaseDataSource.setPageNumber()"
position: 9
---

Устанавливает номер страницы.

# Description

Изменение номера страницы приводит к возникновению события [`onPageNumberChanged`](../BaseDataSource.onPageNumberChanged/).

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
