$(document).ready(function(){
    $('#contact-button').on('click', function(){
        $(this).parent().css({'transform': 'translateX(-100%)'}); 
        
        

        setTimeout(function(){
            $('#contact-form').fadeIn('slow');            
        },1000);
    })
});