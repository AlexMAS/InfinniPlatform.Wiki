---
layout: doc
title: "BaseDataSource.onWarningValidator"
position: 111
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что проверка на предупреждения завершена.

# Description

Вызов метода [`validateOnWarnings()`](../BaseDataSource.validateOnWarnings/) начинает проверку указанного
элемента или всех элементов источника данных на наличие предупреждений. Завершение проверки приводит
к возникновению события [`onWarningValidator`](../BaseDataSource.onWarningValidator/).

# Syntax

```js
BaseDataSource.onWarningValidator(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что проверка на предупреждения завершена.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.value`
содержит результаты проверки в [предопределенном формате](../ValidationResult/).

# Examples

```js
BaseDataSource.onWarningValidator(
  function(context, argument) {
    alert('Validation result does not have any warnings: ' + argument.value.isValid);
  }
);
```

# See Also

* [`validateOnWarnings()`](../BaseDataSource.validateOnWarnings/)
