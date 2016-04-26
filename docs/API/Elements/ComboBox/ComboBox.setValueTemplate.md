---
layout: doc
title: "ComboBox.setValueTemplate"
position: 8
---

Устанавливает [функцию](../../../Core/Script/) шаблонизации выбранного значения.  

# Description

Зачастую значения перед отображением необходимо преобразовывать.  
Чтобы изменить формат отображения значений ComboBox воспользуйтесь методом [`setItemTemplate`](../../../Core/Elements/Container/Container.setItemTemplate/).  
Для изменения формата отображения выбранного значения используйте метод `setValueTemplate`.

# Syntax

```js
comboBox.setValueTemplate(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Script`](../../../Core/Script/)|Функция шаблонизации выбранного значения|

## Returns

Метод ничего не возвращает.

# Examples

```js
//js-demo
var comboBox = new ComboBox();

comboBox.getItems().reset([
	'1',
	'2',
	'3'
]);

var itemTemplate = function (context, args) {
    var label = new Label();
    label.setValue('№' + args.value);
    return label;
}
comboBox.setItemTemplate(itemTemplate);

var valueTemplate = function (context, args) {
    var label = new Label();
    var value = args.value ? 'Выбран №' + args.value : '';
    label.setValue(value);
    return label;
}
comboBox.setValueTemplate(valueTemplate);

$elementForExample.append(comboBox.render());
```

# See Also

* [`getValueTemplate`](../ComboBox.getValueTemplate/)
* [`setItemTemplate`](../../../Core/Elements/Container/Container.setItemTemplate/)
