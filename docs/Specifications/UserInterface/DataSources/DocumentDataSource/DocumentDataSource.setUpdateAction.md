---
layout: doc
title: "DocumentDataSource.setUpdateAction()"
position: 10
---

Устанавливает наименование действия на изменение документа.

# Description

При выполнении метода [`saveItem()`](../../BaseDataSource/BaseDataSource.saveItem/) источник данных
[`DocumentDataSource`](../) осуществляет соответствующее обращение к InfinniPlatform. При этом
указывается наименование действия, которое необходимо совершить при выполнении операции. Чтобы
переопределить действие по умолчанию, необходимо вызвать метод [`setUpdateAction()`](../DocumentDataSource.setUpdateAction/)
и передать имя прикладного обработчика, который будет выполнен на стороне InfinniPlatform при
изменении документа.

# Syntax

```js
DocumentDataSource.setUpdateAction(value)
```

## Parameters

`value`

Наименование действия на изменение документа.

# Examples

```js
DocumentDataSource.setUpdateAction('MyUpdateAction');
```

# See Also

* [`getUpdateAction()`](../DocumentDataSource.getUpdateAction/)
* [`saveItem()`](../../BaseDataSource/BaseDataSource.saveItem/)
