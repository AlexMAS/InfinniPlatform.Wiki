---
layout: doc
title: "Link.setTarget"
position: 4
---

Устанавливает режим загрузки документа.

# Description

Возможны следующие режимы загрузки документа:

* blank - загружает страницу в новое окно браузера,
* self - загружает страницу в текущее окно, 
* parent - загружает страницу во фрейм-родитель (если фреймов нет, то работает как self), 
* top - отменяет все фреймы и загружает страницу в полном окне браузера (если фреймов нет, то работает как self).

# Syntax

```js
Link.setTarget(value)
```

## Parameters

|Name|Type|Description|
|----|----------|---------|
|value|`String`|Режим загрузки документа.|

## Returns

нет

# Examples

```js
link.setTarget("blank");
```

# See Also

* [`getTarget()`](../Link.getTarget/)

