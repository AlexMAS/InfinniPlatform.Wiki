---
layout: doc
title: "BaseDataSource.setWarningValidator()"
position: 15
---

Устанавливает [функцию](../../../Script/) проверки элемента на предупреждения.

# Description

[Функция](../../../Script/) проверки элемента на предупреждения в параметре `args` принимает
элемент источника данных, который необходимо проверить. Результатом работы функции является объект
[предопределенного формата](../ValidationResult/).

# Syntax

```js
BaseDataSource.setWarningValidator(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[Script](../../../Script/)|Функция проверки элемента на предупреждения|

# Examples

```js
BaseDataSource.setWarningValidator(
  function(context, args) {
    if (args.Birthday < new Date()) {
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
