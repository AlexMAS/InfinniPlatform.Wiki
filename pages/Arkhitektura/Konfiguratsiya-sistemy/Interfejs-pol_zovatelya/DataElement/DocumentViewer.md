---
layout: default
title: DocumentViewer
position: 20
categories: 
tags: 
---

Элемент для отображения печатного представления ([[PrintView]]).

   

После загрузки элемента, он обращается к сервисам системы по работе с печатными представлениями ([[PrintView]]). Параметры для обращения к сервисам берутся из метаданных элемента и источника данных. Результатом работы сервисов является файл, содержимое которого должно отображаться в рамках элемента. [Формат](http://en.wikipedia.org/wiki/Internet_media_type) файла печатного представления в общем случае может быть произвольным (text/html, text/x-markdown, application/pdf, image/jpeg и т.п.), но чаще всего это будет PDF (application/pdf). У пользователя должна быть возможность обновить содержимое элемента, нажав кнопку "Обновить". Обновление приводит к повторному обращению к сервисам.

   

![](DocumentViewer.png)  


 

```
{
  "id": "DocumentViewer",
  "description": "Элемент для отображения печатного представления",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
  },
  "properties": {
    "PrintViewId": {
      "description": "Идентификатор печатного представления",
      "type": "string"
    },
    "PrintViewType": {
      "description": "Тип печатного представления",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintViewType",
      "default": "ObjectView"
    },
    "DataSource": {
      "description": "Источник данных",
      "type": "string",
      "required": true
    }
  },
  "additionalProperties": false
}
```

    

```
{
	"Name": "DocumentViewer1",
	"DataSource": "PatientDataSource"
}
```

  


  


