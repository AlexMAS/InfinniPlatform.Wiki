function isEmptyString(value) {
	return (value === '' || value === null || value === undefined);
}

function findArrayItem(array, predicate) {
	if (array !== null && array !== undefined && predicate !== null && predicate !== undefined) {
		for (var i = 0; i < array.length; ++i) {
			var item = array[i];

			if (predicate(item)) {
				return item;
			}
		}
	}

	return undefined;
}

function utf8ToBase64(value) {
	return window.btoa(unescape(encodeURIComponent(value)));
}

function base64ToUtf8(value) {
	return decodeURIComponent(escape(window.atob(value)));
}
