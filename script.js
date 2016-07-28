 $('document').ready(function() {
           $('.to-about-me').click(function() {
             $('.isCentered').removeClass('isCentered');
             $('.container').slideDown(500);
             $('.menu div h3').slideUp(200);
           });
         });
