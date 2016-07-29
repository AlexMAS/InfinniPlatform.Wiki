---
layout: doc
title: "ExtensionPanel"
position: 0
---

Контейнер для встраивания произвольных прикладных элементов.

# Description

Для реализации функционала, не предусмотренного платформой, 
можно добавить в глобальное пространство функцию создания нужного элемента и обращаться к ней с помощью ExtensionPanel.  
Данная функция будет найдена в глобальном пространстве по [ExtensionName](ExtensionPanel.setExtensionName/).

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
Обратите внимание, что метод render должен самостоятельно добавить прикладной элемент в нужное место.

## Parameters

|Name|Type|Description|
|----|----|-----------|
|context|[`ViewContext`](/docs/API/Core/Context)|Контекст представления|
|args|`Object`|Объект с полями: <ul><li>$el - элемент выделенный под ExtensionPanel,</li> <li>parameters - [параметры](ExtensionPanel.getParameters/),</li> <li>builder - [построитель элементов](/docs/Api/Core/Builders/),</li> <li>itemTemplate - [функция шаблонизации дочерних элементов](/docs/API/Core/Elements/Container/Container.getItemTemplate/),</li> <li>items - [коллекция дочерних элементов](/docs/API/Core/Elements/Container/Container.getItems/)</li></ul>|

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