---
layout: doc
title: "BaseDataSource.onProviderErrorHandler"
position: 108
---

Возвращает [обработчик события](../../../Script/) о том, что [поставщик данных](/docs/API/Core/DataProviders/) вернул ошибку. Свойство предназначено только для чтения.

# Syntax

```js
BaseDataSource.onProviderErrorHandler
```

## Returns

[Обработчик события](../../../Script/) о том, что [поставщик данных](/docs/API/Core/DataProviders/) вернул ошибку.

# Examples

```js
var oldOnProviderErrorHandler = BaseDataSource.onProviderErrorHandler;
BaseDataSource.onProviderError(function(context, args){
	if( oldOnProviderErrorHandler instanceof Function ) {
		oldOnProviderErrorHandler(context, args);
	}
	newOnProviderErrorHandler(context, args);
});
```

# See Also

* [`onProviderError()`](../BaseDataSource.onProviderError/)
