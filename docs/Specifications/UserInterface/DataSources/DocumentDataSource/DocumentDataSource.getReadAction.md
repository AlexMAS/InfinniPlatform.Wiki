---
layout: doc
title: "DocumentDataSource.getReadAction()"
position: 7
---

Возвращает наименование действия на чтение документа.

# Description

При выполнении метода [`updateItems()`](../../BaseDataSource/BaseDataSource.updateItems/) или
[`addNextItems()`](../../BaseDataSource/BaseDataSource.addNextItems/) источник данных [`DocumentDataSource`](../)
осуществляет соответствующее обращение к InfinniPlatform. При этом указывается наименование действия,
которое необходимо совершить при выполнении операции. Чтобы переопределить действие по умолчанию,
необходимо вызвать метод [`setReadAction()`](../DocumentDataSource.setReadAction/) и передать имя
прикладного обработчика, который будет выполнен на стороне InfinniPlatform при чтении документа.

# Syntax

```js
DocumentDataSource.getReadAction()
```

## Returns

Наименование действия на чтение документа.

# Examples

```js
var readActionName = DocumentDataSource.getReadAction();
```

# See Also

* [`setReadAction()`](../DocumentDataSource.setReadAction/)
* [`updateItems()`](../../BaseDataSource/BaseDataSource.updateItems/)
* [`addNextItems()`](../../BaseDataSource/BaseDataSource.addNextItems/)
