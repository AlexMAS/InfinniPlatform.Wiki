---
layout: doc
title: "RestDataSource"
position: 2
---

Источник данных представления для произвольных http-сервисов данных.

# Extends

[`BaseDataSource`](../BaseDataSource/)

# Syntax

```js
new RestDataSource(parameters)
```

## Parameters

|Name|Type|Description|
|----|----------|---------|
|parameters|`Object`| Объект с параметрами представления. Один из параметров обязательный: parameters.view - родительское представление источника данных|

# Properties

Нет

# Specific Properties


Для работы с данными свойствами используйте методы [getProperty](../BaseDataSource/BaseDataSource.getProperty/) и [setProperty](../BaseDataSource/BaseDataSource.setProperty/).  
Обратите внимание, что для работы с данными свойствами необходимо [указывать точку в названии](../BaseDataSource/BaseDataSource.getProperty/#path-rules).

|Name|Description|
|----|---------|
|urlParams.get|Параметры запроса на получение данных|
|urlParams.set|Параметры запроса на сохранение данных|
|urlParams.delete|Параметры запроса на удаление|

# urlParams Format

Параметры запроса хранятся в виде объекта со следующими полями:

|Name|Type|Description|
|----|----|---------|
|origin|`String`<sup>*</sup>|Хост и порт|
|path|`String`<sup>*</sup>|Строка пути (относительно хоста)|
|method|`String`|Метод запроса|
|data|`Object`<sup>*</sup>|Данные запроса|
|params|`Object`|Параметры запроса|

<sup>*</sup> [Шаблонизируемая величина](#parameters-templating).

# Parameters Templating

Зачастую при описании запроса возникает необходимость использовать изменяемые значения.  
Для этого в RestDataSource введены параметры. Вы можете задать значение параметра в свойстве params. 
А затем использовать его в шаблонизируемых величинах, обозначив `<%[paramName]%>`.
 
Например, задан параметр *userId*, тогда в свойстве **path** можно обратится к нему следующим образом: `"/users?filter=eq(userId,<%userId%>)"`. 
При отправке запроса вместо *<%userId%>* будет установлено соответсвующее значение параметра.

```js
RestDataSource.setGettingUrlParams('params.userId', '12345');
RestDataSource.setGettingUrlParams('path', '/users?filter=eq(userId,<%userId%>)');
```

# Methods

|Name|Description|
|----|---------|
|[getGettingUrlParams](RestDataSource.getGettingUrlParams/)|Возвращает параметры запроса на получение данных|
|[setGettingUrlParams](RestDataSource.setGettingUrlParams/)|Устанавливает параметры запроса на получение данных|
|[getSettingUrlParams](RestDataSource.getSettingUrlParams/)|Возвращает параметры запроса на сохранение данных|
|[setSettingUrlParams](RestDataSource.setSettingUrlParams/)|Устанавливает параметры запроса на сохранение данных|
|[getDeletingUrlParams](RestDataSource.getDeletingUrlParams/)|Возвращает параметры запроса на удаление|
|[setDeletingUrlParams](RestDataSource.setDeletingUrlParams/)|Устанавливает параметры запроса на удаление|
|[setUpdatingItemsConverter](RestDataSource.setUpdatingItemsConverter/)|Устанавливает конвертер ответа http-сервиса в контейнер элементов источника данных|


# Events

Нет