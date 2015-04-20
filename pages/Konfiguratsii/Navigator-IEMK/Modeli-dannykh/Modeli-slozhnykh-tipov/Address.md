---
layout: default
title: Address
position: 
categories: 
tags: 
---

Представляет описание типа данных, позволяющего задать адрес. 

#### Структура данных:

|#### Наименование

|#### Тип данных

|#### Заголовок

|#### Описание

|#### Множественность

|
|Country|Ссылка на справочник: 1.2.643.5.1.13.2.1.1.63|Страна|Страна|[0..1]|
|Region|Ссылка на справочник: 1.2.643.5.1.13.2.1.1.196|Область/Край|Область/Край|[0..1]|
|City|Ссылка на справочник: 1.2.643.5.1.13.2.1.1.196|Город|Город|[0..1]|
|AddressLine|[[String|Типы данных]]|Неструктурированный адрес|Используется только для неструктурированного указания адреса|[0..1]|
|Street|Ссылка на справочник: 1.2.643.5.1.13.2.1.1.196|Улица|Улица|[0..1]|
|House|[[String|Типы данных]]|Номер дома|Номер дома|[0..1]|
|Apartment|[[String|Типы данных]]|Квартира|Квартира|[0..1]|
|PostalCode|[[String|Типы данных]]|Почтовый индекс|Почтовый индекс|[0..1]|
|Direction|[[String|Типы данных]]|Геокоординаты объекта|Геокоординаты объекта|[0..1]|
|Type|Ссылка на справочник: 1.2.643.5.1.13.2.1.1.229|Использование адреса|Использование адреса|[0..1]|

 

 

#### JSON-модель:

 

```
 [
   {
      "Type":"LinkClassifier",
      "Name":"Country",
      "Caption":"Страна",
      "Description":"Страна",
      "MultiplicityFrom":0,
      "MultiplicityTo":1,
      "Attributes":{
         "ClassifierLink":{
            "ConfigId":"ClassifierStorage",
            "ConfigVersion":"1.0.0.0",
            "ClassifierId":"1.2.643.5.1.13.2.1.1.63"
         }
      }
   },
   {
      "Type":"LinkClassifier",
      "Name":"Region",
      "Caption":"Область/Край",
      "Description":"Область/Край",
      "MultiplicityFrom":0,
      "MultiplicityTo":1,
      "Attributes":{
         "ClassifierLink":{
            "ConfigId":"ClassifierStorage",
            "ConfigVersion":"1.0.0.0",
            "ClassifierId":"1.2.643.5.1.13.2.1.1.196"
         }
      }
   },
   {
      "Type":"LinkClassifier",
      "Name":"City",
      "Caption":"Город",
      "Description":"Город",
      "MultiplicityFrom":0,
      "MultiplicityTo":1,
      "Attributes":{
         "ClassifierLink":{
            "ConfigId":"ClassifierStorage",
            "ConfigVersion":"1.0.0.0",
            "ClassifierId":"1.2.643.5.1.13.2.1.1.196"
         }
      }
   },
   {
      "Type":"String",
      "Name":"AddressLine",
      "Caption":"Неструктурированный адрес",
      "Description":"Используется только для неструктурированного указания адреса",
      "MultiplicityFrom":0,
      "MultiplicityTo":1
   },
   {
      "Type":"LinkClassifier",
      "Name":"Street",
      "Caption":"Улица",
      "Description":"Улица",
      "MultiplicityFrom":0,
      "MultiplicityTo":1,
      "Attributes":{
         "ClassifierLink":{
            "ConfigId":"ClassifierStorage",
            "ConfigVersion":"1.0.0.0",
            "ClassifierId":"1.2.643.5.1.13.2.1.1.196"
         }
      }
   },
   {
      "Type":"String",
      "Name":"House",
      "Caption":"Номер дома",
      "Description":"Номер дома",
      "MultiplicityFrom":0,
      "MultiplicityTo":1
   },
   {
      "Type":"String",
      "Name":"Apartment",
      "Caption":"Квартира",
      "Description":"Квартира",
      "MultiplicityFrom":0,
      "MultiplicityTo":1
   },
   {
      "Type":"String",
      "Name":"PostalCode",
      "Caption":"Почтовый индекс",
      "Description":"Почтовый индекс",
      "MultiplicityFrom":0,
      "MultiplicityTo":1
   },
   {
      "Type":"String",
      "Name":"Direction",
      "Caption":"Геокоординаты объекта",
      "Description":"Геокоординаты объекта",
      "MultiplicityFrom":0,
      "MultiplicityTo":1
   },
   {
      "Type":"LinkClassifier",
      "Name":"Type",
      "Caption":"Использование адреса",
      "Description":"Использование адреса",
      "MultiplicityFrom":0,
      "MultiplicityTo":1,
      "Attributes":{
         "ClassifierLink":{
            "ConfigId":"ClassifierStorage",
            "ConfigVersion":"1.0.0.0",
            "ClassifierId":"1.2.643.5.1.13.2.1.1.229"
         }
      }
   }
] 
```

 

#### Пример данных:

 

```
{
   "Country":{
      "Code":"504",
      "CodeSystem":"1.2.643.5.1.13.2.1.1.63",
      "CodeSystemName":"Общероссийский классификатор стран мира",
      "DisplayName":"Российская Федерация"
   },
   "Region":{
      "Code":"203900000000",
      "CodeSystem":"1.2.643.5.1.13.2.1.1.196",
      "CodeSystemName":"Классификатор адресов России",
      "DisplayName":"Новосибирская область"
   },
   "City":{
      "Code":"2206000000000",
      "CodeSystem":"1.2.643.5.1.13.2.1.1.196",
      "CodeSystemName":"Классификатор адресов России",
      "DisplayName":"Новосибирск"
   },
   "AddressLine":"9, Лескова ул., Новосибирск, Новосибирская область, Российская Федерация, 630008",
   "Street":{
      "Code":"2501500000000",
      "CodeSystem":"1.2.643.5.1.13.2.1.1.196",
      "CodeSystemName":"Классификатор адресов России",
      "DisplayName":"Лескова ул."
   },
   "House":"69",
   "Apartment":"9",
   "PostalCode":"630008",
   "Direction":"55.022155,82.950660",
   "Type":{
      "Code":"1",
      "CodeSystem":"1.2.643.5.1.13.2.1.1.229",
      "CodeSystemName":"Классификатор адресов государственной регистрации юридического лица",
      "DisplayName":"Юридический"
   }
}
```

