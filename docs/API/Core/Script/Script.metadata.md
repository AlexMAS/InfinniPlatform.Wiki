---
layout: doc
title: "Script.metadata"
position: 0
---

Метаданные описывающие типа [`Script`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|Name<sup>*</sup>|`String`|Имя скрипта, по которому он будет доступен в представлении.|
|Body<sup>*</sup>|`String`|Содержимое скрипта (на javascript).|

<sup>*</sup> Обязательное свойство.

# Exampes

Зададим скрипт `alertAction`, который при вызове будет выводить сообщение на экране. Объявим этот скрипт
обработчиком события нажатия на кнопку.

```js
//infinni-ui-demo
{
    "DataSources": [
    ],

    "Items": [{
        "GridPanel": {
            "Items": [{
                "Cell": {
                    "ColumnSpan": 4,
                    "Items": [{
                        "Button": {
                            "Name": "button",
                            "Text": "Button",
                            "OnClick": "alertAction"
                        }
                    }]
                }
            }]
        }
    }],

    "Scripts": [{
        "Name": "alertAction",
        "Body": "alert(args.source.getName());"
    }]
}

```