---
layout: doc
title: "UpdateAction"
position: 8
---

Обновляет список элементов [источника данных](../../DataSources).

# Extends

## [`BaseAction`](../BaseAction/)

# Syntax

```js
new UpdateAction(parentView)
```

## Parameters

|Name|Type|Description|
|----|----------|---------|
|parentView|[`View`](../../Elements/View/)| Родительское представление |

# Properties

Для работы с данными свойствами используйте методы [getProperty](../BaseAction/BaseAction.getProperty/) и [setProperty](../BaseAction/BaseAction.setProperty/).

|Name|Type|Description|
|----|----|-----------|
|dataSource|[`DataSource`](../../DataSources/)|Источник данных, который будет обновляться|

# Метод execute

Если при вызове метода [execute](../BaseAction/BaseAction.execute/) указан параметр callback, то вызов данного обработчика осуществляется с параметрами context и argument. 

|Name|Type|Description|
|----|----|-----------|
|context|[Контекст представления](../../Context/)|Контекст родительского представления|
|argument.value|`Array`|Новый список элементов [источника данных](../../DataSources)|


# Examples

```js
var updateAction = new UpdateAction(parentView);
updateAction.setProperty('dataSource', parentView.context.dataSources['DataSource1']);
updateAction.execute(); // обновит DataSource1
```