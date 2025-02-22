console.log('hello!');
// const myImage = document.querySelector('img');
// myImage.onclick = function () {
//   let mySrc = myImage.getAttribute('src');
//   if(mySrc === "images/image1.jpeg") {
//     myImage.setAttribute('src', 'imajes/image2.jpeg');
//   }else {
//     myImage.setAttribute('src', 'imajes/image1.jpeg');
//   }
// }

// const myImage = document.querySelector('img');
// myImage.onclick = function () {
//   let mySrc = myImage.getAttribute('src');
//   if(mySrc === "images/image1.jpeg") {
//     myImage.setAttribute('src', 'images/image2.jpeg'); 
//   } else {
//     myImage.setAttribute('src', 'images/image1.jpeg'); 
//   }
// }

const myImage = document.querySelector('img');
myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  
  // Check the current source and toggle between the two images
  if (mySrc === "images/image1.jpeg") {
    myImage.setAttribute('src', 'images/image2.jpeg'); // Change to image2
  } else {
    myImage.setAttribute('src', 'images/image1.jpeg'); // Change back to image1
  }
}
const myButton = document.querySelector('button');
const myHead = document.querySelector('h1');

function setUserName () {
  let myName = prompt (' Please enter your name.');
  localStorage.setItem ('name', myName);
  myHead.textContent = 'Photo is cool,' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHead.textContent = 'Photo is cool,' + storedName;
} 

myButton.onclick = function () {
  setUserName();
}