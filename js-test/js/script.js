//var a = function() {
//var m ="jude";
//console.log("Hey "+ m);
//
//};
//a();
/*var m = "js";
console.log("this is "+ m );

function b() {
	console.log(m);
}
b();

var x="54";

	console.log(x/5);
*/
//var x = 10;
//if ( (null)|| false || x > 7 ) {
//  console.log("Hello");
//}
 
//var company = new Object();
//company.ceo= "HEY";
//company.struts=new Object();
//company.struts.gropy=56;
//console.log(company);
//var facebook ={
//	name:"MARK" ,
//	lastname:"ZUCK",
//    ceo:{
//    	name:"morsi",
//    	age:79
//    }
//};
//console.log(facebook);
//function mult(x,y) {
//	return (x+y);
//
//}
//console.log(mult(3,6));
//function test(x) {
//
//console.log("HEY JUDE");
//}
//test();
//function circle(R) {
// this.radius=R;
//}
//circle.prototype.getarea= function() {
//   return (Math.PI * Math.pow(this.radius , 2 ));
//}
//var mycircle = new circle(10);
//var newcirc = new circle(20);
//console.log(mycircle);
//console.log(newcirc);
//var circe = {
//	radius : 10 ,
//	getarea :function () {
//	console.log(this);
//	return Math.PI * Math.pow(this.radius, 2);
//	}
//}
//
//console.log(circe.getarea());
//var array = new Array();
//array[0] = "hey";
//array[1] = 45;
//array[2] = function (name){
//	console.log(name);};
//array[3] = {course : "HTML4LIFE",
//radius : 34};
//console.log(array[3]);
//var names= ["HEY" , "JUDE", "DONT"];
//(function (window){var yaakoovgreeter = {};
//yaakoovgreeter.name= "Yaakov";
//var greeting = "Hello ";
//yaakoovgreeter.syhello= function () {
//console.log(greeting + yaakoovgreeter.name );
//}
//window.yaakoovgreeter= yaakoovgreeter;
//})(window);
//yaakoovgreeter.syhello();


///////////////////////////////////////////////////////////////////
/***************************************************************************/

document.addEventListener("DOMContentLoaded",function (event) {

function print(event) {
var name=	document.getElementById("enter").value;
var message = "<h2>Hello " + name + "!</h2>";
document.getElementById("content").innerHTML= message;
}
document.querySelector("button")
.addEventListener("blur",print);

document.querySelector("body")
.addEventListener("mousemove",function (event) {
	
	console.log(event.clientX);
	var x = 700;
	event.clientX= x;

});

});

