---
layout: doc
title: "UpdateAction"
position: 8
---

Обновляет список элементов [источника данных](../../DataSources).

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

|Name|Type|Required|Description|
|----|----|:--:|-----------|
|dataSource|[`DataSource`](../../DataSources/)| + |Источник данных, который будет обновляться|


# Examples

```js
var updateAction = new UpdateAction(parentView);
updateAction.setProperty('dataSource', parentView.context.dataSources['DataSource1']);
updateAction.execute(); // обновит DataSource1
```