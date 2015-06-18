---
layout: doc
title: "BaseDataSource.onPropertyChanged"
position: 104
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что одно из свойств источника изменилось.

# Description

Методы [`getProperty()`](../BaseDataSource.getProperty/), [`setProperty()`](../BaseDataSource.setProperty/)
и событие [`onPropertyChanged`](../BaseDataSource.onPropertyChanged/) используются механизмом
[привязки данных](../../../DataBinding/). Вместе с этим они предоставляют универсальный
унифицированный интерфейс для работы со свойствами источника данных.

# Syntax

```js
BaseDataSource.onPropertyChanged(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что одно из свойств источника изменилось.
В параметре `argument` передается информация о произошедшем событии. Свойство `property` содержит путь
к свойству, `argument.oldValue` - предыдущее значение, `argument.newValue` - новое значение.

# Examples

```js
BaseDataSource.onPropertyChanged(
  function(context, argument) { alert('Property ' + argument.property + ' is changed!'); }
);
```

# See Also

* [`getProperty()`](../BaseDataSource.getProperty/)
* [`setProperty()`](../BaseDataSource.setProperty/)
* [`DataBinding`](../../../DataBinding/)
