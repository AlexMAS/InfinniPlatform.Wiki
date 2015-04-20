---
layout: default
title: PrintElementTable
position: 4
categories: 
tags: 
---

Блочный элемент печатного представления для отображения таблицы.

   

#### Type

object

   

#### Extends

[[PrintElementBlock]]

 

#### Schema

```
{
  "id": "PrintElementTable",
  "description": "Блочный элемент печатного представления для отображения таблицы",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementBlock"
  },
  "properties": {
    "ShowHeader": {
      "description": "Показывать ли заголовок таблицы",
      "type": "boolean",
      "default": true
    },
    "Columns": {
      "description": "Список столбцов таблицы",
      "type": "array",
      "items": {
        "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementTableColumn"
      }
    },
    "Rows": {
      "description": "Список строк таблицы",
      "type": "array",
      "items": {
        "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementTableRow"
      }
    }
  },
  "additionalProperties": false
}
```

    

#### Example

[[PrintElementTable.pdf]]

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

 

 

