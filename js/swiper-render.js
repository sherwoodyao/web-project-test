(function(){
    if($('#swipertmpl').length && $('.swiper-wrapper').length){
        var data = {
            array: new Array(config.count)
        };
        var pagefn = doT.template($('#swipertmpl')[0].text);
        $('.swiper-wrapper')[0].innerHTML = pagefn(data);
    }
})();
