// Add active class to the current button (highlight it)
('.menu').on('click', function(){
    $('header nav').slideToggle();
    $(this).toggleClass('active');
});