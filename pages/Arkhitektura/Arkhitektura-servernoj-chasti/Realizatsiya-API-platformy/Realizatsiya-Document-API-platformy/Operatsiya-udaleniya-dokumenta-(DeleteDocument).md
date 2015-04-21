---
layout: default
title: "Операция удаления документа (DeleteDocument)"
position: 
categories: 
tags: 
---

Перед рассмотрением операций, следует ознакомиться с [правилами формирования запросов REST](http://knowledge:8081/pages/viewpage.action?pageId=40370460) а также с [принципы обработки событийной модели](http://demo.infinnity.ru:8081/pages/viewpage.action?pageId=26378528)

#### Внутренняя реализация

На основе обработчика [ApplyEventsHandler](http://knowledge:8081/pages/viewpage.action?pageId=40370452)

[Точки расширения](http://knowledge:8081/pages/viewpage.action?pageId=40370473):

|Тип точки расширения|Скриптовый модуль|
|--------------------|-----------------|
|FilterEvents| |
|Move|InfinniConfiguration.RestfulApi.ActionUnits.ActionUnitDeleteDocument|
|GetResult| |

#### Запрос

POST [http://<ServerName>:<PortName>/RestfulApi/StandardApi/configuration/deletedocument](http://10.10.1.82:9999/RestfulApi/StandardApi/configuration/setdocument)

Тело запроса:

```
{
   "id":null,
   "replace":False
   "changesObject":
   {
      "Configuration": "<Configuration name>",
      "Metadata": "<Metadata name>",
      "Id": "<Document identifier>"
   }
}
```

В теле запроса передаются следующие аргументы (вместо <parameter name> указывается нужное значение)

<Configuration name> - идентификатор конфигурации (см. [правила формирования запросов REST](http://demo.infinnity.ru:8081/pages/viewpage.action?pageId=40370460))

<Metadata name> - наименование объекта метаданных (см. [правила формирования запросов REST](http://demo.infinnity.ru:8081/pages/viewpage.action?pageId=40370460))

<Document identifier> - идентификатор удаляемого документа

Пример ответа сервера:

```
{
   "Configuration":"update",
   "Metadata":"package",
   "Id":"bcad4212-34e6-44ff-a28e-41d6c288b5fb",
   "Version":"version_restfulapi"
}
```

В данный момент сервер возвращает в ответе параметры удаленного документа, по которым было осуществлено удаление. В будущем будет добавлена еще точка расширения GetResult, которая позволит лучше информировать о результатах удаления документа.

