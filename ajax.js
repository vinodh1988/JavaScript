var reviews;
var http=new XMLHttpRequest();

http.onreadystatechange=function(){
    if(this.readyState==4)
    {
        reviews=JSON.parse(this.responseText);
        setInterval(()=>{
        let index=Math.floor(Math.random()*reviews.length);
        let code="";
        code+="<h3>"+reviews[index].name+" said on "+reviews[index].course+" </h3>";
        code+="<p>"+reviews[index].message+"</p>";
        code+="<h5 align='right'>"+reviews[index].reviewdate+"</h5>";
        document.getElementById('tablebox').innerHTML=code;
        },3000);
    }
};

http.open("GET","http://139.59.9.236:8898/rest-api/reviews",true);

http.send();




