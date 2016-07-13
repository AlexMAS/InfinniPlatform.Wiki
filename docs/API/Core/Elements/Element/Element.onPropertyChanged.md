---
layout: doc
title: "Element.onPropertyChanged"
position: 114
---

Устанавливает [обработчик события](../../../Script/) о том, что одно из свойств элемента изменилось.

# Description

Методы [`getProperty()`](../Element.getProperty/), [`setProperty()`](../Element.setProperty/)
и событие [`onPropertyChanged`](../Element.onPropertyChanged/) используются механизмом
[привязки данных](../../../DataBinding/). Вместе с этим они предоставляют универсальный
унифицированный интерфейс для работы со свойствами элемента.

# Syntax

```js
Element.onPropertyChanged(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что одно из свойств элемента изменилось. В параметре `args` передается информация о произошедшем событии. Свойство `property` содержит путь к свойству, `argument.oldValue` - предыдущее значение, `argument.newValue` - новое значение.|

# Examples

```js
Element.onPropertyChanged(
  function(context, args) { alert('Property ' + args.property + ' is changed!'); }
);
```

# See Also

* [`getProperty()`](../Element.getProperty/)
* [`setProperty()`](../Element.setProperty/)
* [`DataBinding`](../../../DataBinding/)
