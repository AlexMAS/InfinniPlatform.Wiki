---
layout: doc
title: "DataNavigation.onPageNumberChanged"
position: 12
---

Устанавливает [обработчик события](../../../Core/Script/) на событие 'onPageNumberChanged'

# Description

Новое значение передаётся в параметре `args.value`.

# Syntax

```js
DataNavigation.onPageNumberChanged(callback);
```

## Parameters

Name|Type|Description
----|----|-----------
callback|[Обработчик события](../../../Core/Script/)|[Обработчик события](../../../Core/Script/) о том, что номер страницы был изменен.

## Returns

Нет.

# Examples

```js
DataNavigation.onPageNumberChanged(callback);
```

# See Also

* [`DataNavigation()`](../DataNavigation/)
