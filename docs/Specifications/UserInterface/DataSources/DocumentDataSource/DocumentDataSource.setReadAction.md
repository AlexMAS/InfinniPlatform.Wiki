---
layout: doc
title: "DocumentDataSource.setReadAction()"
position: 8
---

Устанавливает наименование действия на чтение документа.

# Description

При выполнении метода [`updateItems()`](../../BaseDataSource/BaseDataSource.updateItems/) или
[`addNextItems()`](../../BaseDataSource/BaseDataSource.addNextItems/) источник данных [`DocumentDataSource`](../)
осуществляет соответствующее обращение к InfinniPlatform. При этом указывается наименование действия,
которое необходимо совершить при выполнении операции. Чтобы переопределить действие по умолчанию,
необходимо вызвать метод [`setReadAction()`](../DocumentDataSource.setReadAction/) и передать имя
прикладного обработчика, который будет выполнен на стороне InfinniPlatform при чтении документа.

# Syntax

```js
DocumentDataSource.setReadAction(value)
```

## Parameters

`value`

Наименование действия на чтение документа.

# Examples

```js
DocumentDataSource.setReadAction('MyReadAction');
```

# See Also

* [`getReadAction()`](../DocumentDataSource.getReadAction/)
* [`updateItems()`](../../BaseDataSource/BaseDataSource.updateItems/)
* [`addNextItems()`](../../BaseDataSource/BaseDataSource.addNextItems/)
