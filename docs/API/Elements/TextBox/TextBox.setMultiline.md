---
layout: doc
title: "TextBox.setMultiLine"
position: 3
---

Устанавливает значение, определяющее, разрешен ли многострочный текст.

# Syntax

```js
textbox.setMultiline(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|`Boolean`|Значение, определяющее, разрешен ли многострочный текст.|

## Returns

Нет

# Examples

```js
//js-demo
var textarea = new TextBox();
textarea.setMultiline(true);
textarea.setLineCount(4);
textarea.setLabelText('textarea');
$elementForExample.append(textarea.render());
```

# See Also

* [`getMultiLine`](../TextBox.getMultiline/)
* [`setLineCount`](../TextBox.setLineCount/)
* [`getLineCount`](../TextBox.getLineCount/)
