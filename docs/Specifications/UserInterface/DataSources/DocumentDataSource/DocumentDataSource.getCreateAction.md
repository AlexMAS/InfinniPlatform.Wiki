---
layout: doc
title: "DocumentDataSource.getCreateAction()"
position: 5
---

Возвращает наименование действия на создание документа.

# Description

При выполнении метода [`createItem()`](../../BaseDataSource/BaseDataSource.createItem/) источник
данных [`DocumentDataSource`](../) осуществляет соответствующее обращение к InfinniPlatform. При
этом указывается наименование действия, которое необходимо совершить при выполнении операции. Чтобы
переопределить действие по умолчанию, необходимо вызвать метод [`setCreateAction()`](../DocumentDataSource.setCreateAction/)
и передать имя прикладного обработчика, который будет выполнен на стороне InfinniPlatform при
создании документа.

# Syntax

```js
DocumentDataSource.getCreateAction()
```

## Returns

Наименование действия на создание документа.

# Examples

```js
var createActionName = DocumentDataSource.getCreateAction();
```

# See Also

* [`setCreateAction()`](../DocumentDataSource.setCreateAction/)
* [`createItem()`](../../BaseDataSource/BaseDataSource.createItem/)
