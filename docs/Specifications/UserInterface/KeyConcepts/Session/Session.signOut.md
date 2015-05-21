---
layout: doc
title: "Session.signOut()"
position: 4
---

Осуществляет выход пользователя из системы.

## Description

Успешный выход из системы приводит к возникновению события [`onSignOut`](../Session.onSignOut).

## Syntax

```js
Session.signOut(resultCallback, errorCallback)
```

### Parameters

`resultCallback`

[Обработчик результата выполнения операции](../../Script/).

`errorcallback`

[Обработчик ошибки выполнения операции](../../Script/).

## Examples

```js
Session.signOut(
  function(context, argument) { alert('Success!'); },
  function(context, argument) { alert('Error!'); }
);
```
