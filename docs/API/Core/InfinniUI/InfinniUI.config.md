---
layout: doc
title: "InfinniUI.config"
position: 1
---

Параметры конфигурации приложения

# Properties

|Name|Type|Description|
|----|----|-----------|
|`serverUrl`|`String`|Адрес сервера.|
|`configId`|`String`|Имя конфигурации.|
|`configName`|`String`|Название конфигурации.|
|`homePage`|`Object`|Конфигурация для получения домашней страницы.|
|`homePage.ConfigId`|`String`|Идентификатор конфигурации домашней страницы.|
|`homePage.DocumentId`|`String`|Идентификатор документа домашней страницы.|
|`homePage.MetadataName`|`String`|Название метаданных домашней страницы.|

# Example

```js
window.InfinniUI.config.serverUrl = 'http://localhost:9900';
window.InfinniUI.config.configId = 'PTA';
window.InfinniUI.config.configName = 'Хабинет';
window.InfinniUI.config.homePage = {
    ConfigId: InfinniUI.config.configId, 
    DocumentId: 'Common', 
    MetadataName: 'HomePage'
};
```
 
