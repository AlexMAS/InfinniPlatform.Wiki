---
layout: doc
title: "BaseDataSource.onError"
position: 108
---

Устанавливает [обработчик события](../../../Script/) о том, что произошла ошибка.

# Description

[Обработчик события](../../../Script/) [`onError`](../BaseDataSource.onError/) позволяет
отлавливать все ошибки, которые возникают на уровне источника данных.

# Syntax

```js
BaseDataSource.onError(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback|[Script](../../../Script/)|Обработчик события о том, что произошла ошибка. Свойство error параметра args содержит информацию об ошибке|

# Examples

```js
BaseDataSource.onError(
  function(context, args) { alert(args.error); }
);
```
