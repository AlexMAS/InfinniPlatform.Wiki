---
layout: doc
title: "Element.getEnabled()"
position: 22
---

Возвращает значение, определяющее, возможен ли доступ к элементу или он заблокирован.

Свойство выключается каскадно, то есть,
если родительский элемент заблокирован (`enabled = false`), то у дочерних элементов, это свойство будет автоматически выставлено в
 `false`. Когда родительский элемент будет разблокирован, дочерний вернет первоначальное значение этого свойства.

# Syntax

```js
Element.getEnabled()
```

## Parameters

Нет

## Returns

Логическое значение.

# Examples

```js
//js-demo
var textbox = new TextBox();
var $textbox = textbox.render();
var enabledOfButton = textbox.getEnabled();

var buttonForToggling = new Button();
var $buttonForToggling = buttonForToggling.render();

buttonForToggling.setText('Disable textbox');

$elementForExample.prepend($textbox);
$elementForExample.prepend($buttonForToggling);


buttonForToggling.onClick(function(){
    if(textbox.getEnabled() == true){
        buttonForToggling.setText('Enable textbox');
        textbox.setEnabled(false);
    }else{
        buttonForToggling.setText('Disable textbox');
        textbox.setEnabled(true);
    }
});
```

# See Also

* [`setVisible()`](../Element.setEnabled/)
