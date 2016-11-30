---
layout: doc
title: "Panel.setCollapseChanger()"
position: 10
---

Устанавливает имя элемента, при клике на который раскрывается панель.

# Description

Чтобы разрешить сворачивание панели воспользуйтесь методом [setCollapsible](../Panel.setCollapsible/).    
По умолчанию панел сворачивается/разворачивается при клике на заголовок. 
C помощью метода setCollapseChanger можно установить элемент заголовка (элемент из HeaderTemplate), клик на который будет регулировать состояние панели. 

# Syntax

```js
panel.setCollapseChanger(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`String`|[Имя элемента](../../../Core/Elements/Element/Element.setName/), при нажатии на который панель будет сворачиваться/разворачиваться|

## Returns

Метод ничего не возвращает.

# Examples

```js
//js-demo
var panel = new Panel();
panel.setHeaderTemplate(function(context, args) {
  var header = new StackPanel(),
      icon = new Icon(),
      label = new Label;

  icon.setName('icon_1')
  icon.setValue('star');
  label.setValue('Header');

  header.setOrientation(InfinniUI.StackPanelOrientation.horizontal);
  header.getItems().reset([icon, label]);
  header.setItemTemplate(function(context, args){
  	return args.item;
  });
  return header;
});
panel.setValue

panel.setCollapsible(true);
panel.setCollapseChanger('icon_1');
// hiddenCodeStart
$elementForExample.append(panel.render());
// hiddenCodeStop
```

# See Also

* [`getCollapseChanger()`](../Panel.getCollapseChanger/)
* [`getCollapsible()`](../Panel.getCollapsible/)
* [`setCollapsible()`](../Panel.setCollapsible/)
* [`setHeaderTemplate()`](../Panel.setHeaderTemplate/)
