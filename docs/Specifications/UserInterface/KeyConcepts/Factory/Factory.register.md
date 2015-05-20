---
layout: doc
title: "Factory.register()"
position: 1
---

Регистрирует построитель элементов.

## Syntax

```js
Factory.register(type, builder)
```

### Parameters

`type`

Тип элемента.

`builder`

[Построитель элемента](../Builder/). <br/>

## Examples

```js
Factory.register('Button', new ButtonBuilder());
```
