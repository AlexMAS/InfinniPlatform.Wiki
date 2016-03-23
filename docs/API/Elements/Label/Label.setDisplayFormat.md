---
layout: doc
title: "Label.setDisplayFormat"
position: 37
---

Устанавливает [функцию](../../Core/Script/) форматирования [значения](../EditorBase/EditorBase.getValue/) для отображения.

# Syntax

```js
Label.setDisplayFormat(format)
```

## Parameters

Нет

## Parameters

|Name|Type|Description|
|----|----------|---------|
|format|[функция](../../Core/Script/)|[Функция](../../Core/Script/) форматирования [значения](../EditorBase/EditorBase.getValue/) для отображения.|

## Returns

нет

# Examples

```js
//js-demo
var label = new Label();
var formaToLowerCase = function (context, args) {
    return String(args.value).toLowerCase();
}
label.setDisplayFormat(formaToLowerCase);
label.setValue('sOmEcAsE');

$elementForExample.prepend(label.render());
```

# See Also

* [`getDisplayFormat()`](../Label.getDisplayFormat/)

