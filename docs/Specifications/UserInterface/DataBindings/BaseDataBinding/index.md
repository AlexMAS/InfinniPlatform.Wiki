---
layout: doc
title: "BaseDataBinding"
position: 0
---

Базовый тип для привязок данных.

# Syntax

```js
new BaseDataBinding()
```

# Methods

## [`getMode()`](BaseDataBinding.getMode/)

Возвращает [направление обмена данными в привязке](BindingMode/).

## [`setMode()`](BaseDataBinding.setMode/)

Устанавливает [направление обмена данными в привязке](BindingMode/).

## [`getProperty()`](BaseDataBinding.getProperty/)

Возвращает путь к свойству объекта источника данных.

## [`setProperty()`](BaseDataBinding.setProperty/)

Устанавливает путь к свойству объекта источника данных.

## [`getConverter()`](BaseDataBinding.getConverter/)

Возвращает [преобразователь данных между элементом и источником](BindingConverter/).

## [`setConverter()`](BaseDataBinding.setConverter/)

Устанавливает [преобразователь данных между элементом и источником](BindingConverter/).

## [`elementChanged()`](BaseDataBinding.elementChanged/)

Оповещает источник об изменении данных в элементе.

## [`sourceChanged()`](BaseDataBinding.sourceChanged/)

Оповещает элемент об изменении данных в источнике.

# Events

## [`onElementChanged`](BaseDataBinding.onElementChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что данные в элементе изменились.

## [`onSourceChanged`](BaseDataBinding.onSourceChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что данные в источнике изменились.
