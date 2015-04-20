---
layout: default
title: Модель данных медицинского работника
position: 
categories: 
tags: 
---

Представляет описание медицинского работника. 

Уникальная идентификация медицинских работников осуществляется по СНИЛС. По этому критерию в системе осуществляется проверка на дубликаты.

#### Структура данных:

|Наименование|Тип данных|Заголовок|Описание|Множественность|
|Id|[[Uuid|Типы данных]]|Уникальный идентификатор медицинского работника|Уникальный идентификатор медицинского работника|[1..1]|
|OrganizationId|[[Uuid|Типы данных]]Элемент справочника 1.2.643.5.1.13.2.1.1.178|Идентификатор организации|Публичный уникальный идентификатор организации медицинского работника|[1..1]|
|UniqueNumber|[[String|Типы данных]] |Уникальный номер медицинского работника|Уникальный номер медицинского работника|[1..1]|
|LastName|[[String|Типы данных]] |Фамилия|Фамилия|[1..1]|
|FirstName|[[String|Типы данных]] |Имя|Имя|[1..1]|
|MiddleName|[[String|Типы данных]] |Отчество|Отчество|[1..1]|
|EmployeeCode|[[String|Типы данных]] |Табельный номер медицинского работника|Табельный номер медицинского работника|[1..1]|
|EmploymentDate|[[DateTime|Типы данных]]  |Дата трудоустройства медицинского работника|Дата трудоустройства медицинского работника|[1..1]|
|DismissalDate|[[DateTime|Типы данных]]  |Дата увольнения медицинского работника|Дата увольнения медицинского работника|[0..1]|
|Specialities|Элемент справочника 1.2.643.5.1.13.2.1.1.181|Специальности|Список специальностей медицинского работника|[1..*]|
|Posts|Элемент справочника 1.2.643.5.1.13.2.1.1.607|Список должностей медицинского работника|Список должностей медицинского работника|[1..*]|
|IdentityCards|Сложный тип:[[IdentityCard]]|Список удостоверений личности медицинского работника|Желательно, чтобы было указано, как минимум, одно удостоверение личности|[1..*]|
|Addresses|Сложный тип: [[Address]]|Список адресов медицинского работника|Должен быть указан, как минимум, один адрес|[0..*]|
|Phones|Сложный тип: [[ContactInformation]]|Список телефонов медицинского работника|Должен быть указан, как минимум, один телефон|[0..*]|
|Emails|Сложный тип: [[ContactInformation]] |Список электронных почтовых адресов (email) медицинского работника|Может быть указан, например, рабочий электронный почтовый адрес (email)|[0..*]|
|Faxes|Сложный тип: [[ContactInformation]] |Факсы медицинского работника|Факсы медицинского работника|[0..*]|
|Requisites|Сложный тип: [[Requisite]]|Список реквизитов медицинского работника|Обязательно должен быть указан СНИЛС|[1..*]|

 

#### JSON-модель:

 

```
{
	"Id": "35a15f36-e1a5-4f63-93f6-880a33eb093d",
	"Name": "Сведения о медицинском работнике",
	"Type": "Document",
	"Description": "Представляет описание сведений о медицинском работнике",
	"Model": {
		"Name": "MedicalWorkerDataModel",
		"Caption": "Сведения о пациенте",
		"Description": "Сведения о пациенте",
		"MultiplicityFrom": 1,
		"MultiplicityTo": 1,
		"Groups": [{
			"Name": "MedicalWorker",
			"Caption": "Данные о медицинском работнике",
			"Description": "Данные о медицинском работнике",
			"MultiplicityFrom": 1,
			"MultiplicityTo": 1,			
			"Properties": [{
				"Type": "Uuid",
				"Name": "Id",
				"Caption": "Уникальный идентификатор медицинского работника",
				"Description": "Уникальный идентификатор медицинского работника",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1				
			},
			{
				"Type": "Uuid",
				"Name": "OrganizationId",
				"Caption": "Идентификатор организации",
				"Description": "Публичный уникальный идентификатор организации медицинского работника",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},			
			{
				"Type": "String",
				"Name": "UniqueNumber",
				"Caption": "Уникальный номер медицинского работника",
				"Description": "Уникальный номер медицинского работника",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},			
            {
              "Type": "String",
              "Name": "LastName",
              "Caption": "Фамилия",
              "Description": "Фамилия",
              "MultiplicityFrom": 1,
              "MultiplicityTo": 1
            },
            {
              "Type": "String",
              "Name": "FirstName",
              "Caption": "Имя",
              "Description": "Имя",
              "MultiplicityFrom": 1,
              "MultiplicityTo": 1
            },
            {
              "Type": "String",
              "Name": "MiddleName",
              "Caption": "Отчество",
              "Description": "Отчество",
              "MultiplicityFrom": 1,
              "MultiplicityTo": 1
            },
			{
				"Type": "String",
				"Name": "EmployeeCode",
				"Caption": "Табельный номер медицинского работника",
				"Description": "Табельный номер медицинского работника",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},	
			{
				"Type": "DateTime",
				"Name": "EmploymentDate",
				"Caption": "Дата трудоустройства медицинского работника",
				"Description": "Дата трудоустройства медицинского работника",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},
			{
				"Type": "DateTime",
				"Name": "DismissalDate",
				"Caption": "Дата увольнения медицинского работника",
				"Description": "Дата увольнения медицинского работника",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1
			},
			{
			    "Type": "LinkClassifier",
			    "Name": "Specialities",
			    "Caption": "Специальности",
			    "Description": "Список специальностей медицинского работника",
			    "MultiplicityFrom": 1,
			    "MultiplicityTo": null,
			    "Attributes": {
			        "ClassifierLink": {
			            "ConfigId": "ClassifierStorage",
			            "ConfigVersion": "1.0.0.0",
			            "ClassifierId": "1.2.643.5.1.13.2.1.1.181"
			        }
			    }
			},
			{
			    "Type": "LinkClassifier",
			    "Name": "Posts",
			    "Caption": "Список должностей медицинского работника",
			    "Description": "Список должностей медицинского работника",
			    "MultiplicityFrom": 1,
			    "MultiplicityTo": null,
			    "Attributes": {
			        "ClassifierLink": {
			            "ConfigId": "ClassifierStorage",
			            "ConfigVersion": "1.0.0.0",
			            "ClassifierId": "1.2.643.5.1.13.2.1.1.607"
			        }
			    }
			},
			{
				"Type": "ComplexType",
				"Name": "IdentityCards",
				"Caption": "Список удостоверений личности медицинского работника",
				"Description": "Желательно, чтобы было указано, как минимум, одно удостоверение личности",
				"MultiplicityFrom": 1,
				"MultiplicityTo": null,
				"Attributes": {
					"ComplexTypeLink": {
						"ConfigId": "FederalIntegration",
						"ConfigVersion": "1.0.0.0",
						"ObjectMetadataId": "IdentityCard"
					}
				}
			},			
			{
				"Type": "ComplexType",
				"Name": "Addresses",
				"Caption": "Список адресов медицинского работника",
				"Description": "Должен быть указан, как минимум, один адрес",
				"MultiplicityFrom": 0,
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
				"Caption": "Список телефонов медицинского работника",
				"Description": "Должен быть указан, как минимум, один телефон",
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
				"Name": "Emails",
				"Caption": "Список электронных почтовых адресов (email) медицинского работника",
				"Description": "Может быть указан, например, рабочий электронный почтовый адрес (email)",
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
				"Name": "Faxes",
				"Caption": "Факсы медицинского работника",
				"Description": "Факсы медицинского работника",
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
				"Caption": "Список реквизитов медицинского работника",
				"Description": "Обязательно должен быть указан СНИЛС",
				"MultiplicityFrom": 1,
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
  "MedicalWorker": {
    "Id": "969e9694-f111-4b20-8eb0-20d79a8eb13e",
    "OrganizationId": "d12ad558-ac1d-4d62-a314-b1c0860fa19e",
    "UniqueNumber": "23456",
    "LastName": "Петров",
    "FirstName": "Сидор",
    "MiddleName": "Иванович",
    "EmployeeCode": "Значение",
    "EmploymentDate": "21.03.2014",
    "DismissalDate": "21.03.2014",
    "Specialities": [
      {
        "Code": "248",
        "CodeSystem": "1.2.643.5.1.13.2.1.1.181",
        "CodeSystemName": "Номенклатура специальностей специалистов с высшим и послевузовским медицинским и фармацевтическим образованием в сфере здравоохранения",
        "DisplayName": "Рентгенэндоваскулярные диагностика и лечение"
      },
      {
        "Code": "110",
        "CodeSystem": "1.2.643.5.1.13.2.1.1.181",
        "CodeSystemName": "Номенклатура специальностей специалистов с высшим и послевузовским медицинским и фармацевтическим образованием в сфере здравоохранения",
        "DisplayName": "Авиационная и космическая медицина"
      }
    ],
    "Posts": [
      {
        "Code": "160",
        "CodeSystem": "1.2.643.5.1.13.2.1.1.607",
        "CodeSystemName": "Номенклатура должностей медицинских работников и фармацевтических работников",
        "DisplayName": "сестра-хозяйка"
      },
      {
        "Code": "22",
        "CodeSystem": "1.2.643.5.1.13.2.1.1.607",
        "CodeSystemName": "Номенклатура должностей медицинских работников и фармацевтических работников",
        "DisplayName": "врач - лабораторный миколог"
      }
    ],
    "IdentityCards": [
      {
        "Type": {
          "Code": "3",
          "CodeSystem": "1.2.643.5.1.13.2.7.1.62",
          "CodeSystemName": "Тип внешнего идентификатора",
          "DisplayName": "Страховой номер индивидуального лицевого счёта"
        },
        "TypeTranslation": {
          "Code": "23",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.498",
          "CodeSystemName": "Классификатор документов, удостоверяющих личность гражданина Российской Федерации",
          "DisplayName": "Удостоверение личности военнослужащего РФ"
        },
        "Series": "1234",
        "Number": "23456",
        "IssueDate": "21.03.2014",
        "ExpiryDate": "21.03.2014",
        "Issuer": "ЗАО Фирма"
      },
      {
        "Type": {
          "Code": "2",
          "CodeSystem": "1.2.643.5.1.13.2.7.1.62",
          "CodeSystemName": "Тип внешнего идентификатора",
          "DisplayName": "Полис добровольного медицинского страхования"
        },
        "TypeTranslation": {
          "Code": "22",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.498",
          "CodeSystemName": "Классификатор документов, удостоверяющих личность гражданина Российской Федерации",
          "DisplayName": "Свидетельство о предоставлении временного убежища на территории РФ"
        },
        "Series": "1234",
        "Number": "23456",
        "IssueDate": "21.03.2014",
        "ExpiryDate": "21.03.2014",
        "Issuer": "ЗАО Фирма"
      }
    ],
    "Addresses": [
      {
        "Country": {
          "Code": "376",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.63",
          "CodeSystemName": "Общероссийский классификатор стран мира",
          "DisplayName": "ИЗРАИЛЬ Государство Израиль"
        },
        "Region": {
          "Code": "4600000000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Курская"
        },
        "City": {
          "Code": "1601100000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Атнинский"
        },
        "AddressLine": "Россия, Челябинская обл., г. Челябинск",
        "Street": {
          "Code": "200500000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Аургазинский"
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
      },
      {
        "Country": {
          "Code": "458",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.63",
          "CodeSystemName": "Общероссийский классификатор стран мира",
          "DisplayName": "МАЛАЙЗИЯ"
        },
        "Region": {
          "Code": "1601100000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Атнинский"
        },
        "City": {
          "Code": "200100000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Уфимский"
        },
        "AddressLine": "Россия, Челябинская обл., г. Челябинск",
        "Street": {
          "Code": "400600000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Улаганский"
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
          "Code": "1",
          "CodeSystem": "1.2.643.5.1.13.2.7.1.62",
          "CodeSystemName": "Тип внешнего идентификатора",
          "DisplayName": "Полис обязательного медицинского страхования "
        },
        "Value": "23456",
        "IssueDate": "21.03.2014",
        "ExpiryDate": "21.03.2014",
        "Issuer": "ЗАО Фирма",
        "InsuredTerritory": {
          "Code": "1801600000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Красногорский"
        }
      },
      {
        "Type": {
          "Code": "2",
          "CodeSystem": "1.2.643.5.1.13.2.7.1.62",
          "CodeSystemName": "Тип внешнего идентификатора",
          "DisplayName": "Полис добровольного медицинского страхования"
        },
        "Value": "23456",
        "IssueDate": "21.03.2014",
        "ExpiryDate": "21.03.2014",
        "Issuer": "ЗАО Фирма",
        "InsuredTerritory": {
          "Code": "400600000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Улаганский"
        }
      }
    ]
  }
}
```

 

 

