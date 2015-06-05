---
layout: doc
title: "BaseDataSource.onItemsUpdated"
position: 108
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что список элементов обновлен.

# Description

Вызов метода [`updateItems()`](../BaseDataSource.updateItems/) производит загрузку списка элементов
из соответствующего источнику данных хранилища. Если в источнике данных были несохраненные изменения,
они будут потеряны, так как загруженные ранее данные будут заменены (обновлены) новыми. Загрузка
элементов производится с учетом установленного [номера](../BaseDataSource.getPageNumber/)
и [размера](../BaseDataSource.getPageSize/) страницы, а также всех имеющихся [фильтров](../BaseDataSource.getFilter/).
Успешное обновление списка элементов приводит к возникновению события [`onItemsUpdated`](../BaseDataSource.onItemsUpdated/).

# Syntax

```js
BaseDataSource.onItemsUpdated(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что список элементов обновлен. В параметре
`argument` передается информация о произошедшем событии. Свойство `argument.value` содержит ссылку
на список загруженных элементов.

# Examples

```js
BaseDataSource.onItemsUpdated(
  function(context, argument) { alert('Items are updated!'); }
);
```

# See Also

* [`updateItems()`](../BaseDataSource.updateItems/)
