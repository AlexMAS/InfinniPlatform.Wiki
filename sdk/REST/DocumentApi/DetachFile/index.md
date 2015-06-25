---
layout: doc
title: "DetachFile"
position: 12
categories: 
tags:
---

# Description

Отсоединяет файл, соответствующий указанному описанию от клиентской сессии

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<version>/
```

# Verb Type

DELETE

# Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, demo.somedomain.ru).

`serverPort`

Порт сервера.

`version`

Версия приложения.

# Body

Тело запроса содержит описание файла, отсоединяемого от сессии.
Представляет собой сериализованный в строку JSON-объект следующего формата:

{  
    "InstanceId": `<InstanceId>`,  
    "FieldName": `<FieldName>`,  
    "SessionId": `<SessionId>`  
} 

где  
`InstanceId` - идентификатор документа, от которого отсоединяется файл с указанным описанием.  
`FieldName` - поле бинарных данных, ассоциированное с отсоединяемым файлом.  
`SessionId` - идентификатор сессии, от которой происходит отсоединение.  

# Example

Пример выполнения запроса для отсоединения файла

```js
DELETE http://localhost:9900/1

body

{
  "InstanceId": "0b460a29-de82-4d71-b3b1-7c956d58822c",
  "FieldName": "Avatar",
  "SessionId": "96c5a236-1bf2-4b0c-b982-c52bfdff3391"
}
```

Пример ответа на запрос отсоединения файла

```js
HTTP/1.1 200 OK
Content-Length: 156
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 06:43:40 GMT

{
	"IsValid": true,
	"ValidationMessage": "File detached successfully."
}
```

