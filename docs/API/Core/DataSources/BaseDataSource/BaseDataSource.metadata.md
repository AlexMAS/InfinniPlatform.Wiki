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
|ValidationErrors|[`Script`](../../../Script/)|Функция проверки элемента на ошибки|
|ValidationWarnings|[`Script`](../../../Script/)|Функция проверки элемента на предупреждения|
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
	    "ValidationErrors": "{ return { IsValid: (args.Name != null) }; }",
	    "OnPropertyChanged": "{ alert('Property ' + args.property + ' is changed!'); }"
	}
}

```