---
layout: doc
title: "RestDataSource.getGettingUrlParams()"
position: 1
---

Возвращает параметры запроса на получение данных.

# Syntax

```js
RestDataSource.getGettingUrlParams(propertyName)
```

## Parameters

|Name|Description|
|----|-----------|
|propertyName|(Необязательный) Название параметра|

## Returns

Значение указанного парметра. Если propertyName не было указано, то вернёт объект со значениями всех параметров.

# Examples

```js
RestDataSource.getGettingUrlParams('path');
```

# See Also

* [`setGettingUrlParams`](../RestDataSource.setGettingUrlParams/)
