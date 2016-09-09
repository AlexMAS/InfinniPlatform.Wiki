---
layout: doc
title: "OpenAction"
position: 2
---

Открывает [представление](../../Elements/View/).

# Extends

## [`BaseAction`](../BaseAction/)

# Syntax

```js
new OpenAction(parentView)
```

## Parameters

|Name|Type|Description|
|----|----------|---------|
|parentView|[`View`](../../Elements/View/)| Родительское представление |

# Properties

Для работы с данными свойствами используйте методы [getProperty](../BaseAction/BaseAction.getProperty/) и [setProperty](../BaseAction/BaseAction.setProperty/).

|Name|Type|Description|
|----|----|-----------|
|linkView|[`LinkView`](../../Elements/View/LinkView/)|Объект, который будет создавать и настраивать [представление](../../Elements/View/)|


# Метод execute

Если при вызове метода [execute](../BaseAction/BaseAction.execute/) указан параметр callback, то вызов данного обработчика осуществляется с параметром view. 

|Name|Type|Description|
|----|----|-----------|
|view|[Представление](../../Elements/View/)|Открытое представление|


# Examples

```js
var linkView = (new InlineViewBuilder()).build(null, {
														builder: args.builder, 
														metadata: {View: viewMetadata}, 
														parentView: args.parentView
													});
var openActionCallback = function(view){
	console.log('%s was opened', view.name);
};

var openAction = new OpenAction(args.parentView);
openAction.setProperty('linkView', linkView);
openAction.execute(openActionCallback);
```

# See Also

* [`getProperty`](../BaseAction/BaseAction.getProperty/)
* [`setProperty`](../BaseAction/BaseAction.setProperty/)