---
layout: doc
title: "RegexEditMask"
position: 4
categories: 
tags: 
---

Маска ввода строки в формате регулярного выражения.

Маска должна записываться в формате регулярного выражения.

   

```
{
	"id": "RegexEditMask",
	"description": "Маска ввода строки в формате регулярного выражения",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseEditMask"
	},
	"properties": {
	}
}
```

   

```
{
	"Mask": "^[A-Z]{1}[a-z]*$"
}
```

```
{
	"Mask": "^((1?[1-9])|([12][0-4]))$"
}
```

 

 

