---
layout: doc
title: "AttachFile"
position: 11
categories: 
tags:
---

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<version>/?linkedData=<linkedData>
```

# Verb Type

POST

# Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, demo.somedomain.ru).

`serverPort`

Порт сервера.

`version`

Версия приложения.

`linkedData`

Описание файла, присоединяемого к сессии.
Представляет собой сериализованный в строку JSON-объект следующего формата:

{  
    "InstanceId": `<InstanceId>`,  
    "FieldName": `<FieldName>`,  
    "FileName": `<FileName>`,  
    "SessionId": `<SessionId>`  
} 

где  
`InstanceId` - идентификатор документа, к которому присоединяется файла.  
`FieldName` - поле бинарных данных, ассоциированное с присоединяемым файлом.  
`FileName` - наименование файла данных, который присоединяется к указанной сессии.  
`SessionId` - идентификатор сессии, к которой происходит присоединение.  

# Example

Пример выполнения запроса для присоединения файла

```js
POST http://localhost:9900/1/?linkedData=%7B%22InstanceId%22%3A%228e61d269-ed65-4c0b-85ce-1de341880ed8%22%2C%22FieldName%22%3A%22Avatar%22%2C%22FileName%22%3A%22avatar.gif%22%2C%22SessionId%22%3A%22ee4e0d71-539c-4a1a-a394-a71754051b6c%22%7D
```
где параметр linkedData заполнен сериализованным объектом JSON:  
{  
    "InstanceId": "8e61d269-ed65-4c0b-85ce-1de341880ed8",  
    "FieldName": "Avatar",  
    "FileName": "avatar.gif",  
    "SessionId": "ee4e0d71-539c-4a1a-a394-a71754051b6c"  
}  

Пример ответа на запрос присоединения файла

```js
HTTP/1.1 200 OK
Content-Length: 156
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 06:43:40 GMT

{
	"IsValid": true,
	"ValidationMessage": "Document content successfully uploaded",
	"Result": {
		"IsValid": true,
		"ValidationMessage": "File attached successfully."
	}
}
```

