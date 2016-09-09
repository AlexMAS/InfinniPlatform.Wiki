---
layout: doc
title: "Link.metadata"
position: 0
---

Метаданные типа [`Link`](../).

# Properties

|Name|Type|Default|Description|
|----|----|-------|-----------|
|Href|`String`&#124;[`Object`](#hrefmetadata)|"javascript:;"|Адрес документа, на который должна переводить ссылка.|
|Target|`String`|"self"|Режим загрузки документа.<br> Может принимать следующие значения: <br> &#9679; blank - загружает страницу в новое окно браузера,<br> &#9679; self - загружает страницу в текущее окно,<br> &#9679; parent - загружает страницу во фрейм-родитель (если фреймов нет, то работает как self),<br> &#9679; top - отменяет все фреймы и загружает страницу в полном окне браузера (если фреймов нет, то работает как self).|

## Href.metadata

|Name|Type|Description|
|----|----|-----------|
|Name|`String`|Название маршрута из [InfinniUI.config.Routes](/docs/API/Core/InfinniUI/InfinniUI.config.Routes/).|
|Params|`Array`.<[`Href.paramObject`](#hrefparamobject)>|Параметры запроса.|
|Query|`Array`.<[`Href.paramObject`](#hrefparamobject)>|Параметры поиска.|

## Href.paramObject

|Name|Type|Description|
|----|----|-----------|
|Name|`String`|Название параметра.|
|Value|`String`&#124;[`DataBinding`](/docs/API/Core/DataBinding/DataBinding.metadata/)|Значение параметра.|


# Examples

Простая ссылка:

```js
//infinni-ui-demo
{
  "Items": [
  //infinni-ui-display-begin
{
  "Link": {
    "Text": "link",
    "Href": "http://docs.infinnity.ru/",
    "Target": "blank"
  }
}
  //infinni-ui-display-end
  ]
}
```

Рассмотрим случай, когда ссылка должна изменяться в зависимости от неких параметров.
Тогда в массив [InfinniUI.config.Routes](/docs/API/Core/InfinniUI/InfinniUI.config.Routes/) необходимо добавить соответсвующий путь.
Пусть

```js
window.InfinniUI.config.Routes = [
  {
    Name: "mainPageRouter",
    Path: "/publicPages/<% pageName %>/?userId=<% userId %>&date=<% date %>",
    Action: "{ routeCallback(context, args) }"
  }
];
```
Определим соответсвующую ссылку

```json
{
  "Link": {
    "Text": "link",
    "Href": {
      "Name": "mainPageRouter",
      "Params": [
        {
          "Name": "pageName",
          "Value": "patient"
        }
      ],
      "Query": [
        {
          "Name": "date",
          "Value": "2016-12-16"
        },
        {
          "Name": "userId",
          "Value": {
            "Source": "usersDataSource",
            "Property": "$.id"
          }
        }
      ]
    },
    "Target": "blank"
  }
}
```