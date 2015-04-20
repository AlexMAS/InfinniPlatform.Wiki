---
layout: default
title: MongoDb: язык запросов
position: 0
categories: 
tags: 
---

Производится обзорная характеристика языковых возможностей [MongoDb](http://www.mongodb.org/) (на момент описания - версия 2.4).

# Create

Формат команды:

```
db.collection.insert( <document> )
```

|Операция|Команда|
|--------|-------|
|Вставка одного документа|db.collection.insert(<document>)|
|Вставка нескольких документов|db.collection.insert([ <document>, ... ])|
| | |

# Read

Формат команды:

```
db.collection.find( <query>, <projection> )
```

Если условия выборки **query** не определены, будут возвращены все документы коллекции. Если проекция **projection** не определена, будет возвращено все содержимое документа.

 

|Операция|Команда|
|--------|-------|
|#### Операторы

|
|Логическое И|db.collection.find({ <expression>, ... })|
|Логическое ИЛИ|db.collection.find({ $or: [ <expression>, ... ] })|
| | |
|#### Выборка по свойствам документа

|
|Равно|db.collection.find({ property: value })|
|Не равно|db.collection.find({ property: { $ne: value } })|
|Меньше|db.collection.find({ property: { $lt: value } })|
|Меньше или равно|db.collection.find({ property: { $lte: value } })|
|Больше|db.collection.find({ property: { $gt: value } })|
|Больше или равно|db.collection.find({ property: { $gte: value } })|
|Содержит свойство|db.collection.find({ property: { $exists: true } })|
|Не содержит свойства|db.collection.find({ property: { $exists: false } })|
|Входит в множество|db.collection.find({ property: { $in: [ <element>, ... ] } })|
|Выборка по вложенным документам|db.collection.find({ property: { <expression by property of subdocument>, ... } })|
|Выборка по свойству вложенного документа|db.collection.find({ <expression by 'property.property'> })|
| | |
|#### Выборка по коллекциям документа

|
|Содержит элемент|db.collection.find({ array: '<element>' })|
|Содержит элемент, удовлетворяющий условию|db.collection.find({ array: { $elemMatch: { <expression>, ... } } })|
| | |
|#### Проекции документа

|
|Включение определенных свойств в проекцию|db.collection.find(<expression>, { property1: 1, property2: 1, ... })|
|Исключение определенных свойств из проекции|db.collection.find(<expression>, { property1: 0, property2: 0, ... })|
|Ограничение выборки для коллекций документа|db.collection.find(<expression>, { array: { $slice: <number> } })|
| | |
|#### Работа с курсором

|
|Сортировка по возрастанию|db.collection.find().sort({ property: 1 })|
|Сортировка по убыванию|db.collection.find().sort({ property: 0 })|
|Ограничение выборки|db.collection.find().limit(<number>)|
|Пропуск первых документов|db.collection.find().skip(<number>)|
|Подсчет количества документов|db.collection.find().count()|
| | |

# Update

Формат команды:

```
db.collection.update( <query>, <update>, <options> )
```

По умолчанию метод update() обновляет **один** документ, удовлетворяющий условию выборки **query**; но указав опцию **multi**, можно добиться того, чтобы update() обновлял все документы, которые совпадают с условием.

 

|Операция|Команда|
|--------|-------|
|#### Документы

|
|Заменить документ|db.collection.update(<expression>, <document>)|
|Вставить или обновить документ|db.collection.update(<expression>, <document>, { upsert: true })|
| | |
|#### Свойства документа

|
|Обновить свойство документа|db.collection.update(<expression>, { $set: { property: value } })|
|Обновить свойство вложенного документа|db.collection.update(<expression>, { $set: { 'property.property': value } })|
|Сделать инкремент свойства документа|db.collection.update(<expression>, { $inc: { property: value } })|
|Удалить свойство из документа|db.collection.update(<expression>, { $unset: { property: 1 } })|
|Переименовать свойство документа|db.collection.update(<expression>, { $rename: { 'old name': 'new name' } })|
| | |
|#### Коллекции документа

|
|Добавить элемент в коллекцию|db.collection.update(<expression>, { $push: { array: <element> } })|
|Добавить элементы в коллекцию|db.collection.update(<expression>, { $push: { array: { $each: [ <element> , ... ] } } })|
|Добавить элемент в коллекцию, если он там не содержится|db.collection.update(<expression>, { $addToSet: { array: <element>   } })|
|Добавить элементы в коллекцию, если они там не содержатся|db.collection.update(<expression>, { $addToSet: { array: { $each: [ <element> , ... ] } } })|
|Удалить элементы из коллекции по условию|db.collection.update(<expression>, { $pull: { array: <expression by element> } })|
|Удалить первый элемент коллекции|db.collection.update(<expression>, { $pop: { array: -1 } })|
|Удалить последний элемент коллекции|db.collection.update(<expression>, { $pop: { array: 1 } })|
|Обновить элемент массива в определенной позиции|db.collection.update(<expression>, { $set: { 'array.position': value })|
|Обновить элемент массива без указания позиции|db.collection.update(<expression>, { $set: { 'array.$': value } })|
|Обновить свойство элемента массива в определенной позиции|db.collection.update(<expression>, { $set: { 'array.position.property': value } })|
|Обновить свойство элемента массива без указания позиции|db.collection.update(<expression>, { $set: { 'array.$.property': value } })|
| | |

# Delete

Формат команды:

```
db.collection.remove( <query>, <justOne> )
```

Если условия выборки **query** не определены, будут удалены все документы коллекции. Флаг **justOne** по умолчанию равен false, ограничивает количество удаляемых элементов до 1.

 

|Операция|Команда|
|--------|-------|
|Удалить все документы коллекции|db.collection.remove()|
|Удалить все документы коллекции, удовлетворяющие условию|db.collection.remove(<expression>)|
|Удалить первый документ, удовлетворяющий условию|db.collection.remove(<expression>, true)|
| | |

 

 

