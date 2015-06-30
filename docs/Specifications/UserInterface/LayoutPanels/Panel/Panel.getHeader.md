---
layout: doc
title: "Panel.getHeader()"
position: 16
---

Возвращает заголовок панели.

# Description

Если [функция](../../../KeyConcepts/Script/) шаблонизации заголовка панели определена,
то она используется при установке заголовка панели - [`setHeader()`](../Panel.setHeader/).
Если шаблон не определен, метод [`setHeader()`](../Panel.setHeader/) будет ожидать ссылку
на готовый [визуальный элемент](../../../KeyConcepts/Element/).

# Syntax

```js
Panel.getHeader()
```

## Returns

Заголовок панели. Что будет выступать в качестве заголовка панели - данные или готовый [визуальный
элемент](../../../KeyConcepts/Element/) определяется на прикладном уровне. Если в качестве заголовка
используются данные, то необходимо определить [функцию](../../../KeyConcepts/Script/) шаблонизации
данных заголовка панели, вызвав метод [`setHeaderTemplate()`](../Panel.setHeaderTemplate/).

# Examples

```js
var header = Panel.getHeader();
```

# See Also

* [`setHeader()`](../Panel.setHeader/)
* [`getHeaderTemplate()`](../Panel.getHeaderTemplate/)
* [`setHeaderTemplate()`](../Panel.setHeaderTemplate/)
