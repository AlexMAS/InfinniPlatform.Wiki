---
layout: doc
title: "TextEditorBase.getDisplayFormat"
position: 2
---

Возвращает [функцию](../../../Core/Script/) форматирования [значения](../../EditorBase/EditorBase.getValue/) для отображения.

# Description

В некоторых ситуациях для представления данных пользователю требуется их предварительная обработка.
Метод [`setDisplayFormat()`](../TextEditorBase.setDisplayFormat/) позволяет установить функцию
форматирования значения редактора. Результат работы этой функции используется в качестве
отображаемого значения.

# Syntax

```js
TextEditorBase.getDisplayFormat()
```

## Returns

[Функция](../../Core/Script/) форматирования [значения](../../EditorBase/EditorBase.getValue/)
для отображения. В параметре `argument` передается информация, необходимая для форматирования. Свойство
`argument.value` содержит значение редактора. Результатом работы функции должна быть строка.

# Examples

```js
var displayFormat = TextEditorBase.getDisplayFormat();
```

# See Also

* [`setDisplayFormat()`](../TextEditorBase.setDisplayFormat/)
