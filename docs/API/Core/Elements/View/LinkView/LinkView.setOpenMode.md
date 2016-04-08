---
layout: doc
title: "LinkView.setOpenMode()"
position: 2
---

Устанавливает название стратегии отображения представления.

# Syntax

```js
linkView.setOpenMode(strategyName)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|strategyName|`String`|Название стратегии отображения представления|

Возможные значения:

|Name|Strategy|Description|
|----|----|---------|
|Default|[`OpenModeDefaultStrategy`](../OpenMode/OpenModeDefaultStrategy/)|Представление откроется вместо корневого представления|
|Dialog|[`OpenModeDialogStrategy`](../OpenMode/OpenModeDialogStrategy/)|Представление откроется в диалоговом окне|
|Container|[`OpenModeContainerStrategy`](../OpenMode/OpenModeContainerStrategy/)|Представление откроется в указанном контейнере|

## Returns

Метод ничего не возвращает.

# Examples

```js
linkView.setOpenMode('Dialog');
```

# See Also

* [`getOpenMode`](../LinkView.getOpenMode/)
* [`OpenMode`](../OpenMode/)