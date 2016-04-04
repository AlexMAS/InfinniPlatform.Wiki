---
layout: doc
title: "ServerAction"
position: 11
---



# Syntax

```js
new ServerAction(parentView)
```
## Parameters

|Name|Type|Description|
|----|----------|---------|
|parentView|[`View`](../../Elements/View/)| Родительское представление |

# Properties

Для работы с данными свойствами используйте методы [getProperty](../BaseAction/BaseAction.getProperty/) и [setProperty](../BaseAction/BaseAction.setProperty/).

|Name|Type|Description|
|----|----|-----------|
|provider|[`ServerActionProvider`](ServerActionProvider/)||
|contentType|`String`|Тип передаваемых данных. Может принимать значение 'File' или 'Object'|
|parameters|`Array`|Массив [`параметров`](../../Parameters)|

# Метод execute

Если при вызове метода [execute](../BaseAction/BaseAction.execute/) указан параметр callback, то вызов данного обработчика осуществляется с параметром value. 

|Name|Description|
|----|-----------|
|value.requestUrl|Url запроса|
|value.method|Метод запроса|
|value.args|Параметры запроса|


# Examples

```js
var serverAction = new ServerAction(parentView);
var provider = ;

serverAction.setProperty('provider', provider);
serverAction.setProperty('contentType', 'Object');
serverAction.setProperty('parameters', []);

serverAction.execute(); //
```

# See Also

* [`getProperty`](../BaseAction/BaseAction.getProperty/)
* [`setProperty`](../BaseAction/BaseAction.setProperty/)