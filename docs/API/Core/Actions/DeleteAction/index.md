---
layout: doc
title: "DeleteAction"
position: 7
---

Удаляет элемент из [источника данных](../../DataSources).

# Extends

## [`BaseAction`](../BaseAction/)

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
|destinationSource<sup>*</sup>|`String`|–|Название источника данных, из которого производится удаление|
|destinationProperty<sup>*</sup>|`String`|–|Путь до документа в источнике данных, который будет удалятся|
|canClose|`Boolean`|true|Значение, определяющее, нужно ли перед удалением спросить согласие пользователя на удаление|

<sup>*</sup> Обязательное свойство.

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