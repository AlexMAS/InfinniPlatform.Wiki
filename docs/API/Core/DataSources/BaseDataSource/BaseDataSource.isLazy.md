---
layout: doc
title: "BaseDataSource.isLazy()"
position: 24
---

Возвращает значение, является ли прогрузка данных в источнике "ленивой" или нет.

# Description

Если источник ленивый, то данные не будут загружаться автоматически. Инициировать запрос за данными можно либо создав соответсвующий [DataBinding](../../../DataBinding), либо с помощью вызова [updateItems](../BaseDataSource.updateItems/).

# Syntax

```js
BaseDataSource.isLazy()
```

## Parameters

Нет

## Returns

Возвращает `true`, если прогрузка данных в источнике является "ленивой", иначе возвращает `false`.

# Examples

```js
var isLazy = BaseDataSource.isLazy();
```

# See Also

* [`setIsLazy()`](../BaseDataSource.setIsLazy/)