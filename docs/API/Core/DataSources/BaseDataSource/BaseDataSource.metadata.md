---
layout: doc
title: "BaseDataSource.metadata"
position: 0
---

Метаданные [базового типа источников данных](../) представления.

# Schema

|Name|Type|Description|
|----|----|-----------|
|Name|`String`|Наименование источника данных|
|IdProperty|`String`|Свойство с идентификатором элемента|
|FillCreatedItem|`Boolean`|Логическое значение, указывающее, нужно ли предзаполнение новых элементов на сервере|
|IsLazy|`Boolean`|Логическое значение, определяющее, будет ли прогрузка данных в источнике "ленивой" или нет|
|ResolvePriority|`Integer`|Приоритет прогрузки источника данных. Чем выше приоритет, тем раньше источник будет прогружен. По умолчанию равен 0|
|ValidationErrors|[`Script`](../../../Script/)|Функция проверки элемента на ошибки|
|OnErrorValidator|[`Script`](../../../Script/)|Обработчик события о том, что проверка на ошибки завершена|
|OnSelectedItemChanged|[`Script`](../../../Script/)|Обработчик события о том, что выделенный элемент изменился|
|OnPropertyChanged|[`Script`](../../../Script/)|Обработчик события о том, что одно из свойств источника изменилось|
|OnItemDeleted|[`Script`](../../../Script/)|Обработчик события о том, что элемент удален|
|OnItemsUpdated|[`Script`](../../../Script/)|Обработчик события о том, что список элементов обновлен|

# Exampes

Создать экземпляр BaseDataSource нельзя (это абстрактный класс), однако можно создать ObjectDataSource, который наследуется от BaseDataSource.

```json
{
    "ObjectDataSource": {
	    "Name": "DocumentTypes",
	    "IdProperty": "_id",
	    "IsLazy": false,
	    "ValidationErrors": "{ return { IsValid: (args.Name != null), Items: [{Message: 'Name is required'}] }; }",
	    "OnPropertyChanged": "{ alert('Property ' + args.property + ' is changed!'); }"
	}
}

```

Допустим возникла зависимость между источниками данных, и для корректной работы MainDataSource необходим загруженный TerminologyDataSource. Для решения этой проблемы достаточно указать ResolvePriority для TerminologyDataSource выше, чем для MainDataSource.

```json
{
	"DataSources": [
	    {
	        "DocumentDataSource": {
	            "Name": "MainDataSource",
	            "ConfigId": "configuration",
	            "DocumentId": "patients"
	        }
	    },
	    {
	        "DocumentDataSource": {
	            "Name": "TerminologyDataSource",
	            "ConfigId": "configuration",
	            "DocumentId": "diseases",
	            "ResolvePriority": 1
	        }
	    }
	]
}

```