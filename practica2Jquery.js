jQuery(document).ready(function(){

	$("#content div").hide();
    $("#tabs li:Precio").attr("id","current");
    $("#content div:Precio").fadeIn();
 
    $('#tabs a').click(function()){
        e.preventDefault();
        $("#content div").hide();
        $("#tabs li").attr("id","");
        $(this).parent().attr("id","current");
        $('#' + $(this).attr('title')).fadeIn();
        alert("bullshit");
    });

    $("#Genuino_ZERO_buy").bind('click',function(){
    
    });
});