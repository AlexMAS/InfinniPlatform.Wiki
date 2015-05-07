---
layout: doc
title: "PrintElementTableColumn.Header"
position: 1
categories: 
tags: 
---

Заголовок столбца.

  

Выводится в случае, если [[PrintElementTable]].ShowHeader=true (значение по умолчанию).

   

#### Type

[[PrintElementTableCell]]

   

#### Exmaple

[[PrintElementTableColumn.Header.pdf]]

```
{
  "Blocks": [
    {
      "Table": {
        "ShowHeader": true,
        "Columns": [
          {
            "Size": 100,
            "SizeUnit": "Px",
            "Header": {
              "Background": "#F0F0F0",
              "Block": {
                "Paragraph": {
                  "Inlines": [
                    {
                      "Run": {
                        "Text": "Header1"
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            "Size": 200,
            "SizeUnit": "Px",
            "Header": {
              "Background": "#F0F0F0",
              "Block": {
                "Paragraph": {
                  "Inlines": [
                    {
                      "Run": {
                        "Text": "Header2"
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            "Header": {
              "Background": "#F0F0F0",
              "Block": {
                "Paragraph": {
                  "Inlines": [
                    {
                      "Run": {
                        "Text": "Header3"
                      }
                    }
                  ]
                }
              }
            }
          }
        ],
        "Rows": [
          {
            "Cells": [
              {
                "Block": {
                  "Paragraph": {
                    "Inlines": [
                      {
                        "Run": {
                          "Text": "11"
                        }
                      }
                    ]
                  }
                }
              },
              {
                "Block": {
                  "Paragraph": {
                    "Inlines": [
                      {
                        "Run": {
                          "Text": "12"
                        }
                      }
                    ]
                  }
                }
              },
              {
                "Block": {
                  "Paragraph": {
                    "Inlines": [
                      {
                        "Run": {
                          "Text": "13"
                        }
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "Cells": [
              {
                "Block": {
                  "Paragraph": {
                    "Inlines": [
                      {
                        "Run": {
                          "Text": "21"
                        }
                      }
                    ]
                  }
                }
              },
              {
                "Block": {
                  "Paragraph": {
                    "Inlines": [
                      {
                        "Run": {
                          "Text": "22"
                        }
                      }
                    ]
                  }
                }
              },
              {
                "Block": {
                  "Paragraph": {
                    "Inlines": [
                      {
                        "Run": {
                          "Text": "23"
                        }
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "Cells": [
              {
                "Block": {
                  "Paragraph": {
                    "Inlines": [
                      {
                        "Run": {
                          "Text": "31"
                        }
                      }
                    ]
                  }
                }
              },
              {
                "Block": {
                  "Paragraph": {
                    "Inlines": [
                      {
                        "Run": {
                          "Text": "32"
                        }
                      }
                    ]
                  }
                }
              },
              {
                "Block": {
                  "Paragraph": {
                    "Inlines": [
                      {
                        "Run": {
                          "Text": "33"
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        ]
      }
    }
  ]
}
```

 

 

