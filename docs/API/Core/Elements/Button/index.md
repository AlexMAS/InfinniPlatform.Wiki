---
layout: doc
title: "Button"
---

Кнопка.

# Extends

[`Element`](../Element/)

# Syntax

```js
new Button(parent, viewMode)
```

## Parameters

|Name|Type|Default|Required|Description|
|----|----|----|:--:|-----------|
|parent|[`Element`](../Element/)|-|-|Родительский элемент|
|viewMode|[`viewMode`](../../viewMode/)|`common`|-|Родительский элемент|

## Returns

Элемент Button.


# Methods

|Name|Description|
|----|---------|
|[getContentTemplate](Button.getContentTemplate/)|Возвращает [функцию](../../Script/) шаблонизации содержимого кнопки|
|[setContentTemplate](Button.setContentTemplate/)|Устанавливает [функцию](../../Script/) шаблонизации содержимого кнопки|
|[getContent](Button.getContent/)|Возвращает содержимое кнопки|
|[setContent](Button.setContent/)|Устанавливает содержимое кнопки|
|[getAction](Button.getAction/)|Возвращает основное [действие](../../Actions/) кнопки|
|[setAction](Button.setAction/)|Устанавливает основное [действие](../../Actions/) кнопки|
|[click](Button.click/)|Осуществляет программный клик по кнопке|


# Events

|Name|Description|
|----|---------|
|[onClick](Button.onClick/)|Устанавливает [обработчик события](../../Script/) нажатия на кнопку|