---
layout: doc
title: "InsertAssembly"
position: 12
categories: 
tags:
---

## Description
Предоставляет возможность сохранения новой сборки в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных сборки.

## Syntax
```csharp
public void InsertAssembly();
```

## Example

Пример запроса метаданных:

```csharp
dynamic assembly = api.CreateAssembly();
assembly.Name = "InfinniPlatform.Sdk";

api.InsertAssembly(assembly);
```

При успешном выполнении запроса возвращается статус 200 ОК
