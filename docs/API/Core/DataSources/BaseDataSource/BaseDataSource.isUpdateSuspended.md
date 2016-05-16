---
layout: doc
title: "BaseDataSource.isUpdateSuspended()"
position: 16
---

Возвращает значение, указывающее, запрещено ли обновление списка элементов.

# Syntax

```js
BaseDataSource.isUpdateSuspended()
```

## Parameters

Нет

## Returns

Возвращает `true`, если обновление списка элементов запрещено, иначе возвращает `false`.

# Examples

```js
var isUpdateSuspended = BaseDataSource.isUpdateSuspended();
```

# See Also

* [`resumeUpdate()`](../BaseDataSource.resumeUpdate/)
* [`suspendUpdate()`](../BaseDataSource.suspendUpdate/)
