$('.modal_overlay').on('click', function(e){
 if($(e.target).closest('.modal').length==0){
    $(this).fadeOut();
 }
})

$('.close').on('click', function(){
    $(this).parents('.modal_overlay').fadeOut();
})

$('#open_modal-build').on('click', function(){
    $('.modal_overlay').fadeIn();
})

$('.modal_fon').on('click', function(e){
    if($(e.target).closest('.modal').length==0){
       $(this).fadeOut();
    }
   })

   $('.close').on('click', function(){
    $(this).parents('.modal_fon').fadeOut();
})

$('#open_modal-audience').on('click', function(){
    $('.modal_fon').fadeIn();
})

