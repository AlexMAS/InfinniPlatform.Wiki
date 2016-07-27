---
layout: doc
title: "BindingConverter.metadata"
position: 0
---

Метаданные типа [`BindingConverter`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|ToSource|`String`|Функция конвертации, осуществляющая преобразование данных элемента в формат данных источника|
|ToElement|`String`|Функция конвертации, осуществляющая преобразование данных источника в формат данных элемента|


# Examples

В качестве функции конвертации может быть указано как название прикладного скрипта,

```json
{
	"Scripts": [
		{
	      "Name": "ElementToSourceConverter",
	      "Body": "..."
	    },
	    {
	      "Name": "SourceToElementConverter",
	      "Body": "..."
	    }
	],
	... 
	"Converter": {
	  "ToSource": "ElementToSourceConverter", 
	  "ToElement": "SourceToElementConverter"
	}
}
```

так и тело функции.

```json
{
	"Converter": {
	  "ToSource": "{ return (args.value == '-' ? false : true); }", 
	  "ToElement": "{ return args.value ? '+' : '-'; }"
	}
}
```