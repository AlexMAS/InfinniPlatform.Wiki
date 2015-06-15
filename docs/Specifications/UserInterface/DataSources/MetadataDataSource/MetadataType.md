---
layout: doc
title: "MetadataType"
position: 100
---

Тип метаданных.

# Description

С метаданными InfinniPlatform можно работать, как с обычными данными. Для этого следует использовать
источник данных `MetadataDataSource`. Для определения источника данных необходимо указать [тип метаданных](MetadataType/),
с которым будет осуществляться работа. Выбранный тип метаданных определяет обязательность остальных параметров.


# Syntax

```js
MetadataType = {
  solution: 'Solution',
  configuration: 'Configuration',
  menu: 'Menu',
  document: 'Document',
  register: 'Register',
  assembly: 'Assembly',
  view: 'View',
  printView: 'PrintView',
  service: 'Service',
  process: 'Process',
  scenario: 'Scenario',
  generator: 'Generator',
  report: 'Report',
  validationError: 'ValidationError',
  validationWarning: 'ValidationWarning',
  documentStatus: 'DocumentStatus'
}
```

## Members

`solution`

Решение.

`configuration`

Конфигурация.

`menu`

Меню.

`document`

Документ.

`register`

Регистр.

`assembly`

Сборка.

`view`

[Визуальное представление](../../../KeyConcepts/View/).

`printView`

Печатное представление.

`service`

Сервис.

`process`

Процесс.

`scenario`

Сценарий.

`generator`

Генератор.

`report`

Отчет.

`validationError`

Проверка на ошибки.

`validationWarning`

Проверка на предупреждения.

`documentStatus`

Статус документа.

# Schema

{% include github.html path="InfinniPlatform.Api/MetadataSchema/UI/DataSource/MetadataDataSource/MetadataType.resjson" lang="json" %}

# See Also

* [`MetadataDataSource.metadata`](../MetadataDataSource.metadata/)
