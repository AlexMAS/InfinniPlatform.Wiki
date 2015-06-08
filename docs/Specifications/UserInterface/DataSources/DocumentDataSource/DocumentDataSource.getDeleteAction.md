---
layout: doc
title: "DocumentDataSource.getDeleteAction()"
position: 11
---

Возвращает наименование действия на удаление документа.

# Description

При выполнении метода [`deleteItem()`](../../BaseDataSource/BaseDataSource.deleteItem/) источник
данных [`DocumentDataSource`](../) осуществляет соответствующее обращение к InfinniPlatform. При этом
указывается наименование действия, которое необходимо совершить при выполнении операции. Чтобы переопределить
действие по умолчанию, необходимо вызвать метод [`setDeleteAction()`](../DocumentDataSource.setDeleteAction/)
и передать имя прикладного обработчика, который будет выполнен на стороне InfinniPlatform при удалении документа.

# Syntax

```js
DocumentDataSource.getDeleteAction()
```

## Returns

Наименование действия на удаление документа.

# Examples

```js
var deleteActionName = DocumentDataSource.getDeleteAction();
```

# See Also

* [`setDeleteAction()`](../DocumentDataSource.setDeleteAction/)
* [`saveItem()`](../../BaseDataSource/BaseDataSource.saveItem/)
