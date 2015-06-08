---
layout: doc
title: "DocumentDataSource.setCreateAction()"
position: 6
---

Устанавливает наименование действия на создание документа.

# Description

При выполнении метода [`createItem()`](../../BaseDataSource/BaseDataSource.createItem/) источник
данных [`DocumentDataSource`](../) осуществляет соответствующее обращение к InfinniPlatform. При
этом указывается наименование действия, которое необходимо совершить при выполнении операции. Чтобы
переопределить действие по умолчанию, необходимо вызвать метод [`setCreateAction()`](../DocumentDataSource.setCreateAction/)
и передать имя прикладного обработчика, который будет выполнен на стороне InfinniPlatform при
создании документа.

# Syntax

```js
DocumentDataSource.setCreateAction(value)
```

## Parameters

`value`

Наименование действия на создание документа.

# Examples

```js
DocumentDataSource.setCreateAction('MyCreateAction');
```

# See Also

* [`getCreateAction()`](../DocumentDataSource.getCreateAction/)
* [`createItem()`](../../BaseDataSource/BaseDataSource.createItem/)
