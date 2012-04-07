(function ($, undefined){
    var prepareStellar = function(){
        $(window).stellar({
            verticalOffset: 0,
            verticalScrolling: true,
            horizontalScrolling: true,
            verticalScrolling: true,
            //hideElement: function(e) { console.debug("hideElem:",e); },
            //showElement: function(e) { console.debug("showElem:",e); }
        });
    }

    var initialize = function(){
        console.debug("initializing");
        prepareStellar();
    }

    $(document).ready(initialize);
})(jQuery);


