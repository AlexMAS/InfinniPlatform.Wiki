---
layout: default
title: PrintElementHyperlink
position: 5
categories: 
tags: 
---

Однострочный элемент печатного представления, содержимое которого отображается в виде гиперссылки.

   

#### Type

object

   

#### Extends

[[PrintElementSpan]]

   

#### Schema

```
{
  "id": "PrintElementHyperlink",
  "description": "Однострочный элемент печатного представления, содержимое которого отображается в виде гиперссылки",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementSpan"
  },
  "properties": {
    "Reference": {
      "description": "URI ресурса",
      "type": "string",
      "format": "uri"
    },
    "SourceFormat": {
      "description": "Формат отображения значения источника данных",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DisplayFormat"
    }
  },
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementHyperlink.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Hyperlink": {
              "Reference": "http://google.com",
              "Inlines": [
                {
                  "Run": {
                    "Text": "Phrase 1. "
                  }
                },
                {
                  "Run": {
                    "Text": "Phrase 2. "
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ],
  "PageSize": {
    "Width": 200,
    "Height": 100,
    "SizeUnit": "Px"
  },
  "PagePadding": {
    "Left": 0,
    "Top": 0,
    "Right": 0,
    "Bottom": 0
  }
}
```

 

 

