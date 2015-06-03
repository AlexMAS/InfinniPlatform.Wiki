---
layout: doc
title: "BaseDataSource.getWarningValidator()"
position: 14
---

Возвращает [функцию](../../../KeyConcepts/Script/) проверки элемента на предупреждения.

# Description

[Функция](../../../KeyConcepts/Script/) проверки элемента на предупреждения в параметре `argument` принимает
элемент источника данных, который необходимо проверить. Результатом работы функции является объект
[предопределенного формата](../ValidationResult/).

# Syntax

```js
BaseDataSource.getWarningValidator()
```

## Returns

[Функция](../../../KeyConcepts/Script/) проверки элемента на предупреждения.

# Examples

```js
var warningValidator = BaseDataSource.getWarningValidator();
```
