$('.loginBtn').click(function(){
    $('.login').show();
    $('.signUp').hide();

    $('.loginBtn').css({'border-bottom' : '2px solid #ff4141'});

    $('.signUpinBtn').css({'border-style' : 'none'});
});

$('.signUpBtn').click(function(){
    $('.login').hide();
    $('.signUp').show();

    $('.signUpnBtn').css({'border-bottom' : '2px solid #ff4141'});

    $('.loginBtn').css({'border-style' : 'none'});
});