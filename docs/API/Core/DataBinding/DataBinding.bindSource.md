---
layout: doc
title: "DataBinding.bindSource()"
position: 5
---

Устанавливает привязку к источнику.

# Description

Осуществляет подписку на событие изменения указанного свойства источника данных привязки - `onPropertyChanged`.
В обработчике этого события производится оповещение элемента, ранее установленного в методе [`bindElement()`](../DataBinding.bindElement/), о произошедших в источнике изменениях.  
При этом проверяется, что направление обмена данными в привязке установлено в [`twoWay`](../BindingMode/) или [`toElement`](../BindingMode/). 
Если данное условие выполняется, у элемента вызывается метод `setProperty()`, которому передается наименование целевого свойства элемента и новое значение этого свойства.  
Если в привязке был указан [преобразователь данных](../BindingConverter) для элемента, в качестве нового значения будет передан результат конвертации значения источника в формат данных элемента.

# Syntax

```js
dataBinding.bindSource(source, property)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|source|[`визуальный элемент`](../../Elements/) / [`источник данных`](../../DataSources/) / [`параметр представления`](../../Parameter)|Источник данных привязки|
|property|`String`|Путь к свойству источника данных привязки|

## Returns

Метод ничего не возвращает.


# Examples

```js
dataBinding.bindSource(context.dataSources['DataSource1'], '$.FirstName');
```

# See Also

* [`getSource()`](../DataBinding.getSource/)
* [`getSourceProperty()`](../DataBinding.getSourceProperty/)
* [`bindElement()`](../DataBinding.bindElement/)
* [`BindingMode`](../BindingMode)
* [`BindingConverter`](../BindingConverter)
