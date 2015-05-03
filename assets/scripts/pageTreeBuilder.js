function PageTreeBuilder() {

	this.getRootPath = function(path) {
		var selectedNode = this.getPageByPath(path);

		if (selectedNode !== undefined) {
			var parent = undefined;
			var current = selectedNode;

			while (current.parent !== undefined) {
				parent = current;
				current = current.parent;
			}

			return parent.page.url;
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
