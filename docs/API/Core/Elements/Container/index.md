---
layout: doc
title: "Container"
position: 0
---

Базовый тип для контейнеров визуальных элементов представления.

# Description

[Визуальные элементы](../Element/), которые могут содержать внутри себя другие визуальные элементы,
называются контейнерами, композитными или составными элементами. При этом сам контейнер называют
родительским элементом, а его содержимое - дочерними элементами. Дочерние элементы не могут выходить
за границы контейнера, но способ их расположения определяется каждым типом контейнера в отдельности
и может не зависеть от настроек дочерних элементов.

# Extends

## [`Element`](../Element/)

# Syntax

```js
new Container(parent)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|parent|[Element](../Element/)| (Необязательный) Родительский элемент|

# Methods

|Name|Description|
|----|---------|
|[`getItemTemplate`](Container.getItemTemplate/)|Возвращает [функцию](../../Script/) шаблонизации дочерних элементов контейнера|
|[`setItemTemplate`](Container.setItemTemplate/)|Устанавливает [функцию](../../Script/) шаблонизации дочерних элементов контейнера|
|[`getItems`](Container.getItems/)|Возвращает [коллекцию](../../Collection/) дочерних элементов контейнера|
|[`getGroupValueSelector`](Container.getGroupValueSelector/)|Возвращает [функцию](../../Script/), определяющую условие группировки дочерних элементов контейнера|
|[`setGroupValueSelector`](Container.setGroupValueSelector/)|Устанавливает [функцию](../../Script/), определяющую условие группировки дочерних элементов контейнера|
|[`getGroupItemTemplate`](Container.getGroupItemTemplate/)|Возвращает [функцию](../../Script/) шаблонизации заголовков групп|
|[`setGroupItemTemplate`](Container.setGroupItemTemplate/)|Устанавливает [функцию](../../Script/) шаблонизации заголовков групп|

# Events

Нет