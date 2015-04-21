---
layout: default
title: DocumentDataSource
position: 2
categories: 
tags: 
---

Источник данных представления для документов.

   

Источник данных для документов предоставляет функционал, необходимый для выполнения CRUD-операций (Create, Read, Update, Delete) над документами системы. Параметры, необходимые для вызова этих операций, присутствуют в метаданных источника. К таким параметрам относятся: идентификатор конфигурации (ConfigId), идентификатор документа (DocumentId), а также наименования действий (CreateAction, ReadAction, UpdateAction, DeleteAction), которые соответствуют CRUD-операциям. Идентификатор конфигурации (ConfigId) и идентификатор документа (DocumentId) однозначно идентифицируют документ системы, с которым связан источник данных; наименование действия (CreateAction, ReadAction, UpdateAction, DeleteAction) определяет прикладной обработчик, определенный для данного документа, который нужно вызвать при вызове соответствующей CRUD-операции. На системном уровне для каждой CRUD-операции существуют "действия по умолчанию", которые обеспечивают "стандартное поведение" при вызове этих операций. В соответствии с этим, для каждой такой операции определено имя действия по умолчанию (см. атрибут default). Однако, в случае, когда необходимо переопределить "стандартное поведение" какой-либо CRUD-операции, прикладной разработчик может создать собственный обработчик и указать имя этого обработчика в источнике данных. Таким образом, при вызове CRUD-операции источник данных обращается к системе и передает ей все продекларированные в метаданных параметры, необходимые для вызова соответствующей операции. Например, при вызове операции "Create" системе передаются (ConfigId, DocumentId, CreateAction); при вызове "Read" - (ConfigId, DocumentId, ReadAction, <Критерии_фильтрации_документов>); при вызове "Update" - (ConfigId, DocumentId, UpdateAction, <Измененный_документ>); при вызове "Delete" - (ConfigId, DocumentId, DeleteAction, <Идентификатор_документа>). В каком виде и как эти параметры передаются системе, в контексте данной статьи не рассматривается, однако все обращения к системе осуществляются посредством вызова REST-сервисов, поэтому данные параметры могут передаваться, либо в URL, либо в теле (Body) запроса. Дополнительные сведения относительно обращения к сервисам системы см. [[соответствующей раздел документации|Реализация DocumentDataSource]].  


У источника данных может быть указан фильтр по умолчанию (Query), который представляет собой набор критериев фильтрации документов ([[Criteria]]), объединенных логическим оператором "И". Для установки и получения значения фильтра по умолчанию используются методы [[BaseDataSource]].SetQuery() и [[BaseDataSource]].GetQuery() соответственно. Дополнительные фильтры источника данных, которые могут быть установлены путем вызова методов [[BaseDataSource]].SetIdFilter(), [[BaseDataSource]].SetPropertyFilters() и [[BaseDataSource]].SetTextFilter(), не должны модифицировать фильтр по умолчанию, соответственно не влияют на результат, возвращаемый методом [[BaseDataSource]].GetQuery(). При вызове метода [[BaseDataSource]].UpdateItems() выполняется операция "Read" (действие ReadAction), которая передает системе помимо прочих параметров критерии фильтрации документов ([[Criteria]]), представляющих собой набор всех установленных в источнике данных фильтров: [[BaseDataSource]].GetQuery(), [[BaseDataSource]].GetIdFilter(), [[BaseDataSource]].GetPropertyFilters(), [[BaseDataSource]].GetTextFilter().

   

```
{
	"id": "DocumentDataSource",
	"description": "Источник данных представления для документов",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseDataSource"
	},
	"properties": {
		"ConfigId": {
			"description": "Идентификатор конфигурации",
			"type": "string",
			"required": true
		},
		"DocumentId": {
			"description": "Идентификатор документа",
			"type": "string",
			"required": true
		},
		"CreateAction": {
			"description": "Действие на создание",
			"type": "string",
			"default": "CreateDocument"
		},
		"ReadAction": {
			"description": "Действие на чтение",
			"type": "string",
			"default": "GetDocument"
		},
		"UpdateAction": {
			"description": "Действие на изменение",
			"type": "string",
			"default": "SetDocument"
		},
		"DeleteAction": {
			"description": "Действие на удаление",
			"type": "string",
			"default": "DeleteDocument"
		},
		"Query": {
			"description": "Фильтр по умолчанию",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/Criteria"
			}
		}
	}
}
```

   

```
{
	"Name": "PatientDataSource",
	"ConfigId": "Integration",
	"DocumentId": "Patient"
}
```

 

 

