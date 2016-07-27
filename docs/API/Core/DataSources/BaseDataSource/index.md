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

# Specific Properties

Для работы с данными свойствами используйте методы [getProperty](BaseDataSource.getProperty/) и [setProperty](BaseDataSource.setProperty/).  
Обратите внимание, что для работы с данными свойствами необходимо [указывать точку в названии](BaseDataSource.getProperty/#path-rules).

|Name|Description|
|----|---------|
|items|Список элементов источника данных|
|selectedItem|Выделенный элемент|

# Methods

|Name|Description|
|----|---------|
|[getView](BaseDataSource.getView/)|Возвращает родительское [представление](../../Elements/View/)|
|[getContext](BaseDataSource.getContext/)|Возвращает [контекст родительского представления](../../Context/)|
|[getName](BaseDataSource.getName/)|Возвращает наименование источника данных|
|[setName](BaseDataSource.setName/)|Устанавливает наименование источника данных|
|[getIdProperty](BaseDataSource.getIdProperty/)|Возвращает наименование свойства с идентификатором элемента (по умолчанию Id)|
|[setIdProperty](BaseDataSource.setIdProperty/)|Устанавливает наименование свойства с идентификатором элемента|
|[getFillCreatedItem](BaseDataSource.getFillCreatedItem/)|Возвращает, нужно ли предзаполнение новых элементов на сервере|
|[setFillCreatedItem](BaseDataSource.setFillCreatedItem/)|Устанавливает, нужно ли предзаполнение новых элементов на сервере|
|[getErrorValidator](BaseDataSource.getErrorValidator/)|Возвращает [функцию](../../Script/) проверки элемента на ошибки|
|[setErrorValidator](BaseDataSource.setErrorValidator/)|Устанавливает [функцию](../../Script/) проверки элемента на ошибки|
|[isUpdateSuspended](BaseDataSource.isUpdateSuspended/)|Возвращает значение, указывающее, запрещено ли обновление списка элементов|
|[suspendUpdate](BaseDataSource.suspendUpdate/)|Запрещает обновление списка элементов|
|[resumeUpdate](BaseDataSource.resumeUpdate/)|Разрешает обновление списка элементов|
|[getSelectedItem](BaseDataSource.getSelectedItem/)|Возвращает выделенный элемент|
|[setSelectedItem](BaseDataSource.setSelectedItem/)|Устанавливает выделенный элемент|
|[getProperty](BaseDataSource.getProperty/)|Возвращает значение указанного свойства источника|
|[setProperty](BaseDataSource.setProperty/)|Устанавливает значение указанного свойства источника|
|[isDataReady](BaseDataSource.isDataReady/)|Возвращает значение, указывающее, загрузились ли данные в источник или нет|
|[isLazy](BaseDataSource.isLazy/)|Возвращает значение, является ли прогрузка данных в источнике "ленивой" или нет|
|[setIsLazy](BaseDataSource.setIsLazy/)|Устанавливает значение, является ли прогрузка данных в источнике "ленивой" или нет|
|[idOfItem](BaseDataSource.idOfItem/)|Возвращает значение идентификатора по переданному элементу item|
|[isModified](BaseDataSource.isModified/)|Проверяет, является ли элемент несохраненным|
|[isModifiedItems](BaseDataSource.isModifiedItems/)|Проверяет, есть ли несохраненные элементы|
|[createItem](BaseDataSource.createItem/)|Создает новый элемент в источнике данных|
|[saveItem](BaseDataSource.saveItem/)|Сохраняет элемент в источнике данных|
|[deleteItem](BaseDataSource.deleteItem/)|Удаляет элемент из источника данных|
|[updateItems](BaseDataSource.updateItems/)|Обновляет список элементов источника данных|
|[tryInitData](BaseDataSource.tryInitData/)|Пытается обновить список элементов источника. Делает это только в случае, если до этого источник не был прогружен данными|
|[getItems](BaseDataSource.getItems/)|Возвращает список элементов источника данных|
|[validateOnErrors](BaseDataSource.validateOnErrors/)|Осуществляет проверку на ошибки|
|[initDataProvider](BaseDataSource.initDataProvider/)|Определяет обязательное свойство [`dataProvider`](../../DataProviders/). Наследники BaseDataSource должны переопределять этот метод!|
|[beforeDeleteItem](BaseDataSource.beforeDeleteItem/)|Вы можете переопределить этот метод в наследнике BaseDataSource, если есть необходимость выполнять некие действия перед удалением элемента|


# Events

|Name|Description|
|----|---------|
|[onSelectedItemChanged](BaseDataSource.onSelectedItemChanged/)|станавливает [обработчик события](../../Script/) о том, что выделенный элемент изменился|
|[onPropertyChanged](BaseDataSource.onPropertyChanged/)|Устанавливает [обработчик события](../../Script/) о том, что одно из свойств источника изменилось|
|[onItemCreated](BaseDataSource.onItemCreated/)|Устанавливает [обработчик события](../../Script/) о том, что элемент создан|
|[onItemSaved](BaseDataSource.onItemSaved/)|Устанавливает [обработчик события](../../Script/) о том, что элемент сохранен|
|[onItemDeleted](BaseDataSource.onItemDeleted/)|Устанавливает [обработчик события](../../Script/) о том, что элемент удален|
|[onItemsUpdated](BaseDataSource.onItemsUpdated/)|Устанавливает [обработчик события](../../Script/) о том, что список элементов обновлен|
|[onErrorValidator](BaseDataSource.onErrorValidator/)|Устанавливает [обработчик события](../../Script/) о том, что проверка на ошибки завершена|