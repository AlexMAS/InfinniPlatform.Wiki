---
layout: doc
title: "BaseDataBinding.sourceChanged()"
position: 8
---

Оповещает элемент об изменении данных в источнике.

# Description

Когда данные в источнике изменяются, источник должен сообщить элементу о произошедших изменениях.
Поскольку источник ничего не знает ни об элементе, ни о формате представления данных в нем, он оповещает
элемент через привязку, вызывая метод [`sourceChanged()`](../BaseDataBinding.sourceChanged). Данный
метод проверяет выполнение следующих условий:

* направление обмена данными в привязке установлено в [`twoWay`](../BindingMode/) или [`toElement`](../BindingMode/);
* данные в источнике действительно изменились или параметр `force` равен `true`.

Выполнение вышеуказанных условий приводит к возникновению события [`onSourceChanged`](../BaseDataBinding.onSourceChanged),
с которым передается информация о новом значении. Если в привязке был указан [преобразователь данных](../BindingConverter)
для элемента, в качестве нового значения будет передан результат конвертации значения источника в формат данных элемента.

# Syntax

```js
BaseDataBinding.sourceChanged(value[, force])
```

## Parameters

`value`

Новое значение данных источника.

`force`

Необязательный. Логическое значение, указывающее на необходимость генерации события
[`onSourceChanged`](../BaseDataBinding.onSourceChanged) даже в том случае, если данные в источнике
не изменились. Значение параметра по умолчанию равно `false`. Значение `true` используется в том
случае, если привязка связана со ссылочным значением (объектом или массивом) и источник не изменил
ссылку, но поменял значение, на которое ссылался (изменил свойства объекта или содержимое массива).

# Examples

```js
BaseDataBinding.sourceChanged('New value');
```

# See Also

* [`onSourceChanged`](../BaseDataBinding.onSourceChanged/)
* [`elementChanged()`](../BaseDataBinding.elementChanged/)
* [`BindingMode`](../BindingMode)
* [`BindingConverter`](../BindingConverter)
