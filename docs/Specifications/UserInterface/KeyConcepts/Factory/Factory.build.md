---
layout: doc
title: "Factory.build()"
position: 2
---

Осуществляет создание элемента по его метаданным.

## Syntax

```js
Factory.build(view, metadata)
```

### Parameters

`view`

[Визуальное представление](../../../View).

`metadata`

Метаданные элемента.

## Examples

```js
Factory.build(view, { Button: { Text: 'Push me!' } });
```
