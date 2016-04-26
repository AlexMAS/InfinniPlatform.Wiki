---
layout: doc
title: "RestDataSource.getDeletingUrlParams()"
position: 5
---

Возвращает параметры запроса на удаление.

# Syntax

```js
RestDataSource.getDeletingUrlParams(propertyName)
```

## Parameters

|Name|Description|
|----|-----------|
|propertyName|(Необязательный) Название параметра|

## Returns

Значение указанного парметра. Если propertyName не было указано, то вернёт объект со значениями всех параметров.

# Examples

```js
RestDataSource.getDeletingUrlParams('origin');
```

# See Also

* [`setDeletingUrlParams`](../RestDataSource.setDeletingUrlParams/)
