---
layout: doc
title: "BaseDataSource"
position: 0
---

Функция-конструктор, определяющий базовый тип источников данных.

# Description

Источники данных, представленные в InfinniUI, являются потомками BaseDataSource.  
В BaseDataSource реализованы базовые API, которые предоставлят все источники данных InfinniUI.

# Syntax

```js
new BaseDataSource(parameters)
```

## Parameters

|Name|Type|Description|
|----|----------|---------|
|parameters|`Object`| Объект с параметрами представления. Один из параметров обязательный: parameters.view - родительское представление источника данных|


# Properties

|Name|Type|Description|
|----|----|-----------|
|[name](BaseDataSource.name/)|`String`|Содержит наименование источника данных|

# Methods

|Name|Description|
|----|---------|
|[getView](BaseDataSource.getView/)|Возвращает родительское [представление](../../Elements/View/)|
|[getName](BaseDataSource.getName/)|Возвращает наименование источника данных|
|[setName](BaseDataSource.setName/)|Устанавливает наименование источника данных|
|[getIdProperty](BaseDataSource.getIdProperty/)|Возвращает наименование свойства с идентификатором элемента (по умолчанию Id)|
|[setIdProperty](BaseDataSource.setIdProperty/)|Устанавливает наименование свойства с идентификатором элемента|
|[getFillCreatedItem](BaseDataSource.getFillCreatedItem/)|Возвращает, нужно ли предзаполнение новых элементов на сервере|
|[setFillCreatedItem](BaseDataSource.setFillCreatedItem/)|Устанавливает, нужно ли предзаполнение новых элементов на сервере|
|[getPageNumber](BaseDataSource.getPageNumber/)|Возвращает номер страницы|
|[setPageNumber](BaseDataSource.setPageNumber/)|Устанавливает номер страницы|
|[getPageSize](BaseDataSource.getPageSize/)|Возвращает размер страницы|
|[setPageSize](BaseDataSource.setPageSize/)|Устанавливает размер страницы|
|[getFilter](BaseDataSource.getFilter/)|Возвращает фильтр элементов|
|[setFilter](BaseDataSource.setFilter/)|Устанавливает фильтр элементов|
|[getErrorValidator](BaseDataSource.getErrorValidator/)|Возвращает [функцию](../../Script/) проверки элемента на ошибки|
|[setErrorValidator](BaseDataSource.setErrorValidator/)|Устанавливает [функцию](../../Script/) проверки элемента на ошибки|
|[getWarningValidator](BaseDataSource.getWarningValidator/)|Возвращает [функцию](../../Script/) проверки элемента на предупреждения|
|[setWarningValidator](BaseDataSource.setWarningValidator/)|Устанавливает [функцию](../../Script/) проверки элемента на предупреждения|
|[suspendUpdate](BaseDataSource.suspendUpdate/)|Запрещает обновление списка элементов|
|[resumeUpdate](BaseDataSource.resumeUpdate/)|Разрешает обновление списка элементов|
|[getSelectedItem](BaseDataSource.getSelectedItem/)|Возвращает выделенный элемент|
|[setSelectedItem](BaseDataSource.setSelectedItem/)|Устанавливает выделенный элемент|
|[getProperty](BaseDataSource.getProperty/)|Возвращает значение указанного свойства источника|
|[setProperty](BaseDataSource.setProperty/)|Устанавливает значение указанного свойства источника|
|[isLazy](BaseDataSource.isLazy/)|Возвращает значение, является ли прогрузка данных в источнике "ленивой" или нет|
|[setIsLazy](BaseDataSource.setIsLazy/)|Устанавливает значение, является ли прогрузка данных в источнике "ленивой" или нет|
|[idOfItem](BaseDataSource.idOfItem/)|Возвращает значение идентификатора по переданному элементу item|
|[isModified](BaseDataSource.isModified/)|Проверяет, есть ли несохраненные элементы|
|[createItem](BaseDataSource.createItem/)|Создает новый элемент в источнике данных|
|[saveItem](BaseDataSource.saveItem/)|Сохраняет элемент в источнике данных|
|[deleteItem](BaseDataSource.deleteItem/)|Удаляет элемент из источника данных|
|[updateItems](BaseDataSource.updateItems/)|Обновляет список элементов источника данных|
|[tryInitData](BaseDataSource.tryInitData/)|Пытается обновить список элементов источника. Делает это только в случае, если до этого источник не был прогружен данными|
|[addNextItems](BaseDataSource.addNextItems/)|Добавляет в список элементов источника данных элементы со следующей страницы|
|[getItems](BaseDataSource.getItems/)|Возвращает список элементов источника данных|
|[validateOnErrors](BaseDataSource.validateOnErrors/)|Осуществляет проверку на ошибки|
|[validateOnWarnings](BaseDataSource.validateOnWarnings/)|Осуществляет проверку на предупреждения|

# Events

|Name|Description|
|----|---------|
|[onPageNumberChanged](BaseDataSource.onPageNumberChanged/)|Устанавливает [обработчик события](../../Script/) о том, что номер страницы изменился|
|[onPageSizeChanged](BaseDataSource.onPageSizeChanged/)|Устанавливает [обработчик события](../../Script/) о том, что размер страницы изменился|
|[onFilterChanged](BaseDataSource.onFilterChanged/)|Устанавливает [обработчик события](../../Script/) о том, что фильтр элементов изменился|
|[onSelectedItemChanged](BaseDataSource.onSelectedItemChanged/)|станавливает [обработчик события](../../Script/) о том, что выделенный элемент изменился|
|[onPropertyChanged](BaseDataSource.onPropertyChanged/)|Устанавливает [обработчик события](../../Script/) о том, что одно из свойств источника изменилось|
|[onItemCreated](BaseDataSource.onItemCreated/)|Устанавливает [обработчик события](../../Script/) о том, что элемент создан|
|[onItemSaved](BaseDataSource.onItemSaved/)|Устанавливает [обработчик события](../../Script/) о том, что элемент сохранен|
|[onItemDeleted](BaseDataSource.onItemDeleted/)|Устанавливает [обработчик события](../../Script/) о том, что элемент удален|
|[onItemsUpdated](BaseDataSource.onItemsUpdated/)|Устанавливает [обработчик события](../../Script/) о том, что список элементов обновлен|
|[onItemsAdded](BaseDataSource.onItemsAdded/)|Устанавливает [обработчик события](../../Script/) о том, что в список элементов добавлены новые|
|[onErrorValidator](BaseDataSource.onErrorValidator/)|Устанавливает [обработчик события](../../Script/) о том, что проверка на ошибки завершена|
|[onWarningValidator](BaseDataSource.onWarningValidator/)|Устанавливает [обработчик события](../../Script/) о том, что проверка на предупреждения завершена|
|[onError](BaseDataSource.onError/)|Устанавливает [обработчик события](../../Script/) о том, произошла ошибка|