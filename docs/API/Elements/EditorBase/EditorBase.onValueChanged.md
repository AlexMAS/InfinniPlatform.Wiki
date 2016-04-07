---
layout: doc
title: "EditorBase.onValueChanged"
position: 101
---

Устанавливает [обработчик события](../../Core/Script/) о том, что значение было изменено.

# Description

Метод [`setValue()`](../EditorBase.setValue/) позволяет изменить значение редактора. Если значение
переданного параметра отличается от текущего значения редактора, происходит генерация события
[`onValueChanging`](../EditorBase.onValueChanging/). Если нет ни одного обработчика, подписанного
на событие [`onValueChanging`](../EditorBase.onValueChanging/), либо если все обработчики этого
события вернули значение, отличное от `false`, значение редактора меняется на новое. Факт изменения
значения редактора приводит к возникновению события [`onValueChanged`](../EditorBase.onValueChanged/).

# Syntax

```js
EditorBase.onValueChanged(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[`Script`](../../../Core/Script/)|[Обработчик события](../../../Core/Script/) о том, что значение было изменено. В параметре `argument` передается информация о произошедшем событии. Свойство `argument.oldValue` содержит предыдущее значение редактора, `argument.newValue` - новое значение редактора.|

# Examples

```js
EditorBase.onValueChanged(
  function(context, argument) {
    alert('Value is changed!');
  }
);
```

# See Also

* [`setValue`](../EditorBase.setValue/)
* [`onValueChanging`](../EditorBase.onValueChanging/)
