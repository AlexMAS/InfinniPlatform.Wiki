---
layout: doc
title: "DocumentDataSource.setDeleteAction()"
position: 12
---

Устанавливает наименование действия на удаление документа.

# Description

При выполнении метода [`deleteItem()`](../../BaseDataSource/BaseDataSource.deleteItem/) источник
данных [`DocumentDataSource`](../) осуществляет соответствующее обращение к InfinniPlatform. При этом
указывается наименование действия, которое необходимо совершить при выполнении операции. Чтобы переопределить
действие по умолчанию, необходимо вызвать метод [`setDeleteAction()`](../DocumentDataSource.setDeleteAction/)
и передать имя прикладного обработчика, который будет выполнен на стороне InfinniPlatform при удалении документа.

# Syntax

```js
DocumentDataSource.setDeleteAction(value)
```

## Parameters

`value`

Наименование действия на удаление документа.

# Examples

```js
DocumentDataSource.setDeleteAction('MyUpdateAction');
```

# See Also

* [`getDeleteAction()`](../DocumentDataSource.getDeleteAction/)
* [`saveItem()`](../../BaseDataSource/BaseDataSource.saveItem/)
