---
layout: doc
title: "BaseDataBinding.onElementChanged"
position: 100
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что данные в элементе изменились.

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
BaseDataBinding.onElementChanged(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что данные в элементе изменились. В параметре
`argument` передается информация о произошедшем событии. Свойство `property` содержит путь к свойству
источника, `argument.oldValue` - содержит предыдущее значение, `argument.newValue` - новое значение.
Значения, передаваемые в событии уже приведены в формат данных источника.

# Examples

```js
BaseDataBinding.onElementChanged(
  function(context, argument) { alert('Element is changed!'); }
);
```

# See Also

* [`elementChanged()`](../BaseDataBinding.elementChanged/)
* [`BindingMode`](../BindingMode)
* [`BindingConverter`](../BindingConverter)
