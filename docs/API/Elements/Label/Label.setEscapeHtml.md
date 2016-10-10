---
layout: doc
title: "Label.setEscapeHtml"
position: 38
---

Устанавливает значение, определяющее, экранируется ли HTML-разметка.

# Syntax

```js
Label.setEscapeHtml(value)
```

## Parameters

|Name|Type|Description|
|----|----------|---------|
|value|`Boolean`|Значение, определяющее, экранируется ли HTML-разметка.|

## Returns

Нет.

# Examples

```js
//js-demo

var metadata = {
    Label: {
        EscapeHtml: false,
        DisplayFormat: "{title}<sup>{id}</sup>"
    }
};

var value = {id: 3, title: "Three"};

var builder = new ApplicationBuilder();
var label = builder.build(metadata);
label.setValue(value);

//  Render
$elementForExample.append(label.render());
```

# See Also

* [`getEscapeHtml()`](../Label.getEscapeHtml/)

