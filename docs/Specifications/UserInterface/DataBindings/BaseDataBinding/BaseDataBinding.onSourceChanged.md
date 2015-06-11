---
layout: doc
title: "BaseDataBinding.onSourceChanged"
position: 100
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что данные в источнике изменились.

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
BaseDataBinding.onSourceChanged(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что данные в источнике изменились. В параметре
`argument` передается информация о произошедшем событии. Свойство `property` содержит путь к свойству
источника, `argument.oldValue` - содержит предыдущее значение, `argument.newValue` - новое значение.
Значения, передаваемые в событии уже приведены в формат данных элемента.

# Examples

```js
BaseDataBinding.onSourceChanged(
  function(context, argument) { alert('Source is changed!'); }
);
```

# See Also

* [`sourceChanged()`](../BaseDataBinding.sourceChanged/)
* [`BindingMode`](../BindingMode)
* [`BindingConverter`](../BindingConverter)
