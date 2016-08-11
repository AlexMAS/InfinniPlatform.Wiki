---
layout: doc
title: "Link.metadata"
position: 0
---

Метаданные типа [`Link`](../).

# Properties

|Name|Type|Default|Description|
|----|----|-------|-----------|
|Href|`String`|"javascript:;"|Адрес документа, на который должна переводить ссылка.|
|Target|`String`|"self"|Режим загрузки документа.<br> Может принимать следующие значения: <ul> <li>blank - загружает страницу в новое окно браузера,</li> <li>self - загружает страницу в текущее окно,</li> <li>parent - загружает страницу во фрейм-родитель (если фреймов нет, то работает как self),</li> <li>top - отменяет все фреймы и загружает страницу в полном окне браузера (если фреймов нет, то работает как self).</li> </ul>|

# Examples

```js
//infinni-ui-demo
{
    "Items": [{
        //infinni-ui-display-begin
"Link": {
	"Text": "link",
	"Href": "http://docs.infinnity.ru/",
    "Target": "blank"
} 
         //infinni-ui-display-end
        }
    ]
}

```