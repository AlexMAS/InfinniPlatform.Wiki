---
layout: doc
title: "BaseDataSource.validateOnWarnings()"
position: 36
---

Осуществляет проверку на предупреждения.

# Description

Вызов метода [`validateOnWarnings()`](../BaseDataSource.validateOnWarnings/) начинает проверку указанного
элемента или всех элементов источника данных на наличие предупреждений. Завершение проверки приводит
к возникновению события [`onWarningValidator`](../BaseDataSource.onWarningValidator/).

# Syntax

```js
BaseDataSource.validateOnWarnings(item, callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|item| |(Необязательный) Элемент источника данных. Если указан, на наличие предупреждений проверяется только указанный
элемент; если не указан на наличие предупреждений проверяются все элементы|
|callback|[Script](../../../Script/)|(Необязательный) Обработчик события о том, что проверка на предупреждения завершена. Параметр args данного обработчика в поле value содержит результаты проверки в [предопределенном формате](../ValidationResult/)|

## Returns

[Результат](../ValidationResult/) проверки на предупреждения

# Examples

```js
BaseDataSource.validateOnWarnings(
  BaseDataSource.getSelectedItem(),
  function(context, args) {
    alert('Selected item does not have any warnings: ' + args.value.isValid);
  }
);
```

# See Also

* [`validateOnErrors()`](../BaseDataSource.validateOnErrors/)
* [`onWarningValidator`](../BaseDataSource.onWarningValidator/)
* [`getWarningValidator()`](../BaseDataSource.getWarningValidator/)
* [`setWarningValidator()`](../BaseDataSource.setWarningValidator/)
* [`ValidationResult`](../ValidationResult/)
