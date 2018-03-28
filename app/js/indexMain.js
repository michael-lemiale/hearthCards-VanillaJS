/** ADD A TIMER THINGY **/
const classIcons = ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"];
// target menu icon and set to variable
const menuIcon = document.getElementById("menuIconId");
// target left column menu and set to variable
const leftColumn = document.getElementById("leftColumnId");
// target "cards" tables
const cardArea = document.getElementById("cards");

classIcons.forEach((elem) => {
    document.getElementById(elem).addEventListener("click", () => {
        document.getElementById(elem).classList.toggle("selected");
    });
});


// when user clicks on menu icon, do function
menuIcon.onclick = () => { 
  // shift cards to expose or hide column
  cardArea.classList.toggle("shiftCards");
  // hide or show column
  leftColumn.classList.toggle("hideColumn");
};

// create endpoint to get json info
let endpointBase = "http://uapc0eza6g:3000/cards/imgs/all/%20/?";
let pageSizeParam = 48;
let pageNumParam = 1;

let endpointImgs = endpointBase + "pageNum=" + pageNumParam + "&pageSize=" + pageSizeParam;

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

// options 1 for scrolling and loading new cards --
var didScroll = false;
var scrollLimit = 2000;

window.onscroll = doThisStuffOnScroll;

function doThisStuffOnScroll() {
    didScroll = true;
}

setInterval(function() {
    if(didScroll && Math.round(window.scrollY) > scrollLimit) {
        didScroll = false;
        pageNumParam += 1;

        endpointImgs = endpointBase + "pageNum=" + pageNumParam + "&pageSize=" + pageSizeParam;

        let fetchPromiseImgs = fetch(endpointImgs);

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
    scrollLimit += 2800;
    }
}, 1000);