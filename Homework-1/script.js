
var a,b,result;



function get_values() 
{
  a = Number(document.getElementsByClassName("a")[0].value);
  b = Number(document.getElementsByClassName("b")[0].value);
}

function sum() 
{
  get_values();
  result= a+b;
  alert("The sum is equal to "+result);
}

function rest() {
  get_values();
  result= a-b;
  alert("The Rest is equal to "+result);
}

function mult() {
  get_values();
  result= a*b;
  alert("The operation is equal to "+result);
}

function div() {
  get_values();
  result= a/b;
  alert("The operation is equal to "+result);
}