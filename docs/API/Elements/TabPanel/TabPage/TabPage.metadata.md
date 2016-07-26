---
layout: doc
title: "TabPage.metadata"
position: 0
---

Метаданные типа [`TabPage`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|CanClose|`Boolean`|false|(Необязательное) Значение, определяющее, разрешено ли закрытие страницы|
|OnClosing|[Script](../../../../Core/Script/)| |Обработчик события о том, что страница закрывается|
|OnClosed|[Script](../../../../Core/Script/)| |Обработчик события о том, что страница была закрыта|

# Examples

```js
//infinni-ui-demo
{
  "Items": [
    {
      "TabPanel": {
        "HeaderLocation": "Bottom",
        "OnSelectedItemChanged": "{ debugger; var s = args.value; }",
        "Items": [
        //infinni-ui-display-begin
{
  "TabPage": {
    "Text": "Page_1",
    "OnClosed": "{ alert('Page_1 is closed!'); }",
    "Items": [
      {
        "Label": {
          "Value": "1"
        }
      },
      {
        "Label": {
          "Value": "2"
        }
      },
      {
        "Label": {
          "Value": "3"
        }
      }
    ]
  }
},
{
  "TabPage": {
    "Text": "Page_2",
    "OnClosed": "{ alert('Closed: Page_2'); }",
    "Items": [
      {
        "Label": {
          "Value": "A"
        }
      },
      {
        "Label": {
          "Value": "B"
        }
      },
      {
        "Label": {
          "Value": "C"
        }
      }
    ]
  }
}
          //infinni-ui-display-end
        ]
      }
    }    
  ]
}
```
