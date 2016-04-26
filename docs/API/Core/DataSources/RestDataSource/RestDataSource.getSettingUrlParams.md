---
layout: doc
title: "RestDataSource.getSettingUrlParams()"
position: 3
---

Возвращает параметры запроса на сохранение данных.

# Syntax

```js
RestDataSource.getSettingUrlParams(propertyName)
```

## Parameters

|Name|Description|
|----|-----------|
|propertyName|(Необязательный) Название параметра|

## Returns

Значение указанного парметра. Если propertyName не было указано, то вернёт объект со значениями всех параметров.

# Examples

```js
RestDataSource.getSettingUrlParams('data');
```

# See Also

* [`setSettingUrlParams`](../RestDataSource.setSettingUrlParams/)
