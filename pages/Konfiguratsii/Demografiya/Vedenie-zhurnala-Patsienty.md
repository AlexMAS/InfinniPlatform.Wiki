---
layout: default
title: "Ведение журнала "Пациенты""
position: 1
categories: 
tags: 
---

Как регистратору ЛПУ, мне необходимо иметь возможность:

* создавать новых пациентов

* находить уже созданных пациентов

* редактировать пациентов

* удалять пациентов

чтобы наполнить базу пациентов ЛПУ для дальнейшей работы.

## Документ "Пациент"

Модель данных документа "Пациент": [http://confluence.infinnity.lan/pages/viewpage.action?pageId=39485452](http://confluence.infinnity.lan/pages/viewpage.action?pageId=39485452)

В приведенной модели изменить блок "Полис"

Полис ОМС (таблица):

#### Структура данных:

|### Наименование

|### Тип данных

|### Заголовок

|### Описание

|### Множественность

|
|Type|Терминология|Тип полиса|Тип полиса ОМС|[1..1]|
|Series|[String](http://confluence.infinnity.lan/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485500) |Серия документа|Серия документа|[1..1]|
|Number|[String](http://confluence.infinnity.lan/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485500) |Номер документа|Номер документа|[1..1]|
|IssueDate|[DateTime](http://confluence.infinnity.lan/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485500) |Дата выдачи полиса|Дата выдачи полиса|[1..1]|
|ExpiryDate|[DateTime](http://confluence.infinnity.lan/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485500)  |Окончание срока действия полиса|Окончание срока действия полиса|[0..1]|
|Issuer|[String](http://confluence.infinnity.lan/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485500) |Имя страховой компании|Имя страховой компании|[1..1]|
|IssuerId|Элемент справочника 1.2.643.5.1.13.2.1.1.635|Идентификатор страховой компании|Идентификатор страховой компании, по справочнику в данном случае ФОМС|[0..1]|
|InsuredTerritory|Элемент справочника 1.2.643.5.1.13.2.1.1.196|Код территории страхования|Код территории страхования по справочникам ОКАТО, ОКТМО, КЛАДР|[0..1]|

Валидация:  
- проверка на заполненность обязательных полей  
- Дата рождения пациента не может быть больше текущей даты

## Журнал "Пациенты"

**Колонки журнала:**

* Фамилия
* Имя
* Отчество
* Номер карты
* Дата рождения
* СНИЛС
* Серия полиса ОМС
* Номер полиса ОМС

**Фильтры журнала:**

* Номер карты
* СНИЛС
* Дата рождения (период)
* Номер полиса

* Полнотекстовый поиск по журналу

 

 

 

