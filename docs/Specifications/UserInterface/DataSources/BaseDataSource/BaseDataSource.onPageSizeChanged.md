---
layout: doc
title: "BaseDataSource.onPageSizeChanged"
position: 101
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что размер страницы изменился.

# Syntax

```js
BaseDataSource.onPageSizeChanged(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что размер страницы изменился. В параметре
`argument` передается информация о произошедшем событии. Свойство `argument.oldValue` содержит предыдущий
размер страницы, `argument.newValue` - новый размер страницы.

# Examples

```js
BaseDataSource.onPageSizeChanged(
  function(context, argument) { alert('New page size: ' + argument.newValue); }
);
```
