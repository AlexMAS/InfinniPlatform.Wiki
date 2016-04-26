---
layout: doc
title: "RestDataSource.setDeletingUrlParams()"
position: 6
---

Устанавливает параметры запроса на удаление.

# Syntax

```js
RestDataSource.setDeletingUrlParams(propertyName, value)
RestDataSource.setDeletingUrlParams(value)
```

## Parameters

|Name|Description|
|----|-----------|
|propertyName|Название параметра|
|value|Значение параметров/параметра|

## Returns

Метод ничего не возвращает

# Examples

```js
RestDataSource.setDeletingUrlParams("data.filter", "eq(_id, '<%_id%>')");

RestDataSource.setDeletingUrlParams({
	type: 'delete',
    origin:'http://some.ru',
    path:'/delete/user/',
    params: {
        _id: 'c852edce7d'
    }
});
```

# See Also

* [`getDeletingUrlParams`](../RestDataSource.getDeletingUrlParams/)
