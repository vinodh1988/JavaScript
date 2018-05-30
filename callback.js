/*
function fun(p){
    console.log("Fun is running..!!!");
    
    p("India"); //function call for p
    console.log("Fun is still running...!!!");
    p("Pakistan");
} //definition of the function fun

fun(function(data){
    console.log("callback is running!!!");
    console.log(data);
}); //function call for fun
*/

function demo(p,q){
    if(p>100000)
        q("30+","A P");
    else
        q("20+","T N");
    console.log("STILL");
}

demo("232443",function(x,y){
   console.log(x);
   console.log(y);
});