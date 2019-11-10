function myFunction(){
  var firstNumber=parseInt(document.getElementById("fistLength").value);
  var secondNumber=parseInt(document.getElementById("secondLength").value);
  var thirdNumber=parseInt(document.getElementById("thirdLength").value);
  var text;
  var array=[firstNumber,secondNumber,thirdNumber];
  if(firstNumber<=0 || secondNumber<=0 ||thirdNumber<=0){
    text="please insert positive number";

  }
  else if(firstNumber+secondNumber<=thirdNumber||firstNumber+thirdNumber<=secondNumber||secondNumber+thirdNumber<=firstNumber){
    text="Triangle can't be formed";
  }else if(firstNumber==secondNumber && secondNumber==thirdNumber && firstNumber== thirdNumber){
  text="Triangle is equilateral";
}else if (firstNumber==secondNumber 
  ||firstNumber==thirdNumber|| thirdNumber==secondNumber){
    text="Triangle is isoscele";

}
else if(firstNumber+secondNumber>thirdNumber||firstNumber+thirdNumber>secondNumber||secondNumber+thirdNumber>firstNumber){
  text="Triangle is scalene";
}

  document.getElementById("demo").innerHTML=text;
}
