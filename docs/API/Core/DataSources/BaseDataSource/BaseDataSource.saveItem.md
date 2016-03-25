---
layout: doc
title: "BaseDataSource.saveItem()"
position: 29
---

Сохраняет элемент в источнике данных.

# Description

Вызов метода [`saveItem()`](../BaseDataSource.saveItem/) производит сохранение всех изменений
указанного элемента в соответствующем источнику данных хранилище. Сохранение производится только
в том случае, если указанный элемент [не содержит ошибок](../BaseDataSource.validateOnErrors/).
Успешное сохранение элемента приводит к возникновению события [`onItemSaved`](../BaseDataSource.onItemSaved/).

# Syntax

```js
BaseDataSource.saveItem(item, [success[, error]])
```

## Parameters

`item`

Элемент источника данных.

`success`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что элемент сохранен.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.value`
содержит ссылку на сохраненный элемент.

`error`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что при сохранении элемента
произошла ошибка. В параметре `argument` передается информация о произошедшем событии. Свойство
`argument.error` содержит информацию об ошибке.

# Examples

```js
var items = BaseDataSource.getItems();
BaseDataSource.saveItem(items[0]);
```

# See Also

* [`onItemSaved`](../BaseDataSource.onItemSaved/)
* [`createItem()`](../BaseDataSource.createItem/)
* [`deleteItem()`](../BaseDataSource.deleteItem/)
* [`validateOnErrors()`](../BaseDataSource.validateOnErrors/)
