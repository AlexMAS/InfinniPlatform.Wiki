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
|Target|`String`|"self"|Режим загрузки документа.<br> Может принимать следующие значения: <br> &#9679; blank - загружает страницу в новое окно браузера,<br> &#9679; self - загружает страницу в текущее окно,<br> &#9679; parent - загружает страницу во фрейм-родитель (если фреймов нет, то работает как self),<br> &#9679; top - отменяет все фреймы и загружает страницу в полном окне браузера (если фреймов нет, то работает как self).|

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