---
---

var pageTreeFactoryInstance = new PageTreeFactory(new PageTreeBuilder());

function PageTreeFactory(pageTreeBuilder) {
	
	this.createPageTreeElement = function(path) {
		var result = undefined;
		var rootNode = pageTreeBuilder.getPageByPath(path);

		if (rootNode !== undefined) {
			var selectedNode = pageTreeBuilder.getPageByPath();
			result = createPageNodeElement(rootNode, selectedNode, rootNode);
			result.onclick = togglePageNode;
		}

		return result;
	}

	function createPageNodeElement(rootNode, selectedNode, pageNode) {
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
			pageHeaderElement.className += isOpenedPageNode(selectedNode, pageNode) ? ' PageTreeOpened' : ' PageTreeClosed';

			var sortedChildren = pageNode.children.sort(comparePageNode);

			for (var i = 0; i < sortedChildren.length; ++i) {
				var childNode = sortedChildren[i];
				var childElement = createPageNodeElement(rootNode, selectedNode, childNode);
				pageHeaderElement.appendChild(childElement);
			}
		}
		else {
			pageHeaderElement.className += ' PageTreeItem';
		}

		return pageElement;
	}

	function comparePageNode(pageNode1, pageNode2) {
		var position1 = pageNode1.page.position || 0;
		var position2 = pageNode2.page.position || 0;

		if (position1 == position2) {
			var title1 = pageNode1.page.title || '';
			var title2 = pageNode2.page.title || '';
			return title1.localeCompare(title2);
		}

		if (position1 > position2) {
			return 1;
		}

		return -1;
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


function PageTreeBuilder() {

	this.getPageByPath = function(path) {
		var pageTree = this.getPageTree();

		if (isEmptyString(path)) {
			path = window.location.pathname;
		}

		path = path.toLowerCase();

		for (var key in pageTree) {
			var pageNode = pageTree[key];
			var pageNodeUrl = pageNode.page.url;

			if (!isEmptyString(pageNodeUrl) && pageNodeUrl.toLowerCase() === path) {
				return pageNode;
			}
		}

		return undefined;
	}
	
	this.getPageTree = function() {
		if (this.initialized !== true) {
			buildPageTree(this, this.pages);
			this.initialized = true;
		}

		return this.pageTree;
	}
	
	function buildPageTree(builder, pages) {
		var pageTree = {};

		for (var key in pages) {
			buildPageNode(pageTree, pages, pages[key].path);
		}

		builder.pageTree = pageTree;
	}

	function buildPageNode(pageTree, pages, path) {
		var pagePath = path.toLowerCase();
		var pageNode = pageTree[pagePath];

		if (pageNode === undefined) {
			var page = findPageByPath(pages, pagePath);

			if (page === undefined) {
				page = { path: path, title: getPageName(path) };
			}

			pageNode = { page: page, children: [] };
			pageTree[pagePath] = pageNode;

			var parentPath = getParentPath(path);
			var parentNode = buildPageNode(pageTree, pages, parentPath);

			if (parentNode != pageNode) {
				pageNode.parent = parentNode;
				parentNode.children.push(pageNode);
			}
		}

		return pageNode;
	}
	
	function findPageByPath(pages, path) {
		return pages[path] || undefined;
	}

	function getPageName(path) {
		return /\/*([^\/]+)?(\/Index(\.[^\/]*){0,1}){0,1}\/*$/i.exec(path)[1] || '';
	}

	function getParentPath(path) {
		return path.replace(/\/*[^\/]+(\/Index(\.[^\/]*){0,1}){0,1}\/*$/i, '/Index.md') || '';
	}
}


function isEmptyString(value) {
	return (value === '' || value === null || value === undefined);
}


PageTreeBuilder.prototype.pages = {
{% for page in site.pages %}
	'{{ page.path | downcase | encoding: "utf-8" }}':
		{
			url: '{{ page.url }}',
			path: '{{ page.path | encoding: "utf-8" }}',
			title: '{{ page.title | replace: "'", "\\'" }}',
			position: {% if page.position %}{{page.position}}{% else %}0{% endif %}
		},
{% endfor %}
};
