---
layout: default
title: "Font.Family"
position: 0
categories: 
tags: 
---

Семейство шрифта.

   

Семейство шрифта задается строкой, которая определяет имя семейства. Например, "Arial". Однако, можно определить и несколько шрифтов, перечислив их имена через запятую. Например, "Century Gothic, Arial". В последнем случае первый шрифт в списке будет основным, последующие будут играть роль резервных и будут использоваться в порядке перечисления, если предыдущий шрифт в списке отсутствует или по каким-либо причинам неприменим.

   

#### Type 

string

   

#### Example

[[Font.Family.pdf]]  


```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Font": {
                "Family": "Arial"
              },
              "Text": "Arial"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Font": {
                "Family": "Times New Roman"
              },
              "Text": "Times New Roman"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Font": {
                "Family": "Courier New"
              },
              "Text": "Courier New"
            }
          }
        ]
      }
    }
  ],
  "PageSize": {
    "Width": 200,
    "Height": 150,
    "SizeUnit": "Px"
  }
}
```

  


 

