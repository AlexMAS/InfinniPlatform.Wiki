---
layout: doc
title: "BaseDataSource.addNextItems()"
position: 32
---

Добавляет в список элементов источника данных элементы со следующей страницы.

# Description

Вызов метода [`addNextItems()`](../BaseDataSource.addNextItems/) производит загрузку элементов со
следующей страницы. Загруженные элементы добавляются к уже существующим, таким образом, в отличие от
метода [`updateItems()`](../BaseDataSource.updateItems/), несохраненные изменения не будут потеряны.
Загрузка элементов производится с учетом установленного [номера](../BaseDataSource.getPageNumber/)
и [размера](../BaseDataSource.getPageSize/) страницы, а также всех имеющихся [фильтров](../BaseDataSource.getFilter/).
После загрузки очередной страницы [номер текущей страницы](../BaseDataSource.getPageNumber/) увеличивается
на 1. Успешное добавление в список элементов источника данных элементов со следующей страницы приводит
к возникновению события [`onItemsAdded`](../BaseDataSource.onItemsAdded/).

# Syntax

```js
BaseDataSource.addNextItems([success[, error]])
```

## Parameters

`success`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что в список элементов
добавлены новые. В параметре `argument` передается информация о произошедшем событии. Свойство
`argument.value` содержит ссылку на список добавленных элементов.

`error`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что при добавлении элементов
со следующей страницы произошла ошибка. В параметре `argument` передается информация о произошедшем
событии. Свойство `argument.error` содержит информацию об ошибке.

# Examples

```js
BaseDataSource.addNextItems();
```

# See Also

* [`onItemsAdded`](../BaseDataSource.onItemsAdded/)
* [`getPageNumber()`](../BaseDataSource.getPageNumber/)
* [`getPageSize()`](../BaseDataSource.getPageSize/)
* [`getFilter()`](../BaseDataSource.getFilter/)
* [`isModified()`](../BaseDataSource.isModified/)
* [`updateItems()`](../BaseDataSource.updateItems/)
