---
layout: default
title: "IdentityCard"
position: 
categories: 
tags: 
---

Представляет описание типа данных, позволяющего задать информацию об удостоверении личности. 

#### Структура данных:

|### Наименование

|### Тип данных

|### Заголовок

|### Описание

|### Множественность

|
|Type|Элемент справочника 1.2.643.5.1.13.2.7.1.62|Тип документа|Тип документа|[1..1]|
|TypeTranslation|Элемент справочника 1.2.643.5.1.13.2.1.1.498|Тип документа, удостоверяющего личность|Тип документа, удостоверяющего личность (расшифровка)|[0..1]|
|Series|[[String|Типы данных]]|Серия документа|Серия документа|[1..1]|
|Number|[[String|Типы данных]]|Номер документа|Номер документа|[1..1]|
|IssueDate|[[DateTime|Типы данных]]|Дата выдачи документа|Дата выдачи документа|[1..1]|
|ExpiryDate|[[DateTime|Типы данных]] |Окончание срока действия документа|Окончание срока действия документа|[0..1]|
|Issuer|[[String|Типы данных]]|Наименование организации, выдавшей документ|Наименование организации, выдавшей документ|[1..1]|

 

#### JSON-модель:

 

```
{
  "Name": "IdentityCard",
  "Properties": [{
    "Type": "LinkClassifier",
    "Name": "Type",
    "Caption": "Тип документа",
    "Description": "Тип документа",
    "MultiplicityFrom": 1,
    "MultiplicityTo": 1,
    "Attributes": {
      "ClassifierLink": {
        "ConfigId": "ClassifierStorage",
        "ConfigVersion": "1.0.0.0",
        "ClassifierId": "1.2.643.5.1.13.2.7.1.62"
      }
    }
  },
  {
    "Type": "LinkClassifier",
    "Name": "TypeTranslation",
    "Caption": "Тип документа, удостоверяющего личность",
    "Description": "Тип документа, удостоверяющего личность (расшифровка)",
    "MultiplicityFrom": 0,
    "MultiplicityTo": 1,
    "Attributes": {
      "ClassifierLink": {
        "ConfigId": "ClassifierStorage",
        "ConfigVersion": "1.0.0.0",
        "ClassifierId": "1.2.643.5.1.13.2.1.1.498"
      }
    }
  },
  {
    "Type": "String",
    "Name": "Series",
    "Caption": "Серия документа",
    "Description": "Серия документа",
    "MultiplicityFrom": 1,
    "MultiplicityTo": 1
  },
  {
    "Type": "String",
    "Name": "Number",
    "Caption": "Номер документа",
    "Description": "Номер документа",
    "MultiplicityFrom": 1,
    "MultiplicityTo": 1
  },
  {
    "Type": "DateTime",
    "Name": "IssueDate",
    "Caption": "Дата выдачи документа",
    "Description": "Дата выдачи документа",
    "MultiplicityFrom": 1,
    "MultiplicityTo": 1
  },
  {
    "Type": "DateTime",
    "Name": "ExpiryDate",
    "Caption": "Окончание срока действия документа",
    "Description": "Окончание срока действия документа",
    "MultiplicityFrom": 0,
    "MultiplicityTo": 1
  },
  {
    "Type": "String",
    "Name": "Issuer",
    "Caption": "Наименование организации, выдавшей документ",
    "Description": "Наименование организации, выдавшей документ",
    "MultiplicityFrom": 1,
    "MultiplicityTo": 1
  }]
}
```

 

#### Пример данных:

 

```
 {
   "Type":{
      "Code":"3",
      "CodeSystem":"1.2.643.5.1.13.2.7.1.62",
      "CodeSystemName":"Тип внешнего идентификатора",
      "DisplayName":"Документ, удостоверяющий личность"
   },
   "TypeTranslation":{
      "Code":"14",
      "CodeSystem":"1.2.643.5.1.13.2.1.1.498",
      "CodeSystemName":"Классификатор документов, удостоверяющих личность гражданина Российской Федерации",
      "DisplayName":"Паспорт гражданина РФ"
   },
   "Series":"4567",
   "Number":"1234567890",
   "IssueDate":"20020505",
   "Issuer":"ОУФМС России, по Даниловскому району, г Москвы в ЮАО"
}
```

