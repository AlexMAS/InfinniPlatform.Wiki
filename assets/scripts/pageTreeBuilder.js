function PageTreeBuilder() {

	this.getRootPath = function(path) {
		var rootPage = this.getRootPage(path);

		if (rootPage !== undefined) {
			return rootPage.page.url;
		}

		return undefined;
	}

	this.getRootPage = function(path) {
		var selectedNode = this.getPageByPath(path);

		if (selectedNode !== undefined) {
			var parent = undefined;
			var current = selectedNode;

			while (current.parent !== undefined) {
				parent = current;
				current = current.parent;
			}

			return parent;
		}

		return undefined;
	}

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

		for (var key in pageTree) {
			var pageNode = pageTree[key];
			pageNode.children = pageNode.children.sort(comparePageNode);
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

	function comparePageNode(pageNode1, pageNode2) {
		var position1 = pageNode1.page.position || 0;
		var position2 = pageNode2.page.position || 0;

		if (position1 === position2) {
			var title1 = pageNode1.page.title || '';
			var title2 = pageNode2.page.title || '';
			return title1.localeCompare(title2);
		}

		return (position1 > position2) ? 1 : -1;
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
{% for page in site.posts %}
	'{{ page.path | downcase | encoding: "utf-8" }}':
		{
			url: '{{ page.url }}',
			path: '{{ page.path | encoding: "utf-8" }}',
			title: '{{ page.title | replace: "'", "\\'" }}',
			position: {% if page.position %}{{page.position}}{% else %}0{% endif %}
		},
{% endfor %}
};
