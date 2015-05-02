---
layout: default
title: "Получение значений из таблицы итогов на дату, ближайшую к заданной (GetRegisterTotals)"
position: 
categories: 
tags: 
---

Перед рассмотрением операций, следует ознакомиться с [[правилами формирования запросов REST|Обработка запросов REST и формирование роутинга для запросов]]

#### Внутренняя реализация

Каждый регистр имеет служебный документ для хранения промежуточных итогов. Итоги рассчитываются по специальному запросу (в настоящее время имеется миграция CalculateTotalsForRegisters, которая производит расчет итогов на текущий момент). Получить значения итогов позволяет  [[Операция получения списка документов по фильтру (GetDocument)|Операция получения списка документов по фильтру (GetDocument)]], где в качестве метаданных указывается "RegisterTotals_<Register name>", где Register name - наименование регистра, из которого необходимо получить итоговые значения.

#### Запрос

POST [http://<ServerName>:<PortName>/RestfulApi/StandardApi/configuration/getdocument](http://10.10.1.82:9999/RestfulApi/StandardApi/configuration/getdocument)

```
{
	"id": null,
	"changesObject": {
		"Configuration": "<Configuration name>",
		"Metadata": "RegisterTotals_<Register name> ",
		"Filter": [{
			"Property": "DocumentDate",
			"Value": "<Totals date>",
			"CriteriaType": 1
		}],
		"PageNumber": <Page number>,
		"PageSize": <Page size>,
		"ResolveReferences": false
	},
	"replace": false
}			
```

В теле запроса передаются следующие аргументы (вместо <parameter name> указывается нужное значение)

<Configuration name> - идентификатор конфигурации (см. [[правила формирования запросов REST|Обработка запросов REST и формирование роутинга для запросов]])

<Register name> - наименование регистра (см. [[правила формирования запросов REST|Обработка запросов REST и формирование роутинга для запросов]])

<Totals date> - дата, на которую имеются рассчитанные итоги. Способ получения значения даты расчета итогов описан ниже.

<Page number> -номер страницы результатов поискового запроса, по умолчанию 0

<Page size> -размер страницы поискового запроса, по умолчанию 10

#### Ответ

Ответ сервера (пример):

```
[{
	"Room": "палата 33",
	"Bed": "койка 3",
	"Value": 0.0,
	"Id": "57062a1a-b0c0-4ecf-bc76-0d58d6eadb29",
	"DocumentDate": "2014-08-29T13:48:03",
	"TimeStamp": "2014-08-29T13:48:04.0209342+06:00"
},
{
	"Room": "палата 33",
	"Bed": "койка 2",
	"Value": 0.0,
	"Id": "e87ed290-eb0a-4458-ab5f-8db787b88a7c",
	"DocumentDate": "2014-08-29T13:48:03",
	"TimeStamp": "2014-08-29T13:48:03.9939315+06:00"
},
{
	"Room": "палата 33",
	"Bed": "койка 1",
	"Value": 1.0,
	"Id": "4f739d5d-3e90-4bc5-8515-5aba1c2b2b08",
	"DocumentDate": "2014-08-29T13:48:03",
	"TimeStamp": "2014-08-29T13:48:03.9659287+06:00"
}]
```

Для того, чтобы указать корректную дату в фильтре запроса getdocument, рекомендуется использовать запрос, позволяющий получить дату расчета итогов, ближайшую к заданной.

#### Запрос

POST [http://<ServerName>:<PortName>/SystemConfig/StandardApi/metadata/GetClosestDateTimeOfTotalCalculation ](http://10.10.1.82:9999/RestfulApi/SystemConfig/StandardApi/metadata/GetClosestDateTimeOfTotalCalculation)

```
{
	"id": null,
	"changesObject": {
		"Configuration": "<Configuration name>",
		"Register": "<Register name>",
		"Date": "2014-09-29T12:00:00"
	},
	"replace": false
}
```

#### Ответ

Ответ сервера (пример):

```
{"Date":"2014-08-29T13:48:03"}
```

