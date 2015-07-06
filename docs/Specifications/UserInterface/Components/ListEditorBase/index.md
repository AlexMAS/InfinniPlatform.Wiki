---
layout: doc
title: "ListEditorBase"
position: 1002
---

Базовый тип редакторов коллекций данных.

# Extends

[`Container`](../../KeyConcepts/Element/), [`EditorBase`](../EditorBase/)

# Syntax

```js
new ListEditorBase([parent])
```

## Parameters

`parent`

Необязательный. Родительский [элемент](../../KeyConcepts/Element/).

# Methods

## [`getMultiSelect()`](ListEditorBase.getMultiSelect/)

Возвращает значение, определяющее, разрешен ли выбор нескольких элементов.

## [`setMultiSelect()`](ListEditorBase.setMultiSelect/)

Устанавливает значение, определяющее, разрешен ли выбор нескольких элементов.

## [`getValueSelector()`](ListEditorBase.getValueSelector/)

Возвращает [функцию](../../KeyConcepts/Script/) выборки из элемента коллекции значимой части.

## [`setValueSelector()`](ListEditorBase.setValueSelector/)

Устанавливает [функцию](../../KeyConcepts/Script/) выборки из элемента коллекции значимой части.

## [`getGroupValueSelector()`](ListEditorBase.getGroupValueSelector/)

Возвращает [функцию](../../KeyConcepts/Script/) выборки из элемента коллекции значения для группировки.

## [`setGroupValueSelector()`](ListEditorBase.setGroupValueSelector/)

Устанавливает [функцию](../../KeyConcepts/Script/) выборки из элемента коллекции значения для группировки.

## [`getGroupItemTemplate()`](ListEditorBase.getGroupItemTemplate/)

Возвращает [функцию](../../KeyConcepts/Script/) шаблонизации заголовка группы.

## [`setGroupItemTemplate()`](ListEditorBase.setGroupItemTemplate/)

Устанавливает [функцию](../../KeyConcepts/Script/) шаблонизации заголовка группы.

## [`getGroupItemComparator()`](ListEditorBase.getGroupItemComparator/)

Устанавливает [функцию сравнения](../../KeyConcepts/Collection/Comparator/) для сортировки групп.

## [`setGroupItemComparator()`](ListEditorBase.setGroupItemComparator/)

Устанавливает [функцию сравнения](../../KeyConcepts/Collection/Comparator/) для сортировки групп.

# Events

## [`onSelectedItemChanged`](ListEditorBase.onSelectedItemChanged/)

Устанавливает [обработчик события](../../KeyConcepts/Script/) о том, что выделенный элемент изменился.
