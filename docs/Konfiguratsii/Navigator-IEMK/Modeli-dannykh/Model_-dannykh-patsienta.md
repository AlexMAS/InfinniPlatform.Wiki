---
layout: default
title: "Модель данных пациента"
position: 
categories: 
tags: 
---

Представляет описание сведений о пациенте.

Уникальная идентификация пациентов осуществляется по СНИЛС. По этому критерию в системе осуществляется проверка на дубликаты.

#### Структура данных:

|### Наименование

|### Тип данных

|### Заголовок

|### Описание

|### Множественность

|
|Id|[[Uuid|Типы данных]]|Код пациента|Уникальный идентификатор пациента|[1..1]|
|OrganizationId|[[Uuid|Типы данных]]Элемент справочника 1.2.643.5.1.13.2.1.1.178|Идентификатор организации|Публичный уникальный идентификатор организации, которая предоставила сведения о пациенте|[1..1]|
|UniqueNumber|[[String|Типы данных]]|Уникальный номер пациента|Уникальный номер пациента|[1..1]|
|Confidentiality|Элемент справочника 2.16.840.1.113883.5.25|Уровень конфиденциальности|Уровень конфиденциальности сведений о пациенте|[1..1]|
|LastName|[[String|Типы данных]]|Фамилия|Фамилия|[1..1]|
|FirstName|[[String|Типы данных]]|Имя|Имя|[1..1]|
|MiddleName|[[String|Типы данных]]|Отчество|Отчество|[1..1]|
|Birthplace|Сложный тип: [[Address]]|Место рождения|Место рождения|[0..1]|
|BirthTime|[[DateTime|Типы данных]] |Дата рождения|Дата рождения|[1..1]|
|IsDeceased|[[Bool|Типы данных]]  |Признак того, что пациент умер|Указывается, если пациент умер, так как дата смерти может быть не известна|[0..1]|
|DeceasedTime|[[DateTime|Типы данных]] |Дата и время смерти пациента|Дата и время смерти пациента|[0..1]|
|Sex|Элемент справочника 1.2.643.5.1.13.2.1.1.156|Пол пациента|Пол пациента|[1..1]|
|IdentityCards|Сложный тип:[[IdentityCard]]|Список удостоверений личности пациента|Желательно, чтобы было указано, как минимум, одно удостоверение личности|[0..*]|
|Policies|Сложный тип: [[Policie]]|Список страховых медицинских полисов|Желательно, чтобы список содержал сведения о полисе ОМС (если допустимо)|[0..*]|
|Addresses|Сложный тип:  [[Address]]|Список адресов пациента|Желательно, чтобы список содержал адрес регистрации, фактический или рабочий адрес|[0..*]|
|Phones|Сложный тип:  [[ContactInformation]]|Список телефонов пациента|Желательно, чтобы список содержал прямой домашний или мобильный номер телефона|[0..*]|
|Emails|Сложный тип:  [[ContactInformation]] |Список электронных почтовых адресов (email) пациента|Может быть указан, например, с целью отправки результатов анализов|[0..*]|
|Faxes|Сложный тип:  [[ContactInformation]] |Факсы пациента|Факсы пациента|[0..*]|
|Requisites|Сложный тип:[[Requisite]]|Другие идентификаторы пациента|Другие идентификаторы пациента (например, СНИЛС или ИНН)|[1..*]|
|Relationships|Сложный тип: [[Relationship]]|Список личных отношений пациента|Опекуна/попечитель|[0..*]|
|Importance|Элемент справочника 1.2.643.5.1.13.2.1.1.149|Категория льготности пациента|Категория льготности пациента|[0..1]|
|MaritalStatus|Элемент справочника 1.2.643.5.1.13.2.1.1.215|Семейное положение пациента|Семейное положение пациента|[0..1]|
|Citizenship|Элемент справочника 1.2.643.5.1.13.2.1.1.63|Гражданство пациента|Гражданство пациента|[0..1]|
|Language|[[String|Типы данных]]|Родной язык общения пациента|Родной язык общения пациента|[0..1]|
|ResidenceType|Элемент справочника 1.2.643.5.1.13.2.1.1.573|Тип места жительства|Тип места жительства|[1..1]|
|SocialStatus|Элемент справочника 1.2.643.5.1.13.2.1.1.366|Группа, к которой относится пациент|Группа, к которой относится пациент|[1..1]|
|JobCode|Элемент справочника 1.2.643.5.1.13.2.1.1.62|Название отрасли|Название отрасли|[0..1]|
|JobTitleName|[[String|Типы данных]]|Должность|Должность|[0..1]|
|OrganizationName|[[String|Типы данных]]|Название предприятия|Название предприятия|[0..1]|
|**Summary**|**Group**|**Сведения о пациенте медицинского характера**|**Содержание группы в настоящий момент полностью не определено. Предположительно, сюда должны входить данные, соответствующие профилю CDA 1.2.643.5.1.13.2.7.5.2.17 "Анамнез жизни".**|**[0..1]**|
|.../IsMultipleBirth|[[Bool|Типы данных]]  |Индикатор многоплодных родов|Указывается true, если ребенок родился в результате многоплодных родов|[0..1]|
|.../MultipleBirthOrderNumber|[[Integer|Типы данных]]  |Порядковый номер рождения ребёнка при многоплодных родах|Должен больше или равен 1, если ребенок родился в результате многоплодных родов|[0..1]|
|**Privilege**|**Group**|**Категория льготности**|**Категория льготности**|**[0..1]**|
|.../IssueDate|[[DateTime|Типы данных]] |Дата и время начала дейстия льготы|Дата и время начала дейстия льготы|[1..1]|
|.../ExpiryDate|[[DateTime|Типы данных]] |Дата и время окончания дейстия льготы|Дата и время окончания дейстия льготы|[1..1]|
|.../Group|Элемент справочника 1.2.643.5.1.13.2.1.1.358|Категория льготности|Группа, к которой относится пациент|[0..1]|

 

#### JSON-модель:

 

```
{
	"Id": "d96cb046-f1a5-4298-ad9b-408a8f47c82d",
	"Name": "Сведения о пациенте",
	"Type": "Document",
	"Description": "Сведения о пациенте",
	"Model": {
		"Name": "PatientDataModel",
		"Caption": "Сведения о пациенте",
		"Description": "Сведения о пациенте",
		"MultiplicityFrom": 1,
		"MultiplicityTo": 1,
		"Groups": [{
			"Name": "Patient",
			"Caption": "Данные о пациенте",
			"Description": "Данные о пациенте",
			"MultiplicityFrom": 1,
			"MultiplicityTo": 1,	
			"Groups":[{
				"Name": "Summary",
				"Caption": "Сведения о пациенте медицинского характера",
				"Description": "Сведения о пациенте медицинского характера",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1,	
				"Properties": [
				{
					"Type": "Bool",
					"Name": "IsMultipleBirth",
					"Caption": "Индикатор многоплодных родов",
					"Description": "Указывается true, если ребенок родился в результате многоплодных родов",
					"MultiplicityFrom": 0,
					"MultiplicityTo": 1				
				},
				{
					"Type": "Integer",
					"Name": "MultipleBirthOrderNumber",
					"Caption": "Порядковый номер рождения ребёнка при многоплодных родах",
					"Description": "Должен больше или равен 1, если ребенок родился в результате многоплодных родов",
					"MultiplicityFrom": 0,
					"MultiplicityTo": 1				
				}
			]},
			{
				"Name": "Privilege",
				"Caption": "Категория льготности",
				"Description": "Категория льготности",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1,	
				"Properties": [
				{
				    "Type": "DateTime",
				    "Name": "IssueDate",
				    "Caption": "Дата и время начала дейстия льготы",
				    "Description": "Дата и время начала дейстия льготы",
				    "MultiplicityFrom": 1,
				    "MultiplicityTo": 1
				},
				{
				    "Type": "DateTime",
				    "Name": "ExpiryDate",
				    "Caption": "Дата и время окончания дейстия льготы",
				    "Description": "Дата и время окончания дейстия льготы",
				    "MultiplicityFrom": 1,
				    "MultiplicityTo": 1
				},
				{
					"Type": "LinkClassifier",
					"Name": "Group",
					"Caption": "Категория льготности",
					"Description": "Группа, к которой относится пациент",
					"MultiplicityFrom": 0,
					"MultiplicityTo": 1,
					"Attributes": {
						"ClassifierLink": {
							"ConfigId": "ClassifierStorage",
							"ConfigVersion": "1.0.0.0",
							"ClassifierId": "1.2.643.5.1.13.2.1.1.358"
						}
					}
				}		
			]}
			],		
			"Properties": [{
				"Type": "Uuid",
				"Name": "Id",
				"Caption": "Код пациента",
				"Description": "Уникальный идентификатор пациента",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1				
			},
			{
				"Type": "Uuid",
				"Name": "OrganizationId",
				"Caption": "Идентификатор организации",
				"Description": "Публичный уникальный идентификатор организации, которая предоставила сведения о пациенте",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},
			{
				"Type": "Uuid",
				"Name": "RelatedOrganizationId",
				"Caption": "Идентификатор прикрепленной организации",
				"Description": "Публичный уникальный идентификатор организации, к которой прикреплен пациент",
				"MultiplicityFrom": 0,
				"MultiplicityTo": null
			},
			{
				"Type": "String",
				"Name": "UniqueNumber",
				"Caption": "Уникальный номер пациента",
				"Description": "Уникальный номер пациента",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},
			{
                "Type": "LinkClassifier",
                "Name": "Confidentiality",
                "Caption": "Уровень конфиденциальности",
                "Description": "Уровень конфиденциальности сведений о пациенте",
                "MultiplicityFrom": 1,
                "MultiplicityTo": 1,
                "Attributes": {
                    "ClassifierLink": {
                        "ConfigId": "ClassifierStorage",
                        "ConfigVersion": "1.0.0.0",
                        "ClassifierId": "2.16.840.1.113883.5.25"
                    }
                }
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
				"Type": "ComplexType",
				"Name": "Birthplace",
				"Caption": "Место рождения",
				"Description": "Место рождения",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1,
				"Attributes": {
					"ComplexTypeLink": {
						"ConfigId": "FederalIntegration",
						"ConfigVersion": "1.0.0.0",
						"ObjectMetadataId": "Address"
					}
				}
			},
			{
				"Type": "DateTime",
				"Name": "BirthTime",
				"Caption": "Дата рождения",
				"Description": "Дата рождения",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1
			},
			{
				"Type": "Bool",
				"Name": "IsDeceased",
				"Caption": "Признак того, что пациент умер",
				"Description": "Указывается, если пациент умер, так как дата смерти может быть не известна",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1
			},
			{
				"Type": "DateTime",
				"Name": "DeceasedTime",
				"Caption": "Дата и время смерти пациента",
				"Description": "Дата и время смерти пациента",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1
			},
			{
				"Type": "LinkClassifier",
				"Name": "Sex",
				"Caption": "Пол пациента",
				"Description": "Пол пациента",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1,
				"Attributes": {
					"ClassifierLink": {
						"ConfigId": "ClassifierStorage",
						"ConfigVersion": "1.0.0.0",
						"ClassifierId": "1.2.643.5.1.13.2.1.1.156"
					}
				}
			},
			{
				"Type": "ComplexType",
				"Name": "IdentityCards",
				"Caption": "Список удостоверений личности пациента",
				"Description": "Желательно, чтобы было указано, как минимум, одно удостоверение личности",
				"MultiplicityFrom": 0,
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
				"Name": "Policies",
				"Caption": "Список страховых медицинских полисов",
				"Description": "Желательно, чтобы список содержал сведения о полисе ОМС (если допустимо)",
				"MultiplicityFrom": 0,
				"MultiplicityTo": null,
				"Attributes": {
					"ComplexTypeLink": {
						"ConfigId": "FederalIntegration",
						"ConfigVersion": "1.0.0.0",
						"ObjectMetadataId": "Policie"
					}
				}
			},
			{
				"Type": "ComplexType",
				"Name": "Addresses",
				"Caption": "Список адресов пациента",
				"Description": "Желательно, чтобы список содержал адрес регистрации, фактический или рабочий адрес",
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
				"Caption": "Список телефонов пациента",
				"Description": "Желательно, чтобы список содержал прямой домашний или мобильный номер телефона",
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
				"Caption": "Список электронных почтовых адресов (email) пациента",
				"Description": "Может быть указан, например, с целью отправки результатов анализов",
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
				"Caption": "Факсы пациента",
				"Description": "Факсы пациента",
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
				"Caption": "Другие идентификаторы пациента",
				"Description": "Другие идентификаторы пациента (например, СНИЛС или ИНН)",
				"MultiplicityFrom": 1,
				"MultiplicityTo": null,
				"Attributes": {
					"ComplexTypeLink": {
						"ConfigId": "FederalIntegration",
						"ConfigVersion": "1.0.0.0",
						"ObjectMetadataId": "Requisite"
					}
				}
			},
			{
				"Type": "ComplexType",
				"Name": "Relationships",
				"Caption": "Список личных отношений пациента",
				"Description": "Опекуна/попечитель",
				"MultiplicityFrom": 0,
				"MultiplicityTo": null,
				"Attributes": {
					"ComplexTypeLink": {
						"ConfigId": "FederalIntegration",
						"ConfigVersion": "1.0.0.0",
						"ObjectMetadataId": "Relationship"
					}
				}
			},
			{
				"Type": "LinkClassifier",
				"Name": "Importance",
				"Caption": "Категория льготности пациента",
				"Description": "Категория льготности пациента",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1,
				"Attributes": {
					"ClassifierLink": {
						"ConfigId": "ClassifierStorage",
						"ConfigVersion": "1.0.0.0",
						"ClassifierId": "1.2.643.5.1.13.2.1.1.149"
					}
				}
			},
			{
				"Type": "LinkClassifier",
				"Name": "MaritalStatus",
				"Caption": "Семейное положение пациента",
				"Description": "Семейное положение пациента",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1,
				"Attributes": {
					"ClassifierLink": {
						"ConfigId": "ClassifierStorage",
						"ConfigVersion": "1.0.0.0",
						"ClassifierId": "1.2.643.5.1.13.2.1.1.215"
					}
				}
			},
			{
				"Type": "LinkClassifier",
				"Name": "Citizenship",
				"Caption": "Гражданство пациента",
				"Description": "Гражданство пациента",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1,
				"Attributes": {
					"ClassifierLink": {
						"ConfigId": "ClassifierStorage",
						"ConfigVersion": "1.0.0.0",
						"ClassifierId": "1.2.643.5.1.13.2.1.1.63"
					}
				}
			},
			{
				"Type": "String",
				"Name": "Language",
				"Caption": "Родной язык общения пациента",
				"Description": "Родной язык общения пациента",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1
			},
			{
				"Type": "LinkClassifier",
				"Name": "ResidenceType",
				"Caption": "Тип места жительства",
				"Description": "Тип места жительства",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1,
				"Attributes": {
					"ClassifierLink": {
						"ConfigId": "ClassifierStorage",
						"ConfigVersion": "1.0.0.0",
						"ClassifierId": "1.2.643.5.1.13.2.1.1.573"
					}
				}
			},
			{
				"Type": "LinkClassifier",
				"Name": "SocialStatus",
				"Caption": "Группа, к которой относится пациент",
				"Description": "Группа, к которой относится пациент",
				"MultiplicityFrom": 1,
				"MultiplicityTo": 1,
				"Attributes": {
					"ClassifierLink": {
						"ConfigId": "ClassifierStorage",
						"ConfigVersion": "1.0.0.0",
						"ClassifierId": "1.2.643.5.1.13.2.1.1.366"
					}
				}
			},			
			{
				"Type": "LinkClassifier",
				"Name": "JobCode",
				"Caption": "Название отрасли",
				"Description": "Название отрасли",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1,
				"Attributes": {
					"ClassifierLink": {
						"ConfigId": "ClassifierStorage",
						"ConfigVersion": "1.0.0.0",
						"ClassifierId": "1.2.643.5.1.13.2.1.1.62"
					}
				}
			},
			{
				"Type": "String",
				"Name": "JobTitleName",
				"Caption": "Должность",
				"Description": "Должность",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1
			},			
			{
				"Type": "String",
				"Name": "OrganizationName",
				"Caption": "Название предприятия",
				"Description": "Название предприятия",
				"MultiplicityFrom": 0,
				"MultiplicityTo": 1
			}				
			]
		}]
	}
}
```

 

#### Пример данных:

 

```
{
  "Patient": {
    "Summary": {
      "IsMultipleBirth": true,
      "MultipleBirthOrderNumber": 2
    },
    "Privilege": {
      "IssueDate": "21.03.2014",
      "ExpiryDate": "21.03.2014",
      "Group": {
        "Code": "6",
        "CodeSystem": "1.2.643.5.1.13.2.1.1.358",
        "CodeSystemName": "Классификатор категорий льгот",
        "DisplayName": "лица, работавшие в период Великой Отечественной войны на объектах противовоздушной обороны, местной противовоздушной обороны, на строительстве оборонительных сооружений, военно-морских баз, аэродромов и других военных объектов в пределах тыловых границ действующих фронтов, операционных зон действующих флотов, на прифронтовых участках железных и автомобильных дорог, а также члены экипажей судов транспортного флота, интернированных в начале Великой Отечественной войны в портах других государств"
      }
    },
    "Id": "edfc1355-f550-49af-bfdf-7fbb03f6d312",
    "OrganizationId": "b9e9331e-04c5-433f-bbb9-578f6bec8933",
    "RelatedOrganizationId": [
      "28c9ba42-7ef3-4470-a242-63c816b3d1fa",
      "4ccbc8f9-42d1-40bf-b35a-f8e737853632"
    ],
    "UniqueNumber": "23456",
    "Confidentiality": {
      "Code": "HIV",
      "CodeSystem": "2.16.840.1.113883.5.25",
      "CodeSystemName": "Уровень конфиденциальности медицинского документа",
      "DisplayName": "ВИЧ"
    },
    "LastName": "Петров",
    "FirstName": "Сидор",
    "MiddleName": "Иванович",
    "Birthplace": {
      "Country": {
        "Code": "426",
        "CodeSystem": "1.2.643.5.1.13.2.1.1.63",
        "CodeSystemName": "Общероссийский классификатор стран мира",
        "DisplayName": "ЛЕСОТО Королевство Лесото"
      },
      "Region": {
        "Code": "1300500000000",
        "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
        "CodeSystemName": "Классификатор адресов России",
        "DisplayName": "Большеберезниковский"
      },
      "City": {
        "Code": "2200200000000",
        "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
        "CodeSystemName": "Классификатор адресов России",
        "DisplayName": "Алейский"
      },
      "AddressLine": "Россия, Челябинская обл., г. Челябинск",
      "Street": {
        "Code": "1900500000000",
        "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
        "CodeSystemName": "Классификатор адресов России",
        "DisplayName": "Боградский"
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
    "BirthTime": "21.03.2014",
    "IsDeceased": true,
    "DeceasedTime": "21.03.2014",
    "Sex": {
      "Code": "2",
      "CodeSystem": "1.2.643.5.1.13.2.1.1.156",
      "CodeSystemName": "Классификатор половой принадлежности",
      "DisplayName": "Женский"
    },
    "IdentityCards": [
      {
        "Type": {
          "Code": "4",
          "CodeSystem": "1.2.643.5.1.13.2.7.1.62",
          "CodeSystemName": "Тип внешнего идентификатора",
          "DisplayName": "Индивидуальный номер налогоплательщика"
        },
        "TypeTranslation": {
          "Code": "7",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.498",
          "CodeSystemName": "Классификатор документов, удостоверяющих личность гражданина Российской Федерации",
          "DisplayName": "Военный билет"
        },
        "Series": "1234",
        "Number": "23456",
        "IssueDate": "21.03.2014",
        "ExpiryDate": "21.03.2014",
        "Issuer": "ЗАО Фирма"
      },
      {
        "Type": {
          "Code": "9",
          "CodeSystem": "1.2.643.5.1.13.2.7.1.62",
          "CodeSystemName": "Тип внешнего идентификатора",
          "DisplayName": "Локальный идентификатор пациента в МО"
        },
        "TypeTranslation": {
          "Code": "20",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.498",
          "CodeSystemName": "Классификатор документов, удостоверяющих личность гражданина Российской Федерации",
          "DisplayName": "Временное удостоверение, выданное взамен военного билета"
        },
        "Series": "1234",
        "Number": "23456",
        "IssueDate": "21.03.2014",
        "ExpiryDate": "21.03.2014",
        "Issuer": "ЗАО Фирма"
      }
    ],
    "Policies": [
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
        "Issuer": "ЗАО Фирма",
        "IssuerId": {
          "Code": "75001",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.635",
          "CodeSystemName": "Реестр страховых медицинских организаций (ФОМС)",
          "DisplayName": "ГОСУДАРСТВЕННОЕ УНИТАРНОЕ ПРЕДПРИЯТИЕ ЗАБАЙКАЛЬСКОГО КРАЯ \"ГОСУДАРСТВЕННАЯ СТРАХОВАЯ КОМПАНИЯ ЗАБАЙКАЛМЕДСТРАХ\""
        },
        "InsuredTerritory": {
          "Code": "1001500000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Суоярвский"
        }
      },
      {
        "Type": {
          "Code": "1",
          "CodeSystem": "1.2.643.5.1.13.2.7.1.62",
          "CodeSystemName": "Тип внешнего идентификатора",
          "DisplayName": "Полис обязательного медицинского страхования "
        },
        "TypeTranslation": {
          "Code": "19",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.498",
          "CodeSystemName": "Классификатор документов, удостоверяющих личность гражданина Российской Федерации",
          "DisplayName": "Иные документы"
        },
        "Series": "1234",
        "Number": "23456",
        "IssueDate": "21.03.2014",
        "ExpiryDate": "21.03.2014",
        "Issuer": "ЗАО Фирма",
        "IssuerId": {
          "Code": "78004",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.635",
          "CodeSystemName": "Реестр страховых медицинских организаций (ФОМС)",
          "DisplayName": "САНКТ-ПЕТЕРБУРГСКИЙ ФИЛИАЛ ОБЩЕСТВА С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ СТРАХОВАЯ КОМПАНИЯ \"КАПИТАЛ-ПОЛИС МЕДИЦИНА\""
        },
        "InsuredTerritory": {
          "Code": "1701500000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Чаа-Хольский"
        }
      }
    ],
    "Addresses": [
      {
        "Country": {
          "Code": "616",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.63",
          "CodeSystemName": "Общероссийский классификатор стран мира",
          "DisplayName": "ПОЛЬША Республика Польша"
        },
        "Region": {
          "Code": "400600000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Улаганский"
        },
        "City": {
          "Code": "1402500000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Среднеколымский"
        },
        "AddressLine": "Россия, Челябинская обл., г. Челябинск",
        "Street": {
          "Code": "2204100000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Славгородский"
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
          "Code": "508",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.63",
          "CodeSystemName": "Общероссийский классификатор стран мира",
          "DisplayName": "МОЗАМБИК Республика Мозамбик"
        },
        "Region": {
          "Code": "1400900000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Верхнеколымский"
        },
        "City": {
          "Code": "2501900000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Уссурийский"
        },
        "AddressLine": "Россия, Челябинская обл., г. Челябинск",
        "Street": {
          "Code": "2101300000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Моргаушский"
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
      }
    ],
    "Phones": [{
  		"Name": "Домашний",
		"Value": "+79876543210"
		},
		{
		"Name": "Рабочий",
		"Value": "+79031234567"
		}   
    ],
    "Emails": [
      {
		"Name": "Домашний",
		"Value": "viktor.korneev@mail.ru"
	  }           
    ], 
    "Requisites": [
      {
        "Type": {
          "Code": "3",
          "CodeSystem": "1.2.643.5.1.13.2.7.1.62",
          "CodeSystemName": "Тип внешнего идентификатора",
          "DisplayName": "Страховой номер индивидуального лицевого счёта"
        },
        "Value": "23456",
        "IssueDate": "21.03.2014",
        "ExpiryDate": "21.03.2014",
        "Issuer": "ЗАО Фирма",
        "InsuredTerritory": {
          "Code": "200800000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Балтачевский"
        }
      },
      {
        "Type": {
          "Code": "5",
          "CodeSystem": "1.2.643.5.1.13.2.7.1.62",
          "CodeSystemName": "Тип внешнего идентификатора",
          "DisplayName": "Документ, удостоверяющий личность"
        },
        "Value": "23456",
        "IssueDate": "21.03.2014",
        "ExpiryDate": "21.03.2014",
        "Issuer": "ЗАО Фирма",
        "InsuredTerritory": {
          "Code": "1700400000000",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.196",
          "CodeSystemName": "Классификатор адресов России",
          "DisplayName": "Дзун-Хемчикский"
        }
      }
    ],
    "Relationships": [
      {
        "Type": {
          "Code": "3",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.186",
          "CodeSystemName": "Классификатор представителей гражданина",
          "DisplayName": "Опекун ребенка (физ.лицо)"
        },
        "PatientId": "d254ec6d-c2f5-40bc-9d91-f7337792da3f"
      },
      {
        "Type": {
          "Code": "2",
          "CodeSystem": "1.2.643.5.1.13.2.1.1.186",
          "CodeSystemName": "Классификатор представителей гражданина",
          "DisplayName": "Усыновитель"
        },
        "PatientId": "7d67e9c3-cec3-46e6-b278-da28dd33eab0"
      }
    ],
    "Importance": {
      "Code": "11",
      "CodeSystem": "1.2.643.5.1.13.2.1.1.149",
      "CodeSystemName": "Классификатор застрахованных лиц",
      "DisplayName": "Работающие по трудовому договору или по договору гражданско-правового характера, предметом которого являются выполнение работ и оказание услуг"
    },
    "MaritalStatus": {
      "Code": "5",
      "CodeSystem": "1.2.643.5.1.13.2.1.1.215",
      "CodeSystemName": "Классификатор состояний в браке",
      "DisplayName": "Разведен (разведена)"
    },
    "Citizenship": {
      "Code": "724",
      "CodeSystem": "1.2.643.5.1.13.2.1.1.63",
      "CodeSystemName": "Общероссийский классификатор стран мира",
      "DisplayName": "ИСПАНИЯ Королевство Испания"
    },
    "Language": "RU",
    "ResidenceType": {
      "Code": "2",
      "CodeSystem": "1.2.643.5.1.13.2.1.1.573",
      "CodeSystemName": "Классификатор жителя города или села",
      "DisplayName": "Село"
    },
    "SocialStatus": {
      "Code": "8",
      "CodeSystem": "1.2.643.5.1.13.2.1.1.366",
      "CodeSystemName": "Классификатор социальных статусов (в том числе занятости) населения",
      "DisplayName": "Без определенного места жительства"
    },
    "JobCode": {
      "Code": "33.3",
      "CodeSystem": "1.2.643.5.1.13.2.1.1.62",
      "CodeSystemName": "Общероссийский классификатор видов экономической деятельности",
      "DisplayName": "Монтаж приборов контроля и регулирования технологических процессов"
    },
    "JobTitleName": "Технолог",
    "OrganizationName": "ЗАО Фирма"
  }
}
```

