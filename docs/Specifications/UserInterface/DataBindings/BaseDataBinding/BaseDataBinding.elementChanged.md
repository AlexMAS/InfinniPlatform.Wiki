---
layout: doc
title: "BaseDataBinding.elementChanged()"
position: 7
---

Оповещает источник об изменении данных в элементе.

# Description

Когда данные в элементе изменяются, элемент должен сообщить источнику о произошедших изменениях.
Поскольку элемент ничего не знает ни об источнике, ни о формате представления данных в нем, он оповещает
источник через привязку, вызывая метод [`elementChanged()`](../BaseDataBinding.elementChanged). Данный
метод проверяет выполнение следующих условий:

* направление обмена данными в привязке установлено в [`twoWay`](../BindingMode/) или [`toSource`](../BindingMode/);
* данные в элементе действительно изменились или параметр `force` равен `true`.

Выполнение вышеуказанных условий приводит к возникновению события [`onElementChanged`](../BaseDataBinding.onElementChanged),
с которым передается информация о новом значении. Если в привязке был указан [преобразователь данных](../BindingConverter)
для источника, в качестве нового значения будет передан результат конвертации значения элемента в формат данных источника.

# Syntax

```js
BaseDataBinding.elementChanged(value[, force])
```

## Parameters

`value`

Новое значение данных элемента.

`force`

Необязательный. Логическое значение, указывающее на необходимость генерации события
[`onElementChanged`](../BaseDataBinding.onElementChanged) даже в том случае, если данные в элементе
не изменились. Значение параметра по умолчанию равно `false`. Значение `true` используется в том
случае, если привязка связана со ссылочным значением (объектом или массивом) и элемент не изменил
ссылку, но поменял значение, на которое ссылался (изменил свойства объекта или содержимое массива).

# Examples

```js
BaseDataBinding.elementChanged('New value');
```

# See Also

* [`onElementChanged`](../BaseDataBinding.onElementChanged/)
* [`sourceChanged()`](../BaseDataBinding.sourceChanged/)
* [`BindingMode`](../BindingMode)
* [`BindingConverter`](../BindingConverter)
