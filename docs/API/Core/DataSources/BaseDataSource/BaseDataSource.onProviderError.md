---
layout: doc
title: "BaseDataSource.onProviderError"
position: 107
---

Обработчик события о том, что [поставщик данных](/docs/API/Core/DataProviders/) вернул ошибку.

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
