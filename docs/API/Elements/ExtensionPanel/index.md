---
layout: doc
title: "ExtensionPanel"
position: 0
---

Контейнер для встраивания произвольных прикладных элементов.

# Description

Для реализации функционала, не предусмотренного платформой, можно добавить в глобальное пространство функцию-конструктор, 
экземпляры которой будут создавать нужный элемент. 
Для того, чтобы воспользоваться этой функцией в InfinniUI, необходимо указать имя функции-конструктора ExtensionPanel в поле [ExtensionName](ExtensionPanel.setExtensionName/).

Схематически данную функцию можно описать так:

```js
function MyExtensionPanel(context, args) {	
    this.render = function() {
    	var myElement;
    	// тут определяется myElement
    	args.$el.append(myElement);
	}
}
```
Обратите внимание, что в методе render нужно самостоятельно делать вставку создаваемого элемента в требуемое место (выделенный под ExtensionPanel контейнер будет передан в функцию-конструктор в args.$el).

## Parameters

|Name|Type|Description|
|----|----|-----------|
|context|[`ViewContext`](/docs/API/Core/Context)|Контекст представления|
|args|`Object`|Объект с полями: <br> &#9679; $el - элемент выделенный под ExtensionPanel,<br> &#9679; parameters - [параметры](ExtensionPanel.getParameters/),<br> &#9679; builder - [построитель элементов](/docs/Api/Core/Builders/),<br> &#9679; itemTemplate - [функция шаблонизации дочерних элементов](/docs/API/Core/Elements/Container/Container.getItemTemplate/),<br> &#9679; items - [коллекция дочерних элементов](/docs/API/Core/Elements/Container/Container.getItems/)|

## Examples

```js
function SuperPanelExtension(context, args) {
    this.render = function() {
        if( args.items == null ) {
            return;
        }

        args.items.forEach( function(item, index){
            var item = args.itemTemplate(context, {index: index}),
                $item = item.render(),
                $div = $("<div>");

            $div.addClass("my-super-class")
                .append($item);

            args.$el.append($div);
        });
    };
}
```

```js
function CaptchaExtension(context, args) {	
    this.render = function() {
    	var $captcha = this.createCaptcha(args.parameters);

    	args.$el.append($captcha);
	};

	this.createCaptcha = function(params) {
    	// captcha creation
	};
}
```




# Extends

[`Container`](/docs/API/Core/Elements/Container/)

# Syntax

```js
new ExtensionPanel(parent)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|parent|[`Element`](../../Core/Elements/Element)|Родительский элемент|

# Methods

Name|Description
----|-----------
[setExtensionName](ExtensionPanel.setExtensionName/)|Устанавливает название прикладного элемента
[setContext](ExtensionPanel.setContext/)|Устанавливает [контекст представления](/docs/Api/Core/Context/)
[setBuilder](ExtensionPanel.setBuilder/)|Устанавливает [Builder](/docs/Api/Core/Builders/)
[getParameters](ExtensionPanel.getParameters/)|Возвращает [параметры](/docs/Api/Core/Parameters/), передаваемые в прикладной элемент
[setParameters](ExtensionPanel.setParameters/)|Устанавливает [параметры](/docs/Api/Core/Parameters/), передаваемые в прикладной элемент

# Events

Нет