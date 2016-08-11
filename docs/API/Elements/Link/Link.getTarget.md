---
layout: doc
title: "Link.getTarget"
position: 3
---

Возвращает режим загрузки документа.

# Description

Возможны следующие режимы загрузки документа:

* blank - загружает страницу в новое окно браузера,
* self - загружает страницу в текущее окно, 
* parent - загружает страницу во фрейм-родитель (если фреймов нет, то работает как self), 
* top - отменяет все фреймы и загружает страницу в полном окне браузера (если фреймов нет, то работает как self).

# Syntax

```js
Link.getTarget()
```

## Parameters

Нет

## Returns

Режим загрузки документа.

# Examples

```js
var target = link.getTarget();
```

# See Also

* [`setTarget()`](../Link.setTarget/)

