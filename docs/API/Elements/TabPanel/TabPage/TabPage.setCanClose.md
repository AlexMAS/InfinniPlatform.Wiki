---
layout: doc
title: "TabPage.setCanClose()"
position: 2
---

Устанавливает значение, определяющее, разрешено ли закрытие страницы.

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
tabPage.setCanClose(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`Boolean`|Логическое значение, определяющее, разрешено ли закрытие страницы. Значение `true` означает, что закрытие страницы разрешено, значение `false` - запрещено|

## Returns

Метод ничего не возвращает

# Examples

```js
tabPage.setCanClose(true);
```

# See Also

* [`getCanClose()`](../TabPage.getCanClose/)
* [`close()`](../TabPage.close/)
* [`onClosing`](../TabPage.onClosing/)
* [`onClosed`](../TabPage.onClosed/)
