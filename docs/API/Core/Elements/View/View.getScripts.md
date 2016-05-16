---
layout: doc
title: "View.getScripts()"
position: 2
---

Возвращает [коллекцию](../../../Collection/) [скриптов представления](../../../Script/).

# Syntax

```js
view.getScripts()
```

## Parameters

Нет

## Returns

[Коллекция](../../../Collection/) скриптов представления. Каждый элемент коллекции представлен объектом
с двумя свойствами: `name` и `func`. Свойство `name` содержит наименование скрипта, `func` - указатель
на [функцию скрипта](../../../Script/). Использование данных свойств подразумевает только чтение.

# Examples

```js
var myScript = function() { alert('Hello!'); };

var scripts = view.getScripts();
scripts.add({ name: 'myScript', func: myScript });
var myScript2 = scripts.getById('myScript'); // myScript2 === myScript

myScript2(); // alert('Hello!');
```

# See Also

* [`Collection`](../../../Collection/)
* [`Script`](../../../Script/)
