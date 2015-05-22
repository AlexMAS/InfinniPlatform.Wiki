---
layout: doc
title: "Data type checking"
position: 
categories: 
tags:
---

# Контекст
В случае сохранения документов, в которых имеются поля, несоответствующие объявленным метаданным
схемы документа в приложении, возможны три варианта поведения системы.

# Вариант 1
Документ содержит поле, объявление которого отсутствует в приложении.
В этом случае, при сохранении документа такое поле будет отброшено, а документ будет успешно сохранен.

## Пример

```csharp
var game = new
{
	Name = "Divinity:Original Sin",
	Price = 1800,
	SomeFieldWhichMissingInSchema = 1111
};

string gameId = api.SetDocument("gameshop", "catalogue", Guid.NewGuid().ToString(), game);
```

## Сохраненный документ

```js
{
	Id = "9949447D-D7F5-4C49-ADAF-56FCC614BF51"
	Name = "Divinity:Original Sin",
	Price = 1800,
}
```
# Вариант 2
Документ содержит поле, объявление которого присутствует в приложении, однако тип значения, указанного
для этого поля, отличается от типа поля, указанного в метаданных схемы документа в приложении.
При этом указанное значение поля документа может быть сконвертировано в тип значения, указанный в
метаданных схемы документа в приложении.
В этом случае, при сохранении документа произойдет конвертирование значения поля в то значение, 
которое имеет тип, совпадающий с типом, указанным в метаданных схемы документа.
Список возможных автоматических преобразований значения:
* любой тип -> строка

где '->' - направление преобразования.

## Пример
```csharp
var game = new
{
	Name = 11111,
	Price = 1800,
};

string gameId = api.SetDocument("gameshop", "catalogue", Guid.NewGuid().ToString(), game);
```

## Сохраненный документ

```js
{
	Id = "9949447D-D7F5-4C49-ADAF-56FCC614BF51"
	Name = "11111",
	Price = 1800,
}
```

# Вариант 3
Документ содержит поле, объявление которого присутствует в приложении, однако тип значения, указанного
для этого поля, отличается от типа поля, указанного в метаданных схемы документа в приложении.
При этом указанное значение поля документа *не* может быть сконвертировано в тип значения, указанный в
метаданных схемы документа в приложении.
В этом случае при сохранении документа будет сгенерировано исключение ApplicationException.

## Пример

```csharp
var game = new
{
	Name = "Divinity:Original Sin",
	Price = "1800",
};
string gameId = api.SetDocument("gameshop", "catalogue", Guid.NewGuid().ToString(), game);
```

Сообщение сгенерированного исключения:

```csharp
Fail to set document with exception: There an business logic error on request execution.
Additional info: ﻿{"Error":"Fail to commit transaction: \r\nExpected value for field 'Price' should have Float type, but value has System.String type ('someStringValueThatIsNotConvertibleToFloat')"}
```
