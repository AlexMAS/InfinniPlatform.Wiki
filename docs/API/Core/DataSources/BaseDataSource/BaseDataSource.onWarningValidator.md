---
layout: doc
title: "BaseDataSource.onWarningValidator"
position: 107
---

Устанавливает [обработчик события](../../../Script/) о том, что проверка на предупреждения завершена.

# Description

Вызов метода [`validateOnWarnings()`](../BaseDataSource.validateOnWarnings/) начинает проверку указанного
элемента или всех элементов источника данных на наличие предупреждений. Завершение проверки приводит
к возникновению события [`onWarningValidator`](../BaseDataSource.onWarningValidator/).

# Syntax

```js
BaseDataSource.onWarningValidator(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback|[Script](../../../Script/)|Обработчик события о том, что проверка на предупреждения завершена. Свойство value параметра args содержит результаты проверки в [предопределенном формате](../ValidationResult/)|

# Examples

```js
BaseDataSource.onWarningValidator(
  function(context, args) {
    alert('Validation result does not have any warnings: ' + args.value.isValid);
  }
);
```

# See Also

* [`validateOnWarnings()`](../BaseDataSource.validateOnWarnings/)
