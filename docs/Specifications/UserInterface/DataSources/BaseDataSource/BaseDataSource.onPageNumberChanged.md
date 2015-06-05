---
layout: doc
title: "BaseDataSource.onPageNumberChanged"
position: 100
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что номер страницы изменился.

# Syntax

```js
BaseDataSource.onPageNumberChanged(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что номер страницы изменился. В параметре
`argument` передается информация о произошедшем событии. Свойство `argument.oldValue` содержит предыдущий
номер страницы, `argument.newValue` - новый номер страницы.

# Examples

```js
BaseDataSource.onPageNumberChanged(
  function(context, argument) { alert('New page number: ' + argument.newValue); }
);
```

# See Also

* [`setPageNumber()`](../BaseDataSource.setPageNumber/)
* [`addNextItems()`](../BaseDataSource.addNextItems/)
