function PageNavigation(pageTreeBuilder) {

	this.getBackPage = function(path) {
		var currentPage = pageTreeBuilder.getPageByPath(path);

		if (currentPage !== undefined) {
			var sortedPages = this.getSortedPages(pageTreeBuilder);
			return getPageByOffset(sortedPages, currentPage, -1);
		}

		return undefined;
	}

	this.getNextPage = function(path) {
		var currentPage = pageTreeBuilder.getPageByPath(path);

		if (currentPage !== undefined) {
			var sortedPages = this.getSortedPages(pageTreeBuilder);
			return getPageByOffset(sortedPages, currentPage, +1);
		}

		return undefined;
	}

	this.getSortedPages = function(pageTreeBuilder) {
		if (this.initialized !== true) {
			var sortedPages = [];
			var rootPage = pageTreeBuilder.getRootPage();

			if (rootPage !== undefined) {
				addSortedPage(sortedPages, rootPage);
			}

			this.sortedPages = sortedPages;
			this.initialized = true;
		}

		return this.sortedPages;
	}

	function addSortedPage(sortedPages, pageNode) {
		sortedPages.push(pageNode);

		for (var i = 0; i < pageNode.children.length; ++i) {
			addSortedPage(sortedPages, pageNode.children[i])
		}
	}
	
	function getPageByOffset(sortedPages, pageNode, offset) {
		var pageNodeSortedIndex = offset;
		
		for (var i = 0; i < sortedPages.length; ++i) {
			if (sortedPages[i] === pageNode) {
				pageNodeSortedIndex += i;
				break;
			}
		}

		if (pageNodeSortedIndex >= 0 && pageNodeSortedIndex < sortedPages.length) {
			return sortedPages[pageNodeSortedIndex];
		}

		return undefined;
	}
};
