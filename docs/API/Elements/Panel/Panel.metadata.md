---
layout: doc
title: "Panel.metadata"
position: 0
---

Метаданные типа [`Panel`](../).

# Schema

|Name|Type|Description|
|----|----|-----------|
|Collapsible|`Boolean`|(Необязательное) Значение, определяющее, разрешено ли сворачивание панели|
|Collapsed|`Boolean`|(Необязательное) Значение, определяющее, свернута ли панель|
|HeaderTemplate|[`Element`](../../../Core/Elements/Element/)|(Необязательное) Шаблон отображения заголовка панели|
|Header|`String`/[`BindingMetadata`](../../../Core/DataBinding/DataBinding.metadata/)|(Необязательное) Заголовок панели|
|OnExpanding|[Script](../../../Core/Script/)|(Необязательное) Обработчик события о том, что панель разворачивается|
|OnExpanded|[Script](../../../Core/Script/)|(Необязательное) Обработчик события о том, что панель была развернута|
|OnCollapsing|[Script](../../../Core/Script/)|(Необязательное) Обработчик события о том, что панель сворачивается|
|OnCollapsed|[Script](../../../Core/Script/)|(Необязательное) Обработчик события о том, что панель была свернута|

# Examples

```js
//infinni-ui-demo
{
  "Items": [
  //infinni-ui-display-begin
{
  "Panel": {
    "Collapsible": true,
    "Header": "Numbers",
    "OnExpanded": "{ alert('Panel is expanded!'); }",
    "OnCollapsed": "{ alert('Panel is collapsed!'); }",
    "Items": [
      {
        "Label": {
          "Value": "One"
        }
      },
      {
        "Label": {
          "Value": "Two"
        }
      },
      {
        "Label": {
          "Value": "Three"
        }
      }
    ]
  }
}
    //infinni-ui-display-end
  ]
}
```
