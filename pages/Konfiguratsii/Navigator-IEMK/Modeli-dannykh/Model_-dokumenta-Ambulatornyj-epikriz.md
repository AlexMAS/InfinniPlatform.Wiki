---
layout: default
title: "Модель документа \"Амбулаторный эпикриз\""
position: 
categories: 
tags: 
---

Представляет описание секций документа "Амбулаторный эпикриз".

 

|**Наименование**|**Тип данных**|**Заголовок**|**Множественность**|
|DocumentId|String|Уникальный номер экземпляра документа|[1..1]|
|Date|DateTime |Дата создания документа|[1..1]|
|PatientId|[String](http://knowledge:8081/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485458)|Уникальный идентификатор пациента|[1..1]|
|MedicalWorkerId|[String](http://knowledge:8081/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485458)|Уникальный идентификатора медицинского работника|[1..1]|
|DocumentOwner|[String](http://knowledge:8081/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485458) |Владелец документа|[1..1]|
|DocumentOwnerName|[String](http://knowledge:8081/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485458) |Владелец документа|[1..1]|
|DocumentVersionNumber|Integer|Версия документа|[1..1]|
|CaseNumber|String |Номер карты|[1..1]|
|EventStartDate|DateTime  |Дата начала случая|[1..1]|
|EventEndDate|DateTime  |Дата окончания случая|[1..1]|
|AmbulanceDispositionCode|Элемент справочника1.2.643.5.1.13.2.1.1.688|Исход обращения|[1..1]|

