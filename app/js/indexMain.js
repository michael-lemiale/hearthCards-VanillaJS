let menuIcon = document.getElementById("menuIconId");
let leftColumn = document.getElementById("leftColumnId");
let display = true;
let currLeftColClass;

document.getElementById("menuIconId").onclick = () => {
  leftColumn.classList.add("showLeftColumn");
  
  if (display === true) {
    leftColumn.classList.replace("showLeftColumn", "hideLeftColumn");
    display = false;
    currLeftColClass = hideLeftColumn;
  }
  else if (display === false) {
    leftColumn.classList.replace("hideLeftColumn", "showLeftColumn");
    display = true;
    currLeftColClass = showLeftColumn;
  };
};

let endpointImgs = "http://uapc0eza6g:3000/cards/imgs/class/MAGE";
let cardArea = document.getElementById("cards");
// Get some data
let fetchPromiseImgs = fetch(endpointImgs);

// Make it json
let jsonPromiseImgs  = fetchPromiseImgs.then((response) => {
  return response.json();
});
           
// Once it's json
jsonPromiseImgs.then((json) => {
  // Iterate over some cards
  for(let index in Object.values(json)) {
    url = Object.values(json)[index];
    // Make a div for it
    let newElement = document.createElement("img");
      
    // set class
    newElement.classList = "cardImg";
    newElement.src = url;

   // Add the element to the list
    newElement.onload = () => {
    cardArea.appendChild(newElement);
    };
  };
});



// let endpoint2 = "http://uapc0eza6g:3000/cards/class/MAGE";
// let cardArea = document.getElementById("cards");
// // Get some data
// let fetchPromise2 = fetch(endpoint2);

// // Make it json
// let jsonPromise2  = fetchPromise2.then((response) => {
//   return response.json();
// });
              
// // Once it's json
// jsonPromise2.then((json) => {
//   // Iterate over some cards
//   for(let card in json) {
    
//     // Set the card
//     currCard = json[card];
    
//     // Make a div for it
//     let newElement = document.createElement("div");
    
//     // set class
//     newElement.classList = "card";

//     // Set the content
//     newElement.innerHTML = currCard.name;

//     // Add the element to the list
//     cardArea.appendChild(newElement);
//   };
// });
