---
layout: doc
title: "DataGrid.onCheckAllChanged"
position: 7
---

Устанавливает [обработчик события](../../../Core/Script/) о том, что состояние элемента "Выбрать все" в шапке таблицы изменилось.

# Description

Новое значение переключателя передаётся в параметре `args.value`.

# Syntax

```js
DataGrid.onCheckAllChanged(callback)
```

## Parameters

Name|Type|Description
----|----|-----------
callback|[Обработчик события](../../../Core/Script/)|[Обработчик события](../../../Core/Script/) о том, что одно из свойств элемента изменилось. В параметре `args` передается информация о произошедшем событии. Свойство `args.value` - новое значение (`true` - Установлен, `false` - сброшен).

# See Also

* [`getCheckAll()`](../DataGrid.getCheckAll/)
