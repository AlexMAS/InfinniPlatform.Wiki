---
layout: doc
title: "BaseDataSource.validateOnWarnings()"
position: 34
---

Осуществляет проверку на предупреждения.

# Description

Вызов метода [`validateOnWarnings()`](../BaseDataSource.validateOnWarnings/) начинает проверку указанного
элемента или всех элементов источника данных на наличие предупреждений. Завершение проверки приводит
к возникновению события [`onWarningValidator`](../BaseDataSource.onWarningValidator/).

# Syntax

```js
BaseDataSource.validateOnWarnings([item[, callback]])
```

## Parameters

`item`

Необязательный. Элемент источника данных. Если указан, на наличие предупреждений проверяется только
указанный элемент; если не указан на наличие предупреждений проверяются все элементы.

`callback`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что проверка на
предупреждения завершена. В параметре `argument` передается информация о произошедшем событии.
Свойство `argument.value` содержит результаты проверки в [предопределенном формате](../ValidationResult/).

# Examples

```js
BaseDataSource.validateOnWarnings(
  BaseDataSource.getSelectedItem(),
  function(context, argument) {
    alert('Selected item does not have any warnings: ' + argument.value.isValid);
  }
);
```

# See Also

* [`onWarningValidator`](../BaseDataSource.onWarningValidator/)
* [`validateOnErrors()`](../BaseDataSource.validateOnWarnings/)
* [`getWarningValidator()`](../BaseDataSource.getWarningValidator/)
* [`setWarningValidator()`](../BaseDataSource.setWarningValidator/)
* [`ValidationResult`](../ValidationResult/)
