var pageTreeBuilder = new PageTreeBuilder();
var pageTreeFactoryInstance = new PageTreeFactory(pageTreeBuilder);
var breadcrumbFactoryInstance = new BreadcrumbFactory(pageTreeBuilder);
var pageNavigationInstance = new PageNavigation(pageTreeBuilder);
