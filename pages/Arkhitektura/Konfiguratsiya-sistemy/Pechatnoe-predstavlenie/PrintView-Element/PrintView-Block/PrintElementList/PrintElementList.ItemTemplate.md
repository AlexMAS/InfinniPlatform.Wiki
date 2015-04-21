---
layout: default
title: "PrintElementList.ItemTemplate"
position: 3
categories: 
tags: 
---

Шаблон элементов списка.

   

#### Type

[[PrintElementBlockContainer]]  


   

#### Example

[[PrintElementList.ItemTemplate.pdf]]  


```
{
  "Blocks": [
    {
      "List": {
        "Source": "$",
        "MarkerStyle": "Decimal",
        "ItemTemplate": {
          "Paragraph": {
            "Inlines": [
              {
                "Run": {
                  "SourceFormat": {
                    "ObjectFormat": {
                      "Format": "{FirstName} {MiddleName} {LastName}"
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  ]
}
```

  


  


