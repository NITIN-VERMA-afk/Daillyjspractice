// error handling
// try {
//   console.log("hello nitin");
// } catch (errorType1) {
//   console.log("there is some error");
// } finally {
//   console.log(
//     "this code will run no matter what happens in the try and catch blocks"
//   );
// }
// spread operator with an array
// let arr1=[23,23,4,56,76]
// let arr2=[9,76,34,54,21,65]

// const combine=[...arr1,...arr2];
// console.log(combine);
// spread with object
// let obj1={
//   a:1,
//   b:45
// }
// let obj2={
//   c:56,
//   d:55
// }

// const combineobj={...obj1,...obj2}
// console.log(combineobj);
// rest operator

// const sum = (...numbers) => {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7));
// callbacks example

// function changingBrushColor(newColor, callbacks) {
//   console.log("changing bush color");
//   setTimeout(function () {
//     console.log("brush color changed to" + newColor);
//     callbacks();
//   }, 2000);
// }
// function continueDrawing() {
//   console.log("you can continue drawing now");
// }

// console.log(" clicked color change button");
// changeBrushColor("blue", continueDrawing);
// console.log("doing something else while waiting");

// let admin,name;
// name="john"
// admin=name;
// alert(admin)


// reverse a string 





// let revString=()=>{
   
//     let name =document.getElementById('str');
//     let inputName=name.value;

//     let newString= inputName.split('').reverse().join('')
   
//    let c= document.getElementById("rev")
//    c.textContent= "reversed string is: "+newString;
   
   
  
  
// }
// for fectorial

// const factorial=()=>{
//     let number=document.getElementById('num');
//     let numb=number.value;

//     let newNumber= for (i=0;i<numb.length;i++){

//     }

//     let c=document.getElementById("output")
//     c.textContent="factorials of your no is "+newNumber;
// }

// find palidrom

// const findPalidrom=()=>{
    
//      let text=document.getElementById("txt")
//      let  inputText= text.value;

//      let newInput=inputText.split("").reverse().join("")
//      let rev=document.getElementById("revStr");
//      rev.textContent=newInput+ "is reverse"

//      let palidrom=document.getElementById("palidrom")
            
       
//          if(inputText===newInput){
//             palidrom.innerHTML=`${inputText} is Palindrom`
         
//          }else{
//            palidrom.innerHTML=`${inputText}is not palidrom`
//          }

// }


// fizz buzz chalenge 

// const findNum=()=>{
   
//     let Number= parseInt(document.getElementById("num").value) 
//     let answer=document.getElementById("Ans")
//     if(Number%2===0){
//         answer.innerHTML=`${Number}is fizz`
        
//     }else{
//         answer.innerHTML=`${Number}is Buzz`
      

//     }
// }

 
    






