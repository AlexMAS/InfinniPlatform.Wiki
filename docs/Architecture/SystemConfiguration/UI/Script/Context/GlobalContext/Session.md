---
layout: doc
title: "Session"
position: 2
categories: 
tags: 
---

Провайдер для работы сессией пользователя.

  

|Name|Description|
|----|-----------|
|GetCurrentUser([ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ResultCallback](#resultcallback)resultCallback,[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ErrorCallback](#errorcallback)resultCallback)|Возвращает информацию о текущем пользователе.* @param {[ResultCallback](#resultcallback)} resultCallback Обработчик результата выполнения операции.
* @param {[ErrorCallback](#errorcallback)} errorCallback Обработчик ошибки выполнения операции.
* @returns {void}

|
| | |
|ChangePassword([ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)string oldPassword,[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)string newPassword,[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ResultCallback](#resultcallback) resultCallback,[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ErrorCallback](#errorcallback) errorCallback)|Изменяет пароль текущего пользователя.* @param {string} oldPassword Старый пароль.
* @param {string} newPassword Новый пароль.
* @param {[ResultCallback](#resultcallback)} resultCallback Обработчик результата выполнения операции.
* @param {[ErrorCallback](#errorcallback)} errorCallback Обработчик ошибки выполнения операции.
* @returns {void}

|
|ChangeActiveRole([ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)string activeRole,[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ResultCallback](#resultcallback) resultCallback,[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ErrorCallback](#errorcallback) errorCallback)|Изменяет активную роль текущего пользователя.* @param {string} activeRole Наименование роли.
* @param {[ResultCallback](#resultcallback)} resultCallback Обработчик результата выполнения операции.
* @param {[ErrorCallback](#errorcallback)} errorCallback Обработчик ошибки выполнения операции.
* @returns {void}

|
| | |
|SignInInternal([ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)string userName,[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)string password,[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)boolean remember,[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ResultCallback](#resultcallback) resultCallback,[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ErrorCallback](#errorcallback) errorCallback)|Осуществляет вход пользователя в систему через внутренний провайдер.* @param {string} userName Имя пользователя.
* @param {string} password Пароль пользователя.
* @param {string} remember Запомнить пользователя.
* @param {[ResultCallback](#resultcallback)} resultCallback Обработчик результата выполнения операции.
* @param {[ErrorCallback](#errorcallback)} errorCallback Обработчик ошибки выполнения операции.
* @returns {void}

|
|SignOut([ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ResultCallback](#resultcallback) resultCallback,[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ ](#resultcallback)[ErrorCallback](#errorcallback) errorCallback)|Осуществляет выход пользователя из системы.* @param {[ResultCallback](#resultcallback)} resultCallback Обработчик результата выполнения операции.
* @param {[ErrorCallback](#errorcallback)} errorCallback Обработчик ошибки выполнения операции.
* @returns {void}

|
| | |
|OnActiveRoleChanged: [ResultCallback](#resultcallback)|Возвращает или устанавливает обработчик события изменения активной роли текущего пользователя.|
|OnSignInInternal: [ResultCallback](#resultcallback)|Возвращает или устанавливает обработчик события входа пользователя в систему через внутренний провайдер.|
|OnSignOut: [ResultCallback](#resultcallback)|Возвращает или устанавливает обработчик события выхода пользователя из системы.|
| | |
| |Функция обработки результата.* @name ResultCallback
* @function
* @param {[[Context]]} context Контекст представления.
* @param {[[BaseMessage]]} argument Аргументы обработчика.
* @returns {void}

|
| |Функция обработки ошибки.* @name ErrorCallback
* @function
* @param {[[Context]]} context Контекст представления.
* @param {[[BaseMessage]]} argument Аргументы обработчика.
* @returns {void}

|

 

 

