$('.feature_items > div').on('click', function(){
    $(this).parents('.feature_items').toggleClass('change_color');
    $(this).next('.icon_text').slideToggle(300)
   
})

$('.hiring_about > div').on('click', function(){
    $('.flex').children('.feature_icon').toggleClass('feature_icon-rotate');
    $(this).parent('.hiring_about').toggleClass('hiring_change-color');
    $(this).next('.hiring_about-content').slideToggle(300)
})