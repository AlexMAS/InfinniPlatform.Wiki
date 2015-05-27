function githubCodeHighlight(response) {
	if (!isEmptyString(response) && !isEmptyString(response.data)) {
		var codeUrl = response.data.url;
		var codeName = response.data.name;
		var codeSize = response.data.size;
		var codeContent = response.data.content;
		var codeHtmlUrl = response.data.html_url;

		if (!isEmptyString(codeUrl) && !isEmptyString(codeContent)) {
			codeUrl = codeUrl.toLowerCase();

			var codeBlocks = document.getElementsByClassName('CodeBlock');

			var codeBlock = findArrayItem(codeBlocks, function(item) {
				var itemUrl = item.getAttribute('data-url');
				return (!isEmptyString(itemUrl) && itemUrl.toLowerCase() == codeUrl);
			});

			if (!isEmptyString(codeBlock)) {
				var codeTag = codeBlock.children[0].children[0].children[0];
				codeTag.innerText = base64ToUtf8(codeContent);
				hljs.highlightBlock(codeTag);
			}
		}
	}
}
