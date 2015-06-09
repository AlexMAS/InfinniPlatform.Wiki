---
layout: doc
title: "Parameter"
position: 8
---

Параметр представления - программный объект, используемый для обмена данными между представлениями.
Параметры позволяют хранить значения любого типа.

# Syntax

```js
new Parameter(view[, name[, value]])
```

## Parameters

`view`

Родительское [представление](../View/) параметра.

`name`

Необязательный. Наименование параметра.

`value`

Необязательный. Значение параметра.

# Methods

## [`getView()`](Parameter.getView/)

Возвращает родительское [представление](../View/).

## [`getName()`](Parameter.getName/)

Возвращает наименование параметра.

## [`setName()`](Parameter.setName/)

Устанавливает наименование параметра.

## [`getValue()`](Parameter.getValue/)

Возвращает значение параметра.

## [`setValue()`](Parameter.setValue/)

Устанавливает значение параметра.

# Events

## [`onValueChanged`](Parameter.onValueChanged/)

Устанавливает [обработчик события](../Script/) о том, что значение параметра изменилось.
