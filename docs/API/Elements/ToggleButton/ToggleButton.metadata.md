---
layout: doc
title: "ToggleButton.metadata"
position: 0
---

Метаданные типа [`ToggleButton`](../).

# Schema

Name|Type|Default|Description
----|----|-------|-----------
TextOn|`String`|'ON'|Текст на включенное состояние.
TextOff|`String`|'OFF'|Текст на выключенное состояние.

# Examples

```json
{
  "Text": "Subscribe",
  "TextOn": "yes",
  "TextOff": "no",
  "Value": {
    "Source": "dataSource1",
    "Property": "$.IsSubscribe"
  }
}
```

```js
//js-demo

var metadata = {
    ToggleButton: {
        "Text": "Subscribe",
        "TextOn": "yes",
        "TextOff": "no"
    }
};

var builder = new ApplicationBuilder();
var toggle = builder.build(metadata);

//  Render
$elementForExample.append(toggle.render());
```
