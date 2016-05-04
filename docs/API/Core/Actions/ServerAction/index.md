---
layout: doc
title: "ServerAction"
position: 11
---

Отправляет http запрос.

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

|Name|Type|Default|Description|
|----|----|----|-----------|
|origin|`String`<sup>*</sup>| |Хост и порт|
|path|`String`<sup>*</sup>| |Строка пути (относительно хоста)|
|data|`Object`<sup>*</sup>| |(Необязательное) Данные запроса|
|contentType|`String`|'application/x-www-form-urlencoded; charset=utf-8'|(Необязательное) Тип данных|
|method|`String`|'GET'|(Необязательное) Метод запроса|

Url запроса определяется конкатинацией свойств origin и path.

<sup>*</sup> [Шаблонизируемая величина](#parameters-templating)

# Parameters Templating

Зачастую при описании запроса возникает необходимость использовать изменяемые значения.  
Для этого в ServerAction введены параметры. Вы можете задать значение параметра с помощью метода [setParam](ServerAction.setParam/). 
А затем использовать его в шаблонизируемых величинах, обозначив `<%[paramName]%>`.  
Например, задан параметр *userId*, тогда в свойстве **path** можно обратится к нему следующим образом: `"/users?filter=eq(userId,<%userId%>)"`. 
При отправке запроса вместо *<%userId%>* будет установлено соответсвующее значение параметра.

# Метод execute

Если при вызове метода [execute](../BaseAction/BaseAction.execute/) указан параметр callback, то вызов данного обработчика осуществляется с параметром value. 

|Name|Description|
|----|-----------|
|value.requestUrl|Url запроса|
|value.method|Метод запроса|
|value.contentType|Тип данных|
|value.args|Данные запроса|

# Methods

|Name|Description|
|----|---------|
|[getParam](ServerAction.getParam/)|Возвращает значение параметра|
|[setParam](ServerAction.setParam/)|Устанавливает значение параметра|