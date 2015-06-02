---
layout: doc
title: "BaseDataSource"
position: 0
---

Базовый тип источников данных представления.

# Methods

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

Возвращает номер страницы по умолчанию.

## [`setPageNumber()`](BaseDataSource.setPageNumber/)

Устанавливает номер страницы по умолчанию.

## [`getPageSize()`](BaseDataSource.getPageSize/)

Возвращает размер страницы по умолчанию.

## [`setPageSize()`](BaseDataSource.setPageSize/)

Устанавливает размер страницы по умолчанию.

## [`getErrorValidator()`](BaseDataSource.getErrorValidator/)

Возвращает функцию проверки элемента на ошибки.

## [`setErrorValidator()`](BaseDataSource.setErrorValidator/)

Устанавливает функцию проверки элемента на ошибки.

## [`getWarningValidator()`](BaseDataSource.getWarningValidator/)

Возвращает функцию проверки элемента на предупреждения.

## [`setWarningValidator()`](BaseDataSource.setWarningValidator/)

Устанавливает функцию проверки элемента на предупреждения.

## [`getFilter()`](BaseDataSource.getFilter/)

Возвращает фильтр элементов.

## [`setFilter()`](BaseDataSource.setFilter/)

Устанавливает фильтр элементов.

## [`isModified()`](BaseDataSource.isModified/)

Возвращает, есть ли несохраненные элементы.

## [`suspendUpdate()`](BaseDataSource.suspendUpdate/)

Запрещает обновление списка элементов.

## [`resumeUpdate()`](BaseDataSource.resumeUpdate)

Разрешает обновление списка элементов.

## [`getSelectedItem()`](BaseDataSource.getSelectedItem/)

Возвращает выделенный элемент.

## [`setSelectedItem()`](BaseDataSource.setSelectedItem/)

Устанавливает выделенный элемент.

## [`getDataBindings()`](BaseDataSource.getDataBindings/)

Возвращает список привязок источника данных.

## [`addDataBinding()`](BaseDataSource.addDataBinding/)

Добавляет привязку в список привязок источника данных.

## [`removeDataBinding()`](BaseDataSource.removeDataBinding/)

Удаляет привязку из списка привязок источника данных.

## [`createItem()`](BaseDataSource.createItem/)

Создает новый элемент в источнике данных.

## [`saveItem()`](BaseDataSource.saveItem/)

Сохраняет элемент в источнике данных.

## [`getItems()`](BaseDataSource.getItems/)

Возвращает список элементов источника данных.

## [`updateItems()`](BaseDataSource.updateItems/)

Обновляет список элементов источника данных.

## [`deleteItem()`](BaseDataSource.deleteItem/)

Удаляет элемент из источника данных.

# Events

## [`onPageNumberChanged`](BaseDataSource.onPageNumberChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что номер страницы изменился.

## [`onPageSizeChanged`](BaseDataSource.onPageSizeChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что размер страницы изменился.

## [`onSelectedItemChanged`](BaseDataSource.onSelectedItemChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что выделенный элемент изменился.

## [`onSelectedItemModified`](BaseDataSource.onSelectedItemModified/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что данные выделенного элемента изменились.

## [`onFilterChanged`](BaseDataSource.onFilterChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что фильтр элементов изменился.

## [`onItemSaved`](BaseDataSource.onItemSaved/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что элемент сохранен.

## [`onItemDeleted`](BaseDataSource.onItemDeleted/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что элемент удален.

## [`onItemsUpdated`](BaseDataSource.onItemsUpdated/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что список элементов обновлен.
