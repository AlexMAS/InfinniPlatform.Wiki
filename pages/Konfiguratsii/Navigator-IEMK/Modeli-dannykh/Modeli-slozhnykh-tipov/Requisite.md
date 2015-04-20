---
layout: default
title: Requisite
position: 
categories: 
tags: 
---

Представляет описание типа данных, позволяющего задать информацию о реквизите. 

#### Структура данных:

 

|### Наименование

|### Тип данных

|### Заголовок

|### Описание

|### Множественность

|
|Type|Элемент справочника 1.2.643.5.1.13.2.7.1.62|Тип документа|Тип документа|[1..1]|
|Value|[[String|Типы данных]]|Значение реквизита|Значение реквизита|[1..1]|
|IssueDate|[[DateTime|Типы данных]]|Дата выдачи документа|Дата выдачи документа|[0..1]|
|ExpiryDate|[[DateTime|Типы данных]] |Окончание срока действия документа|Окончание срока действия документа|[0..1]|
|Issuer|[[String|Типы данных]]|Наименование организации, выдавшей документ|Наименование организации, выдавшей документ|[0..1]|
|InsuredTerritory|Элемент справочника 1.2.643.5.1.13.2.1.1.196|Код территории страхования|Код территории страхования по справочникам ОКАТО, ОКТМО, КЛАДР|[0..1]|

 

#### JSON-модель:

 

```
  {
  "Name": "Requisite",
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
    "Type": "String",
    "Name": "Value",
    "Caption": "Значение реквизита",
    "Description": "Значение реквизита",
    "MultiplicityFrom": 1,
    "MultiplicityTo": 1
  },
  {
    "Type": "DateTime",
    "Name": "IssueDate",
    "Caption": "Дата выдачи документа",
    "Description": "Дата выдачи документа",
    "MultiplicityFrom": 0,
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
    "MultiplicityFrom": 0,
    "MultiplicityTo": 1
  },
  {
    "Type": "LinkClassifier",
    "Name": "InsuredTerritory",
    "Caption": "Код территории страхования",
    "Description": "Код территории страхования по справочникам ОКАТО, ОКТМО, КЛАДР",
    "MultiplicityFrom": 0,
    "MultiplicityTo": 1,
    "Attributes": {
      "ClassifierLink": {
        "ConfigId": "ClassifierStorage",
        "ConfigVersion": "1.0.0.0",
        "ClassifierId": "1.2.643.5.1.13.2.1.1.196"
      }
    }
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
      "DisplayName":"Страховой номер индивидуального лицевого счёта"
   },
   "Value":"110-000-000 00",
   "IssueDate":"2014-03-17T12:20:14",
   "Issuer":"ЗАО "МАКС-М",
   "InsuredTerritory":{
      "Code":"600000000000",
      "CodeSystem":"1.2.643.5.1.13.2.1.1.196",
      "CodeSystemName":"Классификатор адресов России",
      "DisplayName":"Ингушетия"
   }
}
```

