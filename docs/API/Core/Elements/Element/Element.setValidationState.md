---
layout: doc
title: "Element.setValidationState()"
position: 32
---

Устанавливает заданный валидационный статус и валидационное сообщение.

# Syntax

```js
Element.setValidationState(state, message)
```


## Parameters

|Name|Type|Description|
|----|----|-----------|
|state|`String`|Валидационный статус. Может принимать значения: 'success', 'warning', 'error'|
|message|`String`|Валидационное сообщение|

## Returns

Метод не возвращает значений.

# Examples

```js
Element.setValidationState('error', 'Last name is a required field');
```

# See Also

* [`getValidationState()`](../Element.getValidationState/)
