---
layout: doc
title: "BaseDataSource.onError"
position: 112
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, произошла ошибка.

# Description

[Обработчик события](../../../KeyConcepts/Script/) [`onError`](../BaseDataSource.onError/) позволяет
отлавливать все ошибки, которые возникают на уровне источника данных.

# Syntax

```js
BaseDataSource.onError(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что на уровне источника данных произошла
ошибка. В параметре `argument` передается информация о произошедшем событии. Свойство `argument.error`
содержит информацию об ошибке.

# Examples

```js
BaseDataSource.onError(
  function(context, argument) { alert(argument.error); }
);
```
