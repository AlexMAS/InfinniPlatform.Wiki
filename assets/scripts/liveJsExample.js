function LiveJsExample() {
    var $liveExample = this.findHighlightedWithLiveExampleOnPage();
    var that = this;

    this.template = '<div class="iui-live-example"></div>';


    $liveExample.each(function(i, el){
        var $el = $(el);

        that.addLiveExample($el);
        that.clipText($el);
    });
}

LiveJsExample.prototype.findHighlightedOnPage = function(){
    return $('.highlight');
};

LiveJsExample.prototype.findHighlightedWithLiveExampleOnPage = function(){
    var $highlighted =  this.findHighlightedOnPage();
    return $highlighted.filter(':contains(//js-demo)');
};

LiveJsExample.prototype.addLiveExample = function($el){
    var scriptText =  $el.text();
    var func = new Function('$elementForExample', scriptText);
    var $liveExampleWrap = this.createLiveExampleWrap($el);

    func($liveExampleWrap);
};

LiveJsExample.prototype.createLiveExampleWrap = function($el){
    var $liveExample = $(this.template);
    $el.after($liveExample);
    return $liveExample;
};

LiveJsExample.prototype.clipText = function($el){
    var $code = $el.find('pre code');
    var s = $code.get(0).innerHTML.replace(/<span class="c1">[\s\S]*\/\/js-demo<\/span>\s*/, '');
    $code.get(0).innerHTML = s;
};