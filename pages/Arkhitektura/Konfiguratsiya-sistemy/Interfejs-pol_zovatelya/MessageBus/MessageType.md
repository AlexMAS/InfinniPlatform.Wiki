---
layout: default
title: "MessageType"
position: 0
categories: 
tags: 
---

Типы сообщений.

 

В данном разделе перечислены стандартные типы сообщений для шины (см. [[MessageBus]]). Данный список может расширяться. Также следует отметить, что в приведенном списке указана маршрутизация сообщения, которая обеспечивает ожидаемую работоспособность представления. Естественно, что прикладной разработчик может дополнять это взаимодействие по своему рассмотрению.

    

|Тип сообщения|Тело сообщения|Источники сообщения|Подписчики на сообщение|Описание сообщения|Комментарии|
|-------------|--------------|-------------------|-----------------------|------------------|-----------|
|OnLoaded|[[BaseMessage]]|[[View]]|[[DataSource]]|Представление создано и отображено на экране.| |
|OnError|[[BaseMessage]]|[[DataSource]]|[[View]]|В приложении произошла ошибка.|Value содержит информацию об ошибке.|
| | | | | | |
|OnSetPageNumber|[[DataSourceMessage]]|[[DataNavigation]]|[[DataSource]]|Запрос на изменение номера страницы источника данных.|Value содержит номер страницы.|
|OnSetPageSize|[[DataSourceMessage]]|[[DataNavigation]]|[[DataSource]]|Запрос на изменение размера страницы источника данных.|Value содержит размер страницы.|
|OnSetSelectedItem|[[DataSourceMessage]]|[[ListBox]], [[TreeView]], [[DataGrid]], [[ComboBox]]|[[DataSource]]|Запрос на изменение выделенного элемента источника данных.|Value содержит выделенный элемент.|
|OnSetPropertyFilters|[[DataSourceMessage]]|[[FilterPanel]]|[[DataSource]]|Запрос на изменение фильтра по свойствам элементов данных.|Value содержит значение фильтра (массив [[Criteria]]).|
|OnSetTextFilter|[[DataSourceMessage]]|[[SearchPanel]]|[[DataSource]]|Запрос на изменение фильтра полнотекстового поиска.|Value содержит значение фильтра (массив [[Criteria]]).|
|OnDeleteItem|[[DataSourceMessage]]|[[DeleteAction]]|[[DataSource]]|Запрос на удаление элемента источника данных.|Value содержит идентификатор элемента.|
|OnUpdateItems|[[DataSourceMessage]]|[[UpdateAction]]|[[DataSource]]|Запрос на обновление списка элементов источника данных.|Value содержит список элементов.|
| | | | | | |
|OnPageNumberChanged|[[DataSourceMessage]]|[[DataSource]]|[[DataNavigation]]|Подтверждение изменения номера страницы источника данных.|Value содержит номер страницы.|
|OnPageSizeChanged|[[DataSourceMessage]]|[[DataSource]]|[[DataNavigation]]|Подтверждение изменения размера страницы источника данных.|Value содержит размер страницы.|
|OnSelectedItemChanged|[[DataSourceMessage]]|[[DataSource]]|[[ListBox]], [[TreeView]], [[DataGrid, |DataGrid]][[ComboBox]]|Подтверждение изменения выделенного элемента источника данных.|Value содержит выделенный элемент.|
|OnPropertyFiltersChanged|[[DataSourceMessage]]|[[DataSource]]|[[FilterPanel]]|Подтверждение изменения фильтра по свойствам элементов данных.|Value содержит значение фильтра (массив [[Criteria]]).|
|OnTextFilterChanged|[[DataSourceMessage]]|[[DataSource]]|[[SearchPanel]]|Подтверждение изменения фильтра полнотекстового поиска.|Value содержит значение фильтра (массив [[Criteria]]).|
|OnItemDeleted|[[DataSourceMessage]]|[[DataSource]]|[[ListBox]], [[TreeView]], [[DataGrid, |DataGrid]][[ComboBox]]|Подтверждение удаления элемента источника данных.|Value содержит идентификатор элемента.|
| | | | | | |
|OnSetPropertyValue|[[DataSourceMessage]]|Элемент редактирования|[[DataSource]]|Запрос на изменение свойства выделенного элемента источника данных.|Value содержит значение свойства.|
|OnPropertyValueChanged|[[DataSourceMessage]]|[[DataSource]]|Элемент редактирования|Подтверждение изменения свойства выделенного элемента источника данных.|Value содержит значение свойства.|
| | | | | | |

 

 

