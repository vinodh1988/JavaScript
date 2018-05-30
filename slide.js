setInterval(function(){
    var a=['techno.jpg','techno1.jpg','techno3.jpg','techno4.jpg','techno5.jpg'];
    
   var index= Math.floor(Math.random()*5);
    
    document.images[0].src="images/"+a[index];
},3000);
