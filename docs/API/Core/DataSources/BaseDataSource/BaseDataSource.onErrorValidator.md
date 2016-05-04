---
layout: doc
title: "BaseDataSource.onErrorValidator"
position: 106
---

Устанавливает [обработчик события](../../../Script/) о том, что проверка на ошибки завершена.

# Description

Вызов метода [`validateOnErrors()`](../BaseDataSource.validateOnErrors/) начинает проверку указанного
элемента или всех элементов источника данных на наличие ошибок. Завершение проверки приводит к
возникновению события [`onErrorValidator`](../BaseDataSource.onErrorValidator/).

# Syntax

```js
BaseDataSource.onErrorValidator(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback|[Script](../../../Script/)|Обработчик события о том, что проверка на ошибки завершена. Параметр args данного обработчика в поле value содержит результаты проверки в [предопределенном формате](../ValidationResult/)|

# Examples

```js
BaseDataSource.onErrorValidator(
  function(context, args) {
    alert('Validation result does not have any errors: ' + args.value.isValid);
  }
);
```

# See Also

* [`validateOnErrors()`](../BaseDataSource.validateOnErrors/)
