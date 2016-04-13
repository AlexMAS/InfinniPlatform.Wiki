---
layout: doc
title: "TabPage.onClosed"
position: 101
---

Устанавливает [обработчик события](../../../../Core/Script/) о том, что страница была закрыта.

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
tabPage.onClosed(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback|[`Script`](../../../../Core/Script/)|Обработчик события о том, что страница была закрыта|

## Returns

Метод ничего не возвращает

# Examples

```js
tabPage.onClosed(
  function(context, args) { alert('Page is closed!'); }
);
```

# See Also

* [`close()`](../TabPage.close/)
* [`getCanClose()`](../TabPage.getCanClose/)
* [`setCanClose()`](../TabPage.setCanClose/)
* [`onClosing`](../TabPage.onClosing/)
