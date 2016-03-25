---
layout: doc
title: "Element.getVisible()"
position: 23
---

Возвращает значение, определяющее, отображается ли элемент в интерфейсе.

# Syntax

```js
Element.getVisible()
```


## Parameters

Нет

## Returns

Логическое значение, определяющее, отображается ли элемент в интерфейсе. Значение `true` означает,
что элемент отображается в интерфейсе, `false` - элемент не отображается.

# Examples

```js
//js-demo
var textbox = new TextBox();
var $textbox = textbox.render();
var visibleOfButton = textbox.getVisible();

var buttonForToggling = new Button();
var $buttonForToggling = buttonForToggling.render();

buttonForToggling.setText('Hide textbox');

$elementForExample.prepend($textbox);
$elementForExample.prepend($buttonForToggling);


buttonForToggling.onClick(function(){
    if(textbox.getVisible() == true){
        buttonForToggling.setText('Show textbox');
        textbox.setVisible(false);
    }else{
        buttonForToggling.setText('Hide textbox');
        textbox.setVisible(true);
    }
});
```

# See Also

* [`setVisible()`](../Element.setVisible/)
