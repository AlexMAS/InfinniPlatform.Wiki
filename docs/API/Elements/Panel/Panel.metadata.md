---
layout: doc
title: "Panel.metadata"
position: 0
---

Метаданные типа [`Panel`](../).

# Properties

|Name|Type|Default|Description|
|----|----|-------|-----------|
|Collapsible|`Boolean`|false|Значение, определяющее, разрешено ли сворачивание панели|
|Collapsed|`Boolean`|false|Значение, определяющее, свернута ли панель|
|HeaderTemplate|[`Element`](../../../Core/Elements/Element/)| |Шаблон отображения заголовка панели|
|Header|`String`/[`BindingMetadata`](../../../Core/DataBinding/DataBinding.metadata/)| |Заголовок панели|
|CollapseChanger|`String`| |[Имя элемента](../../../Core/Elements/Element/Element.metadata/), при нажатии на который панель будет сворачиваться/разворачиваться|
|OnExpanding|[Script](../../../Core/Script/)| |Обработчик события о том, что панель разворачивается|
|OnExpanded|[Script](../../../Core/Script/)| |Обработчик события о том, что панель была развернута|
|OnCollapsing|[Script](../../../Core/Script/)| |Обработчик события о том, что панель сворачивается|
|OnCollapsed|[Script](../../../Core/Script/)| |Обработчик события о том, что панель была свернута|

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
