---
layout: doc
title: "BaseDataSource.validateOnErrors()"
position: 34
---

Осуществляет проверку на ошибки.

# Description

Вызов метода [`validateOnErrors()`](../BaseDataSource.validateOnErrors/) начинает проверку указанного
элемента или всех элементов источника данных на наличие ошибок. Завершение проверки приводит к
возникновению события [`onErrorValidator`](../BaseDataSource.onErrorValidator/).

# Syntax

```js
BaseDataSource.validateOnErrors([item[, callback]])
```

## Parameters

`item`

Необязательный. Элемент источника данных. Если указан, на наличие ошибок проверяется только указанный
элемент; если не указан на наличие ошибок проверяются все элементы.

`callback`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что проверка на ошибки
завершена. В параметре `argument` передается информация о произошедшем событии. Свойство
`argument.value` содержит результаты проверки в [предопределенном формате](../ValidationResult/).

# Examples

```js
BaseDataSource.validateOnErrors(
  BaseDataSource.getSelectedItem(),
  function(context, argument) {
    alert('Selected item does not have any errors: ' + argument.value.isValid);
  }
);
```

# See Also

* [`onErrorValidator`](../BaseDataSource.onErrorValidator/)
* [`validateOnWarnings()`](../BaseDataSource.validateOnWarnings/)
* [`getErrorValidator()`](../BaseDataSource.getErrorValidator/)
* [`setErrorValidator()`](../BaseDataSource.setErrorValidator/)
* [`saveItem()`](../BaseDataSource.saveItem/)
* [`ValidationResult`](../ValidationResult/)
