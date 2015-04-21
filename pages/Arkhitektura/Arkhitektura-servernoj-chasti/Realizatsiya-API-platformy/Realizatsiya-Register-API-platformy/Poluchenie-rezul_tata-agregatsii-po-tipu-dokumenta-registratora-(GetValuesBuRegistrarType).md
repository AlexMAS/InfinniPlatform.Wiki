---
layout: default
title: Получение результата агрегации по типу документа-регистратора (GetValuesBуRegistrarType)
position: 
categories: 
tags: 
---

Перед рассмотрением операций, следует ознакомиться с [[правилами формирования запросов REST|Обработка запросов REST и формирование роутинга для запросов]]

#### Внутренняя реализация

Запрос позволяет получить информацию о ресурсах по типу документа-регистратора. Запрос позволяет указать измерения, по которым производить агрегацию. Если список измерений не задан, в качестве измерений будут взяты все свойства регистра, помеченные как Dimension. При выполнении запроса учитываются только те значения регистра, дата которых предшествует дате актуальности регистра ActualDate. 

#### Запрос

POST [http://<ServerName>:<PortName>/SystemConfig/StandardApi/metadata/GetRegisterValuesByRegistrarType](http://10.10.1.82:9999/SystemConfig/StandardApi/metadata/GetRegisterValuesByRegistrarType)

```
{
	"id": null,
	"changesObject": {
		"Configuration": "<Configuration name>",
		"Register": "<Register name>",
		"RegistrarType": "<Registrar type>",		
		"Dimensions": <Dimensions>,
		"ValueProperty": "<Value property>"
	},
	"replace": false
}
```

В теле запроса передаются следующие аргументы

<Configuration name> - идентификатор конфигурации (см. [[правила формирования запросов REST|Обработка запросов REST и формирование роутинга для запросов]])

<Register name> - наименование регистра (см. [[правила формирования запросов REST|Обработка запросов REST и формирование роутинга для запросов]])

<Registrar type> - тип документа-регистратора

<Dimensions> - измерения, по которым выполнять агрегацию. Например, ["Room", "Bed"]

<Value property> - Свойство, по которому будет вычислено агрегирующее значение. Например, "Value"

#### Ответ

Ответ сервера (пример):

```
[{
	"Room": "палата 33",
	"Bed": "койка 3",
	"Value": -1.0
},
{
	"Room": "палата 54",
	"Bed": "койка 1",
	"Value": 1.0
}]
```

