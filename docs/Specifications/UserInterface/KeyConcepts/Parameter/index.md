---
layout: doc
title: "Parameter"
position: 9
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

# Properties

## [`name`](Parameter.name/)

Возвращает наименование параметра.

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

## [`getProperty()`](Parameter.getProperty/)

Возвращает значение указанного свойства параметра.

## [`setProperty()`](Parameter.setProperty/)

Устанавливает значение указанного свойства параметра.

# Events

## [`onPropertyChanged`](Parameter.onPropertyChanged/)

Устанавливает [обработчик события](../Script/) о том, что одно из свойств параметра изменилось.
