---
layout: default
title: "Реализация провайдера работы с метаданными"
position: 1
categories: 
tags: 
---

### Пример 1. Получение всех существующих развернутых конфигураций

|Наименование|Значение|
|------------|--------|
|Url| [http://<servername>:port/SystemConfig/StandardApi/metadata/getregisteredconfiglist](http://eugene-pc:9999/SystemConfig/StandardApi/metadata/getregisteredconfiglist)|
|VerbType|POST|
|Body|```
{
   "id":null,
   "changesObject":"null",
   "replace":false
}
```

|
|Response| ```
{
   "ConfigList":[
      {
         "Name":"testconfig1",
         "Caption":"testconfig1",
         "Description":"testconfig1"
      }
   ]
}
```

|

### Пример 2. Получение метаданных указанной конфигурации

```
{
	"ConfigId" : "testconfig1"
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
      "ConfigId":<ConfigId>
   },
   "replace":false
}
```

```
{
   "id":null,
   "changesObject":{
      "ConfigId":"testconfig1"
   },
   "replace":false
}
```

|
|Response|```
{
   "Id":"1c3a7ec1-e623-4c53-9db0-ffcd042fd608",
   "Name":"testconfig1",
   "Caption":"testconfig1",
   "Description":"testconfig1",
   "Documents":[
      {
         "Id":"38874705-744b-475e-91b3-2cef716a0551",
         "Name":"Common",
         "Caption":"Common options",
         "Description":"Common options"
      },
      {
         "Id":"a17dfe97-8fcd-41a7-bca0-d23f51102739",
         "Name":"testdoc1",
         "Caption":"testdoc1",
         "Description":"testdoc1"
      },
      {
         "Id":"ae36066a-1e2e-4e11-b1aa-e3ea486797dc",
         "Name":"testdoc2",
         "Caption":"testdoc2",
         "Description":"testdoc2"
      }
   ],
   "Assemblies":[

   ],
   "Menu":[
      {
         "Id":"b398076c-4106-4410-912c-c61d43beba55",
         "Name":"testmenu",
         "Caption":"testmenu",
         "Description":"testmenu"
      }
   ],
   "Version":"version_systemconfig",
   "Status":"Published",
   "TimeStamp":"2014-06-14T12:18:50.7704152+05:00"
}
```

|

### Пример 3. Получение списка всех документов конфигурации

Данный запрос возвращает список заголовков метаданных всех документов конфигурации. Для получения конкретного документа необходимо выполнить запрос по имени документа, см. Пример 4.

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/systemconfig/StandardApi/metadata/getdocumentlistmetadata](http://eugene-pc:9999/systemconfig/StandardApi/metadata/getdocumentlistmetadata)|
|Verb Type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "ConfigId":<ConfigId>
   },
   "replace":false
}
```

```
{
   "id":null,
   "changesObject":{
      "ConfigId":"testconfig1"
   },
   "replace":false
}
```

|
|Response|```
[
   {
      "Id":"38874705-744b-475e-91b3-2cef716a0551",
      "Name":"Common",
      "Caption":"Common options"
   },
   {
      "Id":"a17dfe97-8fcd-41a7-bca0-d23f51102739",
      "Name":"testdoc1",
      "Caption":"testdoc1"
   },
   {
      "Id":"ae36066a-1e2e-4e11-b1aa-e3ea486797dc",
      "Name":"testdoc2",
      "Caption":"testdoc2"
   }
]
```

|

### Пример 4. Получение метаданных документа конфигурации по имени

```
{
	"ConfigId" : "testconfig1",
    "DocumentId" : "testdoc1"
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
      "ConfigId":<ConfigId>,
      "DocumentId":<DocumentId>
   },
   "replace":false
}
```

```
{
   "id":null,
   "changesObject":{
      "ConfigId":"testconfig1",
      "DocumentId":"testdoc1"
   },
   "replace":false
}
```

|
|Response|```
{
   "Id":"a17dfe97-8fcd-41a7-bca0-d23f51102739",
   "Name":"testdoc1",
   "Caption":"testdoc1",
   "Description":"testdoc1",
   "Versioning":2,
   "MetadataIndex":"testdoc1",
   "Services":[

   ],
   "Processes":[

   ],
   "Scenarios":[

   ],
   "Generators":[

   ],
   "Schema":{
      "Type":"testdoc1",
      "Caption":"testdoc1",
      "Properties":{
         "Id":{
            "Type":"Uuid",
            "Caption":"Unique identifier"
         },
         "Name":{
            "Type":"String",
            "Caption":"Patient name"
         },
         "Address":{
            "Type":"Object",
            "TypeInfo":{
               "DocumentLink":{
                  "ConfigId":"testconfig",
                  "DocumentId":"testdoc2"
               }
            },
            "Caption":"Patient address"
         }
      }
   },
   "Views":[
      {
         "Id":"73d18799-1df7-49d7-81ee-3905b5aab20a",
         "Name":"TestView"
      }
   ],
   "ParentId":"1c3a7ec1-e623-4c53-9db0-ffcd042fd608",
   "Version":"version_systemconfig",
   "Status":"Published"
}
```

|

### Пример 5. Получение списка элементов метаданных указанного типа из документа

```
{
	"ConfigId" : "testconfig1",
    "DocumentId" : "testdoc1",
	"MetadataType" : "View"
}
```

View

Scenario

Service

Process

Generator

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/systemconfig/StandardApi/metadata/getdocumentelementlistmetadata](http://eugene-pc:9999/systemconfig/StandardApi/metadata/getdocumentelementlistmetadata)|
|Verb Type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "ConfigId":<ConfigId>,
      "DocumentId":<DocumentId>,
      "MetadataType":<MetadataType>
   },
   "replace":false
}
```

```
{
   "id":null,
   "changesObject":{
      "ConfigId":"testconfig1",
      "DocumentId":"testdoc1",
      "MetadataType":"View"
   },
   "replace":false
}
```

|
|Response|```
[
   {
      "Id":"73d18799-1df7-49d7-81ee-3905b5aab20a",
      "Name":"TestView"
   }
]
```

|

### Пример 6. Получение списка метаданных меню

```
{
	"ConfigId" : "testconfig1",
	"MetadataType" : "Menu"
}
```

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/systemconfig/StandardApi/metadata/getmenulistmetadata](http://eugene-pc:9999/systemconfig/StandardApi/metadata/getmenulistmetadata)|
|Verb Type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "ConfigId":<ConfigId>,
      "MetadataType":<MetadataType>
   },
   "replace":false
}
```

```
{
   "id":null,
   "changesObject":{
      "ConfigId":"testconfig1",
      "MetadataType":"Menu"
   },
   "replace":false
}
```

|
|Response|```
[
   {
      "Id":"b398076c-4106-4410-912c-c61d43beba55",
      "Name":"testmenu",
      "Caption":"testmenu"
   }
]
```

|

### Пример 7. Получение метаданных указанного меню

```
{
	"ConfigId" : "testconfig1",
	"MetadataType" : "Menu",
    "MetadataName" : "testmenu"
}
```

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/systemconfig/StandardApi/metadata/getmenumetadata](http://eugene-pc:9999/systemconfig/StandardApi/metadata/getmenumetadata)|
|Verb type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "ConfigId":<ConfigId>,
      "MetadataType":<MetadataType>,
      "MetadataName":<MetadataName>
   },
   "replace":false
}
```

```
{
   "id":null,
   "changesObject":{
      "ConfigId":"testconfig1",
      "MetadataType":"Menu",
      "MetadataName":"testmenu"
   },
   "replace":false
}
```

|
|Response|```
{
   "Id":"b398076c-4106-4410-912c-c61d43beba55",
   "Name":"testmenu",
   "Caption":"testmenu",
   "Description":"testmenu",
   "ParentId":"testconfig1",
   "Version":"version_systemconfig",
   "Status":"Published"
}
```

|

### Пример 8. Получение метаданных валидации уровня Warning

 

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/systemconfig/StandardApi/metadata/getvalidationwarningmetadata](http://eugene-pc:9999/systemconfig/StandardApi/metadata/getmenumetadata)|
|Verb type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "ConfigId":<ConfigId>,
	  "DocumentId":<DocumentId>,
	  "MetadataName":<MetadataName>
   },
   "replace":false
}
```

```
{
   "id":null,
   "changesObject":{
      "ConfigId":"testconfig1",
      "DocumentId":"patient",
      "MetadataName":"validationWarningLastName"
   },
   "replace":false
}
```

|
|Response|```
{
   "Id":"c65a4bde-bde1-4df2-b362-3519eb747303",
   "Or":{
      "Operators":[
         {
            "IsEqual":{
               "Value":"test",
               "Property":"LastName",
               "Message":"Last name not satisfy"
            }
         },
         {
            "Not":{
               "Operator":{
                  "IsNullOrWhiteSpace":{
                     "Property":"LastName"
                  }
               },
               "Message":"LastName is empty"
            }
         }
      ]
   },
   "Name":"validationWarningLastName",
   "ParentId":"d9455d35-fd60-49cc-996e-43e612895089",
   "Version":"version_systemconfig",
   "Status":"Published"
}
```

|

### Пример 9. Получение метаданных валидации уровня Error

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/systemconfig/StandardApi/metadata/getvalidationerrormetadata](http://eugene-pc:9999/systemconfig/StandardApi/metadata/getmenumetadata)|
|Verb type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "ConfigId":<ConfigId>,
	  "DocumentId":<DocumentId>,
	  "MetadataName":<MetadataName>
   },
   "replace":false
}
```

```
{
   "id":null,
   "changesObject":{
      "ConfigId":"testconfig1",
      "DocumentId":"patient",
      "MetadataName":"validationErrorLastName"
   },
   "replace":false
}
```

|
|Response|```
{
   "Id":"40fe0348-3289-4039-89b8-c9b7c39c9977",
   "And":{
      "Operators":[
         {
            "IsEqual":{
               "Value":"test",
               "Property":"LastName",
               "Message":"Last name not satisfy"
            }
         },
         {
            "Not":{
               "Operator":{
                  "IsNullOrWhiteSpace":{
                     "Property":"LastName"
                  }
               },
               "Message":"LastName is empty"
            }
         }
      ]
   },
   "Name":"validationErrorLastName",
   "ParentId":"d9455d35-fd60-49cc-996e-43e612895089",
   "Version":"version_systemconfig",
   "Status":"Published"
}
```

|

