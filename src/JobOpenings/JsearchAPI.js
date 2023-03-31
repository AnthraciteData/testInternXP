const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  headers: {
    'X-RapidAPI-Key': 'f26fb09eb3msh3d4336d79d9cef6p1d60b9jsnf70a1205ee86',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};



axios.request(options).then(function (response) {
  
  var dataNeeded = response.data.data

  // console.log(dataNeeded.length);

   var numberOfjobs = dataNeeded.length;

  for(let i = 0 , l = dataNeeded.length ; i < l ; i++){
    console.log(dataNeeded[i].id);
    // console.log(i);
  }
}).catch(function (error) {
	console.error(error);
});

console.log(numberOfjobs + "lklk");


// const cardContainer = document.getElementById("card-container");
// const cardCountElem = document.getElementById("card-count");
// const cardTotalElem = document.getElementById("card-total");
// const loader = document.getElementById("loader");

// const cardLimit = 99;
// const cardIncrease = 9;
// const pageCount = Math.ceil(cardLimit / cardIncrease);
// console.log(pageCount);
// let currentPage = 1;

// cardTotalElem.innerHTML = cardLimit;

// var throttleTimer;
// const throttle = (callback, time) => {
//   if (throttleTimer) return;

//   throttleTimer = true;

//   setTimeout(() => {
//     callback();
//     throttleTimer = false;
//   }, time);
// };

// const getRandomColor = () => {
//   const h = Math.floor(Math.random() * 360);

//   return `hsl(${h}deg, 90%, 85%)`;
// };

// const createCard = (index) => {
//   const card = document.createElement("div");
//   card.className = "card";
//   card.innerHTML = index;
//   card.style.backgroundColor = getRandomColor();
//   cardContainer.appendChild(card);
// };

// const addCards = (pageIndex) => {
//   currentPage = pageIndex;

//   const startRange = (pageIndex - 1) * cardIncrease;
//   const endRange =
//     currentPage == pageCount ? cardLimit : pageIndex * cardIncrease;

//   cardCountElem.innerHTML = endRange;

//   for (let i = startRange + 1; i <= endRange; i++) {
//     createCard(i + "lol");
//   }
// };

// const handleInfiniteScroll = () => {
//   throttle(() => {
//     const endOfPage =
//       window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

//     if (endOfPage) {
//       addCards(currentPage + 1);
//     }

//     if (currentPage === pageCount) {
//       removeInfiniteScroll();
//     }
//   }, 1000);
// };

// const removeInfiniteScroll = () => {
//   loader.remove();
//   window.removeEventListener("scroll", handleInfiniteScroll);
// };

// window.onload = function () {
//   addCards(currentPage);
// };

// window.addEventListener("scroll", handleInfiniteScroll);