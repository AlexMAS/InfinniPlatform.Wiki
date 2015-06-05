---
layout: doc
title: "BaseDataSource.createItem()"
position: 27
---

Создает новый элемент в источнике данных.

# Description

Вызов метода [`createItem()`](../BaseDataSource.createItem/) приводит к созданию нового элемента в
источнике данных, однако этот элемент создается только в оперативной памяти на стороне клиента, иначе
говоря не сохраняется на сервере до тех пор, пока явно не будет вызван метод [`saveItem()`](../BaseDataSource.saveItem/).
При создании нового элемента в источнике данных может происходить предзаполнение нового элемента.
Необходимость предзаполнения можно установить с помощью метода [`setFillCreatedItem()`](../BaseDataSource.setFillCreatedItem/).
Успешное создание нового нового элемента в источнике данных приводит к возникновению события
[`onItemCreated`](../BaseDataSource.onItemCreated/).

# Syntax

```js
BaseDataSource.createItem([success[, error]])
```

## Parameters

`success`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что элемент создан.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.value`
содержит ссылку на созданный элемент.

`error`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что при создании элемента
произошла ошибка. В параметре `argument` передается информация о произошедшем событии. Свойство
`argument.error` содержит информацию об ошибке.

# Examples

```js
BaseDataSource.createItem(
  function(context, argument) { alert('New item is created!'); }
);
```

# See Also

* [`onItemCreated`](../BaseDataSource.onItemCreated/)
* [`saveItem()`](../BaseDataSource.saveItem/)
* [`deleteItem()`](../BaseDataSource.deleteItem/)
* [`getFillCreatedItem()`](../BaseDataSource.getFillCreatedItem/)
* [`setFillCreatedItem()`](../BaseDataSource.setFillCreatedItem/)
