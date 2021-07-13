var a = new Array();
console.log("a=",a.length);
var a1 = new Array(10);
console.log("a1=",a1.length);
var a2 = new Array(1,2,3);
console.log("a2=",a2.length);
var a3 = [4,5];
console.log("a3=",a3.length);
 a3[5] = -1; 
console.log("a3=",a3.length);
a3[15] ="Array Element at 15th position"; 
console.log("a3=",a3.length);
a3[49] = 0;
console.log("a3=",a3.length);
for(i=0;i<a3.length;i++){
	console.log("a3["+i+"]= "+a3[i]);
}
