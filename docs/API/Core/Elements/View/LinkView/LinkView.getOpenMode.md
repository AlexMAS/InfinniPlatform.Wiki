---
layout: doc
title: "LinkView.getOpenMode()"
position: 1
---

Возвращает название стратегии отображения представления. 

# Syntax

```js
linkView.getOpenMode()
```

## Parameters

Нет

## Returns

Название стратегии отображения представления. 

Возможные значения:

|Name|Strategy|Description|
|----|----|---------|
|Default|[`OpenModeDefaultStrategy`](../OpenMode/OpenModeDefaultStrategy/)|Представление откроется вместо корневого представления|
|Dialog|[`OpenModeDialogStrategy`](../OpenMode/OpenModeDialogStrategy/)|Представление откроется в диалоговом окне|
|Container|[`OpenModeContainerStrategy`](../OpenMode/OpenModeContainerStrategy/)|Представление откроется в указанном контейнере|

# Examples

```js
var openMode = linkView.getOpenMode();
```

# See Also

* [`setOpenMode`](../LinkView.setOpenMode/)
* [`OpenMode`](../OpenMode/)