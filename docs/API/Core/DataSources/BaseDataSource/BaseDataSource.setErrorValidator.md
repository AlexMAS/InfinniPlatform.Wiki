---
layout: doc
title: "BaseDataSource.setErrorValidator()"
position: 13
---

Устанавливает [функцию](../../../Script/) проверки элемента на ошибки.

# Description

[Функция](../../../Script/) проверки элемента на ошибки в параметре `args` принимает
элемент источника данных, который необходимо проверить. Результатом работы функции является объект
[предопределенного формата](../ValidationResult/).

# Syntax

```js
BaseDataSource.setErrorValidator(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[Script](../../../Script/)|Функция проверки элемента на ошибки|

## Returns

Метод ничего не возвращает

# Examples

```js
BaseDataSource.setErrorValidator(
  function(context, args) {
    if (/^[a-z]+$/i.test(args.FirstName)) {
      return {
        IsValid: true
      };
    }
    else {
      return {
        IsValid: false,
        Items: [
          {
            Property: 'FirstName',
            Message: 'First name should contains Latin symbols only'
          }
        ]
      };
    }
  }
);
```

# See Also

* [`getErrorValidator()`](../BaseDataSource.getErrorValidator/)
* [`getValidationResult()`](../BaseDataSource.getValidationResult/)
* [`saveItem()`](../BaseDataSource.saveItem/)
* [`ValidationResult`](../ValidationResult/)
