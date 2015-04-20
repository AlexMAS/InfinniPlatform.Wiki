---
layout: default
title: Clipboard
position: 1
categories: 
tags: 
---

Буфер обмена.

 

|Name|Description|
|----|-----------|
|Contains(string key): boolean|Определяет, содержится ли значение буфере.* @param {string} key Ключ.
* @returns {boolean} Возвращает true, если значение содержится.

|
|Enqueue(string key, any value, function<any, boolean> onSourceDequeue = null): void|Добавляет значение в буфер.* @param {string} key Ключ.
* @param {*} value Значение.
* @param {onDequeue} [onSourceDequeue=null] Функция источника значения.
* @returns {void}

|
|Dequeue(string key, function<any, boolean> onDestinationDequeue = null): any|Извлекает значение из буфера.* @param {string} key Ключ.
* @param {onDequeue} [onDestinationDequeue=null] Функция приемника значения.
* @returns {*} Значение.

|
|Remove(string key): any|Удаляет значение из буфера.* @param {string} key Ключ.
* @returns {*} Значение.

|
|Peek(string key): any|Возвращает значение из буфера.* @param {string} key Ключ.
* @returns {*} Значение.

|
|Clear(): void|Очищает буфер.* @returns {void}

|
| |Функция, вызываемая при извлечении значения из буфера.* @name onDequeue
* @function
* @param {*} value Значение.
* @returns {boolean} Успешность выполнения.

|

 

 

