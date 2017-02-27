---
layout: doc
title: "BaseDataSource.getValidationResult()"
position: 35
---

Возвращает [`результат`](../ValidationResult/) проверки на ошибки.

# Syntax

```js
BaseDataSource.getValidationResult([item])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|item| |Элемент источника данных. Если указан, на наличие ошибок проверяется только указанный элемент; если не указан на наличие ошибок проверяются все элементы|

## Returns

[Результат](../ValidationResult/) проверки на ошибки

# Examples

```js
var validationResult = BaseDataSource.getValidationResult(
						  BaseDataSource.getSelectedItem()
						);
```

# See Also

* [`onErrorValidator`](../BaseDataSource.onErrorValidator/)
* [`getErrorValidator()`](../BaseDataSource.getErrorValidator/)
* [`setErrorValidator()`](../BaseDataSource.setErrorValidator/)
* [`saveItem()`](../BaseDataSource.saveItem/)
* [`ValidationResult`](../ValidationResult/)
