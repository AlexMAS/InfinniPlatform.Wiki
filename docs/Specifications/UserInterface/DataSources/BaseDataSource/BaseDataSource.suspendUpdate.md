---
layout: doc
title: "BaseDataSource.suspendUpdate()"
position: 20
---

Запрещает обновление списка элементов.

# Syntax

```js
BaseDataSource.suspendUpdate()
```

# Examples

```js
BaseDataSource.suspendUpdate();
BaseDataSource.setPageNumber(5);
BaseDataSource.setPageSize(20);
BaseDataSource.resumeUpdate();
```
