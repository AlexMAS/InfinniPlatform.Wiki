---
layout: default
title: Операция сохранения документа (SetDocument)
position: 
categories: 
tags: 
---

Перед рассмотрением операций, следует ознакомиться с [правилами формирования запросов REST](http://knowledge:8081/pages/viewpage.action?pageId=40370460) а также с [[принципы обработки событийной модели|Запрос на создание (модификацию) объекта]]

#### Внутренняя реализация

На основе обработчика [ApplyEventsHandler](http://knowledge:8081/pages/viewpage.action?pageId=40370452)

[Точки расширения](http://knowledge:8081/pages/viewpage.action?pageId=40370473):

|Тип точки расширения|Скриптовый модуль|
|--------------------|-----------------|
|Move|InfinniConfiguration.RestfulApi.ActionUnits.ActionUnitSetDocument|

#### Запрос

POST [http://<ServerName>:<PortName>/RestfulApi/StandardApi/configuration/setdocument](http://10.10.1.82:9999/RestfulApi/StandardApi/configuration/setdocument)

Тело запроса:

```
{
   "id":null,
   "replace":False,
   "changesObject":
   {
      "Configuration": "testdocumentapi",
      "Metadata": "documentapitest",
      "IgnoreWarnings": false,
      "Document": 
      {
         "Id": "7925104b-05b9-405b-83a7-e37d904ed9d4",
         "TestProperty": "get"
      },   
      "TransactionMarker": null
   }
}
```

Ответ сервера:

```
{
   "Id":"c37805bc-94e6-48e5-ade1-e92defaa5911",
   "Configuration":"classifierstorage",
   "Metadata":"classifiermetadata",
   "Item":{
      "Id":"5ACCD9C9-9C9C-43DC-8C4E-D562DF319651",
      "Name":"1.2.643.5.1.13.2.7.1.64",
      "Caption":"Способ применения медикамента",
   },
   "Version":"version_restfulapi"
}
```

Для данной операции в будущем будет добавлена точка расширения GetResult, которая предоставит информацию о результатах сохранения. В данный момент в качестве результата возвращается сохраненный JSON-документ в свойстве Item.

