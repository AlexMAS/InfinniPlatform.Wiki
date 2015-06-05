---
layout: doc
title: "BaseDataSource.onItemsAdded"
position: 109
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что в список элементов добавлены новые.

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
BaseDataSource.onItemsAdded(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что в список элементов добавлены новые.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.value`
содержит ссылку на список добавленных элементов.

# Examples

```js
BaseDataSource.onItemsAdded(
  function(context, argument) { alert('New items are added!'); }
);
```
