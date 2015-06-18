---
layout: doc
title: "DataBinding.bindElement()"
position: 6
---

Устанавливает привязку к элементу.

# Description

Метод [`bindElement()`](../DataBinding.bindElement/) осуществляет подписку на событие изменения
указанного свойства элемента привязки - `onPropertyChanged`. В обработчике этого события производится
оповещение источника данных привязки, ранее установленного в методе [`bindSource()`](../DataBinding.bindSource/),
о произошедших в источнике изменениях. При этом проверяется, что направление обмена данными в привязке
установлено в [`twoWay`](../BindingMode/) или [`toSource`](../BindingMode/). Если данное условие
выполняется, у источника вызывается метод `setProperty()`, которому передается наименование целевого
свойства источника и новое значение этого свойства. Если в привязке был указан [преобразователь данных](../BindingConverter)
для источника, в качестве нового значения будет передан результат конвертации значения элемента
в формат данных источника.

# Syntax

```js
DataBinding.bindElement(element, property)
```

## Parameters

`element`

Элемент привязки.

`property`

Путь к свойству элемента привязки.

# Examples

```js
DataBinding.bindSource(context.dataSources.dataSource1, '$.FirstName');
DataBinding.bindElement(context.controls.textBox1, 'Value');
```

# See Also

* [`bindSource()`](../DataBinding.bindElement/)
* [`BindingMode`](../BindingMode)
* [`BindingConverter`](../BindingConverter)
