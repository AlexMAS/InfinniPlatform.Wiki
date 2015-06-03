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
BaseDataSource.setPageNumber(value)
```

## Parameters

`value`

Номер страницы. Целое число, начиная с 0.

# Examples

```js
BaseDataSource.setPageNumber(5);
```
