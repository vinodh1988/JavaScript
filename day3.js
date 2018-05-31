function today(x){
  if(x.experience>20)
       x.appointment({desig:"Manager",basic:134934});
  
  else if(x.experience>10)
       x.appointment({desig:"Ass Manager",basic:99943});
 
  else
       x.appointment({desig:"Supervisor",basic:49874});
}

today({experience:14,appointment: function(a){
    console.log("Designation is::"+a.desig);
    console.log("Basic is::"+a.basic);
}});



/*

 functions without parameter
 function with string literals or numbers as parameter
 function with array as parameter
 function with function as parameter
 function with function as function as return type
 function with object(properties and values) as pattern
*/
