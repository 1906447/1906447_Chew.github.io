$(".pers1").hide();
$(".pers2").hide();
$(".pers3").hide();
$(".pers4").hide();
$(".pers5").hide();


$("#m1").click(function(){
    var x = document.getElementById("m1");
    
    if(x.innerHTML === "＋MORE"){
        x.innerHTML = "ーLESS";
        $(".pers1").fadeToggle(1000);
    }
    else if(x.innerHTML === "ーLESS"){
        x.innerHTML = "＋MORE";
        $(".pers1").hide();
    }
});
$("#m2").click(function(){
    var x = document.getElementById("m2");
    
    if(x.innerHTML === "＋MORE"){
        x.innerHTML = "ーLESS";
        $(".pers2").fadeToggle(1000);
    }
    else if(x.innerHTML === "ーLESS"){
        x.innerHTML = "＋MORE";
        $(".pers2").hide();
    }
});
$("#m3").click(function(){
    var x = document.getElementById("m3");
    
    if(x.innerHTML === "＋MORE"){
        x.innerHTML = "ーLESS";
        $(".pers3").fadeToggle(1000);
    }
    else if(x.innerHTML === "ーLESS"){
        x.innerHTML = "＋MORE";
        $(".pers3").hide();
    }
});
$("#m4").click(function(){
    var x = document.getElementById("m4");
    
    if(x.innerHTML === "＋MORE"){
        x.innerHTML = "ーLESS";
        $(".pers4").fadeToggle(1000);
    }
    else if(x.innerHTML === "ーLESS"){
        x.innerHTML = "＋MORE";
        $(".pers4").hide();
    }
});
$("#m5").click(function(){
    var x = document.getElementById("m5");
    
    if(x.innerHTML === "＋MORE"){
        x.innerHTML = "ーLESS";
        $(".pers5").fadeToggle(1000);
    }
    else if(x.innerHTML === "ーLESS"){
        x.innerHTML = "＋MORE";
        $(".pers5").hide();
    }
});
