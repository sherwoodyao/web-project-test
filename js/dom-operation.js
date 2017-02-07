(function(){
    function getColor(type){
        return type === 'random'?'#'+Math.floor(Math.random()*16777215).toString(16):'#000';
    }
    function getRandomNumber(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }
    $('body').on('click', '.swiper-slide', function(){

        var $swiperSlide = $('.swiper-slide');
        $swiperSlide.removeClass('active');
        $swiperSlide.css('color', getColor());

        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).css('color', getColor());
        } else {
            $(this).addClass('active');
            $(this).css('color', getColor('random'));
            $('#main').css('background-image', "url(img/"+getRandomNumber(1, config.imgTpl.count+1)+".jpg)");
        }
    })
    $('#main').on('click', function(){
        if($(this).attr('style')){
            $('input[type=file]').trigger('click');
        }
    });
    function picChange(event){
        var fileInput = event.target.files;
        var windowURL = window.URL || window.webkitURL;
        var picURL = windowURL.createObjectURL(fileInput[0]);
        $('#main img').attr('src', picURL);
    }
    window.picChange = picChange;
})(window);