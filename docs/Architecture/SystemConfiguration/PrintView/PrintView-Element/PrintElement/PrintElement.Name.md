---
layout: default
title: "PrintElement.Name"
position: 0
categories: 
tags: 
---

Наименование элемента.

   

Может быть использовано прикладным разработчиком для поиска нужного элемента печатного представления в метаданных.

   

#### Type

string

   

#### Example

[[PrintElement.Name.pdf]]  


```
{
  "Blocks": [
    {
      "Section": {
        "Name": "Header",
        "Blocks": [
          {
            "Paragraph": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Header"
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      "Section": {
        "Name": "Body",
        "Blocks": [
          {
            "Paragraph": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Body"
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      "Section": {
        "Name": "Footer",
        "Blocks": [
          {
            "Paragraph": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Footer"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

  


  


