---
layout: doc
title: "DeleteAction"
position: 7
---

Удаляет элемент из [источника данных](../../DataSources).

# Syntax

```js
new DeleteAction(parentView)
```
## Parameters

|Name|Type|Description|
|----|----------|---------|
|parentView|[`View`](../../Elements/View/)| Родительское представление |

# Properties

Для работы с данными свойствами используйте методы [getProperty](../BaseAction/BaseAction.getProperty/) и [setProperty](../BaseAction/BaseAction.setProperty/).

|Name|Type|Default|Description|
|----|----|----|-----------|
|destinationSource|`String`| |Название источника данных, из которого производится удаление|
|destinationProperty|`String`| |Путь до документа в источнике данных, который будет удалятся|
|canClose|`Boolean`|true|(Необязательное) Значение, определяющее, нужно ли перед удалением спросить согласие пользователя на удаление|

# Examples

```js
var deleteAction = new DeleteAction(parentView);
deleteAction.setProperty('destinationSource', 'Patients');
deleteAction.setProperty('destinationProperty', '$.Hospitalizations.0');
deleteAction.execute(); // удалит первую госпитализацию у текущего пациента
```


# See Also

* [`AddAction`](../AddAction/)
* [`EditAction`](../EditAction/)
* [`getProperty`](../BaseAction/BaseAction.getProperty/)
* [`setProperty`](../BaseAction/BaseAction.setProperty/)