/*literals*/
/*console.log("JS is working");

var a=223;
var b='word';
var c=true;
var d=12.2;
var e=013;
var f=0x11;
console.log(a+" "+b+" "+c);

console.log(d);
console.log(e);
console.log(f);
*/
/* Arrays  */
/*
var a=[];
a[10]=243;
a[15]=979;
a[5]="Young";
a[2]=[1,2,3];
a[2][3]=[5,5,3];
console.log(a);
console.log(a[1]);
console.log(a[2][0]);
*/
/*
var a=[1,3,4,5,[1,2,3]];

for(i=0;i<a.length;i++)
    console.log(a[i]);

for(i in a)
    console.log(a[i]);
*/
/* function creation and call */
/*
function test(p=23,q){
    console.log(p);
    console.log(q);
}

a=test();//function call
test(21,89);
test("ram");
test([1,2,3]);
test();
test(12,12,43);
*/
/*
var a=function(){
    console.log("Running");
};

a();

var b=a;
b();

a=12;
*/
//console.log(b);

var a=[1,2,[1,2,3],true, function(){
    console.log("Element is a function");
}];

console.log(a[2][2]);

a[4]();

var x=a[4];

x();





