---
layout: default
title: Модель документа "Направление"
position: 
categories: 
tags: 
---

Представляет описание секций документа "Направление".

 

|**Наименование**|**Тип данных**|**Заголовок**|**Множественность**|
|DocumentId|String|Уникальный номер экземпляра документа|[1..1]|
|PatientId|[String](http://knowledge:8081/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485458)|Уникальный идентификатор пациента|[1..1]|
|MedicalWorkerId|[String](http://knowledge:8081/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485458)|Уникальный идентификатора медицинского работника|[1..1]|
|Date|DateTime |Дата создания документа|[1..1]|
|Confidentiality|Элемент справочника 2.16.840.1.113883.5.25|Уровень конфиденциальности документа|[1..1]|
|DocumentOwner|[String](http://knowledge:8081/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485458) |Владелец документа|[1..1]|
|DocumentOwnerName|[String](http://knowledge:8081/pages/createpage.action?spaceKey=MC&title=%D0%A2%D0%B8%D0%BF%D1%8B+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85&linkCreation=true&fromPageId=39485458) |Владелец документа|[1..1]|
|DocumentVersionNumber|Integer|Версия документа|[1..1]|
|IssueDate|DateTime  |Дата выдачи направления|[1..1]|
|DirectionType|Элемент  справочника#### **1.2.643.5.1.13.2.7.1.2**

|Тип направления|[1..1]|

