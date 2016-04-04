---
layout: doc
title: "SaveAction"
position: 9
---

Обновляет список элементов [источника данных](../../DataSources).

# Syntax

```js
new SaveAction(parentView)
```
## Parameters

|Name|Type|Description|
|----|----------|---------|
|parentView|[`View`](../../Elements/View/)| Родительское представление |

# Properties

Для работы с данными свойствами используйте методы [getProperty](../BaseAction/BaseAction.getProperty/) и [setProperty](../BaseAction/BaseAction.setProperty/).

|Name|Type|Default|Description|
|----|----|----|-----------|
|dataSource|[`DataSource`](../../DataSources/)| |Источник данных, который будет сохранятся|
|canClose|`Boolean`|true|Значение, определяющее, нужно ли закрыть родительское представление после сохранения|

# Метод execute

Если при вызове метода [execute](../BaseAction/BaseAction.execute/) указан параметр callback, то вызов данного обработчика осуществляется с параметрами context и argument. 

|Name|Type|Description|
|----|----|-----------|
|context|[Контекст представления](../../Context/)|Контекст родительского представления|
|argument|`Object`|В случае, если сохранение произошло успешно, то argument содержит поле source - источник данных, в который осуществляется сохранение. Если же при сохранении произошла ошибка, то argument содержить поле value, которое содержит результаты проверки валидации|

# Examples

```js
var saveAction = new SaveAction(parentView);
saveAction.setProperty('dataSource', parentView.context.dataSources['DataSource1']);
saveAction.setProperty('canClose', true);
saveAction.execute(); // сохранит выбранный элемент DataSource1 и закроет parentView
```

# See Also

* [`getProperty`](../BaseAction/BaseAction.getProperty/)
* [`setProperty`](../BaseAction/BaseAction.setProperty/)