---
layout: doc
title: "BaseAction.execute()"
position: 1
---

Выполняет заданное действие.

# Syntax

```js
action.execute(callback);
```

## Parameters

|Name|Description|
|----|---------|
|callback| (Необязательное) Функция, которая будет выполнена после после окончания действия, реализуемого Action'ом|

## Returns

Метод ничего не возвращает

# Examples

```js
var updateAction = new UpdateAction(parentView);
updateAction.setProperty('dataSource', parentView.context.dataSources['DataSource1']);
updateAction.execute(function(){ alert('DataSource1 was updated'); }); // обновит DataSource1
```
