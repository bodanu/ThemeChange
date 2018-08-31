$("document").ready(function(){

    $("#one").click(function(){
        $("#img-container").toggleClass("alt-img-container")
        $("#wrapper").toggleClass("alt-wrapper")
       /// $("#big-title").text("Second theme!")
        $("#wrapper").toggleClass("alt-wraper")
        $(".content-container").toggleClass("alt-content-container")
        $("#aricle1").toggleClass("alt-aricle1")
        $("#article2").toggleClass("alt-article2")
        $("#article3").toggleClass("alt-article3")
        $(".btn-container").toggleClass("alt-btn-container")
       ///// $(".small-title").text("Second article format")
        
    });
    $("#one").click(function(){ 
       var x = document.getElementById('small-title');
       if (x.innerHTML === "Original article format") {
           x.innerHTML = "Second article format";
       } else {
           x.innerHTML = "Original article format";
       }
    });
    $("#one").click(function(){ 
        var y = document.getElementById('big-title');
        if (y.innerHTML === "Original interface") {
            y.innerHTML = "Second theme!";
        } else {
            y.innerHTML = "Original interface";
        }
     });
    $("#two").click(function(){
        $("#article2").toggleClass("yellow")
    });

    $("#three").on('click', function(){
        $("#article2, #article3").removeClass("article2").addClass("brown yellow")
    });
   

    $("#four").click(function(){
        $("#article2").removeClass("yellow brown").addClass("article2")
        $("#aricle1").removeClass("yellow brown").addClass("aricle1")
        $("#article3").removeClass("yellow brown").addClass("article3")
        $("#big-title").text("Original interface")
        $(".small-title").text("Original article format")
    });

});