/*var a={sno:1,name:"Raj"};

a.age=45;
//console.log(a);


var b={sno:12,name:"John",display:function(){console.log(this.sno+" "+this.name)}};

b.display();
b.marks=[12,24,23];

console.log(b);
*/


function Student(sno,name){
    this.sno=sno;
    this.name=name;
    this.display=function(){
        console.log(this.sno+" "+this.name);
    }
}
Student.prototype.setName=function(name){
    this.name=name;
}


var obj=new Student(12,"robert");
var obj1=  new Student(13,"Ram");
    
console.log(obj);
console.log(obj1);
obj1.display();
obj.display();
obj1.setName("Ganesh");
obj1.display();
obj.setName("Prathap");
obj.display();