---
layout: doc
title: "OpenAction"
position: 2
---

Открывает [представление](../../Elements/View/).

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

|Name|Type|Required|Description|
|----|----|:--:|-----------|
|linkView|[`LinkView`](../../LinkView/)| + |Объект, который будет создавать и настраивать [представление](../../Elements/View/)|


# Examples

```js
var linkView = (new InlineViewBuilder()).build(null, {
														builder: args.builder, 
														metadata: {View: viewMetadata}, 
														parentView: args.parentView
													});

var openAction = new OpenAction(args.parentView);
openAction.setProperty('linkView', linkView);
openAction.execute();
```

# See Also

* [`getProperty`](../BaseAction/BaseAction.getProperty/)
* [`setProperty`](../BaseAction/BaseAction.setProperty/)