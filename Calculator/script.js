function change(num) {
   let display = document.getElementsByClassName("display")[0];
   if (display.textContent === "0") {
      display.textContent = num;
   }
   else {
      display.textContent += num;
   }

}
function addition() {

   let display = document.querySelector(".display");
   if (display.textContent === " ") {
      return;
   }
   if (display.textContent.endsWith("+") ||
      display.textContent.endsWith("-") ||
      display.textContent.endsWith("/") ||
      display.textContent.endsWith("*")

   ) {
      return;

   }

   display.textContent += "+";




}

function subtraction() {
   let display = document.querySelector(".display");
   if (display.textContent === " ") {
      return;
   }
   if (display.textContent.endsWith("+") ||
      display.textContent.endsWith("-") ||
      display.textContent.endsWith("/") ||
      display.textContent.endsWith("*")
   ) {
      return;

   }
   display.textContent += "-";
}
function divison() {
   let display = document.querySelector(".display");
   if (display.textContent === " ") {
      return;
   }
   if (display.textContent.endsWith("+") ||
      display.textContent.endsWith("-") ||
      display.textContent.endsWith("/") ||
      display.textContent.endsWith("*")
   ) {
      return;

   }
   display.textContent += "/";
}

function multiplication() {
   let display = document.querySelector(".display");
   if (display.textContent === " ") {
      return;
   }
   if (display.textContent.endsWith("+") ||
      display.textContent.endsWith("-") ||
      display.textContent.endsWith("/") ||
      display.textContent.endsWith("*")
   ) {
      return;

   }
   display.textContent += "*";
}
function equal() {

   let display = document.querySelector(".display");
   let expression = display.textContent;

   

   if (expression.includes("+")) {
      let num = display.textContent.split("+");

      let firstNumber = Number(num[0]);
      let secondNumber = Number(num[1]);
      let sum = 0;
      //let sum = firstNumber + secondNumber;
      for (let i = 0; i < num.length; i++) {
         sum = sum + Number(num[i]);

      }
      display.textContent = sum;
   }

   else if (expression.includes("-")) {
      let num1 = display.textContent.split("-");

      let difference = Number(num1[0]);

      for (let i = 1; i < num1.length; i++) {
         difference = difference - Number(num1[i]);
      }

      display.textContent = difference;
   }
   else if (expression.includes("*")) {
      let num2 = display.textContent.split("*");

      // let FirstNumber = Number(num2[0]);
      //let SecondNumber = Number(num2[1]);
      let result = Number(num2[0]);
      for (let i = 1; i < num2.length; i++) {
         result = result * Number(num2[i]);
      }
      // result = FirstNumber * SecondNumber;
      display.textContent = result;

   }
   else if(expression.includes("/")){
      let num3 = display.textContent.split("/");

      let result2 = Number(num3[0]);
      for(let i=1;i<num3.length;i++){
         result2 = result2 / Number(num3[i]);
      }
      display.textContent = result2;
   }
   else if(expression.includes("+")||expression.includes("/") ||
expression.includes("*")||expression.includes("-") ||
expression.includes("=")) {
      let display = document.querySelector(".display");
      let expression = display.textContent;
 
}   // <-- this closing brace was missing
}
function clearDisplay() {
   let display = document.querySelector(".display");
  
   display.textContent = "0";
   }

function equals() {
   let display = document.querySelector(".display");
   let expression = display.textContent;

   if (/[+\-*/]$/.test(expression)) {
      return;
   }
   display.textContent = eval(expression);
}
