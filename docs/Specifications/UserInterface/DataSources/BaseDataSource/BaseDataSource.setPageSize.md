---
layout: doc
title: "BaseDataSource.setPageSize()"
position: 11
---

Устанавливает размер страницы.

# Description

Изменение размера страницы приводит к возникновению события [`onPageSizeChanged`](../BaseDataSource.onPageSizeChanged/).

# Syntax

```js
BaseDataSource.setPageSize(value)
```

## Parameters

`value`

Размер страницы. Целое число, больше 0.

# Examples

```js
BaseDataSource.setPageSize(50);
```
