---
layout: default
title: "Ведение журнала "Сотрудники""
position: 
categories: 
tags: 
---

## Ресурс: Сотрудник

Лицо, прямо или косвенно участвующее в предоставлении медицинских услуг.

  
Как администратору ЛПУ, мне необходимо иметь возможность:

* создавать нового сотрудника

* находить и редактировать сотрудников

* удалять сотрудников

чтобы внести информацию о работающих в ЛПУ сотрудниках в систему для дальнейшей работы.

|Приложение|Вкладка|
|----------|-------|
|Кадры|Главная страница|

## Документ "Сотрудник" должен содержать поля

### Структура данных о сотруднике в соответствии с FHIR

 

|Наименование|Тип данных|Заголовок|Описание|Множественность|Терминология/Примечание|
|identifier|[Identifier](http://fhir-ru.github.io/datatypes.html#Identifier)|Идентификатор сотрудника|Уникальный идентификатор|0..*| генерируется системой|
|name|Сложный тип: HumanName|Имя |ФИО, связанное с сотрудником|0..*| |
|telecom|Сложный тип: [Contact](https://docs.google.com/a/infinnity.ru/document/d/1U8BNtB4ntnMrZzQ9MMDSjuhCJWTbMf0vSCPJxLkGfZg/edit#heading=h.gjdgxs)|Контактные данные |Номер телефона, адрес электронной почты|0..*| |
|gender|[CodeableConcept](http://fhir-ru.github.io/datatypes.html#CodeableConcept)|Пол |Пол пациента|0..1| 1.2.643.5.1.13.2.1.1.156|
|birthDate|[dateTime](http://fhir-ru.github.io/datatypes.html#dateTime)|Дата рождения|Дата рождения пациента|0..1| |
|address|Сложный тип: [Address](https://docs.google.com/a/infinnity.ru/document/d/1U8BNtB4ntnMrZzQ9MMDSjuhCJWTbMf0vSCPJxLkGfZg/edit#heading=h.30j0zll)|Адрес |Указывается фактический и адрес регистрации пациента|0..*| |
|Photo|[Attachment](http://fhir-ru.github.io/datatypes.html#Attachment)|Фотография|Фотография пациента|0..*| |
|communication|[CodeableConcept](http://fhir-ru.github.io/datatypes.html#CodeableConcept)|Владение языками|Языки, которые можно использовать для общения с пациентом о его здоровье|0..*|текстовое поле|
|Organization|[Organization](http://fhir-ru.github.io/organization.html)|Медицинская организация|Организация, которая ответственна за ведение истории болезни |0..1| |
|Role|[CodeableConcept](http://fhir-ru.github.io/datatypes.html#CodeableConcept)| |Роли, которые может выполнять сотрудник|0..*|текстовое поле|
|Speciality|[CodeableConcept](http://fhir-ru.github.io/datatypes.html#CodeableConcept)|Специальность|Специальность, по которой может работать сотрудник|0..*| 1.2.643.5.1.13.2.1.1.181|
|period|[Period](http://fhir-ru.github.io/datatypes.html#Period)|Период работы|Период, в течение которого сотрудник может выполнять определенную роль|0..1| |
|location|[Location](http://fhir-ru.github.io/location.html)| | |0..*| |
|qualification|[Element](https://docs.google.com/a/infinnity.ru/document/d/1U8BNtB4ntnMrZzQ9MMDSjuhCJWTbMf0vSCPJxLkGfZg/edit#heading=h.1fob9te)|Квалификация |Полученная квалификация и сертификаты|0..*| |

 

HumanName - Healthcare

 

|Наименование|Тип данных|Заголовок|Описание|Множественность| |
|Use|code|Назначение имени|[NameUse](http://fhir-ru.github.io/name-use.html) ([Required](http://fhir-ru.github.io/terminologies.html#used))|0..1|ClassifierStorageNameUse|
|Text|[string](http://fhir-ru.github.io/datatypes.html#string)|Полное имя|Текстовое представление полного имени|0..1| |
|Family|[string](http://fhir-ru.github.io/datatypes.html#string)|Фамилия|Фамилия|0..*| |
|Given|[string](http://fhir-ru.github.io/datatypes.html#string)|Имя Отчество|Имена ( в том числе и второе имя)|0..*| |
|Prefix|[string](http://fhir-ru.github.io/datatypes.html#string)| |Части имени, идущие перед ним|0..*.| |
|Suffix|[string](http://fhir-ru.github.io/datatypes.html#string)| |Компоненты, идущие после имени|0..*| |
|Period|[Period](http://fhir-ru.github.io/datatypes.html#Period)| |Период времени, когда используется имя|0..1| |

 

Contact - Healthcare (Контактные данные )

 

|Наименование|Тип данных|Заголовок|Описание|Множественность| |
|system|[code](http://fhir-ru.github.io/datatypes.html#code)|Тип контакта|[ContactSystem](http://fhir-ru.github.io/contact-system.html) ([Required](http://fhir-ru.github.io/terminologies.html#used))|0..1|ClassifierStorageContactSystem|
|[value](http://fhir-ru.github.io/contact-system.html)|[str](http://fhir-ru.github.io/contact-system.html)[ing](http://fhir-ru.github.io/datatypes.html#string)|Контактные данные|Фактические контактные данные|0..1| |
|use|[code](http://fhir-ru.github.io/datatypes.html#code)|Назначение контактных данных|[ContactUse](http://fhir-ru.github.io/contact-use.html) ([Required](http://fhir-ru.github.io/terminologies.html#used))|0..1|ClassifierStorageContactUse|
|period| |Период действия|Период времени, в который контактные данные были/являются актуальными|0..1| |

 

Address - Healthcare

 

|Наименование|Тип данных|Заголовок|Описание|Множественность| |
|use|[code](http://fhir-ru.github.io/datatypes.html#code)|Тип адреса|Назначение адреса  [AddressUse](http://fhir-ru.github.io/address-use.html) ([Required](http://fhir-ru.github.io/terminologies.html#used))|0..1|ClassifierStorageAddressUse|
|text|[string](http://fhir-ru.github.io/datatypes.html#string)|Неструктурированный адрес|Текстовое представление адреса|0..1| |
|line|[string](http://fhir-ru.github.io/datatypes.html#string)|Улица|Название улицы|0..*|1.2.643.5.1.13.2.1.1.663|
|city|[string](http://fhir-ru.github.io/datatypes.html#string)|Город/Населенный пункт|Название города, поселка и т.п.|0..1|1.2.643.5.1.13.2.1.1.661|
|state|[string](http://fhir-ru.github.io/datatypes.html#string)|Край/область|Название края/области проживания|0..1|1.2.643.5.1.13.2.1.1.661|
|zip|[string](http://fhir-ru.github.io/datatypes.html#string)|Индекс|Почтовый индекс|0..1|1.2.643.5.1.13.2.1.1.663|
|country|[string](http://fhir-ru.github.io/datatypes.html#string)|Страна| |0..1|1.2.643.5.1.13.2.1.1.63|
|period|[Period](http://fhir-ru.github.io/datatypes.html#Period)|Период регистрации|Период времени, в течение которого адрес был/ находится в использовании|0..1| |

 

Element. Qualifications (Кадры Staff - Квалификация)

 

|Наименование|Тип данных|Заголовок|Описание|Множественность|
|code|[CodeableConcept](http://fhir-ru.github.io/datatypes.html#CodeableConcept)|Вид квалификации|Определенный код квалификации|1..1|
|period|[Period](http://fhir-ru.github.io/datatypes.html#Period)|Период регистрации|Период времени, в течение которого квалификация считается действующей|0..1|
|issuer|[Organization](http://fhir-ru.github.io/organization.html)|Организация|Организация, присвоившая квалификацию|0..1|

 

### Расширение данных сотрудника в соответствии с требованиями ФИЭМК (CDA)

#### Структура данных:

 

|Наименование|Тип данных|Заголовок|Описание|Множественность|
|UniqueNumber|[String](http://knowledge:8081/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485454) |Уникальный номер медицинского работника|Уникальный номер медицинского работника|[1..1]|
|EmployeeCode|[String](http://knowledge:8081/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485454) |Табельный номер медицинского работника|Табельный номер медицинского работника|[1..1]|
|Posts|Элемент справочника 1.2.643.5.1.13.2.1.1.607|Список должностей медицинского работника|Список должностей медицинского работника|[1..*]|
|IdentityCards|Healthcare - Удостоверение личности Сложный тип:[IdentityCard](http://knowledge:8081/display/MC/IdentityCard)|Список удостоверений личности медицинского работника|Желательно, чтобы было указано, как минимум, одно удостоверение личности|[1..*]|
|Requisites|Healthcare - реквизитСложный тип: [Requisite](http://knowledge:8081/display/MC/Requisite)|Список реквизитов медицинского работника|Обязательно должен быть указан СНИЛС|[1..*]|

 

**Валидация:**

|Команда|Правило|Сообщение|
|-------|-------|---------|
|Сохранить|Проверка на заполненность обязательных полей|Поля: "Название поля" должны быть заполнены.|

  
  


# Журнал "Сотрудники":

**Колонки журнала:**

* Фамилия,
* Имя,
* Отчество,
* СНИЛС,
* Специальность,
* Должность,  
  


**  
**

**Фильтры журнала:**

|Название|Тип данных|Автозаполнение|Особенности|
|--------|----------|--------------|-----------|
|Специальность|Терминология|нет|нет|
|Должность|Терминология|нет|нет|
|Отделение|[Справочник "Отделения"](http://knowledge:8081/pages/viewpage.action?pageId=49250352)|нет|нет|

**Кнопки:**

|Расположение|Кнопка|Видимость|Действие|
|------------|------|---------|--------|
|Action Bar|Добавить|Всегда|Открывает новый документ "Сотрудник"|
|Редактировать|Для выбранной записи|Открывает на редактирование выбранный документ "Сотрудник"|
|Удалить|Для выбранной записи|Удаляет выбранный документ "Сотрудник" (Перед удалением задается уточняющий вопрос "Вы действительно хотите удалить сотрудника "ФИО"?")|
|Область представления| нет кнопок| | |

 

