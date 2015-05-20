---
layout: doc
title: "BaseListElement.SetFocusedValue"
position: 13
categories: 
tags: 
---

Устанавливает значение, на которое установлен фокус ввода.

В зависимости от реализации и/или режима работы фокус ввода может совпадать или не совпадать с выбранным значением. Тем не менее, в каждый момент времени фокс ввода может быть установлен только на **одном** элементе. Метод SetFocusedValue() работает симметрично методу [[GetFocusedValue|BaseListElement.GetFocusedValue]](). Результат работы метода SetFocusedValue() напрямую зависит от значений атрибутов [[ValueSelector|BaseListElement.ValueSelector]] и [[ValueProperty|BaseListElement.ValueProperty]]. Ниже приводятся примеры, поясняющие логику работы метода.

   

ValueSelector и ValueProperty не указаны или равны `null`. 

```
{
  "Items": {
    "ObjectBinding": {
      "Value": [
        { "Code": 100, "Name": "Вася" },
        { "Code": 200, "Name": "Петя" },
        { "Code": 300, "Name": "Коля" }
      ]
    }
  }
}
```

Если вызвать метод SetFocusedValue() и передать ему второй элемент в списке ("Петя"), на этот элемент будет установлен фокус ввода:

```
SetFocusedValue({ Code: 200, Name: 'Петя' })
GetFocusedValue() === { Code: 200, Name: 'Петя' }
```

  

ValueSelector содержит ссылку на функцию выборки значения.

```
"Scripts": [
  {
    "Name": "PhoneNumberSelector",
    "Body": "argument.Value.replace(/[^0-9]/g, '')"
  }
]
   
...
   
{
  "ValueSelector": "PhoneNumberSelector",
  "Items": {
    "ObjectBinding": {
      "Value": [
        { "Code": 100, "Name": "Вася", "Phone": "+1 (234) 567-890" },
        { "Code": 200, "Name": "Петя", "Phone": "+1 (234) 567-891" },
        { "Code": 300, "Name": "Коля", "Phone": "+1 (234) 567-892" }
      ]
    }
  }
}
```

Eсли вызвать метод SetFocusedValue() и передать ему `'1234567891'`, на второй элемент в списке ("Петя") будет установлен фокус ввода:

```
SetFocusedValue('1234567891')
GetFocusedValue() === '1234567891'
```

   

ValueProperty содержит наименование свойства элемента списка.

```
{
  "ValueProperty": "Code",
  "Items": {
    "ObjectBinding": {
      "Value": [
        { "Code": 100, "Name": "Вася" },
        { "Code": 200, "Name": "Петя" },
        { "Code": 300, "Name": "Коля" }
      ]
    }
  }
}
```

Если вызвать метод SetFocusedValue() и передать ему `200`, на второй элемент в списке ("Петя") будет установлен фокус ввода:

```
SetFocusedValue(200)
GetFocusedValue() === 200
```

   

ValueProperty содержит шаблон формирования выбранного значения из элемента списка.

```
{
  "ValueProperty": {
    "Id": "Code",
    "DisplayName": "Name"
  },
  "Items": {
    "ObjectBinding": {
      "Value": [
        { "Code": 100, "Name": "Вася" },
        { "Code": 200, "Name": "Петя" },
        { "Code": 300, "Name": "Коля" }
      ]
    }
  }
}
```

Если вызвать метод SetFocusedValue() и передать ему шаблонный объект, соответствующий второму элементу в списке ("Петя"), на этот элемент будет установлен фокус ввода:

```
SetFocusedValue({ Id: 200, DisplayName: 'Петя' })
GetFocusedValue() === { Id: 200, DisplayName: 'Петя' }
```

   

Вне зависимости от значений ValueSelector и ValueProperty.

Если вызвать метод SetFocusedValue() и передать ему `null`, фокус ввода, если он был установлен на каком-либо элементе, будет снят:

```
SetFocusedValue(null)
GetFocusedValue() === null
```

 

 

