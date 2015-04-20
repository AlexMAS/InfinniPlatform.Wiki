---
layout: default
title: Пример клиентского кода
position: 5
categories: 
tags: 
---

Ниже приведен пример клиентского кода для взаимодействия с подсистемой аутентификации, а также [примеры использования](#example) этого кода.

   

```
/**
 * Провайдер аутентификации.
 * 
 * @constructor
 */
function AuthenticationProvider(baseAddress) {
   
	/**
	 * Возвращает информацию о текущем пользователе.
	 * 
	 * @public
	 */
	this.getCurrentUser = function (resultCallback, errorCallback) {
		this.sendGetRequest('/Auth/GetCurrentUser', resultCallback, errorCallback);
	};
   
	/**
	 * Изменяет пароль текущего пользователя.
	 * 
	 * @public
	 */
	this.changePassword = function (oldPassword, newPassword, resultCallback, errorCallback) {
		var changePasswordForm = {
			OldPassword: oldPassword,
			NewPassword: newPassword
		};
   
		this.sendPostRequest('/Auth/ChangePassword', changePasswordForm, resultCallback, errorCallback);
	};
   
	/**
	 * Изменяет персональную информацию текущего пользователя.
	 * 
	 * @public
	 */
	this.changeProfile = function (displayName, description, resultCallback, errorCallback) {
		var changeProfileForm = {
			DisplayName: displayName,
			Description: description
		};
   
		this.sendPostRequest('/Auth/ChangeProfile', changeProfileForm, resultCallback, errorCallback);
	};
   
	/**
	 * Изменяет активную роль текущего пользователя.
	 * 
	 * @public
	 */
	this.changeActiveRole = function (activeRole, resultCallback, errorCallback) {
		var changeActiveRoleForm = {
			ActiveRole: activeRole
		};
   
		this.sendPostRequest('/Auth/ChangeActiveRole', changeActiveRoleForm, resultCallback, errorCallback);
	};
   
	/**
	 * Осуществляет вход пользователя в систему через внутренний провайдер.
	 * 
	 * @public
	 */
	this.signInInternal = function (userName, password, remember, resultCallback, errorCallback) {
		var signInInternalForm = {
			UserName: userName,
			Password: password,
			Remember: remember
		};
   
		this.sendPostRequest('/Auth/SignInInternal', signInInternalForm, resultCallback, errorCallback);
	};
   
	/**
	 * Возвращает форму входа пользователя в систему через внешний провайдер.
	 * 
	 * @public
	 */
	this.getSignInExternalForm = function (successUrl, failureUrl, resultCallback, errorCallback) {
		this.getExternalLoginForm('/Auth/SignInExternal', successUrl, failureUrl, resultCallback, errorCallback);
	};
   
	/**
	 * Возвращает форму добавления текущему пользователю имени входа у внешнего провайдера.
	 * 
	 * @public
	 */
	this.getLinkExternalLoginForm = function (successUrl, failureUrl, resultCallback, errorCallback) {
		this.getExternalLoginForm('/Auth/LinkExternalLogin', successUrl, failureUrl, resultCallback, errorCallback);
	};
   
	/**
	 * Удаляет у текущего пользователя имя входа у внешнего провайдера.
	 * 
	 * @public
	 */
	this.unlinkExternalLogin = function (provider, providerKey, resultCallback, errorCallback) {
		var unlinkExternalLoginForm = {
			Provider: provider,
			ProviderKey: providerKey
		};
   
		this.sendPostRequest('/Auth/UnlinkExternalLogin', unlinkExternalLoginForm, resultCallback, errorCallback);
	};
   
	/**
	 * Выход пользователя из системы.
	 * 
	 * @public
	 */
	this.signOut = function (resultCallback, errorCallback) {
		this.sendPostRequest('/Auth/SignOut', null, resultCallback, errorCallback);
	};
   
	this.getExternalLoginForm = function (requestUri, successUrl, failureUrl, resultCallback, errorCallback) {
		this.sendGetRequest('/Auth/GetExternalProviders',
			function (result) {
				var formElement = $(document.createElement('form'));
				formElement.attr('method', 'POST');
				formElement.attr('action', baseAddress + requestUri);
   
				var successUrlElement = $(document.createElement('input'));
				successUrlElement.attr('type', 'hidden');
				successUrlElement.attr('name', 'SuccessUrl');
				successUrlElement.attr('value', successUrl);
				formElement.append(successUrlElement);
   
				var failureUrlElement = $(document.createElement('input'));
				failureUrlElement.attr('type', 'hidden');
				failureUrlElement.attr('name', 'FailureUrl');
				failureUrlElement.attr('value', failureUrl);
				formElement.append(failureUrlElement);
   
				if (result !== null && result !== undefined) {
					for (var i = 0; i < result.length; ++i) {
						var providerInfo = result[i];
						var providerType = providerInfo.Type;
						var providerName = providerInfo.Name;
   
						var loginButton = $(document.createElement('button'));
						loginButton.attr('type', 'submit');
						loginButton.attr('name', 'Provider');
						loginButton.attr('value', providerType);
						loginButton.text(providerName);
						formElement.append(loginButton);
					}
				}
   
				resultCallback(formElement);
			},
			errorCallback
		);
	};
   
	this.sendGetRequest = function (requestUri, resultCallback, errorCallback) {
		$.ajax(baseAddress + requestUri, {
			type: 'GET',
			xhrFields: {
				withCredentials: true
			},
			success: function (data) {
				resultCallback(data);
			},
			error: function (error) {
				errorCallback(error.responseJSON);
			}
		});
	};
   
	this.sendPostRequest = function (requestUri, requestData, resultCallback, errorCallback) {
		if (requestData !== null) {
			requestData = JSON.stringify(requestData);
		}
		$.ajax(baseAddress + requestUri, {
			type: 'POST',
			xhrFields: {
				withCredentials: true
			},
			data: requestData,
			contentType: 'application/json',
			success: function (data) {
				resultCallback(data);
			},
			error: function (error) {
				errorCallback(error.responseJSON);
			}
		});
	};
}
```

 



```
<script type="text/javascript">
	jQuery(document).ready(function () {
		getSignInExternalForm();
	});
   
	function signInInternal() {
		var authProvider = new AuthenticationProvider('https://localhost:9900');
		authProvider.signInInternal(
			$('#userName').val(),
			$('#password').val(),
			$('#remember').is(':checked'),
			function (result) {
				window.location = '/Home/SignInSuccess';
			},
			function (error) {
				showObject('#signInInternalResult', error);
			}
		);
	}
   
	function getSignInExternalForm() {
		var authProvider = new AuthenticationProvider('https://localhost:9900');
		authProvider.getSignInExternalForm(
			getAbsoluteUri('/Home/SignInSuccess'),
			getAbsoluteUri('/Home/SignInFailure'),
			function (result) {
				$('#signInExternalForm').append(result);
			},
			function (error) {
				showObject('#signInExternalResult', error);
			}
		);
	}
   
	function getAbsoluteUri(relativeUri) {
		return location.protocol + '//' + location.host + relativeUri;
	}
   
	function showObject(element, object) {
		var text = formatObject(object);
		$(element).text(text);
	}
   
	function formatObject(object) {
		return JSON.stringify(object, null, 4);
	}
</script>
   
<fieldset>
	<legend>/Auth/SignInInternal</legend>
	<div>
		<div>UserName: </div>
		<input id="userName" type="text" />
	</div>
	<div>
		<div>Password: </div>
		<input id="password" type="password" />
	</div>
	<div>
		<div>Remember: </div>
		<input id="remember" type="checkbox" />
	</div>
	<pre id="signInInternalResult"></pre>
	<input type="button" value="SignIn" onclick="signInInternal()" />
</fieldset>
<br />
   
<fieldset>
	<legend>/Auth/SignInExternal</legend>
	<pre id="signInExternalResult"></pre>
	<div id="signInExternalForm"></div>
</fieldset>
<br />
```

```
<script type="text/javascript">
	jQuery(document).ready(function () {
		refreshUserInfo();
	});
   
	function refreshUserInfo() {
		var authProvider = new AuthenticationProvider('https://localhost:9900');
		authProvider.getCurrentUser(
			function (result) {
				setUserInfo(result);
			},
			function (error) {
				showObject('#getCurrentUserResult', error);
			}
		);
	}
   
	function changePassword() {
		var authProvider = new AuthenticationProvider('https://localhost:9900');
   
		authProvider.changePassword(
			$('#oldPassword').val(),
			$('#newPassword').val(),
			function (result) {
				refreshUserInfo();
			},
			function (error) {
				showObject('#changePasswordResult', error);
			}
		);
	}
   
	function changeProfile() {
		var authProvider = new AuthenticationProvider('https://localhost:9900');
   
		authProvider.changeProfile(
			$('#displayName').val(),
			$('#description').val(),
			function (result) {
				refreshUserInfo();
			},
			function (error) {
				showObject('#changeProfileResult', error);
			}
		);
	}
   
	function changeActiveRole() {
		var authProvider = new AuthenticationProvider('https://localhost:9900');
   
		authProvider.changeActiveRole(
			$('#activeRole').val(),
			function (result) {
				refreshUserInfo();
			},
			function (error) {
				showObject('#сhangeActiveRoleResult', error);
			}
		);
	}
   
	function getLinkExternalLoginForm() {
		var authProvider = new AuthenticationProvider('https://localhost:9900');
   
		authProvider.getLinkExternalLoginForm(
			getAbsoluteUri('/Home/SignInSuccess'),
			getAbsoluteUri('/Home/SignInFailure'),
			function (result) {
				$('#linkExternalLoginForm').append(result);
			},
			function (error) {
				showObject('#linkExternalLoginResult', error);
			}
		);
	}
   
	function unlinkExternalLogin(provider, providerKey) {
		var authProvider = new AuthenticationProvider('https://localhost:9900');
   
		authProvider.unlinkExternalLogin(
			provider,
			providerKey,
			function (result) {
				refreshUserInfo();
			},
			function (error) {
				showObject('#unlinkExternalLoginResult', error);
			}
		);
	}
   
	function signOut() {
		var authProvider = new AuthenticationProvider('https://localhost:9900');
  
		authProvider.signOut(
			function (result) {
				window.location = '/Home/SignIn';
			},
			function (error) {
				showObject('#getCurrentUserResult', error.responseJSON);
			}
		);
	}
   
	function setUserInfo(userInfo) {
		showObject('#getCurrentUserResult', userInfo);
		$('#displayName').val(userInfo.DisplayName);
		$('#description').val(userInfo.Description);
		$('#activeRole').val(userInfo.ActiveRole);
   
		if (userInfo.Logins !== null && userInfo.Logins !== undefined) {
			var externalLogins = $('#externalLogins');
   
			for (var i = 0; i < userInfo.Logins.length; ++i) {
				var loginInfo = userInfo.Logins[i];
				var provider = loginInfo.Provider;
				var providerKey = loginInfo.ProviderKey;
   
				var unlinkButton = $(document.createElement('input'));
				unlinkButton.attr('type', 'button');
				unlinkButton.attr('value', provider);
				unlinkButton.attr('onclick', 'unlinkExternalLogin(\'' + provider + '\', \'' + providerKey + '\')');
				externalLogins.append(unlinkButton);
			}
		}
		getLinkExternalLoginForm();
	}
   
	function getAbsoluteUri(relativeUri) {
		return location.protocol + '//' + location.host + relativeUri;
	}
   
	function showObject(element, object) {
		var text = formatObject(object);
		$(element).text(text);
	}
   
	function formatObject(object) {
		return JSON.stringify(object, null, 4);
	}
</script>
   
<fieldset>
	<legend>/Auth/GetCurrentUser</legend>
	<pre id="getCurrentUserResult"></pre>
	<input type="button" value="GetCurrentUser" onclick="getCurrentUser()" />
</fieldset>
<br />
   
<fieldset>
	<legend>/Auth/ChangePassword</legend>
	<div>
		<div>OldPassword: </div>
		<input id="oldPassword" type="password" />
	</div>
	<div>
		<div>NewPassword: </div>
		<input id="newPassword" type="password" />
	</div>
	<pre id="changePasswordResult"></pre>
	<input type="button" value="ChangePassword" onclick="changePassword()" />
</fieldset>
<br />
   
<fieldset>
	<legend>/Auth/ChangeProfile</legend>
	<div>
		<div>DisplayName: </div>
		<input id="displayName" type="text" />
	</div>
	<div>
		<div>Description: </div>
		<input id="description" type="text" />
	</div>
	<pre id="changeProfileResult"></pre>
	<input type="button" value="ChangeProfile" onclick="changeProfile()" />
</fieldset>
<br />
   
<fieldset>
	<legend>/Auth/ChangeActiveRole</legend>
	<div>
		<div>ActiveRole: </div>
		<input id="activeRole" type="text" />
	</div>
	<pre id="сhangeActiveRoleResult"></pre>
	<input type="button" value="ChangeActiveRole" onclick="changeActiveRole()" />
</fieldset>
<br />
   
<fieldset>
	<legend>/Auth/LinkExternalLogin</legend>
	<pre id="linkExternalLoginResult"></pre>
	<div id="linkExternalLoginForm"></div>
</fieldset>
<br />
   
<fieldset>
	<legend>/Auth/UnlinkExternalLogin</legend>
	<pre id="unlinkExternalLoginResult"></pre>
	<div id="externalLogins"></div>
</fieldset>
<br />
   
<fieldset>
	<legend>/Auth/SignOut</legend>
	<input type="button" value="SignOut" onclick="signOut()" />
</fieldset>
<br />
```

 

 

