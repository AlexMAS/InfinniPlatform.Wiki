---
layout: default
title: PrintElement.Style
position: 1
categories: 
tags: 
---

Наименование стиля.

   

Элементы печатного представления могут использовать стили представления ([[PrintView]].Styles), ссылаясь на них по имени.

   

#### Type

string

   

#### Example

[[PrintElement.Style.pdf]]

```
{
  "Styles": [
    {
      "Name": "H1",
      "Margin": {
        "Top": 5,
        "Bottom": 5
      },
      "Font": {
        "Size": 16,
        "Weight": "Bold"
      },
      "TextAlignment": "Center"
    },
    {
      "Name": "H2",
      "Margin": {
        "Top": 5,
        "Bottom": 5
      },
      "Font": {
        "Size": 14,
        "Weight": "Bold"
      },
      "TextAlignment": "Center"
    },
    {
      "Name": "H3",
      "Margin": {
        "Top": 5,
        "Bottom": 5
      },
      "Font": {
        "Size": 12,
        "Weight": "Bold"
      },
      "TextAlignment": "Center"
    },
    {
      "Name": "General",
      "Margin": {
        "Top": 5,
        "Bottom": 5
      },
      "Font": {
        "Size": 10
      },
      "TextAlignment": "Justify"
    }
  ],
  "Blocks": [
    {
      "Paragraph": {
        "Style": "H1",
        "Inlines": [
          {
            "Run": {
              "Text": "Header1"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Style": "General",
        "Inlines": [
          {
            "Run": {
              "Text": "General text text text text text text text text text text text text text text text text text 
text text text text text text text text text text text text text text text text text text text text text text text 
text text text text text text text text text text text text text text text text text text text text text text text 
text text."
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Style": "H2",
        "Inlines": [
          {
            "Run": {
              "Text": "Header2"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Style": "General",
        "Inlines": [
          {
            "Run": {
              "Text": "General text text text text text text text text text text text text text text text text text 
text text text text text text text text text text text text text text text text text text text text text text text 
text text text text text text text text text text text text text text text text text text text text text text text 
text text."
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Style": "H3",
        "Inlines": [
          {
            "Run": {
              "Text": "Header3"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Style": "General",
        "Inlines": [
          {
            "Run": {
              "Text": "General text text text text text text text text text text text text text text text text text 
text text text text text text text text text text text text text text text text text text text text text text text 
text text text text text text text text text text text text text text text text text text text text text text text 
text text."
            }
          }
        ]
      }
    }
  ]
}
```

 

 

