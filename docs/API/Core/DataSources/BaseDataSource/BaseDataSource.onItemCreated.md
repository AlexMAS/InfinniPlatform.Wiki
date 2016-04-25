---
layout: doc
title: "BaseDataSource.onItemCreated"
position: 102
---

Устанавливает [обработчик события](../../../Script/) о том, что элемент создан.

# Description

Вызов метода [`createItem()`](../BaseDataSource.createItem/) приводит к созданию нового элемента в
источнике данных, однако этот элемент создается только в оперативной памяти на стороне клиента, иначе
говоря не сохраняется на сервере до тех пор, пока явно не будет вызван метод [`saveItem()`](../BaseDataSource.saveItem/).
Успешное создание нового нового элемента в источнике данных приводит к возникновению события
[`onItemCreated`](../BaseDataSource.onItemCreated/).

# Syntax

```js
BaseDataSource.onItemCreated(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback|[Script](../../../Script/)|Обработчик события о том, что элемент создан. Параметр `args` данного обработчика содержит поле value - созданный элемент|

# Examples

```js
BaseDataSource.onItemCreated(
  function(context, args) { alert('New item is created!'); }
);
```

# See Also

* [`createItem()`](../BaseDataSource.createItem/)
* [`isModified()`](../BaseDataSource.isModified/)
* [`getFillCreatedItem()`](../BaseDataSource.getFillCreatedItem/)
* [`setFillCreatedItem()`](../BaseDataSource.setFillCreatedItem/)
