---
layout: doc
title: "BaseDataSource.setWarningValidator()"
position: 14
---

Устанавливает [функцию](../../../KeyConcepts/Script/) проверки элемента на предупреждения.

# Description

[Функция](../../../KeyConcepts/Script/) проверки элемента на предупреждения в параметре `argument` принимает
элемент источника данных, который необходимо проверить. Результатом работы функции является объект
[предопределенного формата](../ValidationResult/).

# Syntax

```js
BaseDataSource.setWarningValidator(value)
```

## Parameters

`value`

[Функция](../../../KeyConcepts/Script/) проверки элемента на предупреждения.

# Examples

```js
BaseDataSource.setWarningValidator(
  function(context, argument) {
    if (argument.Birthday < new Date()) {
      return {
        isValid: true
      };
    }
    else {
      return {
        isValid: false,
        items: [
          {
            property: 'Birthday',
            message: 'Birthday is greater than current date'
          }
        ]
      };
    }
  }
);
```

# See Also

* [`getWarningValidator()`](../BaseDataSource.getWarningValidator/)
* [`getErrorValidator()`](../BaseDataSource.getErrorValidator/)
* [`setErrorValidator()`](../BaseDataSource.setErrorValidator/)
* [`validateOnWarnings()`](../BaseDataSource.validateOnWarnings/)
* [`ValidationResult`](../ValidationResult/)
