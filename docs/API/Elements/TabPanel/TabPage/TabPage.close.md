---
layout: doc
title: "TabPage.close()"
position: 14
---

Закрывает страницу.

# Description

Вызов метода [`close()`](../TabPage.close/) предпринимает попытку закрытия страницы панели. Закрытие
страницы означает, что она будет удалена из панели. Метод [`close()`](../TabPage.close/) предпринимает
попытку закрытия страницы, если метод [`getCanClose()`](../TabPage.getCanClose/) вернул `true`. Если
при этом нет ни одного обработчика, подписанного на событие [`onClosing`](../TabPage.onClosing/), либо
если все обработчики этого события вернули значение, отличное от `false`, страница будет закрыта. Иначе
вызов метода [`close()`](../TabPage.close/) ни к чему не приведет. Наконец, если все попытки закончились
успехом и страница была закрыта, будет вызвано событие [`onClosed`](../TabPage.onClosed/), в обработчике
которого можно обработать факт закрытия страницы.

# Syntax

```js
tabPage.close(success, error)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|success|[`Script`](../../../Core/Script/)|(Необязательный) Обработчик события о том, что страница была закрыта|
|error|[`Script`](../../../Core/Script/)|(Необязательный) Обработчик события о том, что при закрытии страницы произошла ошибка|

## Returns

Метод ничего не возвращает

# Examples

```js
tabPage.close();
```

# See Also

* [`getCanClose()`](../TabPage.getCanClose/)
* [`setCanClose()`](../TabPage.setCanClose/)
* [`onClosing`](../TabPage.onClosing/)
* [`onClosed`](../TabPage.onClosed/)
