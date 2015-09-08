---
layout: doc
title: "SetRelevantVersion"
position: 1
categories: 
tags:
---

# Description
Предоставляет возможность установки указанной версии конфигурации указанному пользователю системы

## Syntax

```csharp
public dynamic SetRelevantVersion(string userName, dynamic version)
```


# Parameters

`userName`

Логин пользователя, для которого требуется получить список неактуальных версий

`version`

Версия приложения, которую требуется установить пользователю

# Example

Пример получения списка неактуальных версий конфигураций для пользователя

```csharp
	var version =
		new
			{
				ConfigurationId = "TestConfig",
				Version = "4.1"
			};
		

	versionApi.SetRelevantVersion("Admin",version);
```

При успешной обработке запроса возвращается статус 200 ОК
