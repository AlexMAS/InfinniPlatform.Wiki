---
layout: doc
title: "BaseDataSource.onErrorValidator"
position: 110
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что проверка на ошибки завершена.

# Description

Вызов метода [`validateOnErrors()`](../BaseDataSource.validateOnErrors/) начинает проверку указанного
элемента или всех элементов источника данных на наличие ошибок. Завершение проверки приводит к
возникновению события [`onErrorValidator`](../BaseDataSource.onErrorValidator/).

# Syntax

```js
BaseDataSource.onErrorValidator(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что проверка на ошибки завершена.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.value`
содержит результаты проверки в [предопределенном формате](../ValidationResult/).

# Examples

```js
BaseDataSource.onErrorValidator(
  function(context, argument) {
    alert('Validation result does not have any errors: ' + argument.value.isValid);
  }
);
```

# See Also

* [`validateOnErrors()`](../BaseDataSource.validateOnErrors/)
