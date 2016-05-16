---
layout: doc
title: "TextEditorBase.setDisplayFormat"
position: 1
---

Устанавливает [функцию](../../../Core/Script/) форматирования [значения](../../EditorBase/EditorBase.getValue/) для отображения.

# Description

В некоторых ситуациях для представления данных пользователю требуется их предварительная обработка.
Метод [`setDisplayFormat()`](../TextEditorBase.setDisplayFormat/) позволяет установить функцию
форматирования значения редактора. Результат работы этой функции используется в качестве
отображаемого значения.

# Syntax

```js
TextEditorBase.setDisplayFormat(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|[Script](../../../Core/Script/)|[Функция](../../../Core/Script/) форматирования [значения](../../EditorBase/EditorBase.getValue/) для отображения. В параметре `argument` передается информация, необходимая для форматирования. Свойство `argument.value` содержит значение редактора. Результатом работы функции должна быть строка.|

# Examples

```js
TextEditorBase.setDisplayFormat(
  function(context, argument) {
    return context.global.culture.dateTimeFormatInfo.format("g", argument.value);
  }
);
```

# See Also

* [`getDisplayFormat()`](../TextEditorBase.getDisplayFormat/)
