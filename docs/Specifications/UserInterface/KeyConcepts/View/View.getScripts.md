---
layout: doc
title: "View.getScripts()"
position: 3
---

Возвращает [коллекцию](../../Collection/) [скриптов представления](../../Script/).

# Syntax

```js
View.getScripts()
```

## Returns

[Коллекция](../../Collection/) скриптов представления. Каждый элемент коллекции представлен объектом
с двумя свойствами: `name` и `func`. Свойство `name` содержит наименование скрипта, `func` - указатель
на [функцию скрипта](../../Script/). Оба свойства доступны только для чтения.

# Examples

```js
var myScript = function() { alert('Hello!'); };

var scripts = View.getScripts();
scripts.add({ name: 'myScript', func: myScript });
var myScript2 = scripts.id('myScript'); // myScript2 === myScript

myScript2(); // alert('Hello!');
```

# See Also

* [`Collection`](../../Collection/)
* [`Script`](../../Script/)
