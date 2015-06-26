---
layout: doc
title: "TabPage.close()"
position: 16
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
TabPage.close([success[, error]])
```

## Parameters

`success`

Необязательный. [Обработчик события](../../../../KeyConcepts/Script/) о том, что страница была закрыта.

`error`

Необязательный. [Обработчик события](../../../../KeyConcepts/Script/) о том, что при закрытии произошла ошибка.

# Examples

```js
TabPage.close();
```

# See Also

* [`getCanClose()`](../TabPage.getCanClose/)
* [`setCanClose()`](../TabPage.setCanClose/)
* [`onClosing`](../TabPage.onClosing/)
* [`onClosed`](../TabPage.onClosed/)
