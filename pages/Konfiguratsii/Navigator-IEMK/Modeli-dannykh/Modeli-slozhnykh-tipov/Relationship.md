---
layout: default
title: Relationship
position: 
categories: 
tags: 
---

Представляет описание типа данных, характеризующего опекуна/попечителя.

#### Структура данных:

|### Наименование

|### Тип данных

|### Заголовок

|### Описание

|### Множественность

|
|Type|Ссылка на справочник: 1.2.643.5.1.13.2.1.1.186|Тип отношений|Тип отношений|[1..1]|
|PatientId|[[Uuid|Типы данных]] |Уникальный идентификатор пациента|Уникальный идентификатор пациента|[1.. 1]|

 

 

#### JSON-модель:

 

```
 [
   {
      "Type":"LinkClassifier",
      "Name":"Type",
      "Caption":"Тип отношений",
      "Description":"Тип отношений",
      "MultiplicityFrom":1,
      "MultiplicityTo":1,
      "Attributes":{
         "ClassifierLink":{
            "ConfigId":"ClassifierStorage",
            "ConfigVersion":"1.0.0.0",
            "ClassifierId":"1.2.643.5.1.13.2.1.1.186"
         }
      }
   },
   {
      "Type":"Uuid",
      "Name":"PatientId",
      "Caption":"Уникальный идентификатор пациента",
      "Description":"Уникальный идентификатор пациента",
      "MultiplicityFrom":1,
      "MultiplicityTo":1
   }
]
```

 

#### Пример данных:

 

```
 {
   "Type":{
      "Code":"1",
      "CodeSystem":"1.2.643.5.1.13.2.1.1.186",
      "CodeSystemName":"Классификатор представителей гражданина",
      "DisplayName":"Родитель"
   },
   "PatientId":"7284c86d-7a8f-4fe0-bb86-483783787b84"
}
```

