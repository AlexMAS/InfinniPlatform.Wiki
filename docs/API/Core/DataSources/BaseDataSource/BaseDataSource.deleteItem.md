---
layout: doc
title: "BaseDataSource.deleteItem()"
position: 30
---

Сохраняет элемент в источнике данных.

# Description

Вызов метода [`deleteItem()`](../BaseDataSource.deleteItem/) производит удаление указанного элемента
в соответствующем источнику данных хранилище. Успешное удаление элемента приводит к возникновению
события [`onItemDeleted`](../BaseDataSource.onItemDeleted/).

# Syntax

```js
BaseDataSource.deleteItem(item, [success[, error]])
```

## Parameters

`item`

Элемент источника данных.

`success`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что элемент удален.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.value`
содержит ссылку на удаленный элемент.

`error`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что при удалении элемента
произошла ошибка. В параметре `argument` передается информация о произошедшем событии. Свойство
`argument.error` содержит информацию об ошибке.

# Examples

```js
var items = BaseDataSource.getItems();
BaseDataSource.deleteItem(items[0]);
```

# See Also

* [`onItemDeleted`](../BaseDataSource.onItemDeleted/)
* [`createItem()`](../BaseDataSource.createItem/)
* [`saveItem()`](../BaseDataSource.saveItem/)
