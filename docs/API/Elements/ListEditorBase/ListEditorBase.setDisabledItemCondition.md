---
layout: doc
title: "ListEditorBase.setDisabledItemCondition"
position: 12
---

Устанавливает [функцию](../../../Core/Script/), определяющую запрет на выбор элемента.

# Syntax

```js
ListEditorBase.setDisabledItemCondition(func)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|func|[Script](../../../Core/Script/)|Функция, определяющая запрет на выбор элемента. Элементы, для которых данная функция вернёт true, будут недоступны для выбора.|

## Returns

Метод ничего не возвращает.

# Examples

listEditorBase.setDisabledItemCondition( function (context, args) {
                    return args.value.Count == 0;
                });

# See Also

* [`getDisabledItemCondition()`](../ListEditorBase.getDisabledItemCondition/)
