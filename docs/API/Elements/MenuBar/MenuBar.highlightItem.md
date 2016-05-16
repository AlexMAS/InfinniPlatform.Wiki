---
layout: doc
title: "MenuBar.highlightItem"
position: 37
---

Устанавливает или снимает выделение с элемента меню с заданным именем.

# Syntax

```js
MenuBar.highlightItem([name])
```

## Parameters

Name|Type|Description
----|----------|---------
name|`String`|Имя выделяемого элемента. Если не указано - для снятия выделения.

## Returns

Нет

# Examples

```js
menuBar.highlightItem("AddMenuItem");   //Выделить элемент с именем "AddMenuItem"

menuBar.highlightItem();   //Снять выделение с пунктов меню
```


