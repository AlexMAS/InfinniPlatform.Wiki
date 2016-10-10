---
layout: doc
title: "BaseDataSource.onSelectedItemChanged"
position: 100
---

Устанавливает [обработчик события](../../../Script/) о том, что выделенный элемент изменился.

# Syntax

```js
BaseDataSource.onSelectedItemChanged(callback, owner)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback<sup>*</sup>|[Script](../../../Script/)|Обработчик события о том, что выделенный элемент изменился. Параметр `args` данного обработчика содержит поля: source - ссылка на [источник данных](../), value - выбранный элемент|
|owner|–|Родительский элемент, используется для автоматической отписки. Должен иметь поле или метод isRemoved. Если isRemoved возвращает истину, происходит автоматическая отписка |

<sup>*</sup> Обязательный аргумент.

# Examples

```js
BaseDataSource.onSelectedItemChanged(
  function(context, args) { alert('Selected item is changed!'); }
);
```

# See Also

* [`setSelectedItem()`](../BaseDataSource.setSelectedItem/)
