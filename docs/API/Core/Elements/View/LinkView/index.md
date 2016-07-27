---
layout: doc
title: "LinkView"
position: 0
---

Объект, который создает и настраивает [представление](../).

# Syntax

```js
new LinkView(parent)
```

## Parameters


|Name|Type|Description|
|----|----|-----------|
|parent|[Element](../../Element/)|Родительский элемент|


# Methods

|Name|Description|
|----|---------|
|[`getOpenMode`](LinkView.getOpenMode/)|Возвращает название стратегии отображения представления|
|[`setOpenMode`](LinkView.setOpenMode/)|Устанавливает название стратегии отображения представления|
|[`setViewTemplate`](LinkView.setViewTemplate/)|Устанавливает [функцию](../../../Script/) шаблонизации представления|
|[`createView`](LinkView.createView/)|Создает представление|
|[`setDialogWidth`](LinkView.setDialogWidth/)|Устанавливает ширину диалогового окна (для случая OpenMode = 'Dialog')|
|[`setContainer`](LinkView.setContainer/)|Устанавливает название контейнера (для случая OpenMode = 'Container')|

# Events

Нет