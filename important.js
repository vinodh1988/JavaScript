class Test
    {
        constructor(){
            this.data="Default!!!";
        }
        display(){
            console.log(this.data);
        }
        manipulate(){
           /* callme(function(x){
                this.data=x;
            }.bind(this)); //ES5*/
            
            callme((x)=>this.data=x);
        }
    }

function callme(p){
    p("Data sent by callme");
}

var obj=new Test();
obj.display();
obj.manipulate();
obj.display();