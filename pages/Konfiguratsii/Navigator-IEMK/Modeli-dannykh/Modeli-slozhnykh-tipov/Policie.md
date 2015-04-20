---
layout: default
title: Policie
position: 
categories: 
tags: 
---

Представляет описание типа данных, позволяющего задать информацию о медицинском полисе. 

#### Структура данных:

|### Наименование

|### Тип данных

|### Заголовок

|### Описание

|### Множественность

|
|Type|Элемент справочника 1.2.643.5.1.13.2.7.1.62|Тип документа|Тип документа|[1..1]|
|TypeTranslation|Элемент справочника 1.2.643.5.1.13.2.1.1.498|Тип документа, удостоверяющего личность|Тип документа, удостоверяющего личность (расшифровка)|[0..1]|
|Series|[[String|Типы данных]] |Серия документа|Серия документа|[1..1]|
|Number|[[String|Типы данных]] |Номер документа|Номер документа|[1..1]|
|IssueDate|[[DateTime|Типы данных]] |Дата выдачи полиса|Дата выдачи полиса|[1..1]|
|ExpiryDate|[[DateTime|Типы данных]]  |Окончание срока действия полиса|Окончание срока действия полиса|[0..1]|
|Issuer|[[String|Типы данных]] |Имя страховой компании|Имя страховой компании|[1..1]|
|IssuerId|Элемент справочника 1.2.643.5.1.13.2.1.1.635|Идентификатор страховой компании|Идентификатор страховой компании, по справочнику в данном случае ФОМС|[0..1]|
|InsuredTerritory|Элемент справочника 1.2.643.5.1.13.2.1.1.196|Код территории страхования|Код территории страхования по справочникам ОКАТО, ОКТМО, КЛАДР|[0..1]|

 

 

#### JSON-модель:

 

```
{
  "Name": "Policie",
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
    "Caption": "Дата выдачи полиса",
    "Description": "Дата выдачи полиса",
    "MultiplicityFrom": 1,
    "MultiplicityTo": 1
  },
  {
    "Type": "DateTime",
    "Name": "ExpiryDate",
    "Caption": "Окончание срока действия полиса",
    "Description": "Окончание срока действия полиса",
    "MultiplicityFrom": 0,
    "MultiplicityTo": 1
  },
  {
    "Type": "String",
    "Name": "Issuer",
    "Caption": "Имя страховой компании",
    "Description": "Имя страховой компании",
    "MultiplicityFrom": 1,
    "MultiplicityTo": 1
  },
  {
    "Type": "LinkClassifier",
    "Name": "IssuerId",
    "Caption": "Идентификатор страховой компании",
    "Description": "Идентификатор страховой компании, по справочнику в данном случае ФОМС",
    "MultiplicityFrom": 0,
    "MultiplicityTo": 1,
    "Attributes": {
      "ClassifierLink": {
        "ConfigId": "ClassifierStorage",
        "ConfigVersion": "1.0.0.0",
        "ClassifierId": "1.2.643.5.1.13.2.1.1.635"
      }
    }
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
      "Code":"1",
      "CodeSystem":"1.2.643.5.1.13.2.7.1.62",
      "CodeSystemName":"Тип внешнего идентификатора",
      "DisplayName":"Полис обязательного медицинского страхования"
   },   
   "Series":"35",
   "Number":"1234567890",
   "IssueDate":"2014-03-17T12:20:13",
   "ExpiryDate":"2014-03-17T12:20:13",
   "Issuer":"ЗАО "МАКС-М"",
   "IssuerId":{
      "Code":"23307",
      "CodeSystem":"1.2.643.5.1.13.2.1.1.635",
      "CodeSystemName":"Реестр страховых медицинских организаций (ФОМС)",
      "DisplayName":"ЗАО "МАКС-М"
   },
   "InsuredTerritory":{
      "Code":"7700000000000",
      "CodeSystem":"1.2.643.5.1.13.2.1.1.196",
      "CodeSystemName":"Классификатор адресов России",
      "DisplayName":"Москва"
   }
}
```

