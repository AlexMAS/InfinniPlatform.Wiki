---
layout: doc
title: "GlobalContext.executeAction"
position: 6
---

Запускает выполнение указанного [`действия`](../../Actions/).

# Syntax

```js
ViewContext.executeAction(context, executeActionMetadata[, resultCallback]);
```

# Parameters

|Name|Type|Description|
|----|----|-----------|
|`context`|[`ViewContext`](../../Context/)|Контекст представления.|
|`executeActionMetadata`|[`ActionMetadata`](../../Actions/)|Метеданные [`действия`](../../Actions/)|
|`resultCallback`|[`Script`](../../Script/)|Обработчик события о том, что Action был выполнен|

# Examples

```js
var metadata = {
    "OpenAction": {
        "OpenMode": "Dialog",
        /** Athoter metadata **/
    }
};
InfinniUI.global.executeAction(context, metadata, functino (context, args) {
    console.log('Done');
});
```

# See Also

* [`Actions`](../../Actions/)
