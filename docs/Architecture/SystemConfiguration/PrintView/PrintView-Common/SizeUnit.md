---
layout: doc
title: "SizeUnit"
position: 
categories: 
tags: 
---

Единицы измерения.

   

#### Type

enum

  

#### Description  

|Value|Description|
|-----|-----------|
|Pt|Пункты.1 pt == (96/72) px == (1/72) in == (25.4/720) сm == (25.4/72) mm.|
|Px|Пиксели.1 px == (72/96) pt == (1/96) in == (25.4/960) сm == (25.4/96) mm.|
|In|Дюймы.1 in == 72 pt == 96 px == 2.54 сm == 25.4 mm.|
|Cm|Сантиметры.1 cm == (720/25.4) pt == (960/25.4) px == (10/25.4) in == 10 mm.|
|Mm|Миллиметры.1 mm == (72/25.4) pt == (96/25.4) px == (1/25.4) in = 0.1 cm.|

   

#### Schema

```
{
  "id": "SizeUnit",
  "description": "Единицы измерения",
  "enum": [
    "Pt",
    "Px",
    "In",
    "Cm",
    "Mm"
  ]
}
```

 

 

