var strings=['Ram','Roger','Kareem123','Bevan343','Chris','Jon','John',
            'Jhon','Kevin','12324ben','23434','man@gmail.com','Joe@hotmail.com','Mickey@hotmail','roger_123@gmail.com','vijay.kumar@gmail.com','jim','spy','dray','Quenton','quick','carlos123','knee@gmail.com','billy.murray',"rm"];


var code=document.getElementById("all").innerHTML;

for(let x in strings){
    code+="<div class='abox'>"+strings[x]+"</div>";
}
    

document.getElementById("all").innerHTML=code;

    
function handleregex(){
   // let a=document.forms[0].string.value;
    let a=document.getElementById("string").value;
    
    let regex=new RegExp(a);
    let source="";
    for(x in strings){
        if(regex.test(strings[x]))
            source+="<div class='mbox'>"+strings[x]+"</div>";
    }
    document.getElementById('matched').innerHTML=source;
}