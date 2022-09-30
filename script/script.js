$('.feature_items > div').on('click', function(){
    $(this).children('.feature_icon').toggleClass('feature_rotate-icon');
    $(this).next('.icon_text').slideToggle(300);
    $(this).next('.line').slideToggle(300);
})

$('#change_customers').on('click', function(){
    $('#change_customers').toggleClass('change_color');
    $('#line_first').toggleClass('line_change');
})

$('#change_engage').on('click', function(){
    $('#change_engage').toggleClass('change_color');
    $('#line_second').toggleClass('line_change');
})

$('#change_develop').on('click', function(){
    $('#change_develop').toggleClass('change_color');
    $('#line_third').toggleClass('line_change');
})

$('.feature_items > div').on('click', function(){
    $('.feature_items').toggleClass('change_color-icon');
})

$('.hiring_about > div').on('click', function(){
    $('.flex').children('.feature_icon').toggleClass('feature_icon-rotate');
    $(this).parent('.hiring_about').toggleClass('hiring_change-color');
    $(this).next('.hiring_about-content').slideToggle(300)
})