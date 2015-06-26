---
layout: doc
title: "TabPage.getCanClose()"
position: 14
---

Возвращает значение, определяющее, разрешено ли закрытие страницы.

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
TabPage.getCanClose()
```

## Returns

Логическое значение, определяющее, разрешено ли закрытие страницы. Значение `true` означает, что
закрытие страницы разрешено, значение `false` - запрещено.

# Examples

```js
var canClose = TabPage.getCanClose();
```

# See Also

* [`setCanClose()`](../TabPage.setCanClose/)
* [`close()`](../TabPage.close/)
* [`onClosing`](../TabPage.onClosing/)
* [`onClosed`](../TabPage.onClosed/)
