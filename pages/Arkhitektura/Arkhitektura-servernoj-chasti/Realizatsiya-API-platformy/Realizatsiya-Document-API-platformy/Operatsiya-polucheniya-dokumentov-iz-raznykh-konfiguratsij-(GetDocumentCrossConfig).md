---
layout: default
title: Операция получения документов из разных конфигураций (GetDocumentCrossConfig)
position: 
categories: 
tags: 
---

Перед рассмотрением операций, следует ознакомиться с [[правилами формирования запросов REST|Обработка запросов REST и формирование роутинга для запросов]]

#### Внутренняя реализация

На основе обработчика [[ApplyEventsHandler|Обработчик запросов изменения данных (ApplyChangesHandler)]]

[[Точки расширения|Точки расширения бизнес-логики]]:

|Тип точки расширения|Скриптовый модуль|
|--------------------|-----------------|
|GetResult|InfinniConfiguration.RestfulApi.ActionUnits.ActionUnitGetDocumentCrossConfig|

#### Запрос

POST [http://<ServerName>:<PortName>/RestfulApi/StandardApi/configuration/getdocumentcrossconfig](http://10.10.1.82:9999/RestfulApi/StandardApi/configuration/getdocumentcrossconfig)

```
{
   "id":null,
   "replace": False
   "changesObject":
   {
      "Configurations": ["<Configuration name>"],
      "Documents": ["<Metadata name>"],
      "Filter": [<Filter object>],
      "PageNumber": <Page number>,
      "PageSize": <Page size>,
      "Sorting": [<Sorting object>]
   }
}
```

В теле запроса передаются следующие аргументы (вместо <parameter name> указывается нужное значение)

<Configuration name> - идентификатор конфигурации (см. [[правила формирования запросов REST|Обработка запросов REST и формирование роутинга для запросов]]). В запросе может быть передано несколько идентификаторов конфигураций, в этом случае поиск будет проводиться по всем указанным конфигурациям. Если идентификатор конфигурации не указан, поиск будет производиться по всем конфигурациям, имеющимся в системе.

<Metadata name> - наименование объекта метаданных (см. [[правила формирования запросов REST|Обработка запросов REST и формирование роутинга для запросов]]). Параметр указывается только в случае, если указаны наименования конфигураций в параметре "Configurations". Можно указывать несколько типов документов, но все они должны принадлежать конфигурациям, указанных в параметре "Configurations".

<Filter object> -объект фильтра для поискового запроса (см. структура фильтра поискового запроса), может содержать null либо значение фильтра

<Page number> -номер страницы результатов поискового запроса, по умолчанию 0

<Page size> -размер страницы поискового запроса, по умолчанию 10

<Sorting object> - объект задаёт правила сортировки результатов запроса. Каждое правило сортировки описывается следующими полями: PropertyName (имя свойства по которому сортировать), SortOrder (0 - по возрастанию, 1 - по убыванию). Сортировать можно только по определенному перечню свойств документа, метаданные которых содержат признак Sortable. 

Ответ сервера (пример):

```
[
   {
      "Id":"a3d04fdb-1490-4a15-b856-95d534d68403",
      "ModuleId":"InfinniConfiguration.Integration.dll",
      "ConfigurationName":"Integration",
      "Version":"test_from_config",
      "Status":"Published",
      "ContentId":"f8aec337-f779-426c-b60d-3a37c6eac71e",
      "PdbId":"66a11a71-9c23-4800-a276-813b2f052eb1",
      "TimeStamp":"2014-04-04T17:10:03.5309912+06:00"
   },
   {
      "Id":"bcad4212-34e6-44ff-a28e-41d6c288b5fb",
      "ModuleId":"InfinniConfiguration.Integration.dll",
      "ConfigurationName":"Integration",
      "Version":"test_version",
      "Status":"Published",
      "ContentId":"91ba62ba-c191-4243-9b24-a25383fd1f29",
      "PdbId":"a64a1b32-8dbf-42b1-b485-b13d76779f73",
      "TimeStamp":"2014-04-04T17:15:06.1866742+06:00"
   }
]
```

2.

