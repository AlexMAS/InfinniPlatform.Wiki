---
layout: default
title: Реализация RestQueryApi платформы (Low-level API)
position: 
categories: 
tags: 
---

RestQueryApi содержит методы-хелперы для выполнения запросов из контекста [[скриптового обработчика бизнес-логики|Точки расширения бизнес-логики]] к различным модулям API, а также для выполнения запросов из одного модуля API к другому модулю API, реализуя подход, описанный в [[Реализация API платформы|Реализация API платформы]]

```
        /// <summary>
        ///   Установить JSON-конфигурацию системы
        /// </summary>
        /// <param name="configurationId">Идентификатор конфигурации</param>
        /// <param name="metadataObject">Конфигурация системы</param>
        /// <param name="metadataType">Тип метаданных системы</param>
        public static void UpdateMetadataObject(string configurationId, dynamic metadataObject, string metadataType)
        {
            if (metadataObject.Name == null)
            {
                throw new ArgumentException(Resources.ErrorConfigNameIsEmpty);
            }
            var request = new
                              {
                                  ConfigurationName = configurationId,
                                  MetadataType = metadataType,
                                  MetadataObject = metadataObject
                              };
            RestQueryApi.QueryPostRaw("Update", "Package", "installjsonmetadata", null, request);
        }
```

