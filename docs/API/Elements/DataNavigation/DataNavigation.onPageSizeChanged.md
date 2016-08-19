---
layout: doc
title: "DataNavigation.onPageSizeChanged"
position: 13
---

Устанавливает [обработчик события](../../../Core/Script/) на событие 'onPageSizeChanged'

# Description

Новое значение передаётся в параметре `args.value`.

# Syntax

```js
DataNavigation.onPageSizeChanged(callback);
```

## Parameters

Name|Type|Description
----|----|-----------
callback|[Обработчик события](../../../Core/Script/)|[Обработчик события](../../../Core/Script/) о том, что размер страницы был изменен.

## Returns

Нет.

# Examples

```js
DataNavigation.onPageSizeChanged(callback);
```

# See Also

* [`DataNavigation()`](../DataNavigation/)
