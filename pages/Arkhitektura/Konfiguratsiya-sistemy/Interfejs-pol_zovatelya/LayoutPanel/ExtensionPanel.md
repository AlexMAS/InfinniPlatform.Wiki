---
layout: default
title: ExtensionPanel
position: 7
categories: 
tags: 
---

Контейнер для встраивания внешнего компонента.

   

Параметры передаются ИЗ вьюшки, на которой располагается ExtensionPanel, В ExtensionPanel ЧЕРЕЗ любой из существующих типов DataBinding-а (не важно какой - ObjectBinding, PropertyBinding или ParameterBinding). Соответственно, связь между вьюшкой, на которой располагается ExtensionPanel, и ExtensionPanel описывается атрибутом Parameters. Этот атрибут имеет точно такую же сигнатуру, как и аналогичный атрибут в LinkView (см. [[BaseLinkView]]). Массив Parameters содержит элементы { Name, Value }. В Name указывается строковое наименование параметра, которный находится В ExtensionPanel; в Value указывается DataBinding на значение, которое находится ВО вьюшке, на которой располагается ExtensionPanel. (Обратите внимание, что ExtensionPanel зависит от View, а не наоборот!)

    

|Name|Description|
|----|-----------|
| | |

    

```
{
  "id": "ExtensionPanel",
  "description": "Контейнер для встраивания внешнего компонента",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
  },
  "properties": {
    "ExtensionName": {
      "description": "Наименование внешнего компонента",
      "type": "string",
      "required": true
    },
    "Parameters": {
      "description": "Правила передачи параметров во внешний компонент",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "Name": {
            "description": "Наименование параметра внешнего компонента",
            "type": "string",
            "required": true
          },
          "Value": {
            "description": "Значение передаваемого во внешний компонент параметра",
            "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding",
            "required": true
          }
        }
      }
    }
  },
  "additionalProperties": false
}
```

   

```
{
  "Name": "ExtensionPanel1",
  "ExtensionName": "MyScheduler",
  "Parameters": [
    {
      "Name": "PatinetId",
      "Value": {
        "PropertyBinding": {
          "DataSource": "MainDataSource",
          "Property": "$.Id"
        }
      }
    }
  ]
}
```

  


  


