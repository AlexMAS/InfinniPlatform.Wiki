---
layout: default
title: "Обработка валидации при сохранении документов"
position: 4
categories: 
tags: 
---

Для более полной информации о валидации см. [[BaseDataSource]]

```
{
	"ConfigId" : "<ConfigId>",
	"DocumentId" : "<DocumentId>"
}
```

Логика флага IgnoreWarnings определяется следующим образом

Если флаг IgnoreWarnings = false и есть ошибки валидации уровня Warning (ValidationWarnings), то пользователю возвращается список предупреждений в ответе и документ НЕ сохраняется

Если флаг IgnoreWarnings = true то валидация уровня Warning (ValidationWarnings) игнорируется, и документ сохранится, но только в том случае, если нет ошибок уже уровня Error (ValidationError), иначе в ответе будет возвращен список ошибок уровня Error, и документ сохранен не будет

|Наименование|Значение|
|------------|--------|
|Url| [http://<servername>:<port>/RestfulApi/StandardApi/configuration/setdocument](http://10.0.0.12:9999/RestfulApi/StandardApi/configuration/setdocument)|
|Verb Type|POST|
|Body|```
{
   "id":null,
   "changesObject":{
      "Configuration":"<ConfigId>",
      "Metadata":"<DocumentId>",
      "IgnoreWarnings":<IgnoreWarnings>,
      "Document":{
         "Id":"b4575628-2a8f-4176-82ff-c7604c7b5c21",
         "LastName":"123"
      }
   },
   "replace":false
}
```

```
{
   "id":null,
   "changesObject":{
      "Configuration":"testconfigvalidator",
      "Metadata":"testdoc1",
      "IgnoreWarnings":false,
      "Document":{
         "Id":"b4575628-2a8f-4176-82ff-c7604c7b5c21",
         "LastName":"123"
      }
   },
   "replace":false
}
```

|
|Response|```
{
  "IsValid": false,
  "ValidationMessage": {
    "ValidationWarnings": {
      "IsValid": false,
      "Items": [
        {
          "Property": "LastName",
          "Message": "Last name not satisfy"
        }
      ]
    },
    "ValidationErrors": {
      "IsValid": false,
      "Items": [
        {
          "Property": "LastName",
          "Message": "Last name not satisfy"
        }
      ]
    }
  }
}
```

|

