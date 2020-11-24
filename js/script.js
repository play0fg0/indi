/* $(document).ready(function () { 
    console.log("888888");
    $(".menu__burger").each(function(){
        $(this).on('click', function (e) { 
            console.log("---111");
            $(".menu__burger").toggleClass("active"); 
        });
    }); 
}) */;

$(document).ready(function (){
    $(".menu__burger").click(function(event){
        $(".menu__burger,.menu").toggleClass('active');
        $('body').toggleClass('lock');
    });

});

