---
layout: doc
title: "BaseDataSource.resumeUpdate()"
position: 18
---

Разрешает обновление списка элементов.

# Syntax

```js
BaseDataSource.resumeUpdate(value)
```

## Parameters

|Name|Description|
|----|-----------|
|value|(Необязательный) Причина запрета на обновление|

Обратите внимание, что причина запрета, указанная в resumeUpdate должна совпадать с той, что была указана в [`suspendUpdate()`](../BaseDataSource.suspendUpdate/). Пока не будут вызваны resumeUpdate для всех тех причин, которые указывались при вызовах [`suspendUpdate()`](../BaseDataSource.suspendUpdate/), обновление списка элементов будет запрещено. Узнать, есть ли запрет на обновление списка элементов можно с помощью метода [`isUpdateSuspended()`](../BaseDataSource.isUpdateSuspended/).

## Returns

Метод ничего не возвращает

# Examples

```js
BaseDataSource.resumeUpdate('updateParamsNotReady');
```

# See Also

* [`isUpdateSuspended()`](../BaseDataSource.isUpdateSuspended/)
* [`suspendUpdate()`](../BaseDataSource.suspendUpdate/)
* [`setFilter()`](../BaseDataSource.setFilter/)
* [`updateItems()`](../BaseDataSource.updateItems/)
