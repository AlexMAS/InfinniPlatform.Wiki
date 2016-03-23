---
layout: doc
title: "DataBinding.bindElement()"
position: 8
---

Устанавливает привязку к элементу.

# Description

Осуществляет подписку на событие изменения указанного свойства элемента привязки - `onPropertyChanged`.
В обработчике этого события производится оповещение источника данных привязки, ранее установленного в методе [`bindSource()`](../DataBinding.bindSource/), о произошедших в источнике изменениях.  
При этом проверяется, что направление обмена данными в привязке установлено в [`twoWay`](../BindingMode/) или [`toSource`](../BindingMode/). 
Если данное условие выполняется, у источника вызывается метод `setProperty()`, которому передается наименование целевого 
свойства источника и новое значение этого свойства.  
Если в привязке был указан [преобразователь данных](../BindingConverter) для источника, в качестве нового значения будет передан результат конвертации значения элемента в формат данных источника.

# Syntax

```js
dataBinding.bindElement(element, property)
```

## Parameters

|Name|Type|Required|Description|
|----|----|:--:|-----------|
|element|[`визуальный элемент`](../../Elements/) / [`источник данных`](../../DataSources/) / [`параметр представления`](../../Parameter)|+|Элемент привязки|
|property|`String`|+|Путь к свойству элемента привязки|

## Returns

Метод ничего не возвращает.


# Examples

```js
dataBinding.bindElement(context.controls['TextBox1'], 'Value');
```

# See Also

* [`getElement()`](../DataBinding.getElement/)
* [`getElementProperty()`](../DataBinding.getElementProperty/)
* [`bindSource()`](../DataBinding.bindSource/)
* [`BindingMode`](../BindingMode)
* [`BindingConverter`](../BindingConverter)
