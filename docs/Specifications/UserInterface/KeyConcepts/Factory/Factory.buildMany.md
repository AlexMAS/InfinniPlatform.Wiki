---
layout: doc
title: "Factory.buildMany()"
position: 3
---

Осуществляет создание набора элементов по набору их метаданных.

## Syntax

```js
Factory.buildMany(view, metadataList)
```

### Parameters

`view`

[Визуальное представление](../../../View).

`metadataList`

Список метаданных элементов.

## Examples

```js
Factory.buildMany(view, [ { Label: { Text: 'Name' } }, { TextBox: { Value: 'John' } } ]);
```
