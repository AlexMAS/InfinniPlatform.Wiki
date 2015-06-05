---
layout: doc
title: "BaseDataSource"
position: 0
---

Базовый тип источников данных представления.

# Methods

## [`getView()`](BaseDataSource.getView/)

Возвращает родительское [представление](../../KeyConcepts/View/).

## [`getName()`](BaseDataSource.getName/)

Возвращает наименование источника данных.

## [`setName()`](BaseDataSource.setName/)

Устанавливает наименование источника данных.

## [`getIdProperty()`](BaseDataSource.getIdProperty/)

Возвращает наименование свойства с идентификатором элемента.

## [`setIdProperty()`](BaseDataSource.setIdProperty/)

Устанавливает наименование свойства с идентификатором элемента.

## [`getFillCreatedItem()`](BaseDataSource.getFillCreatedItem/)

Возвращает, нужно ли предзаполнение новых элементов на сервере.

## [`setFillCreatedItem()`](BaseDataSource.setFillCreatedItem/)

Устанавливает, нужно ли предзаполнение новых элементов на сервере.

## [`getPageNumber()`](BaseDataSource.getPageNumber/)

Возвращает номер страницы.

## [`setPageNumber()`](BaseDataSource.setPageNumber/)

Устанавливает номер страницы.

## [`getPageSize()`](BaseDataSource.getPageSize/)

Возвращает размер страницы.

## [`setPageSize()`](BaseDataSource.setPageSize/)

Устанавливает размер страницы.

## [`getErrorValidator()`](BaseDataSource.getErrorValidator/)

Возвращает [функцию](../../KeyConcepts/Script/) проверки элемента на ошибки.

## [`setErrorValidator()`](BaseDataSource.setErrorValidator/)

Устанавливает [функцию](../../KeyConcepts/Script/) проверки элемента на ошибки.

## [`getWarningValidator()`](BaseDataSource.getWarningValidator/)

Возвращает [функцию](../../KeyConcepts/Script/) проверки элемента на предупреждения.

## [`setWarningValidator()`](BaseDataSource.setWarningValidator/)

Устанавливает [функцию](../../KeyConcepts/Script/) проверки элемента на предупреждения.

## [`getFilter()`](BaseDataSource.getFilter/)

Возвращает фильтр элементов.

## [`setFilter()`](BaseDataSource.setFilter/)

Устанавливает фильтр элементов.

## [`isModified()`](BaseDataSource.isModified/)

Проверяет, есть ли несохраненные элементы.

## [`suspendUpdate()`](BaseDataSource.suspendUpdate/)

Запрещает обновление списка элементов.

## [`resumeUpdate()`](BaseDataSource.resumeUpdate)

Разрешает обновление списка элементов.

## [`getSelectedItem()`](BaseDataSource.getSelectedItem/)

Возвращает выделенный элемент.

## [`setSelectedItem()`](BaseDataSource.setSelectedItem/)

Устанавливает выделенный элемент.

## [`getDataBindings()`](BaseDataSource.getDataBindings/)

Возвращает список [привязок](../../DataBindings/BaseDataBinding/) источника данных.

## [`addDataBinding()`](BaseDataSource.addDataBinding/)

Добавляет [привязку](../../DataBindings/BaseDataBinding/) в список привязок источника данных.

## [`removeDataBinding()`](BaseDataSource.removeDataBinding/)

Удаляет [привязку](../../DataBindings/BaseDataBinding/) из списка привязок источника данных.

## [`createItem()`](BaseDataSource.createItem/)

Создает новый элемент в источнике данных.

## [`saveItem()`](BaseDataSource.saveItem/)

Сохраняет элемент в источнике данных.

## [`deleteItem()`](BaseDataSource.deleteItem/)

Удаляет элемент из источника данных.

## [`updateItems()`](BaseDataSource.updateItems/)

Обновляет список элементов источника данных.

## [`addNextItems()`](BaseDataSource.addNextItems/)

Добавляет в список элементов источника данных элементы со следующей страницы.

## [`getItems()`](BaseDataSource.getItems/)

Возвращает список элементов источника данных.

# Events

## [`onPageNumberChanged`](BaseDataSource.onPageNumberChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что номер страницы изменился.

## [`onPageSizeChanged`](BaseDataSource.onPageSizeChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что размер страницы изменился.

## [`onFilterChanged`](BaseDataSource.onFilterChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что фильтр элементов изменился.

## [`onSelectedItemChanged`](BaseDataSource.onSelectedItemChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что выделенный элемент изменился.

## [`onSelectedItemModified`](BaseDataSource.onSelectedItemModified/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что данные выделенного элемента изменились.

## [`onItemCreated`](BaseDataSource.onItemCreated/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что элемент создан.

## [`onItemSaved`](BaseDataSource.onItemSaved/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что элемент сохранен.

## [`onItemDeleted`](BaseDataSource.onItemDeleted/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что элемент удален.

## [`onItemsUpdated`](BaseDataSource.onItemsUpdated/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что список элементов обновлен.

## [`onItemsAdded`](BaseDataSource.onItemsAdded/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что в список элементов добавлены новые.
