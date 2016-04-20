---
layout: doc
title: "BaseDataSource.setErrorValidator()"
position: 12
---

Устанавливает [функцию](../../../KeyConcepts/Script/) проверки элемента на ошибки.

# Description

[Функция](../../../KeyConcepts/Script/) проверки элемента на ошибки в параметре `argument` принимает
элемент источника данных, который необходимо проверить. Результатом работы функции является объект
[предопределенного формата](../ValidationResult/).

# Syntax

```js
BaseDataSource.setErrorValidator(value)
```

## Parameters

`value`

[Функция](../../../KeyConcepts/Script/) проверки элемента на ошибки.

# Examples

```js
BaseDataSource.setErrorValidator(
  function(context, argument) {
    if (/^[a-z]+$/i.test(argument.FirstName)) {
      return {
        isValid: true
      };
    }
    else {
      return {
        isValid: false,
        items: [
          {
            property: 'FirstName',
            message: 'First name should contains Latin symbols only'
          }
        ]
      };
    }
  }
);
```

# See Also

* [`getErrorValidator()`](../BaseDataSource.getErrorValidator/)
* [`getWarningValidator()`](../BaseDataSource.getWarningValidator/)
* [`setWarningValidator()`](../BaseDataSource.setWarningValidator/)
* [`validateOnErrors()`](../BaseDataSource.validateOnErrors/)
* [`saveItem()`](../BaseDataSource.saveItem/)
* [`ValidationResult`](../ValidationResult/)
