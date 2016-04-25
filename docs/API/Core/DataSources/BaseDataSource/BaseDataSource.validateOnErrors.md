---
layout: doc
title: "BaseDataSource.validateOnErrors()"
position: 35
---

Осуществляет проверку на ошибки.

# Description

Вызов метода [`validateOnErrors()`](../BaseDataSource.validateOnErrors/) начинает проверку указанного
элемента или всех элементов источника данных на наличие ошибок. Завершение проверки приводит к
возникновению события [`onErrorValidator`](../BaseDataSource.onErrorValidator/).

# Syntax

```js
BaseDataSource.validateOnErrors(item, callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|item| |(Необязательный) Элемент источника данных. Если указан, на наличие ошибок проверяется только указанный
элемент; если не указан на наличие ошибок проверяются все элементы|
|callback|[Script](../../../Script/)|(Необязательный) Обработчик события о том, что проверка на ошибки завершена. Параметр args данного обработчика в поле value содержит результаты проверки в [предопределенном формате](../ValidationResult/)|

## Returns

[Результат](../ValidationResult/) проверки на ошибки

# Examples

```js
BaseDataSource.validateOnErrors(
  BaseDataSource.getSelectedItem(),
  function(context, args) {
    alert('Selected item does not have any errors: ' + args.value.isValid);
  }
);
```

# See Also

* [`validateOnWarnings()`](../BaseDataSource.validateOnWarnings/)
* [`onErrorValidator`](../BaseDataSource.onErrorValidator/)
* [`getErrorValidator()`](../BaseDataSource.getErrorValidator/)
* [`setErrorValidator()`](../BaseDataSource.setErrorValidator/)
* [`saveItem()`](../BaseDataSource.saveItem/)
* [`ValidationResult`](../ValidationResult/)
