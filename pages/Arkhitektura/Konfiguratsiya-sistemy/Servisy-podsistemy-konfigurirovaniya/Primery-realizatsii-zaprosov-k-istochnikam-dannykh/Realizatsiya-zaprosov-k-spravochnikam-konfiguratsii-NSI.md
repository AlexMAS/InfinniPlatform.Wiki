---
layout: default
title: Реализация запросов к справочникам конфигурации НСИ
position: 
categories: 
tags: 
---

### Пример 1. Получение метаданных конфигурации НСИ

```
{
	"ConfigId" : "ClassifierStorage"
}
```

|Наименование|Значение|
|------------|--------|
|Url| [http://<servername>:<port>/systemconfig/StandardApi/metadata/getconfigurationmetadata](http://eugene-pc:9999/systemconfig/StandardApi/metadata/getconfigurationmetadata)|
|Verb Type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "ConfigId":"ClassifierStorage"
   },
   "replace":false
}
```

|
|Response|```
{
   "Id":"dac0c8b4-6eef-4e5a-9c75-0f1feb8859d2",
   "Name":"ClassifierStorage",
   "Caption":"Классификаторы НСИ",
   "Description":"Конфигурация справочников НСИ",
   "Documents":[
      {
         "Id":"d3f9dbb2-5eaa-43c1-8fdf-dc594c2c5950",
         "Name":"classifiermetadata",
         "Caption":"Метаданные классификаторов",
         "Description":"Метаданные классификаторов"
      },
      {
         "Id":"0435f994-087c-4f95-94b0-8d936c849f53",
         "Name":"classifiervalue",
         "Caption":"Метаданные значений справочников",
         "Description":""
      },
      {
         "Id":"B0F7BDEF-2C15-41A7-8D11-5BC7B571D4EA",
         "Name":"Common",
         "Caption":"Common",
         "Description":""
      },
      {
         "Id":"e7767a1e-88c0-4c5c-962a-abbea4ffc7d5",
         "Name":"Metadata",
         "Caption":"",
         "Description":""
      },
      {
         "Id":"1.2.643.5.1.13.2.7.1.55",
         "Name":"1.2.643.5.1.13.2.7.1.55",
         "Caption":"1.2.643.5.1.13.2.7.1.55",
         "Description":"1.2.643.5.1.13.2.7.1.55"
      }
   ],
   "Assemblies":[

   ],
   "Menu":[

   ],
   "Version":"version_systemconfig",
   "Status":"Published",
   "TimeStamp":"2014-06-15T15:22:21.4917317+05:00"
}
```

|

### Пример 2. Получение списка всех документов конфигурации

Данный запрос возвращает список заголовков метаданных всех документов конфигурации. Для получения конкретного документа необходимо выполнить запрос по имени документа, см. Пример 3.

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/systemconfig/StandardApi/metadata/getdocumentlistmetadata](http://eugene-pc:9999/systemconfig/StandardApi/metadata/getdocumentlistmetadata)|
|Verb Type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "ConfigId":"ClassifierStorage"
   },
   "replace":false
}
```

|
|Response|```
[
      {
         "Id":"d3f9dbb2-5eaa-43c1-8fdf-dc594c2c5950",
         "Name":"classifiermetadata",
         "Caption":"Метаданные классификаторов",
         "Description":"Метаданные классификаторов"
      },
      {
         "Id":"0435f994-087c-4f95-94b0-8d936c849f53",
         "Name":"classifiervalue",
         "Caption":"Метаданные значений справочников",
         "Description":""
      },
      {
         "Id":"B0F7BDEF-2C15-41A7-8D11-5BC7B571D4EA",
         "Name":"Common",
         "Caption":"Common",
         "Description":""
      },
      {
         "Id":"e7767a1e-88c0-4c5c-962a-abbea4ffc7d5",
         "Name":"Metadata",
         "Caption":"",
         "Description":""
      },
      {
         "Id":"1.2.643.5.1.13.2.7.1.55",
         "Name":"1.2.643.5.1.13.2.7.1.55",
         "Caption":"1.2.643.5.1.13.2.7.1.55",
         "Description":"1.2.643.5.1.13.2.7.1.55"
      }
   ],
```

|

### Пример 3. Получение метаданных документа конфигурации по имени

```
{
	"ConfigId" : "ClassifierStorage",
    "DocumentId" : "1.2.643.5.1.13.2.7.1.55"
}
```

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/systemconfig/StandardApi/metadata/getdocumentmetadata](http://eugene-pc:9999/systemconfig/StandardApi/metadata/getdocumentmetadata)|
|Verb Type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "ConfigId":"ClassifierStorage",
      "DocumentId":"1.2.643.5.1.13.2.7.1.55"
   },
   "replace":false
}
```

|
|Response|```
 {
   "Id":"1.2.643.5.1.13.2.7.1.55",
   "Name":"1.2.643.5.1.13.2.7.1.55",
   "Caption":"1.2.643.5.1.13.2.7.1.55",
   "Description":"1.2.643.5.1.13.2.7.1.55",
   "Versioning":2,
   "MetadataIndex":"1.2.643.5.1.13.2.7.1.55",
   "Services":[

   ],
   "Processes":[

   ],
   "Scenarios":[

   ],
   "Generators":[

   ],
   "ParentId":"dac0c8b4-6eef-4e5a-9c75-0f1feb8859d2",
   "Version":"version_systemconfig",
   "Status":"Published"
}
```

|

### Пример 4. Добавление документа (значения в справочник)

```
{
   "ConfigId":"classifierstorage",
   "DocumentId":"1.2.643.5.1.13.2.7.1.55",
}
```

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/RestfulApi/StandardApi/configuration/setdocuments ](http://eugene-pc:9999/RestfulApi/StandardApi/configuration/setdocuments)|
|Verb Type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "Configuration":"classifierstorage",
      "Metadata":"1.2.643.5.1.13.2.7.1.55",
      "Item":[
      {
         "Id":"999",
         "Code":"999",
         "Name":"Новая запись"
      }
      ]
   },
   "replace":false
}
```

|
|Response|```
 {
   "Id":"9a758d2e-86e1-44cf-84f6-ceff00a7e009",
   "Configuration":"classifierstorage",
   "Metadata":"1.2.643.5.1.13.2.7.1.55",
   "Item":[
      {
         "Id":"999",
         "Code":"999",
         "Name":"Новая запись"
      }
   ],
   "Version":"version_restfulapi"
}
```

|

### Пример 5. Получение документа (значения из справочника)

```
{
   "Configuration":"classifierstorage",
   "DocumentId":"1.2.643.5.1.13.2.7.1.55",
}
```

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/RestfulApi/StandardApi/configuration/getdocument ](http://eugene-pc:9999/RestfulApi/StandardApi/configuration/getdocument)|
|Verb Type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
       "Configuration":"classifierstorage",
       "Metadata":"1.2.643.5.1.13.2.7.1.55",
       "Filter":[
       {
         "Property":"Name",
         "Value":"Новая",
         "CriteriaType":1024
       }
       ],
       "PageNumber":0,
       "PageSize":100
    },
   "replace":false
}
```

|
|Response|```
 [
   {
      "Id":"999",
      "Code":"999",
      "Name":"Новая запись",
      "TimeStamp":"2014-06-20T11:57:14.8988351+06:00"
   }
]
```

|

Запросы для работы с документами конфигурации "Справочники НСИ" полностью совпадают со стандартными запросами к документам любых других конфигураций (см. [[Реализация DocumentDataSource]]).

Остальные запросы к источникам метаданных НСИ осуществляются аналогично примерам см. [[Реализация MetadataDataSource|Реализация провайдера работы с метаданными]]

 

 

