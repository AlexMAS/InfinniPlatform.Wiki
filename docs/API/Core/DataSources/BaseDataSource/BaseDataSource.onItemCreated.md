---
layout: doc
title: "BaseDataSource.onItemCreated"
position: 105
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что элемент создан.

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
BaseDataSource.onItemCreated(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что элемент создан. В параметре `argument`
передается информация о произошедшем событии. Свойство `argument.value` содержит ссылку на созданный
элемент.

# Examples

```js
BaseDataSource.onItemCreated(
  function(context, argument) { alert('New item is created!'); }
);
```

# See Also

* [`createItem()`](../BaseDataSource.createItem/)
* [`isModified()`](../BaseDataSource.isModified/)
* [`getFillCreatedItem()`](../BaseDataSource.getFillCreatedItem/)
* [`setFillCreatedItem()`](../BaseDataSource.setFillCreatedItem/)
