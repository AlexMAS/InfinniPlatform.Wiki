---
layout: doc
title: "EditorBase.onValueChanging"
position: 100
---

Устанавливает [обработчик события](../../Core/Script/) о том, что значение изменяется.

# Description

Метод [`setValue()`](../EditorBase.setValue/) позволяет изменить значение редактора. Если значение
переданного параметра отличается от текущего значения редактора, происходит генерация события
[`onValueChanging`](../EditorBase.onValueChanging/). Если нет ни одного обработчика, подписанного
на событие [`onValueChanging`](../EditorBase.onValueChanging/), либо если все обработчики этого
события вернули значение, отличное от `false`, значение редактора меняется на новое. Факт изменения
значения редактора приводит к возникновению события [`onValueChanged`](../EditorBase.onValueChanged/).

# Syntax

```js
EditorBase.onValueChanging(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[`Script`](../../../Core/Script/)|[Обработчик события](../../../Core/Script/) о том, что значение изменяется. В параметре `argument` передается информация о произошедшем событии. Свойство `argument.oldValue` содержит предыдущее значение редактора, `argument.newValue` - новое значение редактора.|

# Examples

```js
EditorBase.onValueChanging(
  function(context, argument) {
    return (argument.newValue >= 0 && argument.newValue < 100);
  }
);
```

# See Also

* [`setValue`](../EditorBase.setValue/)
* [`onValueChanged`](../EditorBase.onValueChanged/)
