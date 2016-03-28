---
layout: doc
title: "BaseAction.execute()"
position: 1
---

Выполняет заданное действие.

# Syntax

```js
action.execute();
```

## Parameters

Нет

## Returns

Метод ничего не возвращает

# Examples

```js
var updateAction = new UpdateAction(parentView);
updateAction.setProperty('dataSource', parentView.context.dataSources['DataSource1']);
updateAction.execute(); // обновит DataSource1
```
