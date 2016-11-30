$(function(){
    var h=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup",$(".fullpage"),function(){
        if(!flag){
            return;
        }
        num++;
        var les=$("section").length;
        if(num==les){
            num=les-1;
            return;
            flag=false;
        }
        $(".fullpage").css("marginTop",-num*h);
    });
    touch.on("body","swipedown",$(".fullpage"),function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
           num=0;
            return;
            flag=false;
        }
        $(".fullpage").css("marginTop",-num*h);
    })
    $(".fullpage")[0].addEventListener("webkitTransition",function(){
        flag=true;
    })



})