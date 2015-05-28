function PageTreeFactory(pageTreeBuilder) {

	this.createPageTreeElement = function(path, expanded) {
		var result = undefined;

		if (isEmptyString(path)) {
			path = pageTreeBuilder.getRootPath();
		}

		var rootNode = pageTreeBuilder.getPageByPath(path);

		if (rootNode !== undefined && rootNode.children.length > 0) {
			var selectedNode = pageTreeBuilder.getPageByPath();

			result = document.createElement('div');

			var processed = {};
			var navPanel = createNavigationPanel(processed, rootNode, selectedNode);
			var pageTree = createPageNodeElement(processed, rootNode, selectedNode, rootNode, expanded);

			if (navPanel !== undefined) {
				result.appendChild(navPanel);
			}

			if (pageTree !== undefined) {
				pageTree.onclick = togglePageNode;
				result.appendChild(pageTree);
			}
		}

		return result;
	}

	function createPageNodeElement(processed, rootNode, selectedNode, pageNode, expanded) {
		var pagePath = pageNode.page.path;
		var pageElement = processed[pagePath]

		if (pageElement === undefined) {
			pageElement = document.createElement('ul');
			pageElement.className = 'PageTree';
			processed[pagePath] = pageElement;

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
			setInnerText(pageHeaderContentLinkElement, pageNode.page.title);
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
					var childElement = createPageNodeElement(processed, rootNode, selectedNode, childNode, expanded);

					if (childElement !== null && childElement !== undefined) {
						pageHeaderElement.appendChild(childElement);
					}
				}
			}
			else {
				pageHeaderElement.className += ' PageTreeItem';
			}
		}

		return pageElement;
	}

	function createNavigationPanel(processed, pageNode, selectedNode) {
		var pageContents = findPageByFileName(pageNode, 'DocContents');
		var pageIndex = findPageByFileName(pageNode, 'DocIndex');
		var pageTags = findPageByFileName(pageNode, 'DocTags');

		if (pageContents !== undefined || pageIndex !== undefined || pageTags !== undefined) {
			var panelElement = document.createElement('ul');
			panelElement.className = 'PageTreeNavigationPanel';

			if (pageContents !== undefined) {
				var itemElement = createNavigationItem(processed, pageContents, selectedNode);
				panelElement.appendChild(itemElement);
			}

			if (pageIndex !== undefined) {
				var itemElement = createNavigationItem(processed, pageIndex, selectedNode);
				panelElement.appendChild(itemElement);
			}

			if (pageTags !== undefined) {
				var itemElement = createNavigationItem(processed, pageTags, selectedNode);
				panelElement.appendChild(itemElement);
			}

			return panelElement;
		}

		return undefined;
	}

	function createNavigationItem(processed, pageNode, selectedNode) {
		var pageUrl = pageNode.page.url;
		var pagePath = pageNode.page.path;

		var itemElement = document.createElement('li');
		processed[pagePath] = null;

		var itemLinkElement = document.createElement('a');
		itemLinkElement.href = isEmptyString(pageUrl) ? '#' : pageUrl;
		setInnerText(itemLinkElement, pageNode.page.title);
		itemElement.appendChild(itemLinkElement);

		if (pageNode === selectedNode) {
			itemElement.className = 'PageTreeSelectedNode';
		}

		return itemElement;
	}

	function findPageByFileName(pageNode, fileName) {
		return findArrayItem(pageNode.children, function(i) { 
			return new RegExp('/*' + fileName + '(\.[^\/]*){0,1}/*$', 'i').test(i.page.path);
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
