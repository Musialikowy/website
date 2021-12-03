try{
    $(window).on("load",function(){
    $("#loading").fadeOut("slow");
    $("#page").show();
    })
    
} catch{
    alert("Przepraszam! Wystąpił błąd. Jeśli masz taką możliwośc, możesz wysłac zawartość podanych błędów do twórcy ( mail: musialikowy@gmail.com ).")
    document.getElementById("loading").innerHTML = err.message;
    document.getElementById("page").innerHTML = err.message;
}