$(document).ready(function(){
    $('.popup__price, .popup__btn, .left-banner a').click(function(){
        $('.form-price').addClass('active-form');
    });

    $(document).mouseup(function (e) {
        var div = $(".form__wrap");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.parent().removeClass('active-form');
        }
    });
});