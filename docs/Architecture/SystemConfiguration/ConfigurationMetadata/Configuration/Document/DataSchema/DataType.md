---
layout: doc
title: "DataType"
position: 
categories: 
tags: 
---

Базовые типы данных.

 

|Значение|Наименование|Описание|
|--------|------------|--------|
|Bool|Логическое значение.|Допустимые значения: true, false.|
|Integer|Целое число.|Допустимые значения: -2147483648 ... 2147483647.|
|Float|Дробное число.|Допустимые значения (стандарт [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point)): -1.79769313486232E+308 ... 1.79769313486232E+308.|
|String|Строка.|Значение представлено в формате [UTF-8](http://en.wikipedia.org/wiki/Utf-8).|
|DateTime|Дата / время.|Значение представлено в формате [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601).|
|Uuid|Уникальный идентификатор.|Значение представлено в формате [UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier).|
|Binary|Двоичные данные.|Значение представлено в формате [[BlobData]].|
|Object|Объект.|Значение представлено в виде пар "свойство-значение".|
|Array|Массив.|Значение представлено в виде массива объектов или базовых типов.|

    

```
{
	"id": "DataType",
	"description": "Базовые типы данных",
	"enum": [
		"Bool",
		"Integer",
		"Float",
		"String",
		"DateTime",
		"Uuid",
		"Binary",
		"Object",
		"Array"
	]
}
```

 

 

