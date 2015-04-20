---
layout: default
title: Модель данных медицинской организации
position: 
categories: 
tags: 
---

Представляет описание медицинской организации.

#### Структура данных:

|### Наименование

|### Тип данных

|### Заголовок

|### Описание

|### Множественность

|
|Id|[[Uuid|Типы данных]]|Уникальный идентификатор организации|Необходимо, чтобы уникальный идентификатор организации был всегда одним и тем же для регистрируемого учреждения вне зависимости от того, сколько раз это учреждение было зарегистрировано в системе интеграции|[1..1]|
|PublicId|[[Uuid|Типы данных]]Элемент справочника 1.2.643.5.1.13.2.1.1.178|Публичный уникальный идентификатор организации|Публичный уникальный идентификатор предназначен для поиска организации|[1..1]|
|Token|[[String|Типы данных]] |Маркер безопасности организации|Каждой организации при регистрации выдается маркер безопасности, который может использоваться для доступа к другим сервисам системы интеграции|[1..1]|
|RegisterCode|[[String|Типы данных]] |Код учреждения в реестре Минздрава РФ|Код учреждения в реестре Минздрава РФ|[1..1]|
|Url|[[String|Типы данных]] |Абсолютный URL REST-сервиса организации|Абсолютный URL REST-сервиса организации для доступа к ее публичным документам|[1..1]|
|Code|[[String|Типы данных]] |Код организации|Код организации|[1..1]|
|FullName|[[String|Типы данных]] |Полное наименование организации|Полное наименование организации|[1..1]|
|ShortName|[[String|Типы данных]] |Краткое наименование организации|Краткое наименование организации|[1..1]|
|Website|[[String|Типы данных]] |Web-сайт организации|Web-сайт организации|[0..1]|
|Addresses|Сложный тип: [[Address]]|Список адресов организации|Должен быть указан, как минимум, один адрес|[1..*]|
|Phones|Сложный тип: [[ContactInformation]] |Список телефонов организации|Должен быть указан, как минимум, один телефон|[1..*]|
|Emails|Сложный тип: [[ContactInformation]] |Список электронных почтовых адресов (email) организации|Должен быть указан, как минимум, один электронный почтовый адрес (email)|[1..*]|
|Faxes|Сложный тип: [[ContactInformation]] |Факсы организации|Факсы организации|[0..*]|
|Requisites|Сложный тип: [[Requisite]]|Список реквизитов организации|ИНН|[0..*]|

 

#### JSON-модель:

 

```
{
	"Id": "e2d61014-03a9-4bdb-95c3-faf3a8e0e013",
	"Name": "Информацию об организации",
	"Type": "Document",
	"Description": "Представляет информацию об организации",
	"Model": {
		"Name": "OrganizationDataModel",
		"Caption": "Сведения о медицинской организации",
		"Description": "Сведения о медицинской организации",
		"MultiplicityFrom": 1,
		"MultiplicityTo": 1,
		"Groups": [{
			"Name": "Organization",
			"Caption": "Данные о медицинской организации",
			"Description": "Данные о медицинской организации",
			"MultiplicityFrom": 1,
			"MultiplicityTo": 1,			
			"Properties": [{
				"Type": "Uuid",
				"Name": "Id",
				"Caption": "Уникальный идентификатор организации",
				"Description": "Необходимо, чтобы уникальный идентификатор организации был всегда одним и тем же для регистрируемого учреждения вне зависимости от того, сколько раз это учреждение было зарегистрировано в системе интеграции",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1				
			},
			{
				"Type": "Uuid",
				"Name": "PublicId",
				"Caption": "Публичный уникальный идентификатор организации",
				"Description": "Публичный уникальный идентификатор предназначен для поиска организации",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},			
			{
				"Type": "String",
				"Name": "Token",
				"Caption": "Маркер безопасности организации",
				"Description": "Каждой организации при регистрации выдается маркер безопасности, который может использоваться для доступа к другим сервисам системы интеграции",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},		
			{
				"Type": "String",
				"Name": "RegisterCode",
				"Caption": "Код учреждения в реестре Минздрава РФ",
				"Description": "Код учреждения в реестре Минздрава РФ",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},	
			{
				"Type": "String",
				"Name": "Url",
				"Caption": "Абсолютный URL REST-сервиса организации",
				"Description": "Абсолютный URL REST-сервиса организации для доступа к ее публичным документам",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},	
			{
				"Type": "String",
				"Name": "Code",
				"Caption": "Код организации",
				"Description": "Код организации",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},
			{
				"Type": "String",
				"Name": "FullName",
				"Caption": "Полное наименование организации",
				"Description": "Полное наименование организации",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},
			{
				"Type": "String",
				"Name": "ShortName",
				"Caption": "Краткое наименование организации",
				"Description": "Краткое наименование организации",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},
			{
				"Type": "String",
				"Name": "Website",
				"Caption": "Web-сайт организации",
				"Description": "Web-сайт организации",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1
			},
			{
				"Type": "ComplexType",
				"Name": "Addresses",
				"Caption": "Список адресов организации",
				"Description": "Должен быть указан, как минимум, один адрес",
				"MultiplicityFrom": 1,
				"MultiplicityTo": null,
				"Attributes": {
					"ComplexTypeLink": {
						"ConfigId": "FederalIntegration",
						"ConfigVersion": "1.0.0.0",
						"ObjectMetadataId": "Address"
					}
				}
			},
			{
				"Type": "ComplexType",
				"Name": "Phones",
				"Caption": "Список телефонов организации",
				"Description": "Должен быть указан, как минимум, один телефон",
				"MultiplicityFrom": 1,
				"MultiplicityTo": null,
				"Attributes": {
					"ComplexTypeLink": {
						"ConfigId": "FederalIntegration",
						"ConfigVersion": "1.0.0.0",
						"ObjectMetadataId": "ContactInformation"
					}
				}
			},
			{
				"Type": "ComplexType",
				"Name": "Emails",
				"Caption": "Список электронных почтовых адресов (email) организации",
				"Description": "Должен быть указан, как минимум, один электронный почтовый адрес (email)",
				"MultiplicityFrom": 1,
				"MultiplicityTo": null,
				"Attributes": {
					"ComplexTypeLink": {
						"ConfigId": "FederalIntegration",
						"ConfigVersion": "1.0.0.0",
						"ObjectMetadataId": "ContactInformation"
					}
				}
			},
			{
				"Type": "ComplexType",
				"Name": "Faxes",
				"Caption": "Факсы организации",
				"Description": "Факсы организации",
				"MultiplicityFrom": 0,
				"MultiplicityTo": null,
				"Attributes": {
					"ComplexTypeLink": {
						"ConfigId": "FederalIntegration",
						"ConfigVersion": "1.0.0.0",
						"ObjectMetadataId": "ContactInformation"
					}
				}
			},
			{
				"Type": "ComplexType",
				"Name": "Requisites",
				"Caption": "Список реквизитов организации",
				"Description": "Обязательно должны быть указаны ИНН и КПП",
				"MultiplicityFrom": 2,
				"MultiplicityTo": null,
				"Attributes": {
					"ComplexTypeLink": {
						"ConfigId": "FederalIntegration",
						"ConfigVersion": "1.0.0.0",
						"ObjectMetadataId": "Requisite"
					}
				}
			}		
			]
		}]
	}
}
```

 

 

#### Пример данных:

```
{
  "Organization": {
    "Id": "a061cfbf-c4e5-4145-84ec-2d7b6fa1c01f",
    "PublicId": "93925817-2925-4c53-a78d-c445acf4ce5e",
    "Token": "Значение",
    "RegisterCode": "Значение",
    "Url": "dkb.ru",
    "Code": "2222",
    "FullName": "Дорожная больница",
    "ShortName": "Больница",
    "Website": "dkb.ru",
    "Addresses": [
      {
        "Country": {
          "Code": "250",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.63",
          "CodeSystemName": "Общероссийский классификатор стран мира",
          "DisplayName": "ФРАНЦИЯ Французская Республика"
        },
        "Region": {
          "Code": "6901200000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Кашинский"
        },
        "City": {
          "Code": "205100000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Шаранский"
        },
        "AddressLine": "Россия, Челябинская обл., г. Челябинск",
        "Street": {
          "Code": "6901200000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Кашинский"
        },
        "House": "34",
        "Apartment": "444",
        "PostalCode": "454178",
        "Direction": "55.022155,82.950660",
        "Type": {
          "Code": "2",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.229",
          "CodeSystemName": "Классификатор адресов государственной регистрации юридического лица",
          "DisplayName": "Фактический"
        }
      },
      {
        "Country": {
          "Code": "100",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.63",
          "CodeSystemName": "Общероссийский классификатор стран мира",
          "DisplayName": "БОЛГАРИЯ Республика Болгария"
        },
        "Region": {
          "Code": "1600300000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Азнакаевский"
        },
        "City": {
          "Code": "2204800000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Тальменский"
        },
        "AddressLine": "Россия, Челябинская обл., г. Челябинск",
        "Street": {
          "Code": "6802300000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Уваровский"
        },
        "House": "34",
        "Apartment": "444",
        "PostalCode": "454178",
        "Direction": "55.022155,82.950660",
        "Type": {
          "Code": "1",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.229",
          "CodeSystemName": "Классификатор адресов государственной регистрации юридического лица",
          "DisplayName": "Юридический"
        }
      }
    ],
    "Phones": [{
  		"Name": "Регистратура",
		"Value": "+7-987-456-123"
		}   
    ],
    "Emails": [
      {
		"Name": "Общий",
		"Value": "info@oblhosp.volgograd.ru"
	  }           
    ], 
    "Requisites": [
      {
        "Type": {
          "Code": "10",
          "CodeSystem": "1.2.643.5.1.13.2.7.1.62",
          "CodeSystemName": "Тип внешнего идентификатора",
          "DisplayName": "Номер карты пациента в МО"
        },
        "Value": "23456",
        "IssueDate": "21.03.2014",
        "ExpiryDate": "21.03.2014",
        "Issuer": "ЗАО Фирма",
        "InsuredTerritory": {
          "Code": "1101900000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Усть-Цилемский"
        }
      },
      {
        "Type": {
          "Code": "6",
          "CodeSystem": "1.2.643.5.1.13.2.7.1.62",
          "CodeSystemName": "Тип внешнего идентификатора",
          "DisplayName": "Основной государственный регистрационный номер"
        },
        "Value": "23456",
        "IssueDate": "21.03.2014",
        "ExpiryDate": "21.03.2014",
        "Issuer": "ЗАО Фирма",
        "InsuredTerritory": {
          "Code": "2200200000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Алейский"
        }
      }
    ]
  }
}
```

 

 

