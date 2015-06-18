---
layout: doc
title: "DataBinding.bindSource()"
position: 5
---

Устанавливает привязку к источнику.

# Description

Метод [`bindSource()`](../DataBinding.bindSource/) осуществляет подписку на событие изменения
указанного свойства источника данных привязки - `onPropertyChanged`. В обработчике этого события
производится оповещение элемента, ранее установленного в методе [`bindElement()`](../DataBinding.bindElement/),
о произошедших в источнике изменениях. При этом проверяется, что направление обмена данными в привязке
установлено в [`twoWay`](../BindingMode/) или [`toElement`](../BindingMode/). Если данное условие
выполняется, у элемента вызывается метод `setProperty()`, которому передается наименование целевого
свойства элемента и новое значение этого свойства. Если в привязке был указан [преобразователь данных](../BindingConverter)
для элемента, в качестве нового значения будет передан результат конвертации значения источника
в формат данных элемента.

# Syntax

```js
DataBinding.bindSource(source, property)
```

## Parameters

`source`

Источник данных привязки.

`property`

Путь к свойству источника данных привязки.

# Examples

```js
DataBinding.bindSource(context.dataSources.dataSource1, '$.FirstName');
DataBinding.bindElement(context.controls.textBox1, 'Value');
```

# See Also

* [`bindElement()`](../DataBinding.bindElement/)
* [`BindingMode`](../BindingMode)
* [`BindingConverter`](../BindingConverter)
