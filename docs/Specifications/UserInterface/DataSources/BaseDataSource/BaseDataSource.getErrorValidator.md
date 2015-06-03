---
layout: doc
title: "BaseDataSource.getErrorValidator()"
position: 12
---

Возвращает [функцию](../../../KeyConcepts/Script/) проверки элемента на ошибки.

# Description

[Функция](../../../KeyConcepts/Script/) проверки элемента на ошибки в параметре `argument` принимает
элемент источника данных, который необходимо проверить. Результатом работы функции является объект
[предопределенного формата](../ValidationResult/).

# Syntax

```js
BaseDataSource.getErrorValidator()
```

## Returns

[Функция](../../../KeyConcepts/Script/) проверки элемента на ошибки.

# Examples

```js
var errorValidator = BaseDataSource.getErrorValidator();
```
