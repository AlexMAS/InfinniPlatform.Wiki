---
layout: doc
title: "ElementHorizontalAlignment"
position: 1
---

Горизонтальное выравнивание в родительском элементе.

# Syntax

```js
ElementHorizontalAlignment = {
  left: 0,
  center: 1,
  right: 2,
  stretch: 3
}
```

## Members

`left`

Элемент выравнивается по левому краю родительского элемента.

`center`

Элемент выравнивается по центру горизонтали родительского элемента.

`right`

Элемент выравнивается по правому краю родительского элемента.

`stretch`

Элемент занимает всю область родительского элемента по горизонтали.

# Schema

```js
{
  "id": "ElementHorizontalAlignment",
  "description": "Горизонтальное выравнивание в родительском элементе",
  "enum": [
    "Left",
    "Center",
    "Right",
    "Stretch"
  ]
}
```
