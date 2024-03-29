/** ADD A TIMER THINGY **/


// target menu icon and set to variable
const menuIcon = document.getElementById("menuIconId");
// target left column menu and set to variable
const leftColumn = document.getElementById("leftColumnId");
// set default visibility value of left column menu to true
// target "cards" tables
const cardArea = document.getElementById("cards");
let display = true;
let currLeftColClass;

// when user clicks on menu icon, do function
document.getElementById("menuIconId").onclick = () => { 
  // if menu being shown and menu icon gets clicked on
  // hide the div with new class
  if (display === true) {
    leftColumn.classList.add("showLeftColumn");
    leftColumn.classList.replace("showLeftColumn", "hideLeftColumn");
    display = false;
    // set current class tracker to "hidden"
    currLeftColClass = "hideLeftColumn";
  }


  // if menu is not being shown and menu icon gets clicken on
  else if (display === false) {
    leftColumn.classList.replace("hideLeftColumn", "showLeftColumn");
    display = true;
    // set current class tracker to "shown"
    currLeftColClass = "showLeftColumn";
  };
};

document.getElementById("filterIconId").onclick = () => {
  let mainPanel = document.querySelector(".top");
  let filterPanel = document.querySelector(".filterPanel");

  mainPanel.classList.toggle("moveCardsDown");
  filterPanel.classList.toggle("showFilterPanel");
}  

// make showLeftColumn default depending on window pixel width
document.body.onresize = () => {
  leftColumn.classList.add("showLeftColumn");
  if (document.body.clientWidth <= 480) {
    leftColumn.classList.replace("showLeftColumn" ,"hideLeftColumn");
      
  }
  else {
    leftColumn.classList.replace("hideLeftColumn", "showLeftColumn");
  };
};

// create endpoint to get json info
let endpointImgs = "http://uapc0eza6g:3000/cards/imgs/all";
// Get some data from the endpoint
let fetchPromiseImgs = fetch(endpointImgs);

// Make it json
let jsonPromiseImgs  = fetchPromiseImgs.then((response) => {
  return response.json();
});
           
// Once it's json
jsonPromiseImgs.then((json) => {
  // Iterate over the img urls
  for(let index in Object.values(json)) {
    url = Object.values(json)[index];
    // Make an img element for it
    let newElement = document.createElement("img");
      
    // set class
    newElement.classList = "cardImg";
    // set element link
    newElement.src = url;

    // check validity of img link
    newElement.onload = () => {
      // Add the element to the table
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
