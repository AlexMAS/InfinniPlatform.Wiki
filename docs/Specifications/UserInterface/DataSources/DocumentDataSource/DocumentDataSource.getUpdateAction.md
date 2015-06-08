---
layout: doc
title: "DocumentDataSource.getUpdateAction()"
position: 9
---

Возвращает наименование действия на изменение документа.

# Description

При выполнении метода [`saveItem()`](../../BaseDataSource/BaseDataSource.saveItem/) источник данных
[`DocumentDataSource`](../) осуществляет соответствующее обращение к InfinniPlatform. При этом
указывается наименование действия, которое необходимо совершить при выполнении операции. Чтобы
переопределить действие по умолчанию, необходимо вызвать метод [`setUpdateAction()`](../DocumentDataSource.setUpdateAction/)
и передать имя прикладного обработчика, который будет выполнен на стороне InfinniPlatform при
изменении документа.

# Syntax

```js
DocumentDataSource.getUpdateAction()
```

## Returns

Наименование действия на изменение документа.

# Examples

```js
var updateActionName = DocumentDataSource.getUpdateAction();
```

# See Also

* [`setUpdateAction()`](../DocumentDataSource.setUpdateAction/)
* [`saveItem()`](../../BaseDataSource/BaseDataSource.saveItem/)
