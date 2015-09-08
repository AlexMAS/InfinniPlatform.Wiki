---
layout: doc
title: "GetIrrelevantVersions"
position: 0
categories: 
tags:
---

# Description
Предоставляет возможность получения списка неактуальных версий конфигураций для указанного пользователя

## Syntax

```csharp
public dynamic GetIrrelevantVersions(string userName)
```

# Parameters

`userName`

Логин пользователя, для которого требуется получить список неактуальных версий

# Example

Пример получения списка неактуальных версий конфигураций для пользователя

```csharp
_versionApi.GetIrrelevantVersions("Admin")
```

Пример ответа:

```js
[
	{ 
		"ConfigId" : "PTA",
		"Version" : "2.0.0.1"
	},
	{
		...
	}
]
```
