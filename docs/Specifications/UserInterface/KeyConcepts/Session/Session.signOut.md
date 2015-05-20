---
layout: doc
title: "Session.signOut()"
position: 6
---

Осуществляет выход пользователя из системы.

## Syntax

```js
Session.signOut(resultCallback, errorCallback)
```

### Parameters

`resultCallback`

[Обработчик результата выполнения операции](../ResultCallback).

`errorcallback`

[Обработчик ошибки выполнения операции](../ErrorCallback).

## Examples

```js
Session.signOut(
  function(context, argument) { alert('Success!'); },
  function(context, argument) { alert('Error!'); }
);
```
