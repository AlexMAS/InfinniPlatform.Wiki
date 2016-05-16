---
layout: doc
title: "RestDataSource.setGettingUrlParams()"
position: 2
---

Устанавливает параметры запроса на получение данных.

# Syntax

```js
RestDataSource.setGettingUrlParams(propertyName, value)
RestDataSource.setGettingUrlParams(value)
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
RestDataSource.setGettingUrlParams('origin', 'http://some.ru');
```

```js
RestDataSource.setGettingUrlParams({
	type: 'get',
    origin:'http://some.ru',
    path:'/some/id<%param1%><%param2%>?a=2&b=<%param1%><%param3%>',
    data: {},

    params: {
        param1: 4,
        param2: missParam ? undefined : '/',
        param3: '&c=4'
    }
});
```

# See Also

* [`getGettingUrlParams`](../RestDataSource.getGettingUrlParams/)
