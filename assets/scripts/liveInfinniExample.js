function LiveInfinniExample() {
    var $liveExample = this.findHighlightedWithLiveExampleOnPage();
    var that = this;

    this.template = '<div class="iui-live-example"></div>';


    $liveExample.each(function(i, el){
        var $el = $(el);

        that.addLiveExample($el);
        that.clipText($el);
    });
}

LiveInfinniExample.prototype.findHighlightedOnPage = function(){
    return $('.highlight');
};

LiveInfinniExample.prototype.findHighlightedWithLiveExampleOnPage = function(){
    var $highlighted =  this.findHighlightedOnPage();
    return $highlighted.filter(':contains(//infinni-ui-demo)');
};

LiveInfinniExample.prototype.addLiveExample = function($el){
    var text =  this.clearExampleText($el.text());
    var metadata = JSON.parse(text);
    var $liveExampleWrap = this.createLiveExampleWrap($el);

    metadata = {
        LinkView: {
            InlineView: {
                View: metadata
            }
        }
    };

    this.runPlatformWithMetadata(metadata, $liveExampleWrap);
};

LiveInfinniExample.prototype.createLiveExampleWrap = function($el){
    var $liveExample = $(this.template);
    $el.after($liveExample);
    return $liveExample;
};

LiveInfinniExample.prototype.runPlatformWithMetadata = function(metadata, $el){
    var builder = new ApplicationBuilder(),
        rootView = new SpecialApplicationView(),
        mainView;

    rootView.open($el);
    InfinniUI.config.$rootContainer = $el;

    var action = builder.buildType('OpenAction', metadata, {parentView: rootView});
    action.execute();

    var view = 1;
};

LiveInfinniExample.prototype.clearExampleText = function(text){
    return text.replace(/\/\/infinni-ui-demo|\/\/infinni-ui-display-begin|\/\/infinni-ui-display-end/g, '');
};

LiveInfinniExample.prototype.clipText = function($el){
    var $code = $el.find('code');
    var s = $code.get(0).innerHTML.replace(/<span class="c1">[\s\S]*\/\/infinni-ui-demo<\/span>\s*/, '');
    s = s.replace(/^[\s\S]*\/\/infinni-ui-display-begin<\/span>\s*/, '');
    s = s.replace(/\s*<span class="c1">\/\/infinni-ui-display-end[\s\S]*$/, '');
    $code.get(0).innerHTML = s;
};

//----------------
moment.locale('ru');

(function ($target/*, metadata*/, homePageMetadata) {

    var host = InfinniUI.config.serverUrl;

    InfinniUI.providerRegister.register('ObjectDataSource', ObjectDataProvider);

    InfinniUI.providerRegister.register('MetadataDataSource', function (metadataValue) {
        var $pageContent = $('body');
        return new MetadataProviderREST(new QueryConstructorMetadata(host, metadataValue));
    });

    InfinniUI.providerRegister.register('DocumentDataSource', RestDataProvider);

})();


function SpecialApplicationView() {
    var $container;

    this.getContainer = function () {
        return this.$container;
    };

    this.open = function ($el) {
        this.$container = $el;
    };

    this.getApplicationView = function () {
        return this;
    };

    this.menuIsInitialized = function () {
        this.isMenuInitialized = true;

        //this.initViewHandlers();
    };

    this.getContext = function(){
        return null;
    }
}
