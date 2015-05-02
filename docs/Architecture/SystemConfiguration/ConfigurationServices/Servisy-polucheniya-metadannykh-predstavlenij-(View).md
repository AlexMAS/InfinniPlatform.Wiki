---
layout: default
title: "Сервисы получения метаданных представлений (View)"
position: 2
categories: 
tags: 
---

Системная конфигурация содержит сервисы для работы с метаданными прикладных конфигураций

### Случай 1. Получение метаданных представления указанного типа по умолчанию

Предположим, необходимо получить представление по умолчанию домашней страницы конфигурации.

Соответствующий AutoView

```
"AutoView" : {
	"ConfigId" : "Config1",
	"DocumentId" : "Patient",
	"ViewType" : "HomePage"	
}
```

 

Исходные данные для запроса:

Конфигурация (ConfigId) : "Config1" (AutoView.ConfigId)

Объект метаданных (DocumentId): "Patient" (AutoView.DocumentId

Тип представления (MetadataType) : "HomePage" (AutoView.ViewType)

Тип представления на текущий момент может принимать 4 разных значения, см.

[Метаданные типов представлений](http://demo.infinnity.ru:8081/display/MC/ViewType)

Для всех четырех случаев запрос формируется одинаково, изменяется только значение параметра MetadataType

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/systemconfig/StandardApi/metadata/getmanagedmetadata](http://localhost:9999/systemconfig/StandardApi/metadata/getmanagedmetadata)|
|Verb type|POST|
|Body|Общая структура Body```
{
  "id": null,
  "changesObject": {
    "Configuration": <ConfigId>,
    "MetadataObject": <DocumentId>,
    "MetadataType": <ViewType>,
    "Parameters": {}
  },
  "replace": false
}
```

Пример Body```
{
  "id": null,
  "changesObject": {
    "Configuration": "Config1",
    "MetadataObject": "Patient",
    "MetadataType": "HomePage",
    "Parameters": {}
  },
  "replace": false
}
```

|
|Response|```
 {
   "Text":"Конфигурация: Справочники НСИ",
   "LayoutPanel":{
      "TabPanel":{
         "Name":"Рanel1",
         "Pages":[
            {
               "Text":"Конфигурация: справочники НСИ",
               "CanClose":false,
               "LayoutPanel":{
                  "StackPanel":{
                     "Name":"StackPanel1",
                     "Items":[
                        {
                           "MenuBar":{
                              "Name":"Menu1",
                              "ConfigId":"ClassifierStorage"
                           }
                        }
                     ]
                  }
               }
            }
         ]
      }
   }
}
```

|

### Случай 2. Получение именованного представления указанного типа

```
"AutoView" : {
	"ConfigId" : "Config1",
	"DocumentId" : "Patient",
	"ViewType" : "HomePage",
	"ViewName" : "TestView1"
}
```

 

В случае, если необходимо получать именно конкретные (а не по умолчанию) метаданные представлений, применяется запрос представления

указанного типа по имени

|Наименование|Значение|
|------------|--------|
|Url|[http://<servername>:<port>/systemconfig/StandardApi/metadata/getmanagedmetadata](http://localhost:9999/systemconfig/StandardApi/metadata/getmanagedmetadata)|
|Verb type|POST|
|Body|Отличается от случая 1 наличием параметра MetadataName, указывающего на конкретное представление указанного типа```
{
  "id": null,
  "changesObject": {
    "Configuration": "Config1",
    "MetadataObject": "Patient",
    "MetadataType": "HomePage",
    "MetadataName": "TestView1",
    "Parameters": {}
  },
  "replace": false
}
```

|
|Response|```
{
   "Id":"7bca0034-7fb0-4b6d-a019-f747454c4777",
   "MetadataType":"HomePage",
   "Description":"Тест",
   "Caption":"Тест",
   "Name":"TestView1",
   "LayoutPanel":{
      "TabPanel":{
         "Name":"Рanel1",
         "Pages":[
            {
               "Text":"Конфигурация: справочники НСИ",
               "CanClose":false,
               "LayoutPanel":{
                  "StackPanel":{
                     "Name":"StackPanel1",
                     "Items":[
                        {
                           "MenuBar":{
                              "Name":"Menu1",
                              "ConfigId":"ClassifierStorage"
                           }
                        }
                     ]
                  }
               }
            }
         ]
      }
   },
   "Text":"Конфигурация: Справочники НСИ",
   "ParentId":"aa8080d0-2559-46d6-80a8-a8813647282e",
   "Version":"version_systemconfig",
   "Status":"Published"
}
```

|

В зависимости от того, является ли представление автоматически генерируемым или реальным объектом метаданных, количество полей в ответе может отличаться, однако, структура ответа всегда одинакова и содержит обязательную информацию о Layout представления.

 

 

