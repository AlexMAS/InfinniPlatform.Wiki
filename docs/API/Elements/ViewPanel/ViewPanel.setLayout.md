---
layout: doc
title: "ViewPanel.setLayout()"
position: 2
---

Устанавливает [`представление`](../../../Core/Elements/View), которое нужно отображать внутри ViewPanel.

# Syntax

```js
viewPanel.setLayout(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`View`](../../../Core/Elements/View)|Представление, которое нужно отображать внутри ViewPanel|

## Returns

Метод не возвращает значений.

# Examples

```js
var countingRhyme = new View();
countingRhyme.setItemTemplate(function(context, args){
	var label = new Label();
	label.setValue(args.item.text);
	return label;
});
countingRhyme.getProperty('items').reset( [
									{text: "One, two. How are you? "}, 
									{text: "Three, four. Who's at the door? "},
									{text: "Five, six. My name is Fix."},
									{text: "Seven, eght. Sorry, I'm late."},
									{text: "Nine, ten. Say it again."}
								] );

viewPanel.setLayout(countingRhyme);
```

# See Also

* [`getLayout`](../ViewPanel.getLayout/)