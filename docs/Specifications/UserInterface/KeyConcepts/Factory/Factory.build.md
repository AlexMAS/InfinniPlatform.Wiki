---
layout: doc
title: "Factory.build()"
position: 1
---

Осуществляет создание элемента по его метаданным.

# Syntax

```js
Factory.build(view, metadata)
```

## Parameters

`view`

[Визуальное представление](../../View).

`metadata`

Метаданные элемента.

## Returns

Экземпляр элемента.

# Examples

```js
var button = Factory.build(view, { Button: { Text: 'Push me!' } });
```

# See Also

* [`register()`](../Factory.register/)
* [`buildMany()`](../Factory.buildMany/)
* [`Builder`](../Builder/)
* [`View`](../../View/)
