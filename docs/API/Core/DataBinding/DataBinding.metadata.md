---
layout: doc
title: "DataBinding.metadata"
position: 0
---

Метаданные типа [`DataBinding`](../).

# Schema

|Name|Type|Default|Required|Description|
|----|----|----|:--:|-----------|
|Source|`String`| | + |Наименование источника данных привязки|
|Property|`String`| | |Путь к свойству источника данных привязки|
|Mode|[BindingMode](../BindingMode/)|`TwoWay`| |Направление потока данных в привязке|
|Converter|[BindingConverter](../BindingConverter/)| | |Преобразователь данных между элементом и источником|

# Examples

Метаданные поля ввода, привязанного к параметру Parameter_1:

```json
{
	"TextBox": {
	  "Value": {
	    "Source": "Parameter_1"
	  }
	}
}
```

Пусть теперь поле ввода привязано к полю Name источника данных DataSource_1. И пусть при изменении источника, необходимо обновлять поле ввода, но изменение значения поля ввода не должно влиять на значение в источнике. Тогда метаданные выглядят так

```json
{
	"TextBox": {
	  "Value": {
	    "Source": "DataSource_1",
	    "Property": "Name",
	    "Mode": "ToElement"
	  }
	}
}
```

Пример, когда данные необходимо конвертировать:

```json
{
	"TextBox": {
	  "Value": {
	    "Source": "DataSource_1",
	    "Property": "Name",
	    "Converter": {
            "ToElement": "{ return args.value == '-' ? 'minus': 'plus'; }",
            "ToSource": "ConvertTextBoxToDataSource_1" //выполнится скрипт из контекста родительской view
        }
	  }
	}
}	
```