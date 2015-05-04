function BreadcrumbFactory(pageTreeBuilder) {

	this.createBreadcrumbElement = function(path) {
		var result = undefined;

		if (isEmptyString(path)) {
			path = pageTreeBuilder.getRootPath();
		}

		var rootNode = pageTreeBuilder.getPageByPath(path);

		if (rootNode !== undefined) {
			var selectedNode = pageTreeBuilder.getPageByPath();

			if (selectedNode !== undefined && selectedNode !== rootNode) {
				result = document.createElement('ol');
				result.className = 'PageBreadcrumb';

				var itemNode = selectedNode;
				var itemElement = null;

				do {
					var parentElement = createItemElement(selectedNode, itemNode);
					result.insertBefore(parentElement, itemElement);
					itemNode = itemNode.parent;
					itemElement = parentElement;
				}
				while (itemNode !== undefined && itemNode !== rootNode);
			}
		}

		return result;
	}

	function createItemElement(selectedNode, pageNode) {
		var itemElement = document.createElement('li');

		if (pageNode !== selectedNode) {
			var pageNodeUrl = pageNode.page.url;
			var itemLinkElement = document.createElement('a');
			itemLinkElement.href = isEmptyString(pageNodeUrl) ? '#' : pageNodeUrl;
			itemLinkElement.innerText = pageNode.page.title;
			itemElement.appendChild(itemLinkElement);
		}
		else {
			itemElement.className = 'PageBreadcrumbActive';
			itemElement.innerText = pageNode.page.title;
		}

		return itemElement;
	}
}
