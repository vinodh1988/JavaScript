class Employee
{
   constructor(sno,name){
       this.sno=sno;
       this.name=name;
   }

   display(){
       console.log(this.sno+" "+this.name);
   }
    
   setEmp(sno,name){
       this.sno=sno;
       this.name=name;
   }
}


var obj=new Employee(12,"Ram");
obj.display();
obj.setEmp(13,"Broad");
obj.display();