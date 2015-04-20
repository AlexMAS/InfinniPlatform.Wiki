---
layout: default
title: BaseListElement.GetFocusedValue
position: 12
categories: 
tags: 
---

Возаращет значение, на которое установлен фокус ввода.

В зависимости от реализации и/или режима работы фокус ввода может совпадать или не совпадать с выбранным значением. Тем не менее, в каждый момент времени фокс ввода может быть установлен только на **одном** элементе. Метод GetFocusedValue() работает симметрично методу SetFocusedValue(). Результат работы метода GetFocusedValue() напрямую зависит от значений атрибутов [[ValueSelector|BaseListElement.ValueSelector]] и [[ValueProperty|BaseListElement.ValueProperty]]. Ниже приводятся примеры, поясняющие логику работы метода.

   

ValueSelector и ValueProperty не указаны или равны `null`, если пользователь установил фокус ввода на второй элемент в списке ("Петя").

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

В этом случае метод GetFocusedValue() вернет сфокусированный элемент (**не клон**):

```
GetFocusedValue() === { Code: 200, Name: 'Петя' }
```

   

ValueSelector содержит ссылку на функцию выборки значения, если пользователь установил фокус ввода на второй элемент в списке ("Петя").

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

В этом случае метод GetFocusedValue() вернет результат работы указанной функции для сфокусированного элемента:

```
GetFocusedValue() === '1234567891'
```

   

ValueProperty содержит наименование свойства элемента списка, если пользователь установил фокус ввода на второй элемент в списке ("Петя").

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

В этом случае метод GetFocusedValue() вернет значение указанного свойства сфокусированного элемента:

```
GetFocusedValue() === 200
```

   

ValueProperty содержит шаблон формирования выбранного значения из элемента списка, если пользователь установил фокус ввода на второй элемент в списке ("Петя").

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

В этом случае метод GetFocusedValue() вернет объект, созданный по шаблону на основе данных сфокусированного элемента:

```
GetFocusedValue() === { Id: 200, DisplayName: 'Петя' }
```

   

Вне зависимости от значений ValueSelector и ValueProperty, если фокус ввода не установлен ни на одном из элементов, метод GetFocusedValue() вернет `null`:

```
GetFocusedValue() === null
```

 

 

