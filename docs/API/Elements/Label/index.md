---
layout: doc
title: "Label"
position: 1007
---

Текстовая метка.

# Extends

[`Element`](../../Core/Elements/Element), [`EditorBase`](../../Core/Elements/EditorBase/)

# Syntax

```js
new Label([parent])
```

## Parameters

|Name|Type|Description|
|----|----------|---------|
|parent|[`Element`](../../Core/Elements/Element)|Необязательный. Родительский [элемент](../../Core/Elements/Element)|
|viewMode|`String`|(необязательный) Строка со значением [режима отображения](../../viewMode)|


# Methods

|Name|Description|
|----|---------|
|[`getDisplayFormat`](Label.getDisplayFormat/)|Возвращает [функцию](../../../Core/Script/) форматирования [значения](../EditorBase/EditorBase.getValue/) для отображения.|
|[`setDisplayFormat`](Label.setDisplayFormat/)|Устанавливает [функцию](../../../Core/Script/) форматирования [значения](../EditorBase/EditorBase.getValue/) для отображения.|
|[`getTextTrimming`](Label.getTextTrimming/)|Возвращает значение, определяющее, усекается ли текст при переполнении.|
|[`setTextTrimming`](Label.setTextTrimming/)|Устанавливает значение, определяющее, усекается ли текст при переполнении.|
|[`getTextWrapping`](Label.getTextWrapping/)|Возвращает значение, определяющее, переносится ли текст при переполнении.|
|[`setTextWrapping`](Label.setTextWrapping/)|Устанавливает значение, определяющее, переносится ли текст при переполнении.|
|[`getEscapeHtml`](Label.getEscapeHtml/)|Возвращает значение, определяющее, экранируется ли HTML-разметка.|
|[`setEscapeHtml`](Label.setEscapeHtml/)|Устанавливает значение, определяющее, экранируется ли HTML-разметка.|



