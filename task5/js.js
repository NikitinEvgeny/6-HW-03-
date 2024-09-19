let inputText =  document.querySelector("#inputText");
let button  =  document.querySelector("button");
let blokText  =  document.querySelector("#duplicateField");
let arr = [];
let stroca;



window.addEventListener("keydown", klic, false);





function klic(event) 
{ 
    
  //stroca = event.key;
  arr.push(event.key)
   // console.dir(arr);
  // arr.forEach((number) => {
   // blokText.textContent;
 // });
};

  /*inputText.addEventListener('keypress', function(event) {

    blokText.textContent = event.key;
    
});*/


/*let arr = [1, 2, 3, 4, 5];

arr.forEach(function(elem) {
	console.log(elem);
});*/
