$('.feature_items > div').on('click', function(){
    $(this).children('.feature_icon').toggleClass('feature_rotate-icon');
    $(this).parents('.feature_items').toggleClass('change_color')
    $(this).parents('.feature_items').toggleClass('change_color-icon');
    $(this).next('.icon_text').slideToggle(300);
    $(this).next('.line').slideToggle(300);
})

$('#change_customers').on('click', function(){
    $('#line_first').toggleClass('line_change');
})

$('#change_engage').on('click', function(){
    $('#line_second').toggleClass('line_change');
})

$('#change_develop').on('click', function(){
    $('#line_third').toggleClass('line_change');
})

$('.hiring_about > div').on('click', function(){
    $('.flex').children('.feature_icon').toggleClass('feature_icon-rotate');
    $(this).parent('.hiring_about').toggleClass('hiring_change-color');
    $(this).next('.hiring_about-content').slideToggle(300)
})