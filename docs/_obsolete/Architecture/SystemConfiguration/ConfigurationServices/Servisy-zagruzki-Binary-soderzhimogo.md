---
layout: doc
title: "Сервисы загрузки Binary содержимого"
position: 7
categories: 
tags: 
---

### Загрузка бинарного контента для указанного документа

 

|Атрибут|Реализация|
|-------|----------|
|Метод запроса с использованием API на C#|```
new UploadApi().UploadBinaryContent(<ConfigurationId>, <DocumentId, <DocId>,<BinaryFieldName>,
                                                <PathToFileWithContent>);
```

```
new UploadApi().UploadBinaryContent("Demography", "Patient","ac45cd50-2129-4753-b1d3-f5dc520318cd", "ContentField",
                                                @"TestData\SomeData.zip")
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/Upload/configuration/uploadbinarycontent/?linkedData=%7B%22Configuration%22%3A%22Demography%22%2C%22Metadata%22%3A%22Patient%22%2C%22DocumentId%22%3A%22ac45cd50-2129-4753-b1d3-f5dc520318cd%22%2C%22FieldName%22%3A%22ContentField%22%7D
-------------------------------28947758029299
Content-Disposition: form-data; name="SomeData.zip"; filename="SomeData.zip"
Content-Type: multipart/form-data
<Содержимое прилагаемого файла>
```

  |
|Возвращаемый результат|```
{"IsValid":true,"ValidationMessage":"Document content successfully uploaded","Result":null}
```

|

### Получение бинарного контента для указанного поля документа с указанным идентификатором

|Атрибут|Реализация|
|-------|----------|
|Метод запроса с использованием API на C#|```
new UploadApi().DownloadBinaryContent(<ConfigurationId>, <DocumentId, <DocId>,<BinaryFieldName>);
```

```
new UploadApi().DownloadBinaryContent("Demography", "Patient","ac45cd50-2129-4753-b1d3-f5dc520318cd", "ContentField");
```

|
|REST запрос с клиента|```
GET http://<serverName>:<port>/RestfulApi/UrlEncodedData/configuration/downloadbinarycontent/?Form=%7B%22Configuration%22%3A%22Demography%22%2C%22Metadata%22%3A%22Patient%22%2C%22DocumentId%22%3A%2214e2dfe8-b2ca-499e-94fa-2ec57f261dd8%22%2C%22FieldName%22%3A%22ContentField%22%7D
```

|
|Возвращаемый результат|```
HTTP/1.1 200 OK
Content-Length: 4018
Content-Type: application/octet-stream
Server: Microsoft-HTTPAPI/2.0
Date: Fri, 21 Nov 2014 08:35:54 GMT

PK����LME�y[uD��������Configuration.json�TMo�0�#�����S9��{�ʅJ�Pe��i���,TH�*�{�TQT(���p�i���]N�ߛ��7c���=�F�u�F;h
...
<далее остальной бинарный контент>
```

|

