---
layout: doc
title: "BaseDataSource.onProviderError"
position: 107
---

Устанавливает обработчик события о том, что [поставщик данных](/docs/API/Core/DataProviders/) вернул ошибку. Узнать (только получить, но не переопределить!) текущий обработчик можно с помощью свойства [onProviderErrorHandler](../BaseDataSource.onProviderErrorHandler/).

# Syntax

```js
BaseDataSource.onProviderError(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback<sup>*</sup>|[Script](../../../Script/)|Обработчик события о том, что [поставщик данных](/docs/API/Core/DataProviders/) вернул ошибку|

<sup>*</sup> Обязательный аргумент.

# Examples

```js
BaseDataSource.onProviderError(
  function(context, args) { alert('Provider Error'); }
);
```

# See Also

* [`DataProvider`](/docs/API/Core/DataProviders/)
* [`onProviderErrorHandler`](../BaseDataSource.onProviderErrorHandler/)
