---
layout: doc
title: "EditorBase.setValue"
position: 11
---

Устанавливает значение.

# Description

Метод [`setValue()`](../EditorBase.setValue/) позволяет изменить значение редактора. Если значение
переданного параметра отличается от текущего значения редактора, происходит генерация события
[`onValueChanging`](../EditorBase.onValueChanging/). Если нет ни одного обработчика, подписанного
на событие [`onValueChanging`](../EditorBase.onValueChanging/), либо если все обработчики этого
события вернули значение, отличное от `false`, значение редактора меняется на новое. Факт изменения
значения редактора приводит к возникновению события [`onValueChanged`](../EditorBase.onValueChanged/).

# Syntax

```js
EditorBase.setValue(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`||Значение редактора.|

## Returns

Если значение редактора было изменено, возвращается `true`, иначе `false`.

# Examples

```js
EditorBase.setValue(newValue);
```

# See Also

* [`getValue()`](../EditorBase.getValue/)
* [`onValueChanging`](../EditorBase.onValueChanging/)
* [`onValueChanged`](../EditorBase.onValueChanged/)
