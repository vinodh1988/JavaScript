function fun(){
   console.log("This is running!!!") ;
     
    return function(data){
        console.log(data);
    }
}

fun()("INDIA");

/* Function returning a function */