'use strict';
console.log('app js is connected');



//These are in an html collection(array) use ref to image index instead of id's for tracking images shown we are still going to count total clicks and each image's click amount.

//global variables
let imageElements = document.getElementsByTagName('img');
// console.log('image Elements ',imageElements);

// [img1, img2]
let productIndex1 = 0;
let productIndex2 = 1;
let productIndex3 = 2;

let rounds = 5;
let allProducts = [];

//Constructor function 
function Product(name, imageURL){
  this.name = name;
  this.imageURL = imageURL;
  this.timesClicked = 0;
  this.timesShown = 0;
  allProducts.push(this);
}
console.log('this is all of the objects made by the constructor',allProducts);

//populate chart with object data.
// function getProductArray(nameOfThePropertyIWant){
//   let answer = [];
//   for(let i = 0; i < allProducts.length; i++){
//     answer[i] = allProducts[i][nameOfThePropertyIWant];
//   }
//   console.log(answer);
//   return answer;
// }


// actually create our Products's
new Product('Bag', 'images/bag.jpg');
new Product('Banana', 'images/banana.jpg');
new Product('Bathroom', 'images/bathroom.jpg');
new Product('Boots', 'images/boots.jpg');
new Product('Breakfast', 'images/breakfast.jpg');
new Product('Bubblegum', 'images/bubblegum.jpg');
new Product('Chair', 'images/chair.jpg');
new Product('Cthulhu', 'images/cthulhu.jpg');
new Product('Dog-duck', 'images/dog-duck.jpg');
new Product('Dragon', 'images/dragon.jpg');
new Product('Pen', 'images/pen.jpg');
new Product('Pen-sweep', 'images/pet-sweep.jpg');
new Product('Scissors', 'images/scissors.jpg');
new Product('Shark', 'images/shark.jpg');
new Product('Tauntaun', 'images/tauntaun.png');
new Product('Unicorn', 'images/unicorn.jpg');
new Product('Water-can', 'images/water-can.jpg');
new Product('Wine-glass', 'images/wine-glass.jpg');
new Product('Sweep', 'images/sweep.png');




let totalClicks = 0;

//build out images click function 
function imageWasClicked(event){
  console.log(' click event',event);
//count total clicks
totalClicks = totalClicks + 1;

//what was clicked on and lets increment the count for clicked on.









// let nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
// let nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
// let nextProductIndex3 = Math.floor(Math.random() * allProducts.length);


// while((nextProductIndex1 === productIndex1) || (nextProductIndex2 === nextProductIndex1)){
//   nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
//  }
// while((nextProductIndex2 === productIndex2) || (nextProductIndex2 === nextProductIndex1)){
//   nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
// }
// while((nextProductIndex1 === productIndex3) || (nextProductIndex3 === nextProductIndex1)){
//   nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
// }


//choose new images to render from click to click
let nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
let nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
let nextProductIndex3 = Math.floor(Math.random() * allProducts.length);

while((nextProductIndex1 === productIndex1) || (nextProductIndex2 === nextProductIndex1)){
  nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
}
while((nextProductIndex2 === productIndex2) || (nextProductIndex2 === nextProductIndex1)){
  nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
}
while((nextProductIndex3 === productIndex3) || (nextProductIndex2 === nextProductIndex1)){
  nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
}

//set up a ref to the pizza index array
productIndex1 = nextProductIndex1;
productIndex2 = nextProductIndex2;
productIndex3 = nextProductIndex3;





//update the image array positions 0 and 1 with the new pictures url 
imageElements[0].src = allProducts[productIndex1].imageURL;
  allProducts[productIndex1].timesShown++;
  
  imageElements[1].src = allProducts[productIndex2].imageURL;
  allProducts[productIndex2].timesShown++;

  imageElements[2].src = allProducts[productIndex3].imageURL;
  allProducts[productIndex3].timesShown++;



   if(totalClicks >= rounds){
    let footerElement = document.getElementsByTagName('footer');
    //remove the fires child the h2
    if(footerElement.firstChildElement){
      footerElement.firstChildElement.remove();
    }





//and update the timesshown


if(totalClicks >= rounds){
  
  
  let asideUL = document.getElementById('voteResults');


  //count total clicks vs rounds
  //create li items to show image information on clicks and display the percentages. 

  for(let i = 0; i < allProducts.length; i ++){
    
  }//closes the for loop
  
  //remove event listener
  for(let i = 0; i < imageElements.length; i++){
    imageElements[i].removeEventListener('click', imageWasClicked);
    console.log('is this thing working?');
  }
  //run chart
  // runMyChartsNow();

  }//closes the if that handles the (totalClicks >= rounds)
}//closes the function 














//add the canvas chart 

// function runMyChartsNow(){

 }








//add listener to images 
for(let i = 0; i < imageElements.length; i++){
  imageElements[i].addEventListener('click', imageWasClicked);
  console.log('is this thing working?');
}
