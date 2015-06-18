---
layout: doc
title: "BaseDataSource.updateItems()"
position: 31
---

Обновляет список элементов источника данных.

# Description

Вызов метода [`updateItems()`](../BaseDataSource.updateItems/) производит загрузку списка элементов
из соответствующего источнику данных хранилища. Если в источнике данных были несохраненные изменения,
они будут потеряны, так как загруженные ранее данные будут заменены (обновлены) новыми. Загрузка
элементов производится с учетом установленного [номера](../BaseDataSource.getPageNumber/)
и [размера](../BaseDataSource.getPageSize/) страницы, а также всех имеющихся [фильтров](../BaseDataSource.getFilter/).
Успешное обновление списка элементов приводит к возникновению события [`onItemsUpdated`](../BaseDataSource.onItemsUpdated/).

# Syntax

```js
BaseDataSource.updateItems([success[, error]])
```

## Parameters

`success`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что список элементов обновлен.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.value` содержит
ссылку на список загруженных элементов.

`error`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что при обновлении списка
элементов произошла ошибка. В параметре `argument` передается информация о произошедшем событии.
Свойство `argument.error` содержит информацию об ошибке.

# Examples

```js
BaseDataSource.updateItems();
```

# See Also

* [`onItemsUpdated`](../BaseDataSource.onItemsUpdated/)
* [`getPageNumber()`](../BaseDataSource.getPageNumber/)
* [`getPageSize()`](../BaseDataSource.getPageSize/)
* [`getFilter()`](../BaseDataSource.getFilter/)
* [`isModified()`](../BaseDataSource.isModified/)
* [`addNextItems()`](../BaseDataSource.addNextItems/)
