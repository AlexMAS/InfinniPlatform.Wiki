---
layout: doc
title: "BaseDataSource.isModified()"
position: 19
---

Проверяет, есть ли несохраненные элементы.

# Syntax

```js
BaseDataSource.isModified([item])
```

## Parameters

`item`

Элемент источника данных. Если не указан, проверяются все элементы.

## Returns

Возвращает `true`, если есть несохраненные изменения, иначе возвращается `false`.

# Examples

```js
var isModified = BaseDataSource.isModified();
```
