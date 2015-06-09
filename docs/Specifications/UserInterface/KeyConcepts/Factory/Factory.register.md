---
layout: doc
title: "Factory.register()"
position: 0
---

Регистрирует [построитель элементов](../Builder/).

# Syntax

```js
Factory.register(type, builder)
```

## Parameters

`type`

Тип элемента.

`builder`

[Построитель элементов](../Builder/).

# Examples

```js
Factory.register('Button', new ButtonBuilder());
```

# See Also

* [`build()`](../Factory.build/)
* [`buildMany()`](../Factory.buildMany/)
* [`Builder`](../Builder/)
