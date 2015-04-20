---
layout: default
title: BaseDataSource
position: 0
categories: 
tags: 
---

Базовый тип для источника данных представления.

 

Данный раздел описывает базовый API и метаданные для всех типов источников данных представления.

   

|Name|Description|
|----|-----------|
|GetName(): string|Возвращает наименование источника данных.|
|SetName(string value)|Устанавливает наименование источника данных.|
| | |
|GetIdProperty(): string|Возвращает свойство элемента источника данных, которое хранит уникальный идентификатор элемента.|
|GetFillCreatedItem(): boolean|Возвращает значение, определяющее нужно ли заполнять создаваемые элементы источника данных значениями по умолчанию.|
|SetFillCreatedItem(boolean value)|Устанавливает значение, определяющее, нужно ли заполнять создаваемые элементы источника данных значениями по умолчанию.|
| | |
|SuspendUpdate()|Запрещает обновление списка элементов (например, на время, пока представление не будет загружено).|
|ResumeUpdate()|Разрешает обновление списка элементов (обновляет список элементов, до вызова метода обновление было запрещено).|
| | |
|GetPageNumber(): integer|Возвращает номер страницы.|
|SetPageNumber(integer value)|Устанавливает номер страницы.|
|GetPageSize(): integer|Возвращает размер страницы.|
|SetPageSize(integer value)|Устанавливает размер страницы.|
| | |
|IsModified(): boolean|Возвращает значение, определяющее, есть ли не сохраненные элементы в источнике данных.|
|IsModified(object item): boolean|Возвращает значение, определяющее, есть ли не сохраненные изменения у элемента источника данных.|
| | |
|SaveItem(object item)|Сохраняет элемент в источнике данных.|
|DeleteItem(object itemId)|Удаляет элемент из источника данных.|
|GetItems(): array|Возвращает список элементов источника данных.|
|UpdateItems()|Обновляет список элементов источника данных.|
| | |
|GetSelectedItem(): object|Возвращает выделенный элемент.|
|SetSelectedItem(object value)|Устанавливает выделенный элемент.|
| | |
|GetIdFilter(): string|Возвращает фильтр по уникальному идентификатору элемента.|
|SetIdFilter(string value)|Устанавливает фильтр по уникальному идентификатору элемента.|
|GetPropertyFilters(): array<[[Criteria]]>|Возвращает фильтр по свойствам элементов.|
|SetPropertyFilters(array<[[Criteria]]> value)|Устанавливает фильтр по свойствам элементов.|
|GetTextFiliter(): string|Возвращает фильтр полнотекстового поиска.|
|SetTextFilter(string value)|Устанавливает фильтр полнотекстового поиска.|
|GetQuery(): array<[[Criteria]]>|Возвращает фильтр по умолчанию.|
|SetQuery(array<[[Criteria]]> value)|Устанавливает фильтр по умолчанию.|
| | |
|GetDataBindings(): array<[[DataBinding]]>|Возвращает список привязок источника данных.|
|AddDataBinding([[DataBinding]] dataBinding)|Добавляет привязку в список привязок источника данных.|
|RemoveDataBinding([[DataBinding]] dataBinding)|Удаляет привязку из списка привязок источника данных.|

|Name|Description|
|----|-----------|
|OnPageNumberChanged([[Context]], [[DataSourceMessage]])|Возвращает или устанавливает обработчик события изменения номер страницы.|
|OnPageSizeChanged([[Context]] , [[DataSourceMessage]])|Возвращает или устанавливает обработчик события изменения размера страницы.|
|OnSelectedItemChanged([[Context]] , [[DataSourceMessage]])|Возвращает или устанавливает обработчик события изменения выделенного элемента.|
|OnSelectedItemModified([[Context]] , [[DataSourceMessage]])|Возвращает или устанавливает обработчик события изменения свойств выделенного элемента.|
|OnPropertyFiltersChanged([[Context]] , [[DataSourceMessage]])|Возвращает или устанавливает обработчик события изменения фильтра по свойствам элементов.|
|OnTextFilterChanged([[Context]] , [[DataSourceMessage]])|Возвращает или устанавливает обработчик события изменения фильтра полнотекстового поиска.|
|OnItemDeleted([[Context]] , [[DataSourceMessage]])|Возвращает или устанавливает обработчик события удаления элемента из источника.|
|OnItemsUpdated([[Context]] , [[DataSourceMessage]])|Возвращает или устанавливает обработчик события обновления списка элементов.|

  

```
{
	"id": "BaseDataSource",
	"description": "Базовый тип для источника данных представления",
	"type": "object",
	"properties": {
		"Name": {
			"description": "Наименование источника данных",
			"type": "string",
			"required": true
		},
		"IdProperty": {
			"description": "Свойство элемента источника данных, которое хранит уникальный идентификатор элемента",
			"type": "string",
			"default": "Id"
		},
		"FillCreatedItem": {
			"description": "Заполнять создаваемые элементы источника данных значениями по умолчанию",
			"type": "boolean",
			"default": true
		},
		"ValidationErrors": {
			"description": "Оператор проверки модели данных документа на ошибки",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/BooleanValidator"
		},
		"ValidationWarnings": {
			"description": "Оператор проверки модели данных документа на предупреждения",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/BooleanValidator"
		},
		"OnPageNumberChanged": {
			"description": "Обработчик события изменения номер страницы",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnPageSizeChanged": {
			"description": "Обработчик события изменения размера страницы",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnSelectedItemChanged": {
			"description": "Обработчик события изменения выделенного элемента",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnSelectedItemModified": {
			"description": "Обработчик события изменения свойств выделенного элемента",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnPropertyFiltersChanged": {
			"description": "Обработчик события изменения фильтра по свойствам элементов",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnTextFilterChanged": {
			"description": "Обработчик события изменения фильтра полнотекстового поиска",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnItemDeleted": {
			"description": "Обработчик события удаления элемента из источника",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnItemsUpdated": {
			"description": "Обработчик события обновления списка элементов",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		}
    }
}
```

 

 

