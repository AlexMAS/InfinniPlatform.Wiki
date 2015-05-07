function PageTreeFactory(pageTreeBuilder) {
	
	this.createPageTreeElement = function(path, expanded) {
		var result = undefined;

		if (isEmptyString(path)) {
			path = pageTreeBuilder.getRootPath();
		}

		var rootNode = pageTreeBuilder.getPageByPath(path);

		if (rootNode !== undefined && rootNode.children.length > 0) {
			var selectedNode = pageTreeBuilder.getPageByPath();
			result = createPageNodeElement(rootNode, selectedNode, rootNode, expanded);
			result.onclick = togglePageNode;
		}

		return result;
	}

	function createPageNodeElement(rootNode, selectedNode, pageNode, expanded) {
		var pageElement = document.createElement('ul');
		pageElement.className = 'PageTree';

		var pageHeaderElement = document.createElement('li');
		pageHeaderElement.className = 'PageTreeNode';
		pageElement.appendChild(pageHeaderElement);

		var pageHeaderActionElement = document.createElement('div');
		pageHeaderActionElement.className = 'PageTreeAction';
		pageHeaderElement.appendChild(pageHeaderActionElement);

		var pageHeaderContentElement = document.createElement('div');
		pageHeaderContentElement.className = 'PageTreeContent';
		pageHeaderElement.appendChild(pageHeaderContentElement);

		var pageNodeUrl = pageNode.page.url;
		var pageHeaderContentLinkElement = document.createElement('a');
		pageHeaderContentLinkElement.href = isEmptyString(pageNodeUrl) ? '#' : pageNodeUrl;
		pageHeaderContentLinkElement.innerText = pageNode.page.title;
		pageHeaderContentElement.appendChild(pageHeaderContentLinkElement);

		if (pageNode === rootNode) {
			pageHeaderElement.className += ' PageTreeRootNode';
		}

		if (pageNode === selectedNode) {
			pageHeaderContentElement.className += ' PageTreeSelectedNode';
		}

		if (pageNode.children.length > 0) {
			pageHeaderElement.className += (expanded || isOpenedPageNode(selectedNode, pageNode)) ? ' PageTreeOpened' : ' PageTreeClosed';

			var children = pageNode.children;

			for (var i = 0; i < children.length; ++i) {
				var childNode = children[i];
				var childElement = createPageNodeElement(rootNode, selectedNode, childNode, expanded);
				pageHeaderElement.appendChild(childElement);
			}
		}
		else {
			pageHeaderElement.className += ' PageTreeItem';
		}

		return pageElement;
	}

	function createNavigationPanel(rootNode) {
		var rootNode = pageTreeBuilder.getPageByPath(pageTreeBuilder.getRootPath());
		var pageContents = findPageByFileName(rootNode, 'DocContents');
		var pageIndex = findPageByFileName(rootNode, 'DocIndex');
		var pageTags = findPageByFileName(rootNode, 'DocTags');

		if (pageContents !== undefined || pageIndex !== undefined || pageTags !== undefined) {
			var panelElement = document.createElement('ul');
			panelElement.className = 'PageTreeNavigationPanel';

			if (pageContents !== undefined) {
				var itemElement = createNavigationItem(pageContents);
				panelElement.appendChild(itemElement);
			}

			if (pageIndex !== undefined) {
				var itemElement = createNavigationItem(pageIndex);
				panelElement.appendChild(itemElement);
			}

			if (pageTags !== undefined) {
				var itemElement = createNavigationItem(pageTags);
				panelElement.appendChild(itemElement);
			}

			return panelElement;
		}

		return undefined;
	}

	function createNavigationItem(pageNode) {
		var pageNodeUrl = pageNode.page.url;
		var itemElement = document.createElement('li');
		var itemLinkElement = document.createElement('a');
		itemLinkElement.href = isEmptyString(pageNodeUrl) ? '#' : pageNodeUrl;
		itemLinkElement.innerText = pageNode.page.title;
		itemElement.appendChild(itemLinkElement);
		return itemElement;
	}

	function findPageByFileName(pageNode, fileName) {
		return findArrayItem(pageNode.children, function(i) { 
			return new RegExp('\/*' + fileName + '(\.[^/])*\/*$', 'i').test(i.page.path);
		});
	}

	function isOpenedPageNode(selectedNode, pageNode) {
		if (selectedNode !== null && selectedNode !== undefined) {
			var parent = selectedNode;

			while (parent !== null && parent !== undefined) {
				if (parent === pageNode) {
					return true;
				}

				parent = parent.parent;
			}
		}

		return false;
	}

	function togglePageNode(event) {
		var clickEvent = event || window.event;

		var pageHeaderActionElement = clickEvent.target || clickEvent.srcElement;

		if (!hasClass(pageHeaderActionElement, 'PageTreeAction')) {
			return;
		}

		var pageHeaderElement = pageHeaderActionElement.parentNode;

		if (hasClass(pageHeaderElement, 'PageTreeItem')) {
			return;
		}

		var newClass = hasClass(pageHeaderElement, 'PageTreeOpened') ? 'PageTreeClosed' : 'PageTreeOpened'
		pageHeaderElement.className = pageHeaderElement.className.replace(/(^|\s)(PageTreeOpened|PageTreeClosed)(\s|$)/, '$1' + newClass + '$3');
	}

	function hasClass(element, className) {
		return new RegExp('(^|\\s)' + className + '(\\s|$)').test(element.className)
	}
}
