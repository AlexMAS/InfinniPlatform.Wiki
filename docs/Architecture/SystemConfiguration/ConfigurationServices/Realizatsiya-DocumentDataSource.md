---
layout: doc
title: "Реализация DocumentDataSource"
position: 0
categories: 
tags: 
---

### Пример DocumentDataSource

```
{
    "Name": "PatientDataSource",
    "ConfigId": "Integration",
    "DocumentId": "Patient"
}
```

### Создание нового экземпляра документа

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/RestfulApi/StandardApi/configuration/createdocument]()|
|VerbType|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "Configuration":<ConfigId>,
      "Metadata":<DocumentId>,
   },
   "replace":false
}
```

```
{
   "id":null,
   "changesObject":{
      "Configuration": "Structure",
      "Metadata":"MedicalWorker",
   },
   "replace":false
}
```

|
|Response|```
{
   "Id":null,
   "Name":"ИВАНОВ",
   "ObservationDate":"2014-07-11T15:38:32.0615814+06:00",
   "Address":null
}
```

В вышеуказанном примере для поля"Name" - заполняется значением по умолчанию "ИВАНОВ","ObservationDate" - заполняется текущей датойВсе поля, для которых не указано значение по умолчанию/способ предзаполнения, заполняются значением null|

### Получение списка документов по DocumentDataSource с указанием номера страницы и размера страницы, без фильтрации

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/RestfulApi/StandardApi/configuration/getdocument]()|
|Verb type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "Configuration":<ConfigId>,
      "Metadata":<DocumentId>,
      "Filter":[],
      "PageNumber":0,
      "PageSize":100
   },
   "replace":false
}
```

```
{
   "id":null,
   "changesObject":{
      "Configuration":"Integration",
      "Metadata":"Patient",
      "Filter":[],
      "PageNumber":0,
      "PageSize":100
   },
   "replace":false
}
```

|

### Получение конкретного документа по указанному идентификатору документа

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/RestfulApi/StandardApi/configuration/getdocument]()|
|Verb type|POST|
|Body|```
{
  "id": null,
  "changesObject": {
    "Configuration": <ConfigId>,
    "Metadata": <DocumentId>,
    "Filter": [
      {
        "Property": "Id",
        "Value": <Идентификатор конкретного документа>,
        "CriteriaType": 1
      }
    ],
    "PageNumber": 0,
    "PageSize": 1
  },
  "replace": false
}
```

```
{
  "id": null,
  "changesObject": {
    "Configuration": "Integration",
    "Metadata": "Patient",
    "Filter": [
      {
        "Property": "Id",
        "Value": "1795ED33-DB8D-4161-8C9F-637757F7C871",
        "CriteriaType": 1
      }
    ],
    "PageNumber": 0,
    "PageSize": 1
  },
  "replace": false
}
```

|
|Response|```
[
  {
    "Id": "1795ED33-DB8D-4161-8C9F-637757F7C871",
    "PatientId": "D4F76039-EB1A-4CCF-8DE1-7B3516BA2648",
	"LastName" : "Иванов"
    "TimeStamp": "2014-05-14T12:02:38.7520317+05:00"
  }
]
```

|

### Сохранение конкретного документа

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/RestfulApi/StandardApi/configuration/setdocument]()|
|Verb type|POST|
|Body|```
{
  "id": null,
  "changesObject": {
    "Configuration": <ConfigId>,
    "Metadata": <DocumentId>,
    "Document": <Документ>
  },
  "replace": false
}
```

```
{
  "id": null,
  "changesObject": {
    "Configuration": "Integration",
    "Metadata": "Patient",
    "Document": {
      "Id": "1795ED33-DB8D-4161-8C9F-637757F7C871",
      "LastName" : "Иванов"  
    }
  },
  "replace": false
}
```

|

### Удаление конкретного документа

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/RestfulApi/StandardApi/configuration/deletedocument]()|
|Verb type|POST|
|Body|```
{
  "id": null,
  "changesObject": {
    "Configuration": <ConfigId>,
    "Metadata": <DocumentId>,
    "Id": <Идентификатор удаляемого документа>
  },
  "replace": false
}
```

```
{
  "id": null,
  "changesObject": {
    "Configuration": "Integration",
    "Metadata": "Patient",
    "Id": "1795ED33-DB8D-4161-8C9F-637757F7C871"
  },
  "replace": false
}
```

|

