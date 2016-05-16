---
layout: doc
title: "BaseDataSource.setIsLazy()"
position: 25
---

Устанавливает значение, является ли прогрузка данных в источнике "ленивой" или нет.

# Description

Если источник ленивый, то данные не будут загружаться автоматически. Инициировать запрос за данными можно либо создав соответсвующий [DataBinding](../../../DataBinding), либо с помощью вызова [updateItems](../BaseDataSource.updateItems/).  
По умолчанию источник данных является ленивым.

# Syntax

```js
BaseDataSource.setIsLazy(value)
```

## Parameters

|Name|Description|
|----|-----------|
|value|Логическое значение, определяющее, является ли прогрузка данных в источнике "ленивой" или нет|

## Returns

Метод ничего не возвращает.

# Examples

```js
BaseDataSource.setIsLazy(false);
```

# See Also

* [`isLazy()`](../BaseDataSource.isLazy/)