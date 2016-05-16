---
layout: doc
title: "ComboBox.getValueTemplate"
position: 7
---

Возвращает [функцию](../../../Core/Script/) шаблонизации выбранного значения.

# Description

Зачастую значения перед отображением необходимо преобразовывать.  
Чтобы изменить формат отображения значений ComboBox воспользуйтесь методом [`setItemTemplate`](../../../Core/Elements/Container/Container.setItemTemplate/).  
Для изменения формата отображения выбранного значения используйте метод [`setValueTemplate`](../ComboBox.setValueTemplate/).

# Syntax

```js
comboBox.getValueTemplate()
```

## Parameters

Нет

## Returns

[Функция](../../../Core/Script/) шаблонизации выбранного значения.

# Examples

```js
var valueTemplate = comboBox.getValueTemplate();
```

# See Also

* [`setValueTemplate`](../ComboBox.setValueTemplate/)
* [`setItemTemplate`](../../../Core/Elements/Container/Container.setItemTemplate/)
