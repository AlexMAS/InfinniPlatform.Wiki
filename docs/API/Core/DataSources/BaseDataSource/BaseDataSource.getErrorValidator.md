---
layout: doc
title: "BaseDataSource.getErrorValidator()"
position: 12
---

Возвращает [функцию](../../../Script/) проверки элемента на ошибки.

# Description

[Функция](../../../Script/) проверки элемента на ошибки в параметре `args` принимает
элемент источника данных, который необходимо проверить. Результатом работы функции является объект
[предопределенного формата](../ValidationResult/).

# Syntax

```js
BaseDataSource.getErrorValidator()
```

## Parameters

Нет

## Returns

[Функция](../../../Script/) проверки элемента на ошибки.

# Examples

```js
var errorValidator = BaseDataSource.getErrorValidator();
```

# See Also

* [`setErrorValidator()`](../BaseDataSource.setErrorValidator/)
* [`validateOnErrors()`](../BaseDataSource.validateOnErrors/)
* [`saveItem()`](../BaseDataSource.saveItem/)
* [`ValidationResult`](../ValidationResult/)
